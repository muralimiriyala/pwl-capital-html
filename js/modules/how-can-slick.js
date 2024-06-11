(function($) {
  const $howcanslider = $(".how-can-slider");
  function initializeSlider() {
    if ($(window).width() < 1024) {
      $howcanslider.each(function() {
        const _this = $(this);
        if (!_this.hasClass('slick-initialized')) {
          _this.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            dots: true,
            speed: 1000,
            slidesPerRow: 1,
          });
        }
      });
    }
  }
  function destroySlider() {
    if ($(window).width() >= 1024) {
      $howcanslider.each(function() {
        const _this = $(this);
        if (_this.hasClass('slick-initialized')) {
          _this.slick('unslick');
        }
      });
    }
  }
  $(document).ready(function() {
    initializeSlider();
    $(window).on('resize', function() {
      destroySlider();
      initializeSlider();
    });
  });
})(jQuery);
