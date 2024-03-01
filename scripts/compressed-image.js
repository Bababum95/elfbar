/* eslint-disable no-console */
import sharp from 'sharp';
import { optimize } from 'svgo';
import { readFile, writeFile } from 'fs/promises';

const config = {
	input: 'default-images/DHL-LOGO.jpg',
	output: 'public/images/dhl-logo.jpg',
	maxWidth: 300,
	maxHeight: 300,
};

async function compressImage() {
	if (
		config.input.endsWith('.png') ||
		config.input.endsWith('.jpg') ||
		config.input.endsWith('.jpeg')
	) {
		const imageBuffer = await readFile(config.input);
		const metadata = await sharp(imageBuffer).metadata();

		// Calculate the new dimensions while maintaining the original proportions
		const { width, height } = calculateNewDimensions(
			metadata.width,
			metadata.height,
			config.maxWidth,
			config.maxHeight
		);

		const compressedBuffer = await sharp(imageBuffer)
			.resize(width, height)
			.toBuffer();

		await writeFile(config.output, compressedBuffer);
		console.log('Image compressed successfully.');
	} else if (config.input.endsWith('.svg')) {
		const svgContent = await readFile(config.input, 'utf-8');
		const result = await optimize(svgContent);
		await writeFile(config.output, result.data);
		console.log('SVG file optimized successfully.');
	} else {
		console.log('Unsupported file type.');
	}
}

// Function to calculate new dimensions while maintaining original proportions
function calculateNewDimensions(
	originalWidth,
	originalHeight,
	maxWidth,
	maxHeight
) {
	const aspectRatio = originalWidth / originalHeight;

	if (originalWidth <= maxWidth && originalHeight <= maxHeight) {
		return { width: originalWidth, height: originalHeight };
	}

	if (originalWidth > originalHeight) {
		return { width: maxWidth, height: Math.floor(maxWidth / aspectRatio) };
	}
	return { width: Math.floor(maxHeight * aspectRatio), height: maxHeight };
}

compressImage();
