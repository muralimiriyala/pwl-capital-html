jQuery(function(){
    console.log("00000000000000000000000")
    function initSelectBox() {
        jQuery('select').selectBox({
            keepInViewport: false,
            menuSpeed: 'slow',
            mobile: true,
            hideOnWindowScroll: true,
        });
        jQuery(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr('style');
    }
    initSelectBox();

    // jQuery('select').selectBox().each(function() {
    //     const $index = jQuery(this).index();
    //     jQuery('ul.selectBox-dropdown-menu').eq($index).addClass(`select-menu-${$index}`);
    // });

    // jQuery('select').on('change', function() {
    //     let selectedValue = jQuery(this).val();
    //     if (selectedValue) {
    //         jQuery('div#frm_error_field_s15zr').hide();
    //     } else {
    //         jQuery('div#frm_error_field_s15zr').show();
    //     }
    // });

    function checkMyClick() {
        jQuery("body .financial-goals-form .frm_forms .frm_form_fields .frm_form_field.vertical_radio input[type=checkbox]").on("click", function(e) {
            const _this = jQuery(this);
            _this.parent().toggleClass('open');
        });

        jQuery("body .financial-goals-form .frm_forms .frm_form_fields .frm_form_field .frm_checkbox input[type=checkbox]:checked").each(function() {
            const _this = jQuery(this);
            _this.parent().addClass('open');
        });

        jQuery('body .frm_forms .frm_form_fields .frm_form_field.vertical_radio input[type="radio"]').on("click", function(e) {
            const _this = jQuery(this);
            _this.parent().addClass('open');
            _this.parent().closest(".frm_radio").siblings().find("label").removeClass('open');
        });
    }
    checkMyClick();

    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                checkMyClick();
                initSelectBox();
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});