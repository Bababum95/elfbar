import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const SRC_PATH = resolve(__dirname, 'src');

export default defineConfig({
	base: '/',
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
	plugins: [ViteImageOptimizer()],
});
