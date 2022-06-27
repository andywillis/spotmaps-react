/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ react() ],
  // server: {
  //   proxy: {
  //     '/message/add': {
  //       target: 'https://localhost:4000',
  //       secure: false,
  //       changeOrigin: true
  //     }
  //   }
  // },
  build: {
    outDir: '../build'
  }
});
