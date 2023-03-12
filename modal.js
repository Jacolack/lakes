// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var images = document.getElementsByTagName('img');
function onClickImg() {
	modal.style.display = "block";
	modalImg.src = this.src;
	const scrollY = window.scrollY
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
}

for(const image of images) {
	if (!image.classList.contains("imgModal-content")) {
		image.onclick = onClickImg
	}
}


function closeModal() {
	modal.style.display = "none";
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo({top: parseInt(scrollY || '0') * -1, left: 0, behavior: "instant"});
}

// Get the <span> element that closes the modal
var span = document.getElementById("close");
// When the user clicks on <span> (x), close the modal
span.onclick = closeModal

// When the user clicks outside of the img, close the modal
modal.onclick = function(evt) {
	if (event.target.closest(".imgModal-content")) return
	closeModal()
}

document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
	isEscape = (evt.key === "Escape" || evt.key === "Esc");
	} else {
	isEscape = (evt.keyCode === 27);
	}
	if (isEscape) {
	    closeModal()
	}
};
