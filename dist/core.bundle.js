!function(b){var o=window.SelectBox=function(e,t){if(e instanceof jQuery){if(!(0<e.length))return;e=e[0]}return this.typeTimer=null,this.typeSearch="",this.isMac=navigator.platform.match(/mac/i),t="object"==typeof t?t:{},this.selectElement=e,!(!t.mobile&&navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i))&&"select"===e.tagName.toLowerCase()&&void this.init(t)};o.prototype.version="1.2.0",o.prototype.init=function(t){var e=b(this.selectElement);if(e.data("selectBox-control"))return!1;var s,o=b('<a class="selectBox" />'),a=e.attr("multiple")||1<parseInt(e.attr("size")),n=t||{},l=parseInt(e.prop("tabindex"))||0,i=this;o.width(e.outerWidth()).addClass(e.attr("class")).attr("title",e.attr("title")||"").attr("tabindex",l).css("display","inline-block").bind("focus.selectBox",function(){this!==document.activeElement&&document.body!==document.activeElement&&b(document.activeElement).blur(),o.hasClass("selectBox-active")||(o.addClass("selectBox-active"),e.trigger("focus"))}).bind("blur.selectBox",function(){o.hasClass("selectBox-active")&&(o.removeClass("selectBox-active"),e.trigger("blur"))}),b(window).data("selectBox-bindings")||b(window).data("selectBox-bindings",!0).bind("scroll.selectBox",n.hideOnWindowScroll?this.hideMenus:b.noop).bind("resize.selectBox",this.hideMenus),e.attr("disabled")&&o.addClass("selectBox-disabled"),e.bind("click.selectBox",function(e){o.focus(),e.preventDefault()}),a?(t=this.getOptions("inline"),o.append(t).data("selectBox-options",t).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",function(e){i.handleKeyDown(e)}).bind("keypress.selectBox",function(e){i.handleKeyPress(e)}).bind("mousedown.selectBox",function(e){1!==e.which||(b(e.target).is("A.selectBox-inline")&&e.preventDefault(),o.hasClass("selectBox-focus"))||o.focus()}).insertAfter(e),e[0].style.height||(l=e.attr("size")?parseInt(e.attr("size")):5,(a=o.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body")).find(".selectBox-options").html("<li><a> </a></li>"),s=parseInt(a.find(".selectBox-options A:first").html("&nbsp;").outerHeight()),a.remove(),o.height(s*l))):(a=b('<span class="selectBox-label" />'),s=b('<span class="selectBox-arrow" />'),a.attr("class",this.getLabelClass()).html(this.getLabelHtml()),(t=this.getOptions("dropdown")).appendTo("BODY"),o.data("selectBox-options",t).addClass("selectBox-dropdown").append(a).append(s).bind("mousedown.selectBox",function(e){1===e.which&&(o.hasClass("selectBox-menuShowing")?i.hideMenus():(e.stopPropagation(),t.data("selectBox-down-at-x",e.screenX).data("selectBox-down-at-y",e.screenY),i.showMenu()))}).bind("keydown.selectBox",function(e){i.handleKeyDown(e)}).bind("keypress.selectBox",function(e){i.handleKeyPress(e)}).bind("open.selectBox",function(e,t){t&&!0===t._selectBox||i.showMenu()}).bind("close.selectBox",function(e,t){t&&!0===t._selectBox||i.hideMenus()}).insertAfter(e),l=o.width()-s.outerWidth()-(parseInt(a.css("paddingLeft"))||0)-(parseInt(a.css("paddingRight"))||0),a.width(l)),this.disableSelection(o),e.addClass("selectBox").data("selectBox-control",o).data("selectBox-settings",n).hide()},o.prototype.getOptions=function(e){var t=b(this.selectElement),s=this,o=function(e,t){return e.children("OPTION, OPTGROUP").each(function(){var e;b(this).is("OPTION")?0<b(this).length?s.generateOptions(b(this),t):t.append("<li> </li>"):((e=b('<li class="selectBox-optgroup" />')).text(b(this).attr("label")),t.append(e),t=o(b(this),t))}),t};switch(e){case"inline":return a=b('<ul class="selectBox-options" />'),(a=o(t,a)).find("A").bind("mouseover.selectBox",function(e){s.addHover(b(this).parent())}).bind("mouseout.selectBox",function(e){s.removeHover(b(this).parent())}).bind("mousedown.selectBox",function(e){1!==e.which||(e.preventDefault(),t.selectBox("control").hasClass("selectBox-active"))||t.selectBox("control").focus()}).bind("mouseup.selectBox",function(e){1===e.which&&(s.hideMenus(),s.selectOption(b(this).parent(),e))}),this.disableSelection(a),a;case"dropdown":var a=b('<ul class="selectBox-dropdown-menu selectBox-options" />');if((a=o(t,a)).data("selectBox-select",t).css("display","none").appendTo("BODY").find("A").bind("mousedown.selectBox",function(e){1===e.which&&(e.preventDefault(),e.screenX===a.data("selectBox-down-at-x"))&&e.screenY===a.data("selectBox-down-at-y")&&(a.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),/android/i.test(navigator.userAgent.toLowerCase())&&/chrome/i.test(navigator.userAgent.toLowerCase())&&s.selectOption(b(this).parent()),s.hideMenus())}).bind("mouseup.selectBox",function(e){1!==e.which||e.screenX===a.data("selectBox-down-at-x")&&e.screenY===a.data("selectBox-down-at-y")||(a.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),s.selectOption(b(this).parent()),s.hideMenus())}).bind("mouseover.selectBox",function(e){s.addHover(b(this).parent())}).bind("mouseout.selectBox",function(e){s.removeHover(b(this).parent())}),""!==(n=t.attr("class")||""))for(var n=n.split(" "),l=0;l<n.length;l++)a.addClass(n[l]+"-selectBox-dropdown-menu");return this.disableSelection(a),a}},o.prototype.getLabelClass=function(){return("selectBox-label "+(b(this.selectElement).find("OPTION:selected").attr("class")||"")).replace(/\s+$/,"")},o.prototype.getLabelHtml=function(){var e=b(this.selectElement).find("OPTION:selected"),e=e.data("icon")?'<i class="fa fa-'+e.data("icon")+' fa-fw fa-lg"></i> '+e.text():e.text();return e||" "},o.prototype.setLabel=function(){var e=b(this.selectElement).data("selectBox-control");e&&e.find(".selectBox-label").attr("class",this.getLabelClass()).html(this.getLabelHtml())},o.prototype.destroy=function(){var e=b(this.selectElement),t=e.data("selectBox-control");t&&(t.data("selectBox-options").remove(),t.remove(),e.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show())},o.prototype.refresh=function(){var e,t=b(this.selectElement).data("selectBox-control"),s=t.hasClass("selectBox-dropdown")?"dropdown":"inline";switch(t.data("selectBox-options").remove(),e=this.getOptions(s),t.data("selectBox-options",e),s){case"inline":t.append(e);break;case"dropdown":this.setLabel(),b("BODY").append(e)}"dropdown"==s&&t.hasClass("selectBox-menuShowing")&&this.showMenu()},o.prototype.showMenu=function(){var t=this,e=b(this.selectElement),s=e.data("selectBox-control"),o=e.data("selectBox-settings"),a=s.data("selectBox-options");if(s.hasClass("selectBox-disabled"))return!1;this.hideMenus();var n,l=parseInt(s.css("borderBottomWidth"))||0,i=parseInt(s.css("borderTopWidth"))||0,c=s.offset(),r=o.topPositionCorrelation||0,d=o.bottomPositionCorrelation||0,h=a.outerHeight(),p=s.outerHeight(),u=parseInt(a.css("max-height")),x=b(window).scrollTop(),x=c.top-x,f=b(window).height()-(x+p),B=f<x&&(null==o.keepInViewport||o.keepInViewport),m=s.innerWidth()>=a.innerWidth()?s.innerWidth()+"px":"auto",h=B?c.top-h+i+r:c.top+p-l-d;if(x<u&&f<u&&(B?(a.css({"max-height":u-(n=u-(x-5))+"px"}),h+=n):a.css({"max-height":u-(n=u-(f-5))+"px"})),a.data("posTop",B),a.width(m).css({top:h,left:s.offset().left}).addClass("selectBox-options selectBox-options-"+(B?"top":"bottom")),o.styleClass&&a.addClass(o.styleClass),e.triggerHandler("beforeopen"))return!1;function g(){e.triggerHandler("open",{_selectBox:!0})}switch(o.menuTransition){case"fade":a.fadeIn(o.menuSpeed,g);break;case"slide":a.slideDown(o.menuSpeed,g);break;default:a.show(o.menuSpeed,g)}o.menuSpeed||g();i=a.find(".selectBox-selected:first");this.keepOptionInView(i,!0),this.addHover(i),s.addClass("selectBox-menuShowing selectBox-menuShowing-"+(B?"top":"bottom")),b(document).bind("mousedown.selectBox",function(e){1!==e.which||b(e.target).parents().andSelf().hasClass("selectBox-options")||t.hideMenus()})},o.prototype.hideMenus=function(){0!==b(".selectBox-dropdown-menu:visible").length&&(b(document).unbind("mousedown.selectBox"),b(".selectBox-dropdown-menu").each(function(){var e=b(this),t=e.data("selectBox-select"),s=t.data("selectBox-control"),o=t.data("selectBox-settings"),a=e.data("posTop");if(t.triggerHandler("beforeclose"))return!1;function n(){t.triggerHandler("close",{_selectBox:!0})}if(o){switch(o.menuTransition){case"fade":e.fadeOut(o.menuSpeed,n);break;case"slide":e.slideUp(o.menuSpeed,n);break;default:e.hide(o.menuSpeed,n)}o.menuSpeed||n(),s.removeClass("selectBox-menuShowing selectBox-menuShowing-"+(a?"top":"bottom"))}else b(this).hide(),b(this).triggerHandler("close",{_selectBox:!0}),b(this).removeClass("selectBox-menuShowing selectBox-menuShowing-"+(a?"top":"bottom"));e.css("max-height",""),e.removeClass("selectBox-options-"+(a?"top":"bottom")),e.data("posTop",!1)}))},o.prototype.selectOption=function(e,t){var s,o=b(this.selectElement),a=(e=b(e),o.data("selectBox-control"));o.data("selectBox-settings");if(a.hasClass("selectBox-disabled"))return!1;if(0===e.length||e.hasClass("selectBox-disabled"))return!1;o.attr("multiple")?t.shiftKey&&a.data("selectBox-last-selected")?(e.toggleClass("selectBox-selected"),s=(s=e.index()>a.data("selectBox-last-selected").index()?e.siblings().slice(a.data("selectBox-last-selected").index(),e.index()):e.siblings().slice(e.index(),a.data("selectBox-last-selected").index())).not(".selectBox-optgroup, .selectBox-disabled"),e.hasClass("selectBox-selected")?s.addClass("selectBox-selected"):s.removeClass("selectBox-selected")):this.isMac&&t.metaKey||!this.isMac&&t.ctrlKey?e.toggleClass("selectBox-selected"):(e.siblings().removeClass("selectBox-selected"),e.addClass("selectBox-selected")):(e.siblings().removeClass("selectBox-selected"),e.addClass("selectBox-selected")),a.hasClass("selectBox-dropdown")&&a.find(".selectBox-label").html(e.html());var n=0,l=[];return o.attr("multiple")?a.find(".selectBox-selected A").each(function(){l[n++]=b(this).attr("rel")}):l=e.find("A").attr("rel"),a.data("selectBox-last-selected",e),o.val()!==l&&(o.val(l),this.setLabel(),o.trigger("change")),!0},o.prototype.addHover=function(e){e=b(e),b(this.selectElement).data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover"),e.addClass("selectBox-hover")},o.prototype.getSelectElement=function(){return this.selectElement},o.prototype.removeHover=function(e){e=b(e),b(this.selectElement).data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover")},o.prototype.keepOptionInView=function(e,t){var s,o,a;e&&0!==e.length&&(o=(s=b(this.selectElement).data("selectBox-control")).data("selectBox-options"),s=s.hasClass("selectBox-dropdown")?o:o.parent(),o=parseInt(e.offset().top-s.position().top),a=parseInt(o+e.outerHeight()),t?s.scrollTop(e.offset().top-s.offset().top+s.scrollTop()-s.height()/2):(o<0&&s.scrollTop(e.offset().top-s.offset().top+s.scrollTop()),a>s.height()&&s.scrollTop(e.offset().top+e.outerHeight()-s.offset().top+s.scrollTop()-s.height())))},o.prototype.handleKeyDown=function(e){var t=b(this.selectElement),s=t.data("selectBox-control"),o=s.data("selectBox-options"),a=t.data("selectBox-settings"),n=0,l=0;if(!s.hasClass("selectBox-disabled"))switch(e.keyCode){case 8:e.preventDefault(),this.typeSearch="";break;case 9:case 27:this.hideMenus(),this.removeHover();break;case 13:s.hasClass("selectBox-menuShowing")?(this.selectOption(o.find("LI.selectBox-hover:first"),e),s.hasClass("selectBox-dropdown")&&this.hideMenus()):this.showMenu();break;case 38:case 37:if(e.preventDefault(),s.hasClass("selectBox-menuShowing")){for(var i=o.find(".selectBox-hover").prev("LI"),n=o.find("LI:not(.selectBox-optgroup)").length,l=0;(0===i.length||i.hasClass("selectBox-disabled")||i.hasClass("selectBox-optgroup"))&&(0===(i=i.prev("LI")).length&&(i=a.loopOptions?o.find("LI:last"):o.find("LI:first")),!(++l>=n)););this.addHover(i),this.selectOption(i,e),this.keepOptionInView(i)}else this.showMenu();break;case 40:case 39:if(e.preventDefault(),s.hasClass("selectBox-menuShowing")){var c=o.find(".selectBox-hover").next("LI");for(n=o.find("LI:not(.selectBox-optgroup)").length,l=0;(0===c.length||c.hasClass("selectBox-disabled")||c.hasClass("selectBox-optgroup"))&&(0===(c=c.next("LI")).length&&(c=a.loopOptions?o.find("LI:first"):o.find("LI:last")),!(++l>=n)););this.addHover(c),this.selectOption(c,e),this.keepOptionInView(c)}else this.showMenu()}},o.prototype.handleKeyPress=function(e){var t=b(this.selectElement).data("selectBox-control"),s=t.data("selectBox-options"),o=this;if(!t.hasClass("selectBox-disabled"))switch(e.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:t.hasClass("selectBox-menuShowing")||this.showMenu(),e.preventDefault(),clearTimeout(this.typeTimer),this.typeSearch+=String.fromCharCode(e.charCode||e.keyCode),s.find("A").each(function(){if(b(this).text().substr(0,o.typeSearch.length).toLowerCase()===o.typeSearch.toLowerCase())return o.addHover(b(this).parent()),o.selectOption(b(this).parent(),e),o.keepOptionInView(b(this).parent()),!1}),this.typeTimer=setTimeout(function(){o.typeSearch=""},1e3)}},o.prototype.enable=function(){var e=b(this.selectElement),e=(e.prop("disabled",!1),e.data("selectBox-control"));e&&e.removeClass("selectBox-disabled")},o.prototype.disable=function(){var e=b(this.selectElement),e=(e.prop("disabled",!0),e.data("selectBox-control"));e&&e.addClass("selectBox-disabled")},o.prototype.setValue=function(t){var e,s=b(this.selectElement),o=(s.val(t),null===(t=s.val())&&(t=s.children().first().val(),s.val(t)),s.data("selectBox-control"));o&&(e=s.data("selectBox-settings"),o=o.data("selectBox-options"),this.setLabel(),o.find(".selectBox-selected").removeClass("selectBox-selected"),o.find("A").each(function(){if("object"==typeof t)for(var e=0;e<t.length;e++)b(this).attr("rel")==t[e]&&b(this).parent().addClass("selectBox-selected");else b(this).attr("rel")==t&&b(this).parent().addClass("selectBox-selected")}),e.change)&&e.change.call(s)},o.prototype.disableSelection=function(e){b(e).css("MozUserSelect","none").bind("selectstart",function(e){e.preventDefault()})},o.prototype.generateOptions=function(e,t){var s=b("<li />"),o=b("<a />");s.addClass(e.attr("class")),s.data(e.data()),e.data("icon")?o.attr("rel",e.val()).html('<i class="fa fa-'+e.data("icon")+' fa-fw fa-lg"></i> '+e.text()):o.attr("rel",e.val()).text(e.text()),s.append(o),e.attr("disabled")&&s.addClass("selectBox-disabled"),e.attr("selected")&&s.addClass("selectBox-selected"),t.append(s)},b.extend(b.fn,{setOptions:function(e){var t=b(this),s=t.data("selectBox-control");switch(typeof e){case"string":t.html(e);break;case"object":for(var o in t.html(""),e)if(null!==e[o])if("object"==typeof e[o]){var a,n=b('<optgroup label="'+o+'" />');for(a in e[o])n.append('<option value="'+a+'">'+e[o][a]+"</option>");t.append(n)}else{var l=b('<option value="'+o+'">'+e[o]+"</option>");t.append(l)}}s&&b(this).selectBox("refresh")},selectBox:function(s,e){var t;switch(s){case"control":return b(this).data("selectBox-control");case"settings":if(!e)return b(this).data("selectBox-settings");b(this).each(function(){b(this).data("selectBox-settings",b.extend(!0,b(this).data("selectBox-settings"),e))});break;case"options":if(void 0===e)return b(this).data("selectBox-control").data("selectBox-options");b(this).each(function(){b(this).setOptions(e)});break;case"value":if(void 0===e)return b(this).val();b(this).each(function(){(t=b(this).data("selectBox"))&&t.setValue(e)});break;case"refresh":b(this).each(function(){(t=b(this).data("selectBox"))&&t.refresh()});break;case"enable":b(this).each(function(){(t=b(this).data("selectBox"))&&t.enable(this)});break;case"disable":b(this).each(function(){(t=b(this).data("selectBox"))&&t.disable()});break;case"destroy":b(this).each(function(){(t=b(this).data("selectBox"))&&(t.destroy(),b(this).data("selectBox",null))});break;case"instance":return b(this).data("selectBox");default:b(this).each(function(e,t){b(t).data("selectBox")||b(t).data("selectBox",new o(t,s))})}return b(this)}})}(jQuery),jQuery(function(e){e("select").selectBox({keepInViewport:!1,menuSpeed:"slow",mobile:!0,hideOnWindowScroll:!0}),e(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr("style")}),jQuery(function(t){const e=t(".header-main");window.onscroll=function(){4<=window.scrollY?(e.addClass("sticky-header"),e.removeClass("black-header")):(e.removeClass("sticky-header"),e.addClass("black-header"))},t(".footer-list").on("click",function(){t(this).toggleClass("open"),t(this).siblings(".footer-list").removeClass("open"),t(this).find(".footer-links").slideToggle(900),t(this).siblings(".footer-list").find(".footer-links").slideUp(900)}),t(".accordion-item").on("click",function(){t(this).toggleClass("open"),t(this).siblings(".accordion-item").removeClass("open"),t(this).find(".accordion-content").slideToggle(900),t(this).siblings(".accordion-item").find(".accordion-content").slideUp(900)}),t(".humburger-btn").on("click",function(e){e.preventDefault(),t(this).toggleClass("active"),t(".header-right").toggleClass("open")})});