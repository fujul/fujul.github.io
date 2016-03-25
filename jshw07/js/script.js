$(function() {
	var $elem1=$('<div/>',{
   class:  'div_obsh'
	}).appendTo('body');
	var $divTabs = $('<div/>',{
   class:  'divTabs'
	}).appendTo($elem1);
	$elem1=$('<ul/>',{
   class:  'menu'
	}).appendTo($divTabs);
	var $elem2 = $('<li/>', {
    class:  'menu__item act'
	}).appendTo($elem1);
	$('<a/>', {
		class:  'menu__link',
		href: '#tabs-1',
		text: 'Nunc tincidunt'
	}).appendTo($elem2);
	$elem2 = $('<li/>', {
    class:  'menu__item noact'
	}).appendTo($elem1);
	$('<a/>', {
		class:  'menu__link',
		href: '#tabs-2',
		text: 'Proin dolor'
	}).appendTo($elem2);
	$elem2 = $('<li/>', {
    class:  'menu__item noact'
	}).appendTo($elem1);
	$('<a/>', {
		class:  'menu__link',
		href: '#tabs-3',
		text: 'Aenean lacinia'
	}).appendTo($elem2);
	$('<div/>',{
   class:  'tabs vis'
	}).appendTo($divTabs).append('<p>' 
	 + 'Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.'
	+ '</p>');
	$('<div/>',{
   class:  'tabs'
	}).appendTo($divTabs).append('<p>' 
	 + 'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.'
	+ '</p>');
	$elem1 = $('<div/>',{
   class:  'tabs'
	}).appendTo($divTabs);
	$elem1.append('<p>' 
	 + 'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.'
	+ '</p>');
	$elem1.append('<p>' 
	 + 'Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.'
	+ '</p>');
	
	var $menuLink=$('.menu__item');
	 $menuLink.on('click',function(event){
		 /*$(this).css('background-color','white');*/
		 /*$(this).siblings().css('background-color','black');*/
		$(this).removeClass('noact').addClass('act');
		$(this).siblings().removeClass('act').addClass('noact');
		event.preventDefault();
		var $div=$('.tabs');
		$div.removeClass('vis');
		$div.eq($(this).index()).addClass('vis');
	 });
});
