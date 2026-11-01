import { defineConfig } from 'vite';
import { comlink } from 'vite-plugin-comlink';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), comlink()],
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  },
  worker: {
    plugins: () => [comlink()]
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const packagePath = id.split('node_modules/')[1];

          if (!packagePath || packagePath.startsWith('@babel/')) {
            return;
          }

          const packageParts = packagePath.split('/');
          const packageName = packageParts[0].startsWith('@')
            ? `${packageParts[0]}/${packageParts[1]}`
            : packageParts[0];

          if (['cookie', 'set-cookie-parser', 'react-router-dom', 'dom-helpers'].includes(packageName)) {
            return;
          }

          return packageName;
        }
      }
    }
  }
});
