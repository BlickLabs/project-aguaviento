document.querySelector('#neopraxis-hamburger-menu').addEventListener('click', function () {
	this.classList.toggle('is-active');
	document.querySelector('#neopraxis-main-navbar').classList.toggle('neopraxis-navbar-style');
});

document.querySelector('#body').addEventListener('click', function (e) {
	if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
		document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
		document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
	}
});
document.querySelector("#body").addEventListener( "touchstart",function (e) {
	if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
		document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
		document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
	}
});
var imageModal = document.getElementById('imageModal');
var imageClose = document.getElementById('imageClose');
var imageBtn = document.getElementById("imageBtn");
var body = document.getElementById('body');
imageBtn.onclick = function(e) {
	e.preventDefault();
	imageModal.classList.add('modal-open');
	body.classList.add('modal-open');
}
imageClose.onclick = function() {
	imageModal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}
window.onclick = function(event) {
	if (event.target == imageModal) {
		imageModal.classList.remove('modal-open');
		body.classList.remove('modal-open');
		imageModal.style.display = "none";
	}
}
$(".click-scrolling ").on('click', function (event) {
	event.preventDefault();
	var pageRef = $(this).attr("href");
	var offset = 80;
	if(pageRef[0] != '#') {
		window.location.href = pageRef;
	}
	else{
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top -82
		}, 800, function () {
			window.location.hash = hash;

		});
	}
});