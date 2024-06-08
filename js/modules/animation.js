// var $animation_elements = jQuery('[data-animation]');
// var $window = jQuery(window);

// function check_if_in_view() {
//   let window_height = $window.height();
//   let window_top_position = $window.scrollTop();
//   let window_bottom_position = window_top_position + window_height;
//   let viewport_threshold = 0.75; 

//   $animation_elements.each(function() {
//     const $self = jQuery(this);
//     let element_height = $self.outerHeight();
//     let element_top_position = $self.offset().top;
//     let element_bottom_position = element_top_position + element_height;
//     let threshold = element_height * viewport_threshold;

//     const animation = $self.data('animation');
//     const animateType = $self.data('animate');
//     const delay = Number($self.data('animation-delay') || 0);
//     const timeline = $self[0].tl


//     if ((element_top_position + threshold <= window_bottom_position) && (element_bottom_position >= window_top_position + threshold)) {
//       setTimeout(() => {
//         if (animateType) _.animateRun($self, animateType);
//         else $self.addClass('visible ' + animation);


//         if (timeline) {
//           timeline.play();
//         }

//       }, delay);      
//     } else {      
//       if (timeline && timeline.progress() > 0) {
//         timeline.progress(0);
//         timeline.pause();
        
//       }
//     }
//   });
// }
// $window.on("scroll load", check_if_in_view);
// $window.trigger("scroll");
// jQuery(function(){ check_if_in_view(); setTimeout(check_if_in_view, 100); });


gsap.registerPlugin(ScrollTrigger);
const $animation_elements = jQuery('[data-animation]');

$animation_elements.each(function(){
    const $self = jQuery(this);
    const animation = $self.data('animation');
    const timeline = $self[0].tl
    const counter = $self[0].counter

    gsap.to($self, {
        scrollTrigger: {
            trigger: $self,
            start: 'top 90%',
            end: 'top 10%', 
            toggleActions: "play none none none",
            // markers: true, 
            onEnter: function(){
                $self.addClass(animation).addClass('visible');
                if (timeline) {
                    timeline.play();
                  }   
            },
            onLeave: function(){
              if (timeline && timeline.progress() > 0) {
                timeline.progress(0);
                timeline.pause(); 
              }
              if (counter) {
                counter.reset();
              }
            },
            onEnterBack: function(){
              if(timeline) {
                timeline.restart(); // Restart the timeline when scrolling back into view
              } 
            }
        },
        ease: 'power1.inOut',
    });
});

