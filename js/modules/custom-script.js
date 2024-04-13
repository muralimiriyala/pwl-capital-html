
jQuery(function($){
    const header = $(".header-main");
    $(window).on("scroll load", function(){
        const _scroll = window.scrollY;
        if (_scroll >= 4) {
            header.addClass("sticky-header");
        } else {
            header.removeClass("sticky-header");
        }
    });
    
    $(".humburger-btn").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $("header.header-main").toggleClass("nav-open");
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


     $(".srch-results-btn").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("open");
        $("ul.srch-results-links").slideToggle(900)
     });
     $("body").on("click", function(e){
        if(!$(e.target).closest(".srch-results-btn, ul.srch-results-links").length){
            $(".srch-results-btn").removeClass("open");
            $(".header-overlay").removeClass("open");
            $("ul.srch-results-links").slideUp(900);
        }
     });

     $(".flyout_btn").on("click", function(e){
        e.preventDefault();
        $(".flyout-bg-overlay").toggleClass("open");
        $(".flyout-overlay").toggleClass("open");
     });
     $(".flyout_close").on("click", function(e){
        e.preventDefault();
        $(".flyout-bg-overlay").removeClass("open");
        $(".flyout-overlay").removeClass("open");
     });
     $("body").on("click", function(e){
        if(!$(e.target).closest(".flyout_btn, .flyout-overlay").length){
            $(".flyout-bg-overlay").removeClass("open");
            $(".flyout-overlay").removeClass("open");
        }
     });

});
