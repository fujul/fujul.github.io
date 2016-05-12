var value = prompt('Введите основание для возведения в степень:', '');
var exp = prompt('Введите показатель степени числа:', '');
if ((isNaN(value))||(isNaN(exp))||(value=='')||(exp=='')){
  alert('Основание и показатель степени - это числа!');
} else {
  
  value = +value;
  exp = +exp;

  if ((exp<0) || !(typeof exp === 'number' && exp % 1 === 0)) {
    alert(exp + ' - ошибочная степень! Показатель степени числа - это целое неотрицательное число!');
  } else {
	console.log("Ответ: ",pow_value(value,exp));
  };
};