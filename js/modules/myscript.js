
jQuery(function($){
    const header = $(".header-main");
    window.onscroll = function(){
        const _scroll = window.scrollY;
        _scroll >= 4 ? header.addClass("sticky") : header.removeClass("sticky");
    }

    $('.footer-list').click(function() {     
        $(this).toggleClass("open");
        $(this).siblings('.footer-list').removeClass("open");
        $(this).find('.footer-links').slideToggle(900);
        $(this).siblings('.footer-list').find('.footer-links').slideUp(900);  
     })

    $('.accordion-item').click(function() {     
        $(this).toggleClass("open");
        $(this).siblings('.accordion-item').removeClass("open");
        $(this).find('.accordion-content').slideToggle(900);
        $(this).siblings('.accordion-item').find('.accordion-content').slideUp(900);  
     })

});

