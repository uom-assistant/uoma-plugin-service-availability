import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: IconsResolver({
        prefix: '',
        enabledCollections: ['mdi']
      })
    }),
    Icons(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
