jQuery(document).ready(function(){
    if(jQuery(window).width() >= 1024){
        const $teamlists = $(".team-lists");
        $teamlists.each(function() {
            const $teamlist = jQuery(this).find(".team-list");
        
<<<<<<< HEAD
            // Define a function to handle mouse enter, focus, and click
            function handleMouseEnterFocusClick(e) {
                e.preventDefault();
                const $teamName = jQuery(this).parent().data("name");
                console.log($teamName);
        
                // Stop any ongoing animation and hide the elements before showing the new one
                $(".team-content-main").stop(true, true).hide(100);
                $(".team-content-main[data-value=" + $teamName + "]").stop(true, true).fadeIn(600);
            }
=======
            $teamlist.hover(
                function(e) {
                    // Mouse enter
                    e.preventDefault();
                    const teamheight = $teamlist.height();
                    console.log(teamheight);
                    const $teamName = jQuery(this).parent().data("name");
                    console.log($teamName);
                     var contentheight = $(".team-content-main[data-value=" + $teamName + "]").height();
                     console.log(contentheight);
                    // Stop any ongoing animation and hide the elements before showing the new one
                    $(".team-content-main").stop(true, true).hide(100);
                    $(".team-content-main[data-value=" + $teamName + "]").stop(true, true).fadeIn(600);
                },
                function(e) {
                    // Mouse leave
                    e.preventDefault();
>>>>>>> 2faa18f7bc04f8594645b5cc104bbe417591bb7b
        
            // Define a function to handle mouse leave and blur
            function handleMouseLeaveBlur(e) {
                e.preventDefault();
        
                // Stop any ongoing animation before fading out
                $(".team-content-main").stop(true, true).fadeOut(100);
            }
        
            // Bind hover (mouseenter and mouseleave) events
            $teamlist.hover(handleMouseEnterFocusClick, handleMouseLeaveBlur);
        
            // Bind focus and blur events
            $teamlist.on('focus', handleMouseEnterFocusClick);
            $teamlist.on('blur', handleMouseLeaveBlur);
        
            // Bind click event
            $teamlist.on('click', handleMouseEnterFocusClick);
        });
        
        
        
    }
    if(jQuery(window).width() <= 1023){
        jQuery(".team-list").on('click', function(e){
            e.preventDefault();
            jQuery(".team-content-main").not(jQuery(this).siblings(".team-content-main")).slideUp(800);
            jQuery(this).siblings(".team-content-main").slideToggle(800);
        });
    }
})
