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
            variableWidth: true,
          });
        } else {
          if ($('.financial-lists').hasClass('slick-initialized')) {
            $('.financial-lists').slick('unslick');
          }
        }
      }
      financialSlider();

      function valuesSlider() {
        if (_windowWidth <= 739) {
          $('.values-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            speed: 1500,
            infinite: false,
            autoplay: false,
          });
        } else {
          if ($('.values-main').hasClass('slick-initialized')) {
            $('.values-main').slick('unslick');
          }
        }
      }
      valuesSlider();

      

      $(window).on('resize load', function () {
        var newScreenWidth = $(window).width();
        if (newScreenWidth !== _windowWidth) {
          _windowWidth = newScreenWidth;
          financialSlider();
          valuesSlider();
        }
      });


});