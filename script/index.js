// JavaScript Document
    addLoadEvent(slide);
	addLoadEvent(area);
	addLoadEvent(csstab);
	//addLoadEvent(mengban);
	
	
	
	function addLoadEvent(fuc){//通用函数
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
	
	function addClass(targetElement,newClass){//通用函数
		  if(targetElement.className){
			 targetElement.className=targetElement.className+" "+newClass;
			}else{
			 targetElement.className=newClass;
			}
	}
	function slide(){//图片轮播
			var oDiv=document.getElementById("lb");
			var oPic=document.getElementById("pic");
			var oUl=document.getElementById("cir");
			var oLi=oUl.getElementsByTagName("li");
			var arrImg=[
			'images/iTokyo_ad1.jpg',
			'images/i100.jpg',
			'images/il3.jpg',
			'images/il4.jpg',
			'images/il5.jpg'];
			var num=0;
			oLi[num]+=' active';
			oPic.setAttribute("src",arrImg[num]);
			for( var i=0;i<oLi.length;i++){
				oLi[i].index=i;
				oLi[i].onclick=function(){
					clearInterval(timer);
					num=this.index;
					oPic.setAttribute("src",arrImg[this.index]);
					for( var j=0;j<oLi.length;j++){
						oLi[j].className='circle'+j;
						}
					oLi[num].className+=" active";
					timer=setInterval(move,1000);
					
					}
			
					
				timer=setInterval(move,1000);
				function move(){
					num++;
					if(num==5){num=0;}
					circle();
					}
				for( var i=0;i<oLi.length;i++){
					oLi[i].className='circle'+i;
					}
				oLi[num].className+=" active";
				}
			function circle(){//使圆点产生变化
				oPic.setAttribute("src",arrImg[num]);
				for( var i=0;i<oLi.length;i++){
					oLi[i].className='circle'+i;
					}
					oLi[num].className+=' active';
				}	
		}

			function area(){
				var oInput=document.getElementById("fir");
				var oDiv=document.getElementById("f1");
				var oS=document.getElementById("s3");
				var oThir=document.getElementById("thir");
				var oHead=document.getElementById("head");
				oInput.onclick=function(e){
					oDiv.style.display="block";
					e.stopPropagation();
					}
				oThir.onclick=function(e){
					oS.style.display="block";
					e.stopPropagation();
					}
				oHead.onclick=function(){
					oDiv.style.display="none";
					oS.style.display="none";
					}
				}
	
	
	
	
	function csstab(){//选项卡
			var oNav=document.getElementById("nav");
			var oLink=oNav.getElementsByTagName("a");
			var oLi=oNav.getElementsByTagName("li");
			var oContent=document.getElementById("cont");
			var oUl=oContent.getElementsByClassName("re");
			for( var i=0;i<oLink.length+1;i++){
				oLink[i].index=i;//给链接命名一个属性，把i值存放进去
				 oLink[i].onclick=function (e){
					 showtab(this.index);
					  e.stopPropagation();
					  return false;//取消链接的默认行为取消链接的#
					
					 }
			}
		
		function showtab(lj){
				for(var j=0;j<oUl.length;j++){
					
				if(lj==j){	
				 oUl[j].style.display="block";
				 oLink[j].style.color="#06c";
				 addClass(oLi[j],"blue");
					}
				else{
				oUl[j].style.display="none";
				oLink[j].style.color="#aaa";
				oLi[j].className='';
					}
				}
			}
		
	}
	// function mengban(){
//		 var oHai=document.getElementsByClassName("hai");
//		 
//		 var oWai=document.getElementsByClassName("wai");
//		 var oYin=document.getElementsByClassName("yin");
//		 var oHk1=document.getElementsByClassName("hk1");
//		 var oHk2=document.getElementsByClassName("hk2");
//		 var oHk3=document.getElementsByClassName("hk3");
//		 oHai.onmouseover=function(){
//			 oHk1.style.background="#f00";
//			 
//			 }
//		 
//		 }
//	
		