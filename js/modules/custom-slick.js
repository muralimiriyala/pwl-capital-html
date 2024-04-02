jQuery(document).ready(function(){   
    if(jQuery(window).width() <= 1023){
        jQuery('.financial-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: true,
            infinity: true,
            focusOnSelect: true,
        });
    }
        

});