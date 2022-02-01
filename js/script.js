$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
        
        if(scroll>=100){
            $("sticky").addClass("stickyadd")
        }
        else{
            $(".sticky").removeClass("stickyadd")
        }
    })
    
   
    

})
var typed = new Typed('.typed-words', {
    strings: ["Scripts","Websites"," Mobile Apps"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true
})
