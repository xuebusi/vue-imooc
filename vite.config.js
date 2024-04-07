// import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      //'@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 解决跨域问题
  server: {
    open: true,
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
})
