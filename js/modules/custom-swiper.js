

  // var galleryTop = new Swiper('.swiper-nav', {
  //   spaceBetween: 0,
  //   direction: 'vertical',
  //   mousewheel: true,
  //   slidesPerView: 5,

  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //    loop: true,
  // });


  var galleryThumbs = new Swiper('.swiper-for', {
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 4,
    slidesPerView: 1,
    speed: 1000,
    slideToClickedSlide: true,
    effect: "cards",
    grabCursor: true,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

  document.querySelectorAll('ul.how-can-links > li').forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        var slideIndex = parseInt(navItem.getAttribute('data-slide-index'), 10);
        galleryThumbs.slideTo(slideIndex);
    });
});
