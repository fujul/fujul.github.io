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
console.log(newStudent2.watchSoap());