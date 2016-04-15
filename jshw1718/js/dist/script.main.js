/*дз 16*/
function Human(Name) {
	//имя, возраст, пол, рост, вес
	this.Name = name;
	this.age = 100;
	this.sex = 'male';
	this.height = 100;
	this.weight = 100;
};

function Woker(Name) {
	this.Name = Name;
	this.work_place = 'home';
	this.salary = '1';
};
Woker.prototype = new Human();
Woker.prototype.doWork = function () {
	return this.Name + ' работает за $' + this.salary + ' в месяц!';
};

function Student(Name, StudyPlace) {
	//поля места учебы, стипендией, методом "смотреть сериалы"
	this.Name = Name;
	this.study_place = StudyPlace;
	this.grant = '1';
};
Student.prototype = new Human();
Student.prototype.watchSoap = function () {
	return this.Name + ' в возрасте ' + this.age + ' лет смотрит ТВ вместо того, чтобы учиться в ' + this.study_place;
};

var newWoker1 = new Woker('Ваня');

var newWoker2 = new Woker('Петя');
newWoker2.salary = 1000;

var newStudent1 = new Student('Михаил', 'Универ');
newStudent1.age = 25;
var newStudent2 = new Student('Маша', 'Бурса');
newStudent2.age = 20;
newStudent2.sex = 'female';

console.log(newWoker1.doWork());
console.log(newWoker2.doWork());
console.log(newStudent1.watchSoap());
console.log(newStudent2.watchSoap());;/*дз 15*/
function GoogleCallback(func, data) {
    window[func](data);
}

$(function() {
	var start1;
	function colorLink(tek){
		$('.num').css({'color':'blue','text-decoration':'underline'});
		$('.n'+tek).css({'color':'black','text-decoration':'none'});
	};
	
	$('div.str').on('click', 'a.link__str', function(e){ 
		e.preventDefault();
		if ($(this).hasClass("next")){start1=start1+8;};
		if ($(this).hasClass("prev")){start1=start1-8;};
		if ($(this).hasClass("num")){start1=+this.innerHTML*8-8;};
		Search(start1);
	});
	
	function Search(start){
			$('li').remove();
			var ul = document.querySelector("ul");
			console.log(encodeURIComponent($('input[type="text"]').val()));
			$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&filter=0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='
			+encodeURIComponent($('input[type="text"]').val())
			+'&rsz=large&start='+start+'&callback=GoogleCallback&context=?',
			function(data){
				var estimatedResultCount=data.cursor.estimatedResultCount;
				var currentPageIndex=data.cursor.currentPageIndex;
				var tstr='';
				if (currentPageIndex>0){tstr=',текущая страница '+(currentPageIndex+1)};
				document.querySelector(".res").innerHTML='Результатов: примерно '+data.cursor.estimatedResultCount+tstr +'  ('+data.cursor.searchResultTime+'сек.)';
				if (data.results.length==0){$('.str').css('display','none');return;};
				$('.str').css("display","block");
				$.each(data.results, function(i, val){
					var li = document.createElement("li");
					li.innerHTML = '<h3><a href="'+val.url+'" target="_blank" style="font-size:18px">'+val.title+"</a></h3>";
					li.innerHTML =li.innerHTML +'<div style="white-space:nowrap"><cite>'+val.url+"</cite></div>";					
					li.innerHTML =li.innerHTML +'<span>'+val.content+'</span>';
					ul.appendChild(li);
			});
			$('.allSearch').html(ul);
			/**/
			var a;
			var for_a = document.querySelector(".for_a");
			if (start==0){
				$('.num').remove();
				var next=document.querySelector(".next2");
				for(var i = 1; i <= data.cursor.pages.length; i++){
				a = document.createElement("a");
				a.className = "link__str num n"+i;
				a.setAttribute("href","");
				a.innerHTML=i+'';
				for_a.insertBefore(a,next);
				};
			};
			colorLink((currentPageIndex+1)+'');
			if (currentPageIndex==0){$('.prev').css("display","none");}else{$('.prev').css("display","inline-block");};
			if (currentPageIndex==(data.cursor.pages.length-1)){$('.next').css("display","none");}else{$('.next').css("display","inline-block");};
		});											
	};
	
	$('input[type="submit"]').click(function(e){
		e.preventDefault();
		start1=0;
		Search(start1);
		});
		
	$('input[type="text"]').keypress(function(e){if(e.keyCode===13){$('input[type="submit"]').click;}});
	
});