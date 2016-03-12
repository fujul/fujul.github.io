function pow(value,exp) {
  var result = 1;
  for(var i = 0; i < exp; i++){
	result*=value;
  }
  return result;
}

var value = prompt('Введите основание для возведения в степень:', '');

var exp = prompt('Введите показатель степени числа:', '');
if ((isNaN(value))||(isNaN(exp))){
  alert('Основание и показатель степени - это числа!');
} else {
  
  value = +value;
  exp = +exp;

  if ((exp<0) || !(typeof exp === 'number' && exp % 1 === 0)) {
    alert(exp + ' - ошибочная степень! Показатель степени числа - это целое неотрицательное число!');
  } else {
	console.log("Ответ: ",pow(value,exp));
  }
}
