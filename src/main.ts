const startMarquee = (element: HTMLElement, repeatCount = 7, step = 1) => {
	const animateMarquee = () => {
		position = position < width ? position + step : 1;
		element.style.marginLeft = `${-position}px`;
		requestAnimationFrame(animateMarquee);
	};

	let position = 0;
	const content = element.innerHTML;
	element.innerHTML = Array(repeatCount)
		.fill(content + '')
		.join('');
	element.style.position = 'absolute';
	const width = element.clientWidth + 1;
	element.style.position = '';
	animateMarquee();
};

startMarquee(document.getElementById('marquee-1') as HTMLElement, 16, 1);
startMarquee(document.getElementById('marquee-2') as HTMLElement, 16, 1);
