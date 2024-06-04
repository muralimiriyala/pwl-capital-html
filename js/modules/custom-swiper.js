
(function($){
  
  const $howcanslider = $(".how-can-slider");
$howcanslider.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  //console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  //console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
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
    speed: 1500,
    autoplay: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    swipe: true,
    // variableWidth: true,
    customPaging: function(slider, i) {
      return '';
    },
  });
  const $link = $("ul.how-can-links li a");
  $link.on("click", function(e){
    e.preventDefault();
    const $this = $(this);
    $(this).parent("li").siblings().find("a").removeClass("slick-active");
    // $(this).not("ul.how-can-links li a").removeClass("slick-active");
    $this.toggleClass("slick-active");
    var slideno = $this.data('link-slide');
    console.log(slideno)
    $howcanslider.slick('slickGoTo', slideno - 1);
  });

}(jQuery));


