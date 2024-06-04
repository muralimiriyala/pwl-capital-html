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
    dots: true,
    appendDots: $('.murali'),
    speed: 1000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          variableWidth: true,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 739,
        settings: {
          variableWidth: true,
          infinite: false,
          dots: true,
        },
      },
    ]
  });


  $("ul.how-can-links li:first-child a").addClass("slick-active");
  const $link = $("ul.how-can-links li a");
  $link.on("click", function(e){
    e.preventDefault();
    const $this = $(this);
    $this.parent("li").siblings().find("a").removeClass("slick-active");
    $this.addClass("slick-active");
    var slideno = $this.data('slide');
    console.log(slideno);
    $howcanslider.slick('slickGoTo', slideno - 1);
  });

}(jQuery));
