jQuery(document).ready(function($){   
    var _windowWidth = $(window).width();
    function financialSlider() {
        if (_windowWidth <= 739) {
          $('.financial-lists').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            speed: 1500,
            infinite: false,
            autoplay: false,
          });
        } else {
          if ($('.financial-lists').hasClass('slick-initialized')) {
            $('.financial-lists').slick('unslick');
          }
        }
      }
      financialSlider();

      $(window).on('resize load', function () {
        var newScreenWidth = $(window).width();
        if (newScreenWidth !== _windowWidth) {
          _windowWidth = newScreenWidth;
          financialSlider();
    
        }
      });


});