document.querySelector('#neopraxis-hamburger-menu').addEventListener('click', function () {
	this.classList.toggle('is-active');
	document.querySelector('#neopraxis-main-navbar').classList.toggle('neopraxis-navbar-style');
});

document.querySelector('#body').addEventListener('click', function (e) {
	if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'A') {
		document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
		document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
	}
});
document.querySelector("#body").addEventListener( "touchstart",function (e) {
	if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'A') {
		document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
		document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
	}
});
var servicesOneModal = document.getElementById('servicesOneModal');
var servicesTwoModal = document.getElementById('servicesTwoModal');
var imageClose = document.getElementById('imageClose');
var imageCloseTwo = document.getElementById('imageCloseTwo');
var imageBtnOne = document.getElementById('imageBtnOne');
var imageBtnTwo = document.getElementById('imageBtnTwo');
var body = document.getElementById('body');

imageBtnOne.onclick = function(e) {
	e.preventDefault();
	console.log('aaaa');
	servicesOneModal.classList.add('modal-open');
	body.classList.add('modal-open');
	$('.servicesOne').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '<img class="service-next cursor-pointer" src="./img/icons/group-3-copy-2@3x.png"></img>',
      prevArrow: '<img class="service-prev cursor-pointer" src="./img/icons/group-3-copy-4@3x.png"></img>',
    });
}
imageClose.onclick = function() {
	servicesOneModal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}

imageBtnTwo.onclick = function(e) {
	e.preventDefault();
	servicesTwoModal.classList.add('modal-open');
	body.classList.add('modal-open');
	$('.servicesTwo').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '<img class="service-next cursor-pointer" src="./img/icons/group-3-copy-2@3x.png"></img>',
      prevArrow: '<img class="service-prev cursor-pointer" src="./img/icons/group-3-copy-4@3x.png"></img>',
    });
}

imageCloseTwo.onclick = function() {
	servicesTwoModal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}
window.onclick = function(event) {
	if (event.target == servicesOneModal || event.target == servicesTwoModal ) {
		servicesOneModal.classList.remove('modal-open');
		servicesTwoModal.classList.remove('modal-open');
		body.classList.remove('modal-open');
		servicesOneModal.style.display = "none";
		servicesTwoModal.style.display = "none";
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