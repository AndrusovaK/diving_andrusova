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
$(document).ready(function(){

  $('.tabs a').on('click',function(e){
    e.preventDefault();
    $(this).closest('.tabs').find('.tabs__item').removeClass('tabs__item--active');
    $(this).closest('.tabs__item').addClass('tabs__item--active');
    
    var tabs_cnt_id = $(this).closest('.tabs').data('tabs-content-id');
    $(tabs_cnt_id).find('.tabs-content__item').removeClass('tabs-content__item--active');
    $(this.hash).addClass('tabs-content__item--active');
  });
  
});


//Карусель стр. всех курсов

