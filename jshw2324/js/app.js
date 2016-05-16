requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery'
    },
		shim:{
			'jquery':{
				exports: 'jQuery'
			}
		}
});
require(
	['module1','view','controlle','jquery'],
	function (module1,view,controlle,$){
	var firstToDoList = ['Вася','Петя','Коля','Дима'];
	var text_alert = 'Имя уже существует!';
	var model = new module1.Model(firstToDoList);
	var view = new view.View(model,text_alert);
	var controller = new controlle.Controller(model,view);	
	}
);