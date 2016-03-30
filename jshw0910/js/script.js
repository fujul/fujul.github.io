(function($) {
    $(function() {
			/*menu*/
				var $menu__link=$('.menu a');
				$menu__link.hover(function(e) {	
					$(this).css("color","black");
					var $ul=$(this).siblings('.submenu');
					if ($ul.length>0) {
						$(this).parent().addClass('active');
						var curHeight =$ul.height(); 
						var autoHeight = $ul.css('height', 'auto').height();
						$ul.show();
						$ul.height(curHeight).stop().animate({
						height: autoHeight
						}, 200); 
					} else {
						console.log($(this).parent().parent().find('.n1').attr('class'));
						exitMenu($(this).parent().parent().find('.submenu'))
					};		
				},function() {
					if ($(this).attr('class')!='menu__link click') {$(this).css("color","#ffe7ff");}
				});
			
			function exitMenu(el){
				el.each(
				function(i,elem){
				$(elem).parent().siblings('.active').removeClass('active');
				var curHeight =$(elem).height();
				var autoHeight = $(elem).css('height', '0').height(); 
				$(elem).height(curHeight).stop().animate({
					height: autoHeight,
				}, 200,function(){$(elem).hide()}); 
				});				
			}
			
			$menu__link.on('click',function(e) {
			e.preventDefault();
			$('.click').removeClass('click').css("color","#ffe7ff");
			$(this).addClass('click');
			});
			
			
			$('.submenu').hover(
				function(){$(this).children('.submenu').css('display','none');}
				,function(){exitMenu($(this));}	
				);	
			/*end menu*/
			
			/*jQuery Check*/
			jQuery(".niceCheck").mousedown(
			/* при клике на чекбоксе меняем его вид и значение */
			function() {
	     changeCheck(jQuery(this));
			});
			jQuery(".niceCheck").each(
			/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
			function() {
	     changeCheckStart(jQuery(this));
	      
			});
/*end check*/	                                        
/*select плагин*/
				$("#default-usage-select").selectbox();			
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
						
    });
})(jQuery);


	 
	function changeCheck(el)
	    /*функция смены вида и значения чекбокса
	    el - span контейнер дял обычного чекбокса
	    input - чекбокс*/
	{
	     var el = el,
	          input = el.find("input").eq(0);
	     if(!input.attr("checked")) {
	        el.css("background-position","0 -18px");    
	        input.attr("checked", true)
	    } else {
	        el.css("background-position","0 0");    
	        input.attr("checked", false)
	    }
	     return true;
	}
	function changeCheckStart(el)
	{
	var el = el,
	        input = el.find("input").eq(0);
	      if(input.attr("checked")) {
	        el.css("background-position","0 -18px");    
	        }
	     return true;
	};