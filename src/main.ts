/**
 * Hide video and fallback image on error
 */
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const video = document.querySelector(
	'.delivery__item_free-video'
) as HTMLVideoElement;
const fallbackImg = document.querySelector(
	'.delivery__item_free-fallback'
) as HTMLImageElement;

video.addEventListener('error', () => {
	video.style.display = 'none';
	fallbackImg.style.display = 'block';
});

video.addEventListener('loadeddata', () => {
	fallbackImg.style.display = 'none';
});
