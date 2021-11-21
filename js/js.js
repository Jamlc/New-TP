

const changingClass = function() {
	var halfWindow = $(window).height() /2;
	$('.element').each(function(i) {
		if ($(this).position().top <= halfWindow) {
				$('.navigation a.activeA').removeClass('activeA');
				$('.navigation a').eq(i).addClass('activeA');
				$(this).find('.hidding').addClass('hidden');
				if ($(this).position().top < 0) {
					$(this).find('.hidding').removeClass('hidden');
				}
		}
		else if ($(this).position().top > halfWindow) {
			$(this).find('.hidding').removeClass('hidden');
		}
	});
};

let throttleTimer = false; 
const throttle = (callback, time) => {
	if (throttleTimer) return; 
	throttleTimer = true; 
	setTimeout(() => { 
		callback(); 
		throttleTimer = false; 
	}, time); 
};

var slider = function(){
	var nextLink = $('.navigation li').find('a.activeA').parents().next().find('a').attr('href');
		if (nextLink === undefined) {
			nextLink = $('.navigation li').find('a').attr('href');
			$('#container1').removeClass('smoothScr');
			window.location.href = nextLink;
			$('#container1').addClass('smoothScr');
			changingClass();  // zawieszało się czasem bez tej linii przeskakiwanie na początek przy szybkim klikaniu ostatniej i pierwszej pozycji
		}
		else {
			window.location.href = nextLink;
		}	 
 };

var timer = 0;
var startInterval = function() {
	timer = setInterval(slider, 5000);
 };
 startInterval();

 $('.container1').scroll(function() {
	throttle(changingClass, 100); 
	clearInterval(timer); // zresetowanie odliczania slidera
	startInterval();
}).scroll();


const lazyLoadImg = function () {
	$('.centerContent').each(function() {
		$(this).removeClass('delayed');
	})
}
// lazyLoadImg();
setTimeout(lazyLoadImg, 50);



