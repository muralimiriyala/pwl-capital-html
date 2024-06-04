
(function($){
  const $link = $("ul.how-can-links li a");
  console.log($link)

  const $howcanslider = $(".how-can-slider");
  $howcanslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 1500,
    infinite: false,
    autoplay: false,
    variableWidth: true,
  });
  $link.on("click", function(e){
    e.preventDefault();
    var slideno = jQuery(this).data('slide');
    $contentSlider.slick('slickGoTo', slideno - 1);
  });

}(jQuery));


