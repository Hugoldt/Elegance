// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Permet d'éviter que Vite ne précompile ce module
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173, // tu peux changer le port ici si besoin
    open: true, // ouvre automatiquement le navigateur
  }
});
