(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./polyfill.js")):"function"==typeof define&&define.amd?define(["./polyfill.js"],t):(e=e||self).EventHandler=t(e.Polyfill)})(this,function(f){"use strict";var e,d=(e=window.jQuery)&&!document.body.hasAttribute("data-no-jquery")?e:null,b=/[^.]*(?=\..*)\.|.*/,p=/\..*/,h=/::\d+$/,n={},r=1,a={mouseenter:"mouseover",mouseleave:"mouseout"},g=["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"];function _(e,t){return t&&t+"::"+r++||e.uidEvent||r++}function w(e){var t=_(e);return e.uidEvent=t,n[t]=n[t]||{},n[t]}function O(e,t,n){void 0===n&&(n=null);for(var r=Object.keys(e),o=0,i=r.length;o<i;o++){var s=e[r[o]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function j(e,t,n){var r="string"==typeof t,o=r?n:t,i=e.replace(p,""),s=a[i];return s&&(i=s),-1<g.indexOf(i)||(i=e),[r,o,i]}function o(e,t,n,r,o){var i,s,a,l,c,u,f,d,p,h,g,m,y,v;"string"==typeof t&&e&&(n||(n=r,r=null),s=(i=j(t,n,r))[0],a=i[1],l=i[2],(f=O(u=(c=w(e))[l]||(c[l]={}),a,s?n:null))?f.oneOff=f.oneOff&&o:(d=_(a,t.replace(b,"")),(p=s?(m=e,y=n,v=r,function e(t){for(var n=m.querySelectorAll(y),r=t.target;r&&r!==this;r=r.parentNode)for(var o=n.length;o--;)if(n[o]===r)return e.oneOff&&E.off(m,t.type,v),v.apply(r,[t]);return null}):(h=e,g=n,function e(t){return e.oneOff&&E.off(h,t.type,g),g.apply(h,[t])})).delegationSelector=s?n:null,p.originalHandler=a,p.oneOff=o,u[p.uidEvent=d]=p,e.addEventListener(l,p,s)))}function m(e,t,n,r,o){var i=O(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}var E={on:function(e,t,n,r){o(e,t,n,r,!1)},one:function(e,t,n,r){o(e,t,n,r,!0)},off:function(a,l,e,t){if("string"==typeof l&&a){var n=j(l,e,t),r=n[0],o=n[1],i=n[2],s=i!==l,c=w(a),u="."===l.charAt(0);if(void 0===o){u&&Object.keys(c).forEach(function(e){var n=a,r=c,o=e,i=l.slice(1),s=r[o]||{};Object.keys(s).forEach(function(e){var t;-1<e.indexOf(i)&&m(n,r,o,(t=s[e]).originalHandler,t.delegationSelector)})});var f=c[i]||{};Object.keys(f).forEach(function(e){var t,n=e.replace(h,"");(!s||-1<l.indexOf(n))&&m(a,c,i,(t=f[e]).originalHandler,t.delegationSelector)})}else{if(!c||!c[i])return;m(a,c,i,o,r?e:null)}}},trigger:function(e,t,n){if("string"!=typeof t||!e)return null;var r,o=t.replace(p,""),i=t!==o,s=-1<g.indexOf(o),a=!0,l=!0,c=!1,u=null;return i&&d&&(r=d.Event(t,n),d(e).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented()),s?(u=document.createEvent("HTMLEvents")).initEvent(o,a,!0):u=new CustomEvent(t,{bubbles:a,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(function(e){Object.defineProperty(u,e,{get:function(){return n[e]}})}),c&&(u.preventDefault(),f.defaultPreventedPreservedOnDispatch||Object.defineProperty(u,"defaultPrevented",{get:function(){return!0}})),l&&e.dispatchEvent(u),u.defaultPrevented&&void 0!==r&&r.preventDefault(),u}};return E}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Manipulator=t()}(this,function(){"use strict";function n(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function r(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function o(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}return{setDataAttribute:function(e,t,n){e.setAttribute("data-"+o(t),n)},removeDataAttribute:function(e,t){e.removeAttribute("data-"+o(t))},getDataAttributes:function(e){if(!e)return{};var t=function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach(function(e){var t,n=o,r=i[t=e];t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}({},e.dataset);return Object.keys(t).forEach(function(e){t[e]=r(t[e])}),t},getDataAttribute:function(e,t){return r(e.getAttribute("data-"+o(t)))},offset:function(e){var t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position:function(e){return{top:e.offsetTop,left:e.offsetLeft}},toggleClass:function(e,t){e&&(e.classList.contains(t)?e.classList.remove(t):e.classList.add(t))}}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Polyfill={})}(this,function(n){"use strict";n.find=Element.prototype.querySelectorAll,n.findOne=Element.prototype.querySelector;var e,t,r=(e=new CustomEvent("Bootstrap",{cancelable:!0}),(t=document.createElement("div")).addEventListener("Bootstrap",function(){return null}),e.preventDefault(),t.dispatchEvent(e),e.defaultPrevented),o=/:scope\b/;!function(){var e=document.createElement("div");try{e.querySelectorAll(":scope *")}catch(e){return}return 1}()&&(n.find=function(e){if(!o.test(e))return this.querySelectorAll(e);var t=Boolean(this.id);t||(this.id=function(e){for(;e+=Math.floor(1e6*Math.random()),document.getElementById(e););return e}("scope"));var n=null;try{e=e.replace(o,"#"+this.id),n=this.querySelectorAll(e)}finally{t||this.removeAttribute("id")}return n},n.findOne=function(e){if(!o.test(e))return this.querySelector(e);var t=n.find.call(this,e);return void 0!==t[0]?t[0]:null}),n.defaultPreventedPreservedOnDispatch=r,Object.defineProperty(n,"__esModule",{value:!0})}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./polyfill.js")):"function"==typeof define&&define.amd?define(["./polyfill.js"],t):(e=e||self).SelectorEngine=t(e.Polyfill)}(this,function(r){"use strict";return{matches:function(e,t){return e.matches(t)},find:function(e,t){var n;return void 0===t&&(t=document.documentElement),(n=[]).concat.apply(n,r.find.call(t,e))},findOne:function(e,t){return void 0===t&&(t=document.documentElement),r.findOne.call(t,e)},children:function(e,t){var n;return(n=[]).concat.apply(n,e.children).filter(function(e){return e.matches(t)})},parents:function(e,t){for(var n=[],r=e.parentNode;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)this.matches(r,t)&&n.push(r),r=r.parentNode;return n},prev:function(e,t){for(var n=e.previousElementSibling;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next:function(e,t){for(var n=e.nextElementSibling;n;){if(this.matches(n,t))return[n];n=n.nextElementSibling}return[]}}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./dom/data.js"),require("./dom/event-handler.js"),require("./dom/manipulator.js"),require("./dom/selector-engine.js")):"function"==typeof define&&define.amd?define(["./dom/data.js","./dom/event-handler.js","./dom/manipulator.js","./dom/selector-engine.js"],t):(e=e||self).Collapse=t(e.Data,e.EventHandler,e.Manipulator,e.SelectorEngine)}(this,function(l,c,o,u){"use strict";function n(e){var t,n=e.getAttribute("data-target");return n&&"#"!==n||(n=(t=e.getAttribute("href"))&&"#"!==t?t.trim():null),n}function f(e){var t=n(e);return t&&document.querySelector(t)?t:null}function a(e){var t=n(e);return t?document.querySelector(t):null}function d(e){if(!e)return 0;var t=window.getComputedStyle(e),n=t.transitionDuration,r=t.transitionDelay,o=parseFloat(n),i=parseFloat(r);return o||i?(n=n.split(",")[0],r=r.split(",")[0],1e3*(parseFloat(n)+parseFloat(r))):0}function p(e){return(e[0]||e).nodeType}function h(t,e){var n=!1,r=e+5;t.addEventListener(g,function e(){n=!0,t.removeEventListener(g,e)}),setTimeout(function(){n||t.dispatchEvent(new Event(g))},r)}l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u;var g="transitionend";function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function m(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach(function(e){var t,n=o,r=i[t=e];t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}var e,r="collapse",y="bs.collapse",v={toggle:!0,parent:""},b={toggle:"boolean",parent:"(string|element)"},_='[data-toggle="collapse"]',i=((e=w.prototype).toggle=function(){this._element.classList.contains("show")?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!this._element.classList.contains("show")){this._parent&&0===(e=u.find(".show, .collapsing",this._parent).filter(function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains("collapse")})).length&&(e=null);var r,o,i,s=u.findOne(this._selector);if(e){var a=e.filter(function(e){return s!==e});if((t=a[0]?l.getData(a[0],y):null)&&t._isTransitioning)return}c.trigger(this._element,"show.bs.collapse").defaultPrevented||(e&&e.forEach(function(e){s!==e&&w.collapseInterface(e,"hide"),t||l.setData(e,y,null)}),r=this._getDimension(),this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[r]=0,this._triggerArray.length&&this._triggerArray.forEach(function(e){e.classList.remove("collapsed"),e.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0),o="scroll"+(r[0].toUpperCase()+r.slice(1)),i=d(this._element),c.one(this._element,g,function(){n._element.classList.remove("collapsing"),n._element.classList.add("collapse","show"),n._element.style[r]="",n.setTransitioning(!1),c.trigger(n._element,"shown.bs.collapse")}),h(this._element,i),this._element.style[r]=this._element[o]+"px")}},e.hide=function(){var e=this;if(!this._isTransitioning&&this._element.classList.contains("show")&&!c.trigger(this._element,"hide.bs.collapse").defaultPrevented){var t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",this._element.offsetHeight,this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var n=this._triggerArray.length;if(0<n)for(var r=0;r<n;r++){var o=this._triggerArray[r],i=a(o);i&&!i.classList.contains("show")&&(o.classList.add("collapsed"),o.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="";var s=d(this._element);c.one(this._element,g,function(){e.setTransitioning(!1),e._element.classList.remove("collapsing"),e._element.classList.add("collapse"),c.trigger(e._element,"hidden.bs.collapse")}),h(this._element,s)}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){l.removeData(this._element,y),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=m(m({},v),e)).toggle=Boolean(e.toggle),o=r,i=e,s=b,Object.keys(s).forEach(function(e){var t=s[e],n=i[e],r=n&&p(n)?"element":null==n?""+n:{}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(t).test(r))throw new Error(o.toUpperCase()+': Option "'+e+'" provided type "'+r+'" but expected type "'+t+'".')}),e;var o,i,s},e._getDimension=function(){return this._element.classList.contains("width")?"width":"height"},e._getParent=function(){var n=this,e=this._config.parent;p(e)?void 0===e.jquery&&void 0===e[0]||(e=e[0]):e=u.findOne(e);var t=_+'[data-parent="'+e+'"]';return u.find(t,e).forEach(function(e){var t=a(e);n._addAriaAndCollapsedClass(t,[e])}),e},e._addAriaAndCollapsedClass=function(e,t){var n;e&&(n=e.classList.contains("show"),t.length&&t.forEach(function(e){n?e.classList.remove("collapsed"):e.classList.add("collapsed"),e.setAttribute("aria-expanded",n)}))},w.collapseInterface=function(e,t){var n=l.getData(e,y),r=m(m(m({},v),o.getDataAttributes(e)),"object"==typeof t&&t?t:{});if(!n&&r.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(r.toggle=!1),n=n||new w(e,r),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}},w.jQueryInterface=function(e){return this.each(function(){w.collapseInterface(this,e)})},w.getInstance=function(e){return l.getData(e,y)},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(w,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return v}}]),w);function w(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=u.find(_+'[href="#'+t.id+'"],'+_+'[data-target="#'+t.id+'"]');for(var n=u.find(_),r=0,o=n.length;r<o;r++){var i=n[r],s=f(i),a=u.find(s).filter(function(e){return e===t});null!==s&&a.length&&(this._selector=s,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle(),l.setData(t,y,this)}c.on(document,"click.bs.collapse.data-api",_,function(e){"A"===e.target.tagName&&e.preventDefault();var r=o.getDataAttributes(this),t=f(this);u.find(t).forEach(function(e){var t=l.getData(e,y),n=t?(null===t._parent&&"string"==typeof r.parent&&(t._config.parent=r.parent,t._parent=t._getParent()),"toggle"):r;i.collapseInterface(e,n)})});var s,O,j=(s=window.jQuery)&&!document.body.hasAttribute("data-no-jquery")?s:null;return j&&(O=j.fn[r],j.fn[r]=i.jQueryInterface,j.fn[r].Constructor=i,j.fn[r].noConflict=function(){return j.fn[r]=O,i.jQueryInterface}),i}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./dom/data.js"),require("./dom/event-handler.js"),require("./dom/manipulator.js"),require("popper.js"),require("./dom/selector-engine.js")):"function"==typeof define&&define.amd?define(["./dom/data.js","./dom/event-handler.js","./dom/manipulator.js","popper.js","./dom/selector-engine.js"],t):(e=e||self).Dropdown=t(e.Data,e.EventHandler,e.Manipulator,e.Popper,e.SelectorEngine)}(this,function(c,u,a,o,f){"use strict";function l(e){return(e[0]||e).nodeType}function i(e){if(!e)return!1;if(e.style&&e.parentNode&&e.parentNode.style){var t=getComputedStyle(e),n=getComputedStyle(e.parentNode);return"none"!==t.display&&"none"!==n.display&&"hidden"!==t.visibility}return!1}function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function n(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach(function(e){var t,n=o,r=i[t=e];t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f;var e,r="dropdown",d="bs.dropdown",s="."+d,p=new RegExp("ArrowUp|ArrowDown|Escape"),h="hide"+s,g="hidden"+s,m="click"+s+".data-api",y="keydown"+s+".data-api",v={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},b={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},_=((e=w.prototype).toggle=function(){var e;this._element.disabled||this._element.classList.contains("disabled")||(e=this._element.classList.contains("show"),w.clearMenus(),e||this.show())},e.show=function(){if(!(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))){var e,t=w.getParentFromElement(this._element),n={relatedTarget:this._element};if(!u.trigger(this._element,"show.bs.dropdown",n).defaultPrevented){if(!this._inNavbar){if(void 0===o)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:l(this._config.reference)&&(r=this._config.reference,void 0!==this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&t.classList.add("position-static"),this._popper=new o(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&(e=[]).concat.apply(e,document.body.children).forEach(function(e){return u.on(e,"mouseover",null,function(){})}),this._element.focus(),this._element.setAttribute("aria-expanded",!0),a.toggleClass(this._menu,"show"),a.toggleClass(this._element,"show"),u.trigger(t,"shown.bs.dropdown",n)}}},e.hide=function(){var e,t;this._element.disabled||this._element.classList.contains("disabled")||!this._menu.classList.contains("show")||(e=w.getParentFromElement(this._element),t={relatedTarget:this._element},u.trigger(e,h,t).defaultPrevented||(this._popper&&this._popper.destroy(),a.toggleClass(this._menu,"show"),a.toggleClass(this._element,"show"),u.trigger(e,g,t)))},e.dispose=function(){c.removeData(this._element,d),u.off(this._element,s),this._element=null,this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;u.on(this._element,"click.bs.dropdown",function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=n(n(n({},this.constructor.Default),a.getDataAttributes(this._element)),e),o=r,i=e,s=this.constructor.DefaultType,Object.keys(s).forEach(function(e){var t=s[e],n=i[e],r=n&&l(n)?"element":null==n?""+n:{}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(t).test(r))throw new Error(o.toUpperCase()+': Option "'+e+'" provided type "'+r+'" but expected type "'+t+'".')}),e;var o,i,s},e._getMenuElement=function(){return f.next(this._element,".dropdown-menu")[0]},e._getPlacement=function(){var e=this._element.parentNode,t="bottom-start";return e.classList.contains("dropup")?(t="top-start",this._menu.classList.contains("dropdown-menu-right")&&(t="top-end")):e.classList.contains("dropright")?t="right-start":e.classList.contains("dropleft")?t="left-start":this._menu.classList.contains("dropdown-menu-right")&&(t="bottom-end"),t},e._detectNavbar=function(){return Boolean(this._element.closest(".navbar"))},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=n(n({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),n(n({},e),this._config.popperConfig)},w.dropdownInterface=function(e,t){var n=(n=c.getData(e,d))||new w(e,"object"==typeof t?t:null);if("string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}},w.jQueryInterface=function(e){return this.each(function(){w.dropdownInterface(this,e)})},w.clearMenus=function(e){if(!e||2!==e.button&&("keyup"!==e.type||"Tab"===e.key))for(var t=f.find('[data-toggle="dropdown"]'),n=0,r=t.length;n<r;n++){var o,i,s=w.getParentFromElement(t[n]),a=c.getData(t[n],d),l={relatedTarget:t[n]};e&&"click"===e.type&&(l.clickEvent=e),a&&(i=a._menu,t[n].classList.contains("show")&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&"Tab"===e.key)&&i.contains(e.target)||u.trigger(s,h,l).defaultPrevented)&&("ontouchstart"in document.documentElement&&(o=[]).concat.apply(o,document.body.children).forEach(function(e){return u.off(e,"mouseover",null,function(){})}),t[n].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),i.classList.remove("show"),t[n].classList.remove("show"),u.trigger(s,g,l)))}},w.getParentFromElement=function(e){return(r=(t=e).getAttribute("data-target"))&&"#"!==r||(r=(n=t.getAttribute("href"))&&"#"!==n?n.trim():null),(r?document.querySelector(r):null)||e.parentNode;var t,n,r},w.dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!("Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu"))):p.test(e.key))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!this.classList.contains("disabled"))){var t,n,r=w.getParentFromElement(this),o=this.classList.contains("show");if("Escape"===e.key)return(this.matches('[data-toggle="dropdown"]')?this:f.prev(this,'[data-toggle="dropdown"]')[0]).focus(),void w.clearMenus();o&&"Space"!==e.key?(t=f.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",r).filter(i)).length&&(n=t.indexOf(e.target),"ArrowUp"===e.key&&0<n&&n--,"ArrowDown"===e.key&&n<t.length-1&&n++,t[n=-1===n?0:n].focus()):w.clearMenus()}},w.getInstance=function(e){return c.getData(e,d)},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(w,[{key:"VERSION",get:function(){return"5.0.0-alpha1"}},{key:"Default",get:function(){return v}},{key:"DefaultType",get:function(){return b}}]),w);function w(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners(),c.setData(e,d,this)}u.on(document,y,'[data-toggle="dropdown"]',_.dataApiKeydownHandler),u.on(document,y,".dropdown-menu",_.dataApiKeydownHandler),u.on(document,m,_.clearMenus),u.on(document,"keyup.bs.dropdown.data-api",_.clearMenus),u.on(document,m,'[data-toggle="dropdown"]',function(e){e.preventDefault(),e.stopPropagation(),_.dropdownInterface(this,"toggle")}),u.on(document,m,".dropdown form",function(e){return e.stopPropagation()});var O,j,E=(O=window.jQuery)&&!document.body.hasAttribute("data-no-jquery")?O:null;return E&&(j=E.fn[r],E.fn[r]=_.jQueryInterface,E.fn[r].Constructor=_,E.fn[r].noConflict=function(){return E.fn[r]=j,_.jQueryInterface}),_}),got();