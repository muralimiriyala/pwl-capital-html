
function resize() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        jQuery(".team-list").on('click', function(e) {
            e.preventDefault();
            jQuery(this).parent(".team-item").closest(".team-lists").siblings(".team-lists").find(".team-item").children(".team-list").toggleClass("team-hide");
            jQuery(this).parent().siblings(".team-item").find(".team-list").toggleClass("team-hide");
            jQuery(this).toggleClass("team-active");
            const $teamName = jQuery(this).parent().data("name");
            jQuery(".team-content-main").hide(100);
            jQuery(".team-content-main[data-value=" + $teamName + "]").fadeToggle(400);
        });
    } else {
        jQuery(".team-list").on('click', function(e) {
            e.preventDefault();
            jQuery(this).parent(".team-item").closest(".team-lists").siblings(".team-lists").find(".team-item").children(".team-list").toggleClass("team-hide");
            jQuery(this).parent().siblings(".team-item").find(".team-list").toggleClass("team-hide");
            jQuery(this).toggleClass("team-active");

            alert("murali")
            jQuery(".team-content-main").not(jQuery(this).siblings(".team-content-main")).slideUp(800);
            jQuery(this).siblings(".team-content-main").slideToggle(800);
        });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    resize();
  });
  
  window.onload = function () {
    resize();
  };
  window.onresize = function () {
    resize();
  };
  