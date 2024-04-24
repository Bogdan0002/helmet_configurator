import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Ensure assets are not inlined
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]' // Specify the output directory for assets
      }
    }
  }
});
