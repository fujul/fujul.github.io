var timeR=undefined;
var timeM=undefined;
var ms=0;
var sec=0;
var min=0;
var hour=0;

function convert(par){
	if ((par>0)&&(par<10)){return '0'+par}
	if (par>=10){return par+''}
	return '00';
}

function stop_time(){
	clearInterval(timeR);
}

function time(){
	p.innerHTML=ms;
	h1.innerHTML = convert(hour)+':'+convert(min)+':'+convert(sec);
	if(ms>=999){
		clearInterval(timeM); ms=0;
		if(sec===59){sec=0; if (min===59){min=0; if (hour===99){hour=0; clickBut3();} else {{hour++;}} } else{min++;}} else{sec++;} 
	} else {ms+=33;}	
}
	
function clickBut1(){
	but1.innerHTML='Cont..';
	but1.style.display="none";
	but2.style.display="block";
	timeR=setInterval('time()', 31);
}
function clickBut2(){
	stop_time();
	but2.style.display="none";
	but1.style.display="block";
	}
function clickBut3(){
	stop_time();
	ms=0;
	sec=0;
	min=0;
	hour=0;
	p.innerHTML='0';
	h1.innerHTML = '00:00:00';
	but1.innerHTML='Start';
	but2.style.display="none";
	but1.style.display="block";
}
	
var h1=document.querySelector("h1");
var p=document.querySelector("p");
var but1=document.querySelector(".button1");
var but2=document.querySelector(".button2");
var but3=document.querySelector(".button3");
	
	but1.addEventListener('click',clickBut1);
	but2.addEventListener('click',clickBut2);
	but3.addEventListener('click',clickBut3);
