// JavaScript Document
function addLoadEvent(fuc){
	var oldonload=window.onload;
	if(typeof oldonload != 'function'){
		window.onload=fuc;
	}else{
		window.onload=function (){
			oldonload();
			fuc();
		}
	}
}
