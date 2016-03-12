var arr = [];
var flag = false;

for(var i = 0; i < 5; i++){
  arr.push(prompt('Введите в список имя '+(i+1)+' :', '')+'');
}

var name = prompt('Введите имя пользователя:')+'';

for(i = 0; i < arr.length; i++){
  if (arr[i].toLowerCase()===name.toLowerCase()){
	  alert(name+', вы успешно вошли.');
	  flag = true;
	  break;
  } 
}

if (flag==false) {alert('ОШИБКА! Имени '+name+' в списке нет!');}

