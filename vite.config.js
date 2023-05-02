/** @type {import('vite').userConfig} */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    https: true
  },
  plugins: [vue(), mkcert(p)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
