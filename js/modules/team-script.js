jQuery(document).ready(function() {
    const $teamItems = $(".team-list-item");
    const $teamList = $teamItems.find(".team-list");
    if(jQuery(window).width() >= 1024){
    $teamList.on("click", function(e) {
        e.preventDefault();
        const $this = jQuery(this).closest(".team-list-item");
        const $content = jQuery(this).siblings(".team-content-main");
        const contentHeight = $content.outerHeight(true);
        
        $this.siblings().find(".team-content-main").hide(100);
        $this.siblings().css("padding-bottom", "0px");

            $content.slideToggle(800, function() {
                if ($content.is(":visible")) {
                    $this.css("padding-bottom", contentHeight + 80 + "px");
                    const listHeight = $this.find(".team-list").outerHeight(true);
                    $content.css("top", listHeight + "px");
                } else {
                    $content.css("top", "100%");
                    $this.css("padding-bottom", "0px");
                }
            });
        
        if ($this.hasClass("active")) {
            $this.removeClass("active");
            $teamItems.removeClass("team-hide");
        } else {
            $teamItems.removeClass("active");
            $teamItems.addClass("team-hide");
            $this.removeClass("team-hide").addClass("active");
        }
    });
}
else{
    $teamList.on("click", function(e) {
        e.preventDefault();
        const $this = jQuery(this).closest(".team-list-item");
        
        if ($this.hasClass("active")) {
            $this.removeClass("active");
            $teamItems.removeClass("team-hide");
        } else {
            $teamItems.removeClass("active");
            $teamItems.addClass("team-hide");
            $this.removeClass("team-hide").addClass("active");
        }

        $this.siblings(".team-list-item").find(".team-content-main").slideUp(800);
        jQuery(this).siblings(".team-content-main").slideToggle(800);

    });
}
});
