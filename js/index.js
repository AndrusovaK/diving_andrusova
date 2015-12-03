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


//Аккордеон
$(document).ready(function(){

  $('.accordeon__item-header').on('click', function(){
    $(this).closest('.accordeon').find('.accordeon__item-text').slideUp(200);
    var this_block_content = $(this).closest('.accordeon__item').find('.accordeon__item-text');
    if(this_block_content.is(':hidden')){
      this_block_content.slideDown(200);
    }
  });

});



//Pop up

jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});
