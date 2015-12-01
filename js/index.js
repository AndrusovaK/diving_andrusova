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
