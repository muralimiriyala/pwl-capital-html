
jQuery(function($){
    const header = $(".header-main");

    window.onscroll = function() {
        const _scroll = window.scrollY;
        if (_scroll >= 4) {
            header.addClass("sticky-header");
            // header.addClass("black-header");
        } else {
            header.removeClass("sticky-header");
            header.removeClass("black-header");
        }
    };
    
    $(".humburger-btn").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $("header.header-main").removeClass("black-header");
        $(".header-right").toggleClass("open");
        $(".header-overlay").toggleClass("open")
     });
     $("body").on("click", function(e){
        if(!$(e.target).closest(".header-right, .humburger-btn").length){
            $(".humburger-btn").removeClass("active");
            $(".header-right").removeClass("open");
            $(".header-overlay").removeClass("open")
        }
     });
    

    $('.footer-list').on("click", function(){
        $(this).toggleClass("open");
        $(this).siblings('.footer-list').removeClass("open");
        $(this).find('.footer-links').slideToggle(900);
        $(this).siblings('.footer-list').find('.footer-links').slideUp(900);  
     })

    $('.accordion-item').on("click", function(){
        $(this).toggleClass("open");
        $(this).siblings('.accordion-item').removeClass("open");
        $(this).find('.accordion-content').slideToggle(900);
        $(this).siblings('.accordion-item').find('.accordion-content').slideUp(900);  
     });



});

