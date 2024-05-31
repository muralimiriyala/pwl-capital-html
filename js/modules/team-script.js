jQuery(document).ready(function() {
    if (jQuery(window).width() >= 1024) {
        jQuery(".team-lists").each(function() {
            let $teamItems = jQuery(this).find(".team-item");
    
            $teamItems.on('click', function(e) {
                e.preventDefault(); // Prevent default action if it's an anchor tag
                
                let $this = jQuery(this);
                let isActive = $this.hasClass('team-active');
                
                // If the clicked item is already active, deactivate all
                if (isActive) {
                    $teamItems.removeClass("team-hide team-active");
                    $this.closest('.team-lists').siblings(".team-lists").find(".team-item").removeClass("team-hide");
                } else {
                    // Add 'team-hide' class to all siblings and sibling items
                    $this.closest('.team-lists').siblings(".team-lists").find(".team-item").addClass("team-hide");
                    $this.siblings().addClass("team-hide");
                    $this.addClass("team-active").removeClass("team-hide");
                }

                const $teamName = $this.data("name");
                if (isActive) {
                    jQuery(".team-content-main[data-value='" + $teamName + "']").slideUp(800);
                } else {
                    jQuery(".team-content-main").slideUp(800);
                    jQuery(".team-content-main[data-value='" + $teamName + "']").slideDown(800);
                }
            });
        });
    } 
    if (jQuery(window).width() <= 1023) {
        jQuery(".team-list").on('click', function(e) {
            e.preventDefault();

            const $this = jQuery(this).parent(); // Get the parent .team-item
            const isActive = $this.hasClass('team-active');

            // If the clicked item is already active, deactivate all
            if (isActive) {
                $this.removeClass("team-hide team-active");
                $this.closest('.team-lists').siblings(".team-lists").find(".team-item").removeClass("team-hide");
            } else {
                // Add 'team-hide' class to all siblings and sibling items
                $this.closest('.team-lists').siblings(".team-lists").find(".team-item").addClass("team-hide");
                $this.siblings().addClass("team-hide");
                $this.addClass("team-active").removeClass("team-hide");
            }

            jQuery(".team-content-main").not(jQuery(this).siblings(".team-content-main")).slideUp(800);
            jQuery(this).siblings(".team-content-main").slideToggle(800);

        });
    }
});
