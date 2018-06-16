function offCanvas() {
	console.log('offCanvas init!')
	const offCanvasToggle = document.querySelector('.off-canvas__toggle');
	const offCanvas = document.querySelector('.off-canvas');
	console.log(offCanvas)
	offCanvasToggle.addEventListener('click', () => {
		console.log('clickity click!')
		offCanvas.classList.toggle('off-canvas--visible')
	});
}

export default offCanvas;