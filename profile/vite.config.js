// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disable overlay if needed
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
