function user_exists() {
	if (name === '') return false;
	for(i = 0; i < arr.length; i++){
	  if (arr[i].toLowerCase() === name.toLowerCase()){
		  return true;
	  }
	}
	return false;
}

var arr = [];

for(var i = 0; i < 5; i++){
  arr.push(prompt('Введите в список имя '+(i+1)+' :', '')+'');
}

var name = prompt('Введите имя пользователя:')+'';

if (user_exists(name, arr)) alert(name+', вы успешно вошли.'); else alert('ОШИБКА! Имени '+name+' в списке нет!'); 


