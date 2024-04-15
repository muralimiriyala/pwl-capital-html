jQuery(document).ready(function($){
    const exploreLink = $(".team-item");
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

});