import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  mode:'development',
  plugins: [
    vue(),
    vueJsx(),
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // },
  rollupOptions:{
    external: ['vue'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue',
      },
    },
  },
  build:{
    lib:{
      entry:resolve(__dirname, 'src/components/index.ts'),
      name:'BeaUI',
      fileName:'bea-ui'
    }
  }
})
