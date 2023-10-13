import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-dts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/export.ts'),
      name: '@demo/shared',
      // the proper extensions will be added
      fileName: 'shared',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    target: 'esnext',
    minify: false,
  },
  plugins: [vue(), dts()]
})
