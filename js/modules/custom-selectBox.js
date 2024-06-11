

jQuery(function($){
    function initSelectBox() {
    $('select').selectBox({
        menuSpeed: 'slow',
        keepInViewport: false,
        mobile:  true,
        hideOnWindowScroll: true,
    });
    $(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr('style');
}
initSelectBox();
    const observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                initSelectBox();
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

jQuery('select').selectBox().each(function(){
    const _index = jQuery(this).index();
    jQuery('ul.selectBox-dropdown-menu').eq(0).addClass(`select-menu-${0}`);
});
jQuery('select').on('change', function(){
    let selectedValue = $(this).val();
    jQuery('div#frm_error_field_s15zr').show();
    if (selectedValue === selectedValue) {
        jQuery('div#frm_error_field_s15zr').hide();
    } else {
        jQuery('div#frm_error_field_s15zr').show();
    }
});

function checkMyClick(){
    jQuery("body .financial-goals-form .frm_forms .frm_form_fields .frm_form_field.vertical_radio input[type=checkbox]").on("click", function(e){
        const _this = jQuery(this);
        _this.parent().toggleClass('open');
    });
    jQuery("body .financial-goals-form .frm_forms .frm_form_fields .frm_form_field .frm_checkbox input[type=checkbox]:checked").each(function() {
        const _this = jQuery(this);
        let isChecked = jQuery(this).prop("checked");
        if(isChecked){
            _this.parent().addClass('open');
        }
    });
    jQuery('body .frm_forms .frm_form_fields .frm_form_field.vertical_radio input[type="radio"]').on("click", function(e){
        const _this = jQuery(this);
        _this.parent().addClass('open');
        _this.parent().closest(".frm_radio").siblings().find("label").removeClass('open');
    });
}
checkMyClick();
const observer = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            checkMyClick();
        }
    }
});
observer.observe(document.body, { childList: true, subtree: true });






