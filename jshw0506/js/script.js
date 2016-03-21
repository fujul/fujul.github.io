var timeR;
var d; 
var d1 = 0;
var delta; 
var ms;
var sec;
var min;
var hour;
function convert(par){
	if ((par>0)&&(par<10)){return '0'+par}
	if (par>=10){return par+''}
	return '00';
}

function stop_time(){
	clearInterval(timeR);
	but2.style.display="none";
	but1.style.display="block";
}

function time(){
	d1= new Date() - d;
	delta=Math.trunc(d1/1000);
	ms=d1 % 1000;
	hour = Math.trunc(delta/3600);
	min = Math.trunc((delta-hour * 3600)/60) ;
	sec = delta- hour * 3600 - min * 60;
	p.innerHTML = ms;
	h1.innerHTML = convert(hour)+':'+convert(min)+':'+convert(sec);
}	

function clickBut1(){
	but1.innerHTML='Cont..';
	but1.style.display="none";
	but2.style.display="block";
	d = new Date();
  	d.setMilliseconds(d.getMilliseconds()- d1);
	timeR=setInterval('time()', 1);
}


function clickBut2(){
	stop_time();
	}
function clickBut3(){
	stop_time();
	d1=0;
	p.innerHTML='0';
	h1.innerHTML = '00:00:00';
	but1.innerHTML='Start';
}
	
var h1=document.querySelector("h1");
var p=document.querySelector("p");
var but1=document.querySelector(".button1");
var but2=document.querySelector(".button2");
var but3=document.querySelector(".button3");
	
	but1.addEventListener('click',clickBut1);
	but2.addEventListener('click',clickBut2);
	but3.addEventListener('click',clickBut3);
