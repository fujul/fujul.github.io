$(function() {
	var mydiv = $('<div/>',{
   class:  'div_obsh'
	}).appendTo('body');
	var myform = $("<form/>", {
  	action: "" 
	}).appendTo(mydiv);
	mydiv = $('<div/>',{
   class:  'divTabs'
	}).appendTo(myform);
	var div = $('<div/>',{
   class:  'div'
	}).appendTo(mydiv);
	$('<label/>', {
    for:     'firstname',
    text:  'Firstname'
	}).appendTo(div);
	$('<input/>', {
    id:     'firstname',
    type: 	'text',
    name: 	'firstname',
    title:  'Please provide your firstname.'
	}).appendTo(div);
	var div = $('<div/>',{
   class:  'div',
	}).appendTo(mydiv);
	$('<label/>', {
    for:     'lasttname',
    text:  'Lastname'
	}).appendTo(div);
	$('<input/>', {
    id:     'lastname',
    type: 	'text',
    name: 	'lastname',
    title:  'Please provide your lastname.'
	}).appendTo(div);
	var div = $('<div/>',{
   class:  'div',
	}).appendTo(mydiv);
	$('<label/>', {
    for:     'address',
    text:  'Address'
	}).appendTo(div);
	$('<input/>', {
    id:     'address',
    type: 	'text',
    name: 	'address',
    title:  'Your home or work address.'
	}).appendTo(div);
	$('<input/>', {
    type: 	'submit',
    name: 	'but',
    val: 	'Show help' 
}).appendTo(myform);

var $inputText = $('input[type="text"]');

function hoverIn(el){
	if (el.parent().find("div").length===0) {
		var title = el.attr('title');
		el.attr('title', '').parent().append('<div>' + title + '</div>');
		var $div=el.parent().find("div");
		$div.css(
		{"margin-left": "+="+(el.width()+80)+"px",
			"margin-top": "-="+(el.height()+7)+"px",
			"height": el.height()+""
		});
		$div.animate({
			opacity: 0 
		}, 3000, function(){});
	}
};

	function hoverFrom(el){
		var $div=el.parent().find("div");
	/*	if ($div) {*/
		el.attr('title',$div.text());
		$div.remove();
		
	};
	
	$inputText.hover(function(){hoverIn($(this))},function(){hoverFrom($(this))});
	
	$('input[type="submit"]').click(function(){
		event.preventDefault();
		$inputText.each(function(i,elem) {hoverIn($(elem));});
	});
	
});

