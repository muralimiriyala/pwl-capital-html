jQuery(document).ready(function() {
    if (jQuery(window).width() >= 1024) {
        const $teamlists = $(".team-lists");
        $teamlists.each(function() {
            const $teamlist = jQuery(this).find(".team-list");
            function handleMouseEnterFocusClick(e) {
                e.preventDefault();
                const $teamName = jQuery(this).parent().data("name");
                const $teamHeight = $teamlist.outerHeight(true);
                const $contentHeight = $(".team-content-main[data-value=" + $teamName + "]").outerHeight(true);
                const $content = $(".team-content-main[data-value=" + $teamName + "]");
                $teamlist.css({
                    'padding-bottom': $contentHeight + 'px',
                })
                $content.css({
                    'top': $teamHeight  + 'px',
                })

                $(".team-content-main").stop(true, true).hide(100);
                $(".team-content-main[data-value=" + $teamName + "]").stop(true, true).fadeIn(600);
            }

            function handleMouseLeaveBlur(e) {
                e.preventDefault();
                $teamlist.css('padding-bottom', '51px');
                $(".team-content-main").stop(true, true).fadeOut(100);
            }

            $teamlist.hover(handleMouseEnterFocusClick, handleMouseLeaveBlur);
            $teamlist.on('focus', handleMouseEnterFocusClick);
            $teamlist.on('blur', handleMouseLeaveBlur);
            $teamlist.on('click', handleMouseEnterFocusClick);
        });
    }

    if (jQuery(window).width() <= 1023) {
        jQuery(".team-list").on('click', function(e) {
            e.preventDefault();
            jQuery(".team-content-main").not(jQuery(this).siblings(".team-content-main")).slideUp(800);
            jQuery(this).siblings(".team-content-main").slideToggle(800);
        });
    }
});
