import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, './src/App.jsx'),
      formats: ['es', 'umd'],
      name: 'viewer',
      fileName: 'index',
    },
    plugins: [react()],
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react-dom', 'react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          "react-dom": 'ReactDOM',
          "react": "React"
        },
      },
    },
  },
})
