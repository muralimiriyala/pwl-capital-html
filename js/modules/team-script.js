jQuery(document).ready(function($){
    const exploreLink = $(".team-item");
    // $(".explore-icons-list:first").addClass("active");
    exploreLink.mouseover(function(e){
        e.preventDefault();
        _self = $(this);
        _self.addClass("active");
        _self.siblings().removeClass("active");
        const exploreName = _self.data("name");
        $(".team-content[data-text="+ exploreName +"]").addClass("active");
        $(".explore-slider-image").hide();
        $(".explore-slider-image[data-value="+ exploreName +"]").fadeIn(800);
        $(".team-content").hide();
        $(".team-content[data-text="+ exploreName +"]").fadeIn(100);
    });
});