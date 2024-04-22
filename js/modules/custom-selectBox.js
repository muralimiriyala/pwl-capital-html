

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











