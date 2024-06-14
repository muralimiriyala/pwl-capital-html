jQuery(document).ready(function($){   
  function financialSlider() {
    if ($(window).width() <= 739) {
        if (!$('.financial-lists').hasClass('slick-initialized')) {
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

            var slickInstance = $('.financial-lists').slick("getSlick");
            var slideCount = slickInstance.slideCount;
            if (slideCount > 0) {
                $('.financial-lists').slick('slickRemove', slideCount - 1);
            }
        }
    } else {
        if ($('.financial-lists').hasClass('slick-initialized')) {
            $('.financial-lists').slick('unslick');
        }
    }
}


  financialSlider();

  function valuesSlider() {
      if ($(window).width() <= 1023) {
        if (!$('.values-main').hasClass('slick-initialized')) {
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
        }
      } else {
        if ($('.values-main').hasClass('slick-initialized')) {
          $('.values-main').slick('unslick');
        }
      }
  }
  valuesSlider();

  function shortintroSlider() {
      if ($(window).width() <= 1023) {
        if (!$('.short-intro-row').hasClass('slick-initialized')) {
          $('.short-intro-row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: true,
            speed: 1500,
            infinite: false,
            autoplay: false,
          });
        }
      } else {
        if ($('.short-intro-row').hasClass('slick-initialized')) {
          $('.short-intro-row').slick('unslick');
        }
      }
  }
  shortintroSlider();

  const testimonialsSlider = jQuery(".testimonial-main");
  function testimonialSlider() {
    testimonialsSlider.each(function(){
      const $this = jQuery(this);
      const testimonialsSlide = $this.children(".testimonial-list").length;
      if ($(window).width() <= 1299) {
        if (!$('.testimonial-main').hasClass('slick-initialized')) {
          $('.testimonial-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: false,
            speed: 1500,
            infinite: false,
            autoplay: false,
            responsive: [
              {
                breakpoint: 1023,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: true,
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
        }
      } else {
        if (testimonialsSlide >= 3 && !$this.hasClass('slick-initialized')){
            $('.testimonial-main').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              arrows: false,
              dots: false,
              speed: 1500,
              infinite: false,
              autoplay: false,
            });
        }
      }
    });
  }
testimonialSlider();

  function perkSlider() {
      if ($(window).width() <= 1023) {
        if (!$('.perk-subhead-main').hasClass('slick-initialized')) {
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
        }
      } else {
        if ($('.perk-subhead-main').hasClass('slick-initialized')) {
          $('.perk-subhead-main').slick('unslick');
        }
      }
  }
  perkSlider();

  function benefitSlider() {
      if ($(window).width() <= 1023) {
        if (!$('.benefit-lists').hasClass('slick-initialized')) {
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
        }
      } else {
        if ($('.benefit-lists').hasClass('slick-initialized')) {
          $('.benefit-lists').slick('unslick');
        }
      }
  }
  benefitSlider();

  function interestedSlider() {
      if ($(window).width() <= 1023) {
        if (!$('.interested-lists').hasClass('slick-initialized')) {
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
        }
      } else {
        if ($('.interested-lists').hasClass('slick-initialized')) {
          $('.interested-lists').slick('unslick');
        }
      }
  }
  interestedSlider();

  function portfolioSlider() {
      if ($(window).width() <= 1023) {
        if (!$('.portfolio-model-slider').hasClass('slick-initialized')) {
          $('.portfolio-model-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            speed: 1500,
            infinite: false,
            autoplay: false,
            variableWidth: true,
            focusOnSelect: true,
            draggable: true,
            responsive: [
              {
                breakpoint: 1023,
                settings: {
                  dots: false
                }
              },
            ]
          });
        }
      } else {
        if ($('.portfolio-model-slider').hasClass('slick-initialized')) {
          $('.portfolio-model-slider').slick('unslick');
        }
      }
  }
  portfolioSlider();

  function timelineSlider() {
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
              slidesToScroll: 1,
            }
          },
        ]
      });
  }
  
timelineSlider();

$(window).on('resize load', function () { financialSlider(); valuesSlider(); shortintroSlider(); testimonialSlider(); perkSlider(); benefitSlider(); interestedSlider(); portfolioSlider(); });
});
