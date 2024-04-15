jQuery(document).ready(function($){
    const exploreLink = $(".team-item");
    exploreLink.hover(function(e){
        e.preventDefault();
        _self = $(this);
        _self.addClass("active");
        _self.siblings().removeClass("active");
        const exploreName = _self.data("name");
        alert("heelo");
        console.log(exploreName);
        $(".team-content[data-value="+ exploreName +"]").fadeIn(100);
    });
});