import React from 'react';
import { Copy, Check } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';

interface BioTextCardProps {
  onCopyToast?: () => void;
}

export const BioTextCard: React.FC<BioTextCardProps> = ({ onCopyToast }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyBio = () => {
    sounds.click();
    navigator.clipboard.writeText(
      "Manish Agarwal. I build systems around content.\nCONTENT / AI / SYSTEMS / DISTRIBUTION\nCurrently looking for interesting problems to solve."
    );
    setCopied(true);
    onCopyToast?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-xl border border-black/8 shadow-xs p-4 sm:p-5 relative transition-all duration-200 hover:border-slate-300 hover:shadow-md select-text group">
      {/* Bio lines */}
      <div className="space-y-2 font-mono text-xs sm:text-[13.5px] leading-relaxed text-zinc-600">
        <div className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5">
          <span className="text-zinc-400">Currently:</span>
          <span className="text-zinc-800">English Student • Systems</span>
          <span className="text-blue-600 font-semibold inline-flex items-center gap-0.5">
            @India
          </span>
          {/* Hover blinking cursor on first line */}
          <span className="inline-block w-1.5 h-4 bg-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-150 align-middle ml-0.5 animate-[cursor-blink_1s_step-end_infinite]"></span>
        </div>

        <div className="w-full h-px bg-zinc-100"></div>

        <div className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5">
          <span className="text-zinc-400">Focus:</span>
          <span className="text-zinc-800">CONTENT / AI / SYSTEMS / DISTRIBUTION</span>
        </div>
      </div>

      {/* Footer info: bio.txt filename on left, open to opportunities on right, and copy action */}
      <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="text-zinc-400">
          bio.txt
        </span>

        {/* Live status badge on hover */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="card-bio-dot"></span>
            <span className="text-zinc-500 text-[10.5px]">looking for interesting problems to solve</span>
          </div>

          <button
            type="button"
            onClick={handleCopyBio}
            className="flex items-center gap-1 text-zinc-400 hover:text-zinc-700 transition-colors text-[10px] cursor-pointer ml-2"
            title="Copy bio summary to clipboard"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
