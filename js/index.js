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

//Карусель на главной с отзывами
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


//табы на странице 1 курса

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


//Аккордеон

  function AccordeonItem(e) {
    console.log("asd");
    var $e = $(e);
    var text = $e.find('.lesson-details_text');
    var header = $e.find('.lesson-details_title');
    var isOpen = false;
  	this.open = function() {
      if (isOpen) {
        return;
      }
      isOpen = true;
      text.slideDown(200);
      header.addClass('lesson-details-active');
    };
    this.close = function() {
      isOpen = false;
      text.slideUp(200);
      header.removeClass('lesson-details-active');
    };
    this.click = function(fn) {
      header.click(fn);
    };
  };

  function AccordeonController(accordeonSelector, itemsSelector) {
  var $accordeon = $(accordeonSelector);
  var _items = $accordeon.find(itemsSelector);
  var items = [];
  for (var i = 0; i < _items.length; i++) {
    items[i] = new AccordeonItem(_items[i]);
    items[i].close();
  }
  var clicked = -1;
  this.init = function() {
    for (var i = 0; i < items.length; i++) {
      var e = items[i];
      (function(i, e) {
        e.click(function() {
          if (clicked != -1) {
            items[clicked].close();
          }
          items[i].open();
          clicked = i;
        });
      })(i, e);
    }
  };
}

var helper = new AccordeonController(".accordeon", ".accordeon__item");
helper.init();




	
