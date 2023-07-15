window.onload = function() {
	var gal = document.getElementById("gallery");
	var images = gal.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = check;
	}
	closeModal();
};

function imgChang(img) {
	var picture = document.getElementById("modalImg");
	var image = img;
	var src = image.src;
	var newSrc = src.replace("/min", "/photos");
	picture.src = newSrc;
	openModal();
}

function openModal() {
	var modal = document.getElementById("modal-content");
	modal.classList.replace("modal-close", "modal-open");
}

function closeModal() {
	var modal = document.getElementById("modal-content");
	var close = document.getElementsByClassName("btn-close")[0];
	close.onclick = function() {
		modal.classList.replace("modal-open", "modal-close");
	}
}

function check(img) {
	var picture = document.getElementById("modalImg");
	var image = img.target;
	var horiz = image.height;
	if (horiz < 250){
		picture.classList.replace("img-vertic", "img-horiz");
	} else {
		picture.classList.replace("img-horiz", "img-vertic");
	}
	imgChang(image);
}