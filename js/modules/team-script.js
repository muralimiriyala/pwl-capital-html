// jQuery(document).ready(function($){
//     const exploreLink = $(".team-item");
//     exploreLink.mouseover(function(e){
//         e.preventDefault();
//         _self = $(this);
//         _self.addClass("active");
//         _self.siblings().removeClass("active");
//         const exploreName = _self.data("name");
//         $(".team-content-main").fadeOut(100);
//         $(".team-content-main[data-value="+ exploreName +"]").fadeIn(600);
//     });
//     exploreLink.mouseleave(function(e){
//         e.preventDefault();
//         $(".team-content-main").fadeOut(100);
//     });

// });
// jQuery(document).ready(function($){
//     const exploreLink = $(".team-item");
//     exploreLink.mouseover(function(e){
//         e.preventDefault();
//         const _self = $(this);
//         const exploreName = _self.data("name");

//         // Add 'active' class to the current item and its parent
//         _self.addClass("active");
//         _self.siblings().removeClass("active");
//         _self.parent().addClass("active");

//         // Fade out all content and fade in the target content
//         $(".team-content-main").stop(true, true).fadeOut(100, function() {
//             $(".team-content-main[data-value="+ exploreName +"]").fadeIn(600);
//         });
//     });

//     exploreLink.mouseleave(function(e){
//         e.preventDefault();
//         const _self = $(this);

//         // Remove 'active' class from the current item and its parent
//         _self.removeClass("active");
//         _self.parent().removeClass("active");

//         // Fade out all content
//         $(".team-content-main").stop(true, true).fadeOut(100);
//     });
// });
