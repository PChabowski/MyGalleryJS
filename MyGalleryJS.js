window.onload = () => {
	addImage(nameImage);
	closeModal();
};

const nameImage = ["426A7148.jpg", "426A7147.jpg", "426A7151.jpg", "426A7152.jpg", "426A7158.jpg", "426A7162.jpg", "426A7163.jpg", "426A7165.jpg", "426A7187.jpg", "IMG_7047.jpg", "IMG_7038.jpg", "IMG_7033.jpg", "426A7168.jpg", "IMG_7050.jpg"];

const addImage = (nameImage) => {
	const gal = document.getElementById("gallery");
	for (let i=0; i<nameImage.length; i++) {
		gal.innerHTML += `<img id="img${i}" src="min/${nameImage[i]}">`;
	}
	onclickToImg();
}

const onclickToImg = () => {
	const gal = document.getElementById("gallery");
	const images = gal.getElementsByTagName("img");
	for (let i = 0; i < images.length; i++) {
		images[i].onclick = check;
	}
}

const imgChang = (img) => {
	const picture = document.getElementById("modalImg");
	const src = img.src;
	const newSrc = src.replace("/min", "/photos");
	picture.src = newSrc;
	openModal();
}

const openModal = () => {
	const modal = document.getElementById("modal-content");
	modal.classList.replace("modal-close", "modal-open");
}

const closeModal = () => {
	const modal = document.getElementById("modal-content");
	const close = document.getElementsByClassName("btn-close")[0];
	close.onclick = function() {
		modal.classList.replace("modal-open", "modal-close");
	}
}

const check = (img)  => {
	const picture = document.getElementById("modalImg");
	if (img.target.height < 250){
		picture.classList.replace("img-vertic", "img-horiz");
	} else {
		picture.classList.replace("img-horiz", "img-vertic");
	}
	imgChang(img.target);
}