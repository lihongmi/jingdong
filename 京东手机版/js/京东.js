//													logo背景
var logo=document.getElementById("logo");
window.onscroll=function(){
	var high=document.body.scrollTop||document.documentElement.scrollTop;
		if(high>=50){
			logo.className="show";
		}else if(high<50){
			logo.className="";
		}
}

//																	小火箭
		var h;
		$(document).ready(function(){
			$(window).on("scroll",function(){
				h=$(window).scrollTop();
				if(h>=20){
					$("#rocket").show();
				}
				if(h<20){
					$("#rocket").hide();
				}
			})
		})
		$("#rocket").on("click",function(){
				var t=0;
				var b=h;
				var c=0-h;
				var d=30;
				clearInterval(timer);
				var timer=setInterval(function(){
					t++;
					if(t>d){
						clearInterval(timer);
					}
					$(window).scrollTop(Tween.Quad.easeIn(t,b,c,d));
				},30)
			})


//													秒杀时间倒计时
		var div2=document.getElementById("miaosha_div2");
		var spans=div2.getElementsByTagName("span");
		function timeGo(){
			var timer=new Date();
			var nowtimer=new Date("2016/7/15 12:00:00");
			var tim1=timer.getTime();
			var tim2=nowtimer.getTime();
			var tim=tim2-tim1;
			var hour=Math.floor(tim/1000/60/60%24);
			var min=Math.floor(tim/1000/60%60);
			var sec=Math.floor(tim/1000%60);
			spans[0].innerHTML=bl(hour);
			spans[2].innerHTML=bl(min);
			spans[4].innerHTML=bl(sec);
		}
		timeGo();
		setInterval(timeGo,1000);

  function bl(s){
  	return s<10?"0"+s:s;
  }


























