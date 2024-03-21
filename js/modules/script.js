
jQuery(function($){
    const header = $(".header-main");
    window.onscroll = function(){
        const _scroll = window.scrollY;
        _scroll >= 4 ? header.addClass("sticky") : header.removeClass("sticky");
    }

    $('.footer-nav').click(function() {     
        $(this).toggleClass("open");
        $(this).siblings('.footer-nav').removeClass("open");
        $(this).find('.footer-nav-cont').slideToggle(900);
        $(this).siblings('.footer-nav').find('.footer-nav-cont').slideUp(900);  
     })

});

