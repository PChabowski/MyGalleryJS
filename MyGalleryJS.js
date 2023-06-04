window.onload = function() {
	var gal = document.getElementById("gallery");
	var images = gal.getElementsByTagName("img");
	images.onclick = imgChang;
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = imgChang;
	} 
};

function imgChang(img) {
	var bigPicture = document.getElementById("bigpic");
	var image = img.target;
	var oldSrc = image.src

	var newSrc = oldSrc.replace("min", "photos");
	bigPicture.src = newSrc;
}