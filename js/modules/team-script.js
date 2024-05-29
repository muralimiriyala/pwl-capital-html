jQuery(document).ready(function(){
    if(jQuery(window).width() >= 1024){
        const $teamlists = $(".team-lists");
        const $teamlist = $teamlists.find(".team-list");
        console.log($teamlist, "test")
        exploreLink.mouseover(function(e){
            e.preventDefault();
            _self = $(this);
            _self.addClass("active");
            _self.siblings().removeClass("active");
            const exploreName = _self.data("name");
            $(".team-content-main").fadeOut(100);
            $(".team-content-main[data-value="+ exploreName +"]").fadeIn(600);
        });
        exploreLink.mouseleave(function(e){
            e.preventDefault();
            $(".team-content-main").fadeOut(100);
        });
    }
    if(jQuery(window).width() <= 1023){
        jQuery(".team-item").on('click', function(e){
            e.preventDefault();
            jQuery(this).siblings().find(".team-content-main").slideUp(800);
            jQuery(this).children(".team-content-main").slideToggle(800);
        });
    }
})
