(function($){
  const $howcanslider = $(".how-can-slider");
  const $howcanlink = $("ul.how-can-links li a");
  function initializeSlider() {
      $howcanslider.each(function() {
        const $this = $(this);
        if (!$this.hasClass('slick-initialized')) {
          $this.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            dots: false,
            speed: 1000,
            slidesPerRow: 1,
            responsive: [
              {
                breakpoint: 1023,
                settings: {
                  dots: true
                }
              },
            ]
          });
        }
      });
  }
  $(document).ready(function() { initializeSlider(); $(window).on('resize', function() { initializeSlider(); }); });
  $('ul.how-can-links li:first a').addClass('active')
  $howcanlink.on('click', function(e) {
    e.preventDefault();
    const $index = $(this).data('slide');
    $howcanlink.removeClass('active');
    $('ul.how-can-links li a[data-slide="' + $index + '"]').addClass('active');
    const slideIndex = $index - 1;
    $howcanslider.slick('slickGoTo', slideIndex);

      const $slide_animations = $('.slick-slide[data-slick-index="' + slideIndex + '"] [data-animation]');
      $slide_animations.each(function(){
          const $tself = $(this);
          const $tanimation = $tself.data('animation');
          const $tdelay = $tself.data('animation-delay');
          $tself.addClass($tanimation).addClass('visible');
          const $timeline = $tself[0].tl;
          if ($timeline) {
              $timeline.restart();
          }
      });
  });

  $(document).on('click', '.how-can-slider ul.slick-dots li', function(e) {
    e.preventDefault();
    const dotIndex = $(this).index();
    $howcanslider.slick('slickGoTo', dotIndex);
    const $slide_animations = $('.slick-slide[data-slick-index="' + dotIndex + '"] [data-animation]');
    $slide_animations.each(function(){
        const $tself = $(this);
        const $tanimation = $tself.data('animation');
        const $tdelay = $tself.data('animation-delay');
        $tself.addClass($tanimation).addClass('visible');
        const $timeline = $tself[0].tl;
        if ($timeline) {
            $timeline.restart();
        }
    });
  });

})(jQuery);
