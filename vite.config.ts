import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html';

const SRC_PATH = resolve(__dirname, 'src');
const BASE_PATH = process.env.NODE_ENV === 'pages' ? '/elfbar/' : '/';

export default defineConfig({
  base: BASE_PATH,
  build: {
    rollupOptions: {
      input: {
        main: resolve(SRC_PATH, 'main.ts'),
        styles: resolve(SRC_PATH, 'styles.scss'),
        index: resolve(__dirname, 'index.html'),
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: true,
    manifest: false,
  },
  plugins: [
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|svg|avif)$/i,
    }),
    createHtmlPlugin({
      minify: true,
      template: resolve(__dirname, 'index.html'),
    }),
  ],
  optimizeDeps: {
    include: ['@fontsource/roboto'],
  },
});
