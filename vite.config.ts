import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4005,
  },
  plugins: [
    vue(),
    WindiCSS(),
    Icons({ compiler: 'vue3' }),
    Components({
      resolvers: IconsResolver(),
    }),
  ],
  resolve: {
    alias: {
      'src/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
