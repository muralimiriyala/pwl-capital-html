
jQuery(function($){
    const header = $(".header-main");
    window.onscroll = function(){
        const _scroll = window.scrollY;
        _scroll >= 4 ? header.addClass("sticky") : header.removeClass("sticky");
    }

});

// jQuery(function($){
//     $('.footer-nav span').click(function() {      
//        $('.footer-nav-cont').toggle();
//     })
// });

// jQuery(document).ready(function(){
//     jQuery(".test").on("click", function(){
//         jQuery("ul.footer-nav-cont").addClass("open");
//     });
// });

