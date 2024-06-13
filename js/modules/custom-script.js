
jQuery(function($){   

    $('.accordion-item').on("click", function(){
        $(this).toggleClass("open");
        $(this).siblings('.accordion-item').removeClass("open");
        $(this).find('.accordion-content').slideToggle(900);
        $(this).siblings('.accordion-item').find('.accordion-content').slideUp(900);  
     });

    $('.languages > a').on("click", function(e){
      e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active"); 
     });

     if($(window).width() <= 739){
         $('.footer-list').on("click", function(){
            $(this).toggleClass("open");
            $(this).siblings('.footer-list').removeClass("open");
            $(this).find('.footer-links').slideToggle(900);
            $(this).siblings('.footer-list').find('.footer-links').slideUp(900);  
         })
     }

     if($(window).width() <= 1023){
      $(".srch-results-btn").on("click", function(e){
         e.preventDefault();
         $(this).toggleClass("open");
         $("ul.srch-results-links").slideToggle(900)
      });
      $("body").on("click", function(e){
         if(!$(e.target).closest(".srch-results-btn, ul.srch-results-links").length){
               $(".srch-results-btn").removeClass("open");
               $(".header-overlay").removeClass("open");
               $("ul.srch-results-links").slideUp(900);
         }
      });
      }

     $(".header-srch-pos").on("click", function(e){
         e.preventDefault();
         $(".header-srch-form").addClass("open");
         $("header.header-main").removeClass("nav-open");
      });
     $(".close-srch").on("click", function(e){
         e.preventDefault();
         $(".header-srch-form").removeClass("open");
         $("header.header-main").removeClass("nav-open");
      });

     $(".flyout_btn").on("click", function(e){
        e.preventDefault();
        $(".flyout-bg-overlay").toggleClass("open");
        $(".flyout-overlay").toggleClass("open");
     });
     $(".flyout_close").on("click", function(e){
        e.preventDefault();
        $(".flyout-bg-overlay").removeClass("open");
        $(".flyout-overlay").removeClass("open");
     });
   //   $("body").on("click", function(e){
   //      if(!$(e.target).closest(".flyout_btn, .flyout-overlay").length){
   //          $(".flyout-bg-overlay").removeClass("open");
   //          $(".flyout-overlay").removeClass("open");
   //      }
   //   });

    

      // Show the first tab and hide the rest
      $('.portfolio-lists .portfolio-item:first-child').addClass('active');
      $('.portfolio-table-content').hide();
      $('.portfolio-table-content:first').show();

      // Click function
      $('.portfolio-item').click(function(){
      $('.portfolio-item').removeClass('active');
      $(this).addClass('active');
      $('.portfolio-table-content').hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      return false;
      });

});

