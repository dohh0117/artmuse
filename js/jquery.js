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




    



    $(".fasility_box>div").mouseenter(function () {
        $(".fasility_box>div").animate({
           opacity: 0.5
        })
        
    })
    $(".fasility_box>div").mouseleave(function () {
        $(".fasility_box>div").animate({
           opacity: 1
        })
        
    })





});


