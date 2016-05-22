(function($) {
    $(function() {
			var template = $('#dan').html(); 
			var data={
			fio: 'Фурутина Юлия Викторовна',
			prof: 'Безработная',
			tel: '+380734068142',
			fb: 'fb.com',
			kontact: 'у меня нет профиля вконтакте :(',
			fidbek: 'fjmail@ukr.net',	
			li:['интересно','познавательно','нормально платят']
			};
			var content = tmpl(template, data);
			$('body').append(content);
		
});
})(jQuery);
