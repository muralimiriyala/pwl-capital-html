


// (function($){
//   let teamitem = $('.team-item');
//   let teamlist = $(".team-list");
//   let content = $('.team-content-main');
//   let lastClicked = null;
//  if (window.matchMedia("(min-width: 1024px)").matches) {
//     teamitem.on('click', function (e) {
//     e.preventDefault();
//     let $this = $(this);
//     let tname = $this.data('name');
//     let contentElement = $(".team-content-main[data-value='" + tname + "']");

//     if (lastClicked && lastClicked.is($this)) {
//       // Clicked the same element again
//       content.slideUp(800);
//       teamitem.removeClass('team-hide');
//       lastClicked = null; // Reset lastClicked
//     } else {
//       // Clicked a different element or first time clicking this element
//       content.hide();
//       contentElement.slideDown(800);
//       $this.siblings('.team-item').addClass('team-hide');
//       $this.parent('.team-col').siblings('.team-col').find('.team-item').addClass('team-hide');
//       $this.removeClass('team-hide'); // Ensure the clicked element is not hidden
//       lastClicked = $this; // Update lastClicked
//     }
//   });
//   }
//   else{
//   teamlist.on('click', function (e) {
//     e.preventDefault();
//     let $this = $(this).parent(".team-item");
//     let tname = $this.data('name');
//     let contentElement = $(".team-content-main[data-mobile='" + tname + "']");

//     if (lastClicked && lastClicked.is($this)) {
//       // Clicked the same element again
//       content.slideUp(800);
//       teamitem.removeClass('team-hide');
//       lastClicked = null; // Reset lastClicked
//     } else {
//       // Clicked a different element or first time clicking this element
//       content.hide();
//       contentElement.slideDown(800);
//       $this.siblings('.team-item').addClass('team-hide');
//       $this.parent('.team-col').siblings('.team-col').find('.team-item').addClass('team-hide');
//       $this.removeClass('team-hide'); // Ensure the clicked element is not hidden
//       lastClicked = $this; // Update lastClicked
//     }
//   });
//   }
  
// })(jQuery);
