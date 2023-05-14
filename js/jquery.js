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

   


//------------------------------슬라이드끝--------------------------------









});


