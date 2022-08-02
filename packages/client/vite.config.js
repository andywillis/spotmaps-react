/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compression';

export default defineConfig({
  plugins: [ mkcert(), react(), compress(), splitVendorChunkPlugin() ],
  server: {
    proxy: {
      '/library': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: './build'
  }
});
