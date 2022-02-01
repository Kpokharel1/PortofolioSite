$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
        
        if(scroll>=80){
            $("sticky").addClass("stickyadd")
        }
        else{
            $(".sticky").removeClass("stickyadd")
        }
    })

})