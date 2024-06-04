(function($){

  const $howcanslider = $(".how-can-slider");

  $howcanslider.on('init', function(event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var cur = $(slick.$slides[nextSlide]);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next();
    prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
  });

  $howcanslider.slick({
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1500,
    autoplay: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    swipe: true,
    customPaging: function(slider, i) {
      return '';
    },
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          variableWidth: true,
          centerMode: false,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 739,
        settings: {
          variableWidth: true,
          centerMode: false,
          infinite: false,
          dots: true,
        },
      },
    ]
  });

  const $link = $("ul.how-can-links li a");
  $link.on("click", function(e){
    e.preventDefault();
    const $this = $(this);
    $this.parent("li").siblings().find("a").removeClass("slick-active");
    $this.addClass("slick-active");  // Ensure the clicked link gets the active class
    var slideno = $this.data('slide');
    console.log(slideno);
    $howcanslider.slick('slickGoTo', slideno - 1);
  });

  // Update active link on slide change
  $howcanslider.on('afterChange', function(event, slick, currentSlide) {
    const activeLink = $("ul.how-can-links li a").filter(function() {
      return $(this).data('slide') - 1 === currentSlide;
    });
    $("ul.how-can-links li a").removeClass('slick-active');
    activeLink.addClass('slick-active');
  });

}(jQuery));
