

jQuery(function($){
    function initSelectBox() {
    $('select').selectBox({
        keepInViewport: false,
        menuSpeed: 'slow',
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










