
jQuery(document).ready(function() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        const $teamlists = jQuery(".team-item");
        $teamlists.each(function() {
            const $teamlist = jQuery(this);
            $teamlist.on('click', function(e) {
                    console.log($teamlist);
                e.preventDefault();

                const $self = jQuery(this);
                const $teamName = $self.data("name");
                
                $self.parent().siblings(".team-lists").find(".team-item").toggleClass("team-row-hide");
                $self.siblings(".team-item").toggleClass("team-hide");
         
                jQuery(".team-content-main").not(".team-content-main[data-value='" + $teamName + "']").hide();
                jQuery(".team-content-main[data-value=" + $teamName + "]").fadeToggle(1000);
            });
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
