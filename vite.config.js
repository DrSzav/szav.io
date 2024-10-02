import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
  plugins: [sveltekit(), enhancedImages()],
  fs: {
    // Allow serving files from one level up to the project root
    allow: [
      searchForWorkspaceRoot(process.cwd()),
      '..',
      '/Users/devboss/Documents/GitHub/svelte-tailwind-starter-kit/src/assets/pics',
    ],
  },
});
