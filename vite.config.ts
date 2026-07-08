import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // GitHub Pages 从 docs/ 提供站点；直接构建到 docs/，
    // emptyOutDir 每次清空旧的 hash 产物，避免死文件堆积。
    outDir: 'docs',
    emptyOutDir: true,
  },
})
