// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Open the Modal
function openModal() {
	modal.style.display = "block";
	modalImg.src = this.src;
	const scrollY = window.scrollY
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
}

// Close the Modal
function closeModal() {
	modal.style.display = "none";
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo({top: parseInt(scrollY || '0') * -1, left: 0, behavior: "instant"});
}

// When the user clicks any image on the page, launch the modal
var images = document.getElementsByTagName('img');
for(const image of images) {
	if (!image.classList.contains("imgModal-content")) {
		image.onclick = openModal
	}
}

// When the user clicks outside of the img, close the modal
modal.onclick = function(evt) {
	if (event.target.closest(".imgModal-content")) return
	closeModal()
}

// When the user presses escape, close the modal
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
