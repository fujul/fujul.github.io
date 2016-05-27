(function($) {
    $(function() {
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

    });
})(jQuery);
;(function($) {
$(function() {
	
	function Search(poisk){
		$('.grid-item').remove();
		var grid = document.querySelector(".grid");
		
		function dom(imageurl,i){
			var tegParent=document.querySelector('#grid_plagin');
			var teg_grid_item = document.createElement('div');
			teg_grid_item.className = 'grid-item';
			teg_grid_item.setAttribute('id','grid-item'+i+'');
			tegParent.appendChild(teg_grid_item);	
			tegParent=document.querySelector('#grid-item'+i+'');
			var teg = document.createElement('div');
			teg.className = 'g_i_1';
			tegParent.appendChild(teg);	
			var tegParent1=document.querySelector('#grid-item'+i+' .g_i_1');
			teg = document.createElement('a');
			teg.className = 'a_1';
			teg.setAttribute('href',imageurl);
			tegParent1.appendChild(teg);	
			tegParent=document.querySelector('#grid-item'+i+' .a_1');
			var teg_img = document.createElement('img');
			teg_img.className = 'img';
			teg_img.setAttribute('src',imageurl);
			tegParent.appendChild(teg_img);	
			$(tegParent1).width($(teg_img).width());
			$(tegParent1).height($(teg_img).height());
			tegParent=document.querySelector('#grid-item'+i+' .g_i_1');
			teg = document.createElement('div');
			teg.className = 'g_i_2';
			tegParent.appendChild(teg);	
			var tegParent2=document.querySelector('#grid-item'+i+' .g_i_2');
			teg = document.createElement('a');
			teg.className = 'a_2';
			teg.setAttribute('href',imageurl);
			tegParent2.appendChild(teg);	
			tegParent=document.querySelector('#grid-item'+i+' .a_2');
			teg = document.createElement('h2');
			teg.className = 'h_2';
			if (poisk==''){var text1='images'}else{var text1=poisk};
			teg.innerHTML=text1;
			tegParent.appendChild(teg);	
			$(tegParent2).width($(teg_img).width());
			$(tegParent2).height($(teg_img).height());
			$(teg).width($(teg_img).width());
			$(teg).height($(teg_img).height());
			$(teg_grid_item).width($(teg_img).width());
			$(teg_grid_item).height($(teg_img).height());
			
		};
		
		if (window.attachEvent){
				//alert('search_not8');
			try{	
			$(document).ready(function() {
				var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
				var xhr = new XHR();
				//1. Создаём новый объект XMLHttpRequest
				//var xhr = new XMLHttpRequest();
				// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
				if (poisk==''){var text1='images'}else{var text1=poisk};
				xhr.open('GET', 'http://api.pixplorer.co.uk/image?word='+text1+'&amount=7&size=M', false);

				// 3. Отсылаем запрос
				xhr.send();

				// 4. Если код ответа сервера не 200, то это ошибка
				/*if (xhr.status != 200) {
					// обработать ошибку
					alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
				} else {*/
					// вывести результат
					var json = xhr.responseText;
					$(document).ready(function() {							
						json = $.parseJSON(json);					
						
						$(json.images).each(function(i, item) {
							 dom(item.imageurl,i)									
						});	
					})
				/*};*/
			});					
		} catch(e){}			
		}else{
				//alert('search_8');
			try{
				$.getJSON('http://api.pixplorer.co.uk/image?word='+(poisk||'images')+'&amount=7',
				function(data){
					$.each(data.images, function(i, val){
						dom(val.imageurl,i);					
					});								
				});
			}  catch(e) {} finally{}	;
		} /*end else*/
			
	var container = document.querySelector('.grid');
	var msnry;
// Инициализация Масонри, после загрузки изображений

	$('.grid').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
	  itemSelector: '.grid-item',
// указываем класс элемента являющегося блоком в нашей сетке
					columnWidth: 200,
          singleMode: false,
// true - если у вас все блоки одинаковой ширины
	  isResizable: true,
// перестраивает блоки при изменении размеров окна
	  isAnimated: true,
// анимируем перестроение блоков
          animationOptions: { 
	      queue: false, 
	      duration: 500 
	  }
// опции анимации - очередь и продолжительность анимации
	}); 

};
	
	Search('images');
	var link_poisk=document.querySelector('#poisk_link1');
	
	function handler(event){
		event = event || window.event;
		event.preventDefault ? event.preventDefault() : (event.returnValue=false);
		Search(document.querySelector(".item-value").value);
};
		
	
	function addEvent(el,event,callback){
		if (window.attachEvent){
			el.attachEvent("on"+event,callback);
		} else {
			el.addEventListener(event,callback);
		}
	};
	addEvent(link_poisk,"click",handler);
		
});											
})(jQuery);
	
	
