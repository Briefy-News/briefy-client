import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import * as path from 'path';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'briefy',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/icon-180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    display: 'fullscreen',
    start_url: '/',
    description: '시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요',
    background_color: 'white',
    short_name: 'short name',
    theme_color: '#5569FF',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './libs/ui'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sw: './sw.js',
      },
    },
  },
});
