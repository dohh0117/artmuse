$(document).ready(function(){

    $(".sub").hide();
    $(".nav_back").hide();
    $(".nav>ul>li").mouseover(function(){
        $(".sub").stop().slideDown(400).show();
        $(".nav_back").stop().slideDown().show();

    });

    $(".nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();

    })




    //-----------------슬라이드 시작--------------------------

    var cnt =0;//함수호출횟수
    var i=0; //이미지 인덱스값
    var imgNum=3; //이미지 개수
    var imgSize=1300; //이미지 크기
    var current=0;
    var setIntervalId
    $('slider_btn').eq().addClass('on');

    $('.slider_btn li').on({
        click:function(){
            var tg=$(this);
            var i=tg.index();
            slide(i);
        }

    })


    function slide(){
        cnt = cnt+1;//함수 호출 횟수 증가
        i=(cnt-1)%imgNum; 
        if(i==0){i=imgNum} 
        $('.slider').css("left","0px");
        $('.slider').stop().animate({'left':-imgSize+"px"},"slow");

        if(cnt>1){
            $('.slider>li:first').remove();
            $('.slider').append('<li><img src="imags/slider'+i+'.jpg" alt="">');
        }

    }


    $('#main').on({
        mouseover:function(){
            clearInterval(setIntervalId)
        },
        mouseleave:function(){
            timers();
        }
    })


    timers();
    function timers(){

        setIntervalId = setInterval(function(){ slide();
            $('.slider_btn li').removeClass('on');
            $('.slider_btn li').eq(i).addClass('on');
        }, 3000);

}



//------------------------------슬라이드끝--------------------------------









});


