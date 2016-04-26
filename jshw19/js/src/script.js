(function($) {
    $(function() {
			$('.carousel').slider();
			
			$('.link_32').click(function(event){
				 event.preventDefault();
				 if ($(this).children('h4').text()=="+"){
					 $(this).siblings("p").css("display","inline-block");
					 $(this).children().css({"background-color":"#f4b60d","color":"white"});
					 $(this).children('h4').text("-");			
					} else{
						$(this).siblings('p').css("display","none");
						$(this).children().css({"background-color":"white","color":"black"});
						$(this).children('h4').text("+");
					};
				 });
			
			var $link_img = $('.link_img');
		
			$link_img.hover(function(){
				if ($(this).find(".img_hover").length===0) {
					$(this).append('<div class="img_hover"><p>' + '+' + '</p></div>');
				var $block=$(this).children("img");	
				var $img_hover=$(this).children(".img_hover");
						$img_hover.css(					
						{	"width":$block.width()+"",
							"height":$block.height()+""
						});
				$img_hover.offset($block.offset());
				};
			},function(){$(this).find(".img_hover").remove();});
			 
			
});
})(jQuery);
