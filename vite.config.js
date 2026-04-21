import { defineConfig } from 'vite';

// base: './' uses relative asset paths, which works for:
//   - GitHub Pages project sites (e.g. username.github.io/repo/)
//   - Root-hosted Pages (e.g. username.github.io/)
//   - Local `vite preview` and `npm run dev`
// Tradeoff: absolute paths (base: '/') are cleaner for root-hosted sites
// but break project-path deployments without knowing the subpath at build time.
// Relative paths work everywhere with no config change needed.
export default defineConfig({
  base: './',
});
