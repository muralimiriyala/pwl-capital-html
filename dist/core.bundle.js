jQuery(function(o){const i=o(".header-main");window.onscroll=function(){4<=window.scrollY?i.addClass("sticky"):i.removeClass("sticky")},o(".footer-nav").click(function(){o(this).toggleClass("open"),o(this).siblings(".footer-nav").removeClass("open"),o(this).find(".footer-nav-cont").slideToggle(900),o(this).siblings(".footer-nav").find(".footer-nav-cont").slideUp(900)}),o(".accordion-item").click(function(){o(this).toggleClass("open"),o(this).siblings(".accordion-item").removeClass("open"),o(this).find(".accordion-content").slideToggle(900),o(this).siblings(".accordion-item").find(".accordion-content").slideUp(900)})});