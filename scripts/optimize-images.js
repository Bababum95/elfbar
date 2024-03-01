/* eslint-disable no-console */
import sharp from 'sharp';
import { optimize } from 'svgo';
import { readdir, readFile, writeFile, copyFile } from 'fs/promises';
import path from 'path';

const SRC_DIR = './images';
const DEST_DIR = 'public/images';

async function optimizeImages() {
	const files = await readdir(SRC_DIR);

	for (const file of files) {
		const filePath = path.join(SRC_DIR, file);
		const destPath = path.join(DEST_DIR, file);

		// Check file type and apply optimization accordingly
		if (
			file.endsWith('.png') ||
			file.endsWith('.jpg') ||
			file.endsWith('.jpeg')
		) {
			await sharp(filePath).toFile(destPath);
		} else if (file.endsWith('.svg')) {
			const svgContent = await readFile(filePath, 'utf-8');
			const result = await optimize(svgContent);
			await writeFile(destPath, result.data);
		} else {
			// Copy other non-image files as is
			await copyFile(filePath, destPath);
		}
	}

	console.log('Images optimized successfully.');
}

optimizeImages();
