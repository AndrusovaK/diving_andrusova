//выпадающая менюшка
		$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.adaptive-nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});


//Табы для страницы всех курсов



//Карусель стр. всех курсов

$('.courses-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding: '30px',
  prevArrow: $('.course-prev'),
  nextArrow: $('.course-next'),
  responsive: [
	 {
      breakpoint: 1900, 
	  settings: "slick"
	 },
	  
	  {
      breakpoint: 1219, 
	  settings: "unslick"
	}
  ]
});


$('#review-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
	verticalSwiping: true,
  prevArrow: $('.review-prev'),
  nextArrow: $('.review-next'),
  responsive: [
	 {
      breakpoint: 1219, 
	 settings: {
		 arrows: false,
		 dots:true,
		 vertical: false,
	     verticalSwiping: false,
	 }
	 },
	  
	  {
      breakpoint: 767, 
	  settings: {
		  dots: true,
		  arrows: false,
		  vertical: false,
		  verticalSwiping: false
	  }
	}
  ]
});