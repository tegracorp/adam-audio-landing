// $(".main").onepage_scroll({
// 	easing: "ease-in-out",

// 	pagination: false,
// 	updateURL: false,
// 	loop: false,
// 	keyboard: true,
// 	responsiveFallback: false,
	                              
	                              
// 	direction: "vertical" 
// });

window.sr = ScrollReveal({
	// scale: 0.75,
	scale: 1,
	reset: true,
	// distance: '0px',
	distance: '20px',
	viewFactor: 0.5,
});
sr.reveal('section');
sr.reveal('.section-header');
sr.reveal('.block__text', {
	easing: 'ease-out',
	distance: '200px',
	delay: 250
});
sr.reveal('.block__image', {
	easing: 'ease-out',
	distance: '200px',
	delay: 500
});

TweenMax.fromTo($('.splash__logotype'), 1, { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, delay: 1 });
TweenMax.fromTo($('.splash__text h1'), 1, { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, delay: 1.25 });
TweenMax.fromTo($('.splash__text p'), 1, { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, delay: 1.5 });
TweenMax.fromTo($('.splash__text .btn'), 1, { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, delay: 1.75 });