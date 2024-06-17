


jQuery(document).ready(function($){ 
    function initSelectBox() {
        $('select').selectBox({
            keepInViewport: false,
            menuTransition: 'fade',
            menuSpeed: 'slow',
            mobile:  true,
            hideOnWindowScroll: true,
        });
        $(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr('style');
    }
    initSelectBox();

    $('select').selectBox().each(function() {
        const $index = $(this).index();
        $('ul.selectBox-dropdown-menu').eq($index).addClass(`select-menu-${$index}`);
    });

    $('select').on('change', function() {
        let selectedValue = $(this).val();
        if (selectedValue) {
            $('div#frm_error_field_s15zr').hide();
        } else {
            $('div#frm_error_field_s15zr').show();
        }
    });

    function checkMyClick() {
        $("body .financial-goals-form .frm_forms .frm_form_fields .frm_form_field.vertical_radio input[type=checkbox]").on("click", function(e) {
            const _this = $(this);
            _this.parent().toggleClass('open');
        });

        $("body .financial-goals-form .frm_forms .frm_form_fields .frm_form_field .frm_checkbox input[type=checkbox]:checked").each(function() {
            const _this = $(this);
            _this.parent().addClass('open');
        });

        $('body .frm_forms .frm_form_fields .frm_form_field.vertical_radio input[type="radio"]').on("click", function(e) {
            const _this = $(this);
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