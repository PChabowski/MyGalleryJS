window.onload = () => {
	const pohotosList = document.querySelectorAll('.photos img');
	const maxNumberImage = pohotosList.length - 1;
	let currentImage;

	const imageViewer = document.querySelector('.image-viewer');
	const photoView = document.querySelector('.photo img');

	pohotosList.forEach((element, index) => {
		element.addEventListener("click", function () {
			imageViewer.classList.add("show-image");
			photoView.src = changeDirectory(element);
			currentImage = index
			counterDisplay(index);
			hiddenScroll();
		})

	});

	const closeButton = document.querySelector('#close-button');
	closeButton.addEventListener("click", function () {
		imageViewer.classList.remove("show-image");
		showScroll();
	});

	const nextButton = document.querySelector('#next-button');
	nextButton.addEventListener("click", () => {
		currentImage++;
		if (currentImage > maxNumberImage) currentImage = 0;
		photoView.src = changeDirectory(pohotosList[currentImage]);
		counterDisplay(currentImage);
	});

	const previousButton = document.querySelector('#previous-button');
	previousButton.addEventListener("click", () => {
		currentImage--;
		if (currentImage < 0) currentImage = maxNumberImage;
		photoView.src = changeDirectory(pohotosList[currentImage]);
		counterDisplay(currentImage);
	});

	function changeDirectory(image) {
		return image.src.replace('min', "photos");
	}

	function counterDisplay(index) {
		const counter = document.querySelector('.counter');
		counter.innerHTML = `${index + 1} / ${maxNumberImage + 1}`;
	}

	function hiddenScroll() {
		const scroll = document.querySelector('body');
		scroll.classList.add('hidden-scroll');
	}
	
	function showScroll() {
		const scroll = document.querySelector('body');
		scroll.classList.remove('hidden-scroll');
	}

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

