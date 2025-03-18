window.onload = () => {
	const pohotosList = document.querySelectorAll('.photos img');
	const maxNumberImage = pohotosList.length - 1;
	let currentImage;

	const imageViewer = document.querySelector('.image-viewer');
	const photoView = document.querySelector('.photo img');

	pohotosList.forEach((element, index) => {
		element.addEventListener("click", function () {
			imageViewer.classList.add("show-image");
			photoView.src = element.src
			currentImage = index
			console.log(element.src);
		})

	});

	const closeButton = document.querySelector('#close-button');
	closeButton.addEventListener("click", function () {
		imageViewer.classList.remove("show-image");
	});

	const nextButton = document.querySelector('#next-button');
	nextButton.addEventListener("click", nextImage);

	const previousButton = document.querySelector('#previous-button');
	previousButton.addEventListener("click", previousImage);

	function nextImage() {
		currentImage++;
		if (currentImage > maxNumberImage) currentImage = 0;
		photoView.src = pohotosList[currentImage].src;
	}

	function previousImage() {
		currentImage--;
		if (currentImage < 0) currentImage = maxNumberImage;
		photoView.src = pohotosList[currentImage].src;
	}

	window.addEventListener('keydown', (e) => {
		switch (e.keyCode) {
			case 27:
				closeButton.click();
				break;
			case 37:
				previousImage();
				break;
			case 39:
				nextImage();
				break;
		}
	});

}

