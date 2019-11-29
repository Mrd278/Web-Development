var x=document.querySelector('h1');
var y=document.querySelector('#heading2');

x.style.color='red';
y.style.color='red';

function randomcolor(){
	var letters="0123456789ABCDEF";
	var color='#';
	for(var i=0;i<6;i++){
		color+=letters[Math.floor(Math.random()*16)];
	}
	return color;
}

function changeheadercolor(){
	var clr=randomcolor();
	x.style.color=clr;
	y.style.color=clr;
}

setInterval("changeheadercolor()",200);