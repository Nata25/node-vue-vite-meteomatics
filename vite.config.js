import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import vue from '@vitejs/plugin-vue'
import mix from 'vite-plugin-mix'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mix({
      handler: './src/server/app.js',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
