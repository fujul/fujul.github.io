'use strict';
(function($) {
    $(function() {
			var obj = [
			{title:'1. Вопрос №1',
				answer:[
				{text: 'Вариант ответа НЕТ', correct: false},
				{text: 'Вариант ответа НЕТ', correct: false},
				{text: 'Вариант ответа ДА', correct: true}
				]
			},
			{title:'2. Вопрос №2',
				answer:[
				{text: 'Вариант ответа НЕТ', correct: false},
				{text: 'Вариант ответа НЕТ', correct: false},
				{text: 'Вариант ответа ДА', correct: true}
				]
			},
			{title:'3. Вопрос №3',
				answer:[
				{text: 'Вариант ответа НЕТ', correct: false},
				{text: 'Вариант ответа НЕТ', correct: false},
				{text: 'Вариант ответа ДА', correct: true}
				]
			},
			];
			var template = $('#dan').html(); 			
			/*localStorage.clear();*/
			try {
			if (localStorage.getItem('dan')===null) { localStorage.getItem('dan')};
			localStorage.setItem('dan',JSON.stringify(obj));
			var obj = JSON.parse(localStorage.getItem('dan'));
			}
			catch(e){};
			var content = tmpl(template, {data:obj});
			$('.col-sm-10').append(content);
			
			$('#but1').click( function(event){ 
				event.preventDefault(); 
				var $result = 0;	
				var $question=$(".question");
				$question.each(function(i,elem) {
					var check=$(elem).find("input:checkbox:checked");
					if ((check.length===1) && ($(elem).children(".true").find('input:checkbox').prop("checked")))	{$result++};
				});
					
				$('#overlay').fadeIn(400, function(){ 
						var $modal_form=$('#modal_form') ;
						$modal_form.css({'display': 'block','opacity': '1'});
						$modal_form.children("p").text($result+" из "+$question.length +" ответа верные");
				});
			});


		$('#modal_close2,#modal_close, #overlay').click( function(){
					$('#modal_form').css('display', 'none'); $('#overlay').fadeOut(400); 
			$('body').parent().find("input:checkbox:checked").removeAttr("checked");
	});

});
})(jQuery);
