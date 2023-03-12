// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	const scrollY = window.scrollY
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
	const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo({top: parseInt(scrollY || '0') * -1, left: 0, behavior: "instant"});
}
