(function($) {
    $(function () {
			$.fn.slider = function (){
				/*var leftUIEl = $('.carousel-arrow-left');
				var rightUIEl = $('.carousel-arrow-right');*/
				var elementsList = $('.carousel-list');
				var car_link = $('.car');
				var index_prev=0;
				
			
				var pixelsOffset = 1160;
				var currentLeftValue = 0;
				var elementsCount = elementsList.find('li').length;
				var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
				var maximumOffset = 0;
				var px=1160;
				var px1=px;
				
				car_link.on('click',
				function(e) {
					e.preventDefault();	
					
					index_prev=car_link.parent().find('.active').removeClass('active').index();
					
					car_link.attr('style','background: url(img/slider_but.png) -32px 0 no-repeat');
					$(this).attr('style','background: url(img/slider_but.png) 0 0 no-repeat');
					$(this).addClass('active');
					
					px1=px;
					if (car_link.index(this) > index_prev){
						px1=(car_link.index(this) - index_prev)*px;
					rightUIEl();};
					if (car_link.index(this) < index_prev){
						px1=(index_prev-car_link.index(this))*px;
					leftUIEl();	};				
					
				});
				
				function leftUIEl() {
						if (currentLeftValue != maximumOffset) {
						currentLeftValue += px1;
						elementsList.animate({ left : currentLeftValue + "px"}, 500);
						};
				};
		 
				function rightUIEl() {
					if (currentLeftValue != minimumOffset*(-1)) {
						currentLeftValue -= px1;
						elementsList.animate({ left : currentLeftValue + "px"}, 500);
				};
				};
				
				return this;
			};
});
})(jQuery);
