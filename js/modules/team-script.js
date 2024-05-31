jQuery(document).ready(function() {
    if (jQuery(window).width() >= 1024) {
        const $teamlists = $(".team-lists");
        $teamlists.each(function() {
            const $teamlist = jQuery(this).find(".team-list");
            function handleMouseEnter(e) {
                e.preventDefault();
        
                const $teamName = jQuery(this).parent().data("name");
                const $teamHeight = $teamlist.outerHeight(true);
                const $contentHeight = $(".team-content-main[data-value=" + $teamName + "]").outerHeight(true);
                const $content = $(".team-content-main[data-value=" + $teamName + "]");
    
               $teamlist.css({
                    'position': 'relative',
                    'z-index': '800',
                    'padding-bottom': $contentHeight + 120 + 'px',
                });
                $content.css({
                    'top': $teamHeight + 'px',
                });
        
                $(".team-content-main").stop(true, true).hide(100);
                $(".team-content-main[data-value=" + $teamName + "]").stop(true, true).fadeIn(800);
            }
        
            function handleMouseLeave(e) {
                e.preventDefault();


                $teamlist.css('padding-bottom', '51px');
                $(".team-content-main").stop(true, true).fadeOut(800);
            }
        
            $teamlist.on('mouseenter', handleMouseEnter);
            $teamlist.on('mouseleave', handleMouseLeave);
            
        });
        
        jQuery(".team-lists").each(function(){
            let $teamItems = jQuery(this).find(".team-item");
            $teamItems.hover(
                function() {
                    // Mouse enter
                    jQuery(this).parent().siblings(".team-lists").find(".team-item").addClass("team-hide");
                    jQuery(this).siblings().addClass("team-hide");
                    jQuery(this).addClass("team-active");
                }, 
                function() {
                    // Mouse leave
                    jQuery(this).parent().siblings(".team-lists").find(".team-item").removeClass("team-hide");
                    jQuery(this).siblings().removeClass("team-hide");
                    jQuery(this).removeClass("team-active");
                }
            );
        });
        
    }

    if (jQuery(window).width() <= 1023) {
        jQuery(".team-list").on('click', function(e) {
            e.preventDefault();
            jQuery(this).parent(".team-item").closest(".team-lists").siblings(".team-lists").find(".team-item").children(".team-list").toggleClass("team-hide");
            jQuery(this).parent().siblings(".team-item").find(".team-list").toggleClass("team-hide");
            jQuery(this).toggleClass("team-active");

            jQuery(".team-content-main").not(jQuery(this).siblings(".team-content-main")).slideUp(800);
            jQuery(this).siblings(".team-content-main").slideToggle(800);
        });
    }
});
