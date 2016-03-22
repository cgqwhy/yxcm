
window.onload=function(){  

          //菜单栏脚本

            var bigtu=document.getElementById("bigtu");
		    var nav=document.getElementById("nav");
			var oLamp=document.getElementById("lamp");
			var oUl=document.getElementById("nav-list");
			var	aLi=oUl.getElementsByTagName("li");
			  oLamp.style.marginLeft=20+"px";
			  var video=document.getElementById("video");
			  var ivideo=document.getElementById("ivideo");
			  function paused(){
					 video.pause();
					 ivideo.pause();
					}
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].index=i;
				aLi[i].onmouseover=function()
				{
					oLamp.style.marginLeft=this.index*100+20+"px";
				}
				aLi[i].onclick=function(){
					
					switch (this.index)
					{
					case 0:
					  $("#index").css("display","block").siblings("div").css("display","none");
					  nav.onmouseout=function()
                      { 
					   oLamp.style.marginLeft=20+"px";
					  }
					  break;
					case 1:
					  $("#yinxiang").css("display","block").siblings("div").css("display","none");
					   nav.onmouseout=function()
                      { 
					   oLamp.style.marginLeft=120+"px";
					  }

					  break;
					case 2:
					 $("#kuanjia").css("display","block").siblings("div").css("display","none");
					   nav.onmouseout=function()
                      { 
					   oLamp.style.marginLeft=220+"px";
					  }
					  break;
					case 3:
					  $("#shipin").css("display","block").siblings("div").css("display","none");
					    nav.onmouseout=function()
                      { 
					   oLamp.style.marginLeft=320+"px";
					  }
					  break;
					case 4:
					 $("#anli").css("display","block").siblings("div").css("display","none");
					   nav.onmouseout=function()
                      { 
					   oLamp.style.marginLeft=420+"px";
					  }
					  break;
					case 5:
					 $("#lianxi").css("display","block").siblings("div").css("display","none");
					   nav.onmouseout=function()
                      { 
					   oLamp.style.marginLeft=520+"px";
					  }
					  break;
					
					}
                   paused();
				}
			}
          
		//首页轮播图
			 var _index=0;
             var setTime=null;
          $(".btn ul li").mouseover(function(){
                clearInterval(setTime);
                $(this).addClass("onhover").siblings("li").removeClass("onhover");
               _index=$(this).index();
              $(".tu").eq(_index).fadeIn(300).siblings(".tu").fadeOut(300); 
          }); 
          $(".btn ul li").mouseout(function(){
            autoplay();
          });
         function autoplay(){
            setTime=setInterval(function(){
                _index++;
                if (_index>3) {_index=0;}
                $(".btn ul li").eq(_index).addClass("onhover").siblings("li").removeClass("onhover");
              $(".tu").eq(_index).fadeIn(300).siblings(".tu").fadeOut(300); 
            },1800);
          };
            autoplay();

        //案例展示画面轮播
             var j=0;
	     	$(".bigtu li").eq(0).show();
	     	$(".smalltu li").eq(0).children("img").addClass('hover');
	        $(".smalltu li").mouseover(over);
	     	function over(){
	                $(this).children("img").addClass('hover');
	                $(this).siblings().children("img").removeClass('hover');
	                var index=$(this).index();
	                 j=index;
	                $(".bigtu li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	                }
	       
	        
	        $(".pre").click(movel);     
	        $(".next").click(move);

            




	          var ne = MonoEvent,
				$bigtu = ne( "#bigtu");
				$bigtu.on( "swipeLeft swipeRight swipeUp swipeDown", function( e ){
						if (e.type=="swipeLeft") {
		                       movel(); 
						}else if(e.type=="swipeRight"){
		                        move(); 
						};
					});
   
	        function move(){
	              
	             j++;
	             if(j==12){j=0;}
	              $(".bigtu li").eq(j).stop().fadeIn(300).siblings().stop().fadeOut(300);
	               $(".smalltu li").eq(j).children("img").addClass('hover');
	                $(".smalltu li").eq(j).siblings().children("img").removeClass('hover');
	             }
	        function movel(){
	             
	             j--;
	             if(j<0){j=11;}
	              $(".bigtu li").eq(j).stop().fadeIn(300).siblings().stop().fadeOut(300);
	               $(".smalltu li").eq(j).children("img").addClass('hover');
	                $(".smalltu li").eq(j).siblings().children("img").removeClass('hover');
	             }   
	        t=setInterval(move, 2500);
	        $(".box ,.smalltu").hover(function(){                           /*鼠标划进大盒子范围，停止定时器，左右按钮显示*/
	          clearInterval(t);
	             },function(){
	             
	              t=setInterval(move,2500);
	             })
	         
	};			
             