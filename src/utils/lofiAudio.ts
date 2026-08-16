// Web Audio API procedural Lo-Fi Study Synth Generator
// Plays a warm, relaxing ambient chord progression with vinyl tape warmth

class LofiMusicPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private loopInterval: number | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Create subtle vinyl crackle / tape dust texture
  private startVinylTexture(ctx: AudioContext, destination: AudioNode) {
    try {
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      // Pink noise with subtle crackles
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.015;
        b6 = white * 0.115926;

        // Random subtle crackle pops
        if (Math.random() < 0.0008) {
          output[i] += (Math.random() * 2 - 1) * 0.08;
        }
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 1.0;

      const noiseGain = ctx.createGain();
      noiseGain.gain.value = 0.04;

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(destination);

      whiteNoise.start();
      this.noiseNode = whiteNoise;
    } catch {
      // Ignore texture error
    }
  }

  // Play a lush, mellow 4-note jazz/lo-fi chord
  private playWarmChord(ctx: AudioContext, frequencies: number[], bassFreq: number, duration: number) {
    const now = ctx.currentTime;

    // Filter for lo-fi muffled warm tone
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(680, now);
    filter.Q.setValueAtTime(2.0, now);
    filter.connect(this.masterGain!);

    // Play chord tones with soft attack and warm decay
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      // Slight tape flutter detune
      const detune = (Math.random() - 0.5) * 8;
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime(detune, now);

      // Volume envelope
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 0.3 + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.012, now + duration * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(filter);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });

    // Deep sub bass note
    if (bassFreq > 0) {
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(bassFreq, now);

      bassGain.gain.setValueAtTime(0.0001, now);
      bassGain.gain.linearRampToValueAtTime(0.045, now + 0.15);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.9);

      bassOsc.connect(bassGain);
      bassGain.connect(this.masterGain!);

      bassOsc.start(now);
      bassOsc.stop(now + duration);
    }
  }

  public play(): boolean {
    const ctx = this.getContext();
    if (!ctx) return false;

    if (this.isPlaying) return true;
    this.isPlaying = true;

    // Master Volume Control
    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 0.5);
    this.masterGain.connect(ctx.destination);

    // Start background tape texture
    this.startVinylTexture(ctx, this.masterGain);

    // Lo-Fi Chord Progression:
    // 1. Fmaj9: F3 (174.61), A3 (220.00), C4 (261.63), E4 (329.63), G4 (392.00) | Bass: F2 (87.31)
    // 2. Em7:   E3 (164.81), G3 (196.00), B3 (246.94), D4 (293.66)             | Bass: E2 (82.41)
    // 3. Dm9:   D3 (146.83), F3 (174.61), A3 (220.00), C4 (261.63), E4 (329.63) | Bass: D2 (73.42)
    // 4. Cmaj7: C3 (130.81), E3 (164.81), G3 (196.00), B3 (246.94)             | Bass: C2 (65.41)
    const progression = [
      { notes: [174.61, 220.00, 261.63, 329.63, 392.00], bass: 87.31 },
      { notes: [164.81, 196.00, 246.94, 293.66], bass: 82.41 },
      { notes: [146.83, 174.61, 220.00, 261.63, 329.63], bass: 73.42 },
      { notes: [130.81, 164.81, 196.00, 246.94], bass: 65.41 }
    ];

    let chordIndex = 0;
    const chordDuration = 2.4; // 2.4 seconds per chord

    // Play first chord immediately
    this.playWarmChord(ctx, progression[0].notes, progression[0].bass, chordDuration);
    chordIndex = 1;

    // Progression Loop
    this.loopInterval = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const current = progression[chordIndex];
      this.playWarmChord(this.ctx, current.notes, current.bass, chordDuration);
      chordIndex = (chordIndex + 1) % progression.length;
    }, chordDuration * 1000);

    return true;
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.loopInterval !== null) {
      clearInterval(this.loopInterval);
      this.loopInterval = null;
    }

    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.35);

        setTimeout(() => {
          if (this.noiseNode) {
            try { this.noiseNode.stop(); } catch {}
            this.noiseNode = null;
          }
          if (this.masterGain) {
            try { this.masterGain.disconnect(); } catch {}
            this.masterGain = null;
          }
        }, 400);
      } catch {
        // Ignore
      }
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const lofiPlayer = new LofiMusicPlayer();
