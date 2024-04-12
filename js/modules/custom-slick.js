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

      function testimonialSlider() {
        if (_windowWidth <= 1299) {
          $('.testimonial-main').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: true,
            speed: 1500,
            infinite: false,
            autoplay: false,
            responsive: [
              {
                breakpoint: 1023,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                },
              {
              breakpoint: 739,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                  }
              }
            ]
          });
        } else {
          if ($('.short-intro-row').hasClass('slick-initialized')) {
            $('.short-intro-row').slick('unslick');
          }
        }
      }
      testimonialSlider();

      function perkSlider() {
        if (_windowWidth <= 1023) {
          $('.perk-subhead-main').slick({
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
      perkSlider();

      function benefitSlider() {
        if (_windowWidth <= 1023) {
          $('.benefit-lists').slick({
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
      benefitSlider();

     
      

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
            breakpoint: 1299,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 2,
            }
          },
        ]
      });

      function interestedSlider() {
        if (_windowWidth <= 1023) {
        $('.interested-lists').slick({
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
      } else {
        if ($('.interested-lists').hasClass('slick-initialized')) {
          $('.interested-lists').slick('unslick');
        }
      }
      }
      interestedSlider();

});