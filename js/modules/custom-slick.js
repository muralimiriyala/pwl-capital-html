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
            variableWidth: true,
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

      function shortintroSlider() {
        if (_windowWidth <= 1023) {
          $(' .short-intro-row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: true,
            speed: 1500,
            infinite: false,
            autoplay: false,
          });
        } else {
          if ($('.short-intro-row').hasClass('slick-initialized')) {
            $('.short-intro-row').slick('unslick');
          }
        }
      }
      shortintroSlider();

     
      

      $(window).on('resize load', function () {
        var newScreenWidth = $(window).width();
        if (newScreenWidth !== _windowWidth) {
          _windowWidth = newScreenWidth;
          financialSlider();
          valuesSlider();
          shortintroSlider();
        }
      });


      $('.timeline-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 1500,
        infinite: false,
        autoplay: false,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              dots: true
            }
          },
        ]
      });

});