import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If building in GitHub Actions for GitHub Pages, use the repository subpath '/PORTFOLIO-NEW/'.
// If building on Vercel, Netlify, or locally, use '/' (root) so all scripts and assets load properly.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && !process.env.VERCEL;
const base = isGitHubPages ? '/PORTFOLIO-NEW/' : '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
