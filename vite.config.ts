/**
 * Vite 构建配置文件，集成 React 19 编译器支持与 Tailwind CSS v4 原生引擎。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
})
