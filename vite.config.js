import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // https://vite.dev/config/shared-options.html#css-preprocessoroptions-extension-additionaldata
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `$injectedColor: orange;`,
      },
    },
  },
  // base: '/new-vue-project/dist/', by default base is /
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
})
