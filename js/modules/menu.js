
jQuery(document).on("ready", function(){

const header = jQuery(".header-main");
jQuery(window).on("scroll load", function(){
    const _scroll = jQuery(this).scrollTop();
    console.log(_scroll, "murali")
    if (_scroll >= 0) {
        header.addClass("sticky-header");
    } else {
        header.removeClass("sticky-header");
    }
});

jQuery(".humburger-btn").on("click", function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery("header.header-main").toggleClass("nav-open");
    jQuery(".header-right").toggleClass("open");
    jQuery(".header-overlay").toggleClass("open")
 });
 jQuery("body").on("click", function(e){
    if(!jQuery(e.target).closest(".header-right, .humburger-btn").length){
        jQuery(".humburger-btn").removeClass("active");
        jQuery(".header-right").removeClass("open");
        jQuery(".header-overlay").removeClass("open")
    }
 });

});

function menu(){
    if(window.matchMedia('(max-width: 1299px)').matches) {
        jQuery(".humburger-btn").on("click", function(e){
            e.preventDefault();
            jQuery(this).toggleClass("open");
            jQuery(".h_mobile_overlay").toggleClass("open");
            jQuery(".header_right").fadeToggle(500);
            jQuery(".header-srch-form").removeClass("open");
        });
        let level1 = jQuery("ul.main-menu > li.menu-item-has-children > a");
        level1.on("click", function(e){
            e.preventDefault();
            jQuery(this).parent("li").closest("ul.main-menu").siblings(".header_btns").toggleClass("off");
            jQuery(this).parent("li").siblings().toggleClass("sib");
            jQuery(this).parent("li").siblings().children("a").removeClass("active");
            jQuery(this).toggleClass("active");
            jQuery(this).parent().siblings("li").find("ul").removeClass("submenu-1");
            jQuery(this).siblings("ul").toggleClass("submenu-1");
            jQuery('.header-btns').toggleClass("active");
        });

        // let level2 = jQuery("ul.main-menu > li > ul > li.menu-item-has-children > a");
        // level2.on("click", function(e){
        //     e.preventDefault();
        //     jQuery(this).parent("li").siblings().children("a").removeClass("active");
        //     jQuery(this).toggleClass("active");
        //     jQuery("ul.main-menu > li > ul > li.menu-item-has-children > ul").not($(this).siblings("ul")).slideUp(800);
        //     jQuery(this).siblings("ul").slideToggle(800);
        // });
        // let level3 = jQuery("ul.main-menu > li > ul > li > ul > li.menu-item-has-children > a");
        // level3.on("click", function(e){
        //     e.preventDefault();
        //     jQuery(this).parent("li").siblings().children("a").removeClass("active");
        //     jQuery(this).toggleClass("active");
        //     jQuery("ul.main-menu > li > ul > li > ul > li.menu-item-has-children > ul").not(jQuery(this).siblings("ul")).slideUp(800);
        //     jQuery(this).siblings("ul").slideToggle(800);
        // });
    }
}
jQuery(document).on("ready", function() { menu(); });