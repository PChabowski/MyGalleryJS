window.onload = () => {
	const pohotosList = document.querySelectorAll('.photos img');
	const maxNumberImage = pohotosList.length - 1;
	let currentImage;

	const imageViewer = document.querySelector('.image-viewer');
	const photoView = document.querySelector('.photo img');

	pohotosList.forEach((element, index) => {
		element.addEventListener("click", function () {
			imageViewer.classList.add("show-image");
			photoView.src = element.src.replace('min', "photos")
			currentImage = index
		})

	});

	const closeButton = document.querySelector('#close-button');
	closeButton.addEventListener("click", function () {
		imageViewer.classList.remove("show-image");
	});

	const nextButton = document.querySelector('#next-button');
	nextButton.addEventListener("click", () => {
		currentImage++;
		if (currentImage > maxNumberImage) currentImage = 0;
		photoView.src = pohotosList[currentImage].src.replace('min', "photos");
	});

	const previousButton = document.querySelector('#previous-button');
	previousButton.addEventListener("click", () => {
		currentImage--;
		if (currentImage < 0) currentImage = maxNumberImage;
		photoView.src = pohotosList[currentImage].src.replace('min', "photos");
	});


	window.addEventListener('keydown', (e) => {
		if (imageViewer.classList.contains("show-image")) {
			switch (e.key) {
				case 'Escape':
					closeButton.click();
					break;
				case 'ArrowLeft':
					previousButton.click();
					break;
				case 'ArrowRight':
					nextButton.click();
					break;
			}
		}
	});

}

