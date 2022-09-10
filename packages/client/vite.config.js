/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
// import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compression';

export default defineConfig({
  plugins: [ react(), compress(), splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    port: 3000,
    proxy: {
      '/library': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    target: 'esnext',
    outDir: '../build',
    sourcemap: true
  }
});
