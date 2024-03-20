
jQuery(function($){
    const header = $(".header-main");
    window.onscroll = function(){
        const _scroll = window.scrollY;
        _scroll >= 4 ? header.addClass("sticky") : header.removeClass("sticky");
    }
});