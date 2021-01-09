/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){'use strict';var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",i.parentNode.insertBefore(t,i),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
// IE8 `Array.prototype.indexOf()` polyfill
Array.prototype.indexOf||(Array.prototype.indexOf = function(item){for(var i=0;i<this.length;i++){if(this[i]===item){return i;}}return -1;});
window.MutationObserver||(window.MutationObserver = false);

(function() {
    'use strict';

    /*! lodash 3.1.1 (Custom Build) <https://lodash.com/> Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/> Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE> Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors Available under MIT license <https://lodash.com/license> */
    function now(){return new Date().getTime();}function debounce(i,e,t){function n(){T&&clearTimeout(T),f&&clearTimeout(f),s=0,f=T=p=void 0}function o(e,t){t&&clearTimeout(t),f=T=p=void 0,e&&(s=now(),l=i.apply(v,c),T||f||(c=v=void 0))}function a(){var i=e-(now()-m);0>=i||i>e?o(p,f):T=setTimeout(a,i)}function r(){o(y,T)}function u(){if(c=arguments,m=now(),v=this,p=y&&(T||!w),d===!1)var t=w&&!T;else{f||w||(s=m);var n=d-(m-s),o=0>=n||n>d;o?(f&&(f=clearTimeout(f)),s=m,l=i.apply(v,c)):f||(f=setTimeout(r,n))}return o&&T?T=clearTimeout(T):T||e===d||(T=setTimeout(a,e)),t&&(o=!0,l=i.apply(v,c)),!o||T||f||(c=v=void 0),l}var c,f,l,m,v,T,p,s=0,d=!1,y=!0;if("function"!=typeof i)throw new TypeError(FUNC_ERROR_TEXT);if(e=0>e?0:+e||0,t===!0){var w=!0;y=!1}else isObject(t)&&(w=!!t.leading,d="maxWait"in t&&nativeMax(+t.maxWait||0,e),y="trailing"in t?!!t.trailing:y);return u.cancel=n,u}function isObject(i){var e=typeof i;return!!i&&("object"==e||"function"==e)}

    var readyFired = false;
    var settings = {
        orientation: 'vertical',
        position: 2,
        template: "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Customer Alliance - Reviews<\/title>\n        <meta charset=\"UTF-8\">\n                <base href=\"https:\/\/widget.customer-alliance.com\" \/>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1,initial-scale=1\">\n        <style type=\"text\/css\">@font-face{font-family:Open Sans;font-style:normal;font-weight:300;src:url(\/build\/fonts\/open-sans-latin_latin-ext-300.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-300.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-300.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:italic;font-weight:300;src:url(\/build\/fonts\/open-sans-latin_latin-ext-300italic.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-300italic.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-300italic.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;src:url(\/build\/fonts\/open-sans-latin_latin-ext-regular.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-regular.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-regular.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:italic;font-weight:400;src:url(\/build\/fonts\/open-sans-latin_latin-ext-italic.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-italic.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-italic.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;src:url(\/build\/fonts\/open-sans-latin_latin-ext-600.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-600.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-600.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:italic;font-weight:600;src:url(\/build\/fonts\/open-sans-latin_latin-ext-600italic.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-600italic.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-600italic.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:700;src:url(\/build\/fonts\/open-sans-latin_latin-ext-700.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-700.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-700.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:italic;font-weight:700;src:url(\/build\/fonts\/open-sans-latin_latin-ext-700italic.woff2) format(\"woff2\"),url(\/build\/fonts\/open-sans-latin_latin-ext-700italic.woff) format(\"woff\"),url(\/build\/fonts\/open-sans-latin_latin-ext-700italic.ttf) format(\"truetype\")}p.big{margin-bottom:18px}.thin{font-weight:300}.semibold{font-weight:600}.bold{font-weight:900}*,:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:Open Sans,arial,sans-serif;font-size:13px;line-height:1.42857;color:#333;background-color:#f4f4f4}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#333}a,a:focus,a:hover{text-decoration:none}a:focus,a:hover{color:#4a4a4a}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:18px;margin-bottom:18px;border:0;border-top:1px solid #bfbfbf}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,Courier New,monospace}code{color:#c7254e;background-color:#f9f2f4;border-radius:4px}code,kbd{padding:2px 4px;font-size:90%}kbd{color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:8.5px;margin:0 0 9px;font-size:12px;line-height:1.42857;color:#4a4a4a;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.container:after,.container:before{display:table;content:\" \"}.container:after{clear:both}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.container-fluid:after,.container-fluid:before{display:table;content:\" \"}.container-fluid:after{clear:both}.row{margin-right:-15px;margin-left:-15px}.row:after,.row:before{display:table;content:\" \"}.row:after{clear:both}.row-no-gutters{margin-right:0;margin-left:0}.row-no-gutters [class*=col-]{padding-right:0;padding-left:0}.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-1{width:8.33333%}.col-xs-2{width:16.66667%}.col-xs-3{width:25%}.col-xs-4{width:33.33333%}.col-xs-5{width:41.66667%}.col-xs-6{width:50%}.col-xs-7{width:58.33333%}.col-xs-8{width:66.66667%}.col-xs-9{width:75%}.col-xs-10{width:83.33333%}.col-xs-11{width:91.66667%}.col-xs-12{width:100%}.col-xs-pull-0{right:auto}.col-xs-pull-1{right:8.33333%}.col-xs-pull-2{right:16.66667%}.col-xs-pull-3{right:25%}.col-xs-pull-4{right:33.33333%}.col-xs-pull-5{right:41.66667%}.col-xs-pull-6{right:50%}.col-xs-pull-7{right:58.33333%}.col-xs-pull-8{right:66.66667%}.col-xs-pull-9{right:75%}.col-xs-pull-10{right:83.33333%}.col-xs-pull-11{right:91.66667%}.col-xs-pull-12{right:100%}.col-xs-push-0{left:auto}.col-xs-push-1{left:8.33333%}.col-xs-push-2{left:16.66667%}.col-xs-push-3{left:25%}.col-xs-push-4{left:33.33333%}.col-xs-push-5{left:41.66667%}.col-xs-push-6{left:50%}.col-xs-push-7{left:58.33333%}.col-xs-push-8{left:66.66667%}.col-xs-push-9{left:75%}.col-xs-push-10{left:83.33333%}.col-xs-push-11{left:91.66667%}.col-xs-push-12{left:100%}.col-xs-offset-0{margin-left:0}.col-xs-offset-1{margin-left:8.33333%}.col-xs-offset-2{margin-left:16.66667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333%}.col-xs-offset-5{margin-left:41.66667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333%}.col-xs-offset-8{margin-left:66.66667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333%}.col-xs-offset-11{margin-left:91.66667%}.col-xs-offset-12{margin-left:100%}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-1{width:8.33333%}.col-sm-2{width:16.66667%}.col-sm-3{width:25%}.col-sm-4{width:33.33333%}.col-sm-5{width:41.66667%}.col-sm-6{width:50%}.col-sm-7{width:58.33333%}.col-sm-8{width:66.66667%}.col-sm-9{width:75%}.col-sm-10{width:83.33333%}.col-sm-11{width:91.66667%}.col-sm-12{width:100%}.col-sm-pull-0{right:auto}.col-sm-pull-1{right:8.33333%}.col-sm-pull-2{right:16.66667%}.col-sm-pull-3{right:25%}.col-sm-pull-4{right:33.33333%}.col-sm-pull-5{right:41.66667%}.col-sm-pull-6{right:50%}.col-sm-pull-7{right:58.33333%}.col-sm-pull-8{right:66.66667%}.col-sm-pull-9{right:75%}.col-sm-pull-10{right:83.33333%}.col-sm-pull-11{right:91.66667%}.col-sm-pull-12{right:100%}.col-sm-push-0{left:auto}.col-sm-push-1{left:8.33333%}.col-sm-push-2{left:16.66667%}.col-sm-push-3{left:25%}.col-sm-push-4{left:33.33333%}.col-sm-push-5{left:41.66667%}.col-sm-push-6{left:50%}.col-sm-push-7{left:58.33333%}.col-sm-push-8{left:66.66667%}.col-sm-push-9{left:75%}.col-sm-push-10{left:83.33333%}.col-sm-push-11{left:91.66667%}.col-sm-push-12{left:100%}.col-sm-offset-0{margin-left:0}.col-sm-offset-1{margin-left:8.33333%}.col-sm-offset-2{margin-left:16.66667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333%}.col-sm-offset-5{margin-left:41.66667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333%}.col-sm-offset-8{margin-left:66.66667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333%}.col-sm-offset-11{margin-left:91.66667%}.col-sm-offset-12{margin-left:100%}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-1{width:8.33333%}.col-md-2{width:16.66667%}.col-md-3{width:25%}.col-md-4{width:33.33333%}.col-md-5{width:41.66667%}.col-md-6{width:50%}.col-md-7{width:58.33333%}.col-md-8{width:66.66667%}.col-md-9{width:75%}.col-md-10{width:83.33333%}.col-md-11{width:91.66667%}.col-md-12{width:100%}.col-md-pull-0{right:auto}.col-md-pull-1{right:8.33333%}.col-md-pull-2{right:16.66667%}.col-md-pull-3{right:25%}.col-md-pull-4{right:33.33333%}.col-md-pull-5{right:41.66667%}.col-md-pull-6{right:50%}.col-md-pull-7{right:58.33333%}.col-md-pull-8{right:66.66667%}.col-md-pull-9{right:75%}.col-md-pull-10{right:83.33333%}.col-md-pull-11{right:91.66667%}.col-md-pull-12{right:100%}.col-md-push-0{left:auto}.col-md-push-1{left:8.33333%}.col-md-push-2{left:16.66667%}.col-md-push-3{left:25%}.col-md-push-4{left:33.33333%}.col-md-push-5{left:41.66667%}.col-md-push-6{left:50%}.col-md-push-7{left:58.33333%}.col-md-push-8{left:66.66667%}.col-md-push-9{left:75%}.col-md-push-10{left:83.33333%}.col-md-push-11{left:91.66667%}.col-md-push-12{left:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.33333%}.col-md-offset-2{margin-left:16.66667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333%}.col-md-offset-5{margin-left:41.66667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333%}.col-md-offset-8{margin-left:66.66667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333%}.col-md-offset-11{margin-left:91.66667%}.col-md-offset-12{margin-left:100%}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-1{width:8.33333%}.col-lg-2{width:16.66667%}.col-lg-3{width:25%}.col-lg-4{width:33.33333%}.col-lg-5{width:41.66667%}.col-lg-6{width:50%}.col-lg-7{width:58.33333%}.col-lg-8{width:66.66667%}.col-lg-9{width:75%}.col-lg-10{width:83.33333%}.col-lg-11{width:91.66667%}.col-lg-12{width:100%}.col-lg-pull-0{right:auto}.col-lg-pull-1{right:8.33333%}.col-lg-pull-2{right:16.66667%}.col-lg-pull-3{right:25%}.col-lg-pull-4{right:33.33333%}.col-lg-pull-5{right:41.66667%}.col-lg-pull-6{right:50%}.col-lg-pull-7{right:58.33333%}.col-lg-pull-8{right:66.66667%}.col-lg-pull-9{right:75%}.col-lg-pull-10{right:83.33333%}.col-lg-pull-11{right:91.66667%}.col-lg-pull-12{right:100%}.col-lg-push-0{left:auto}.col-lg-push-1{left:8.33333%}.col-lg-push-2{left:16.66667%}.col-lg-push-3{left:25%}.col-lg-push-4{left:33.33333%}.col-lg-push-5{left:41.66667%}.col-lg-push-6{left:50%}.col-lg-push-7{left:58.33333%}.col-lg-push-8{left:66.66667%}.col-lg-push-9{left:75%}.col-lg-push-10{left:83.33333%}.col-lg-push-11{left:91.66667%}.col-lg-push-12{left:100%}.col-lg-offset-0{margin-left:0}.col-lg-offset-1{margin-left:8.33333%}.col-lg-offset-2{margin-left:16.66667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333%}.col-lg-offset-5{margin-left:41.66667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333%}.col-lg-offset-8{margin-left:66.66667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333%}.col-lg-offset-11{margin-left:91.66667%}.col-lg-offset-12{margin-left:100%}}.clearfix:after,.clearfix:before{display:table;content:\" \"}.clearfix:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0\/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}*{margin:0;padding:0}a{color:#1e7dba}a:link,a:visited{text-decoration:none}a:active,a:focus,a:hover{outline:none;text-decoration:underline}.widget-chain .random-comment{font-size:13px;margin-bottom:15px}.widget-chain .col-rating{margin-bottom:10px}.widget-chain .body .col-text .number-of-portals{font-weight:400;font-style:normal}.widget-chain .body .col-text .rating-powered-by{position:relative;padding:0;margin-top:7px;margin-right:0}.widget-chain .small-version .container-buttons .btn{width:90%}.widget-chain #left-column .container-buttons{bottom:0;position:absolute;margin:0 -10px;width:100%;text-align:center}.widget-chain #left-column .container-buttons .btn{width:90%}.slider-container{border:1px solid #c9c9c9;border-radius:4px;position:relative;overflow:hidden;padding-left:35px}.slider-container a.control-next,.slider-container a.control-prev{position:absolute;top:38%;z-index:999;display:block;padding:10px 12px;text-decoration:none;cursor:pointer}.slider-container .hotel-name{font-size:15px;font-weight:600;line-height:1;word-wrap:break-word;overflow-wrap:break-word;padding:0 10px;text-align:left;width:100%}.slider-container a.control-prev{left:0}.slider-container a.control-next{right:0}.slider-container ul.parent-of-two li{width:195px}.slider-container ul{position:relative;margin:0;padding:0;list-style:none}.slider-container ul li{position:relative;display:block;float:left;width:130px;border-left:2px solid #c9c9c9;font-size:12px;margin-top:15px}.slider-container ul li .parameters{position:absolute;bottom:0;padding-left:10px}.slider-container ul li .parameters .rating-value{font-size:36px;font-weight:300;padding-left:0}.slider-container ul li a{text-decoration:underline}.slider-container.full{height:140px}.slider-container.full ul li{height:110px}.slider-container.only-reviews{height:100px}.slider-container.only-reviews a.control-next,.slider-container.only-reviews a.control-prev{top:33%}.slider-container.only-reviews ul li{height:70px}.slider-container.average-rating{height:120px}.slider-container.average-rating a.control-next,.slider-container.average-rating a.control-prev{top:30%}.slider-container.average-rating ul li{height:90px}.slider-container.titles{height:80px}.slider-container.titles a.control-next,.slider-container.titles a.control-prev{top:27%}.slider-container.titles ul li{height:50px}.text-center #slider .hotel-name{text-align:center}.text-center .parameters{text-align:center;padding-left:0;width:100%}.tooltip-fullscreen .slider-container{margin-top:10px}@media screen and (min-width:549px){.slider-container--has-three-or-less #slider-next,.slider-container--has-three-or-less #slider-prev{display:none}}.widget-tooltip{position:relative;z-index:99999}.widget-tooltip:after,.widget-tooltip:before{width:0;height:0;border:solid transparent;position:absolute;content:\" \"}.widget-tooltip.widget-tooltip-arrow-top{padding-top:35px}.widget-tooltip.widget-tooltip-arrow-top:before{border-width:0 15px 26px;border-color:transparent transparent #326794;top:10px}.widget-tooltip.widget-tooltip-arrow-right{padding-right:35px}.widget-tooltip.widget-tooltip-arrow-right:before{border-width:15px 0 15px 26px;border-color:transparent transparent transparent #737373;right:10px;margin-right:-1px}.widget-tooltip.widget-tooltip-arrow-right:after{border-width:15px 0 15px 26px;border-color:transparent transparent transparent #fbfbfb;right:10px}.widget-tooltip.widget-tooltip-arrow-left{padding-left:35px}.widget-tooltip.widget-tooltip-arrow-left:before{border-width:15px 26px 15px 0;border-color:transparent #737373 transparent transparent;left:10px;margin-left:-1px}.widget-tooltip.widget-tooltip-arrow-left:after{border-width:15px 26px 15px 0;border-color:transparent #fbfbfb transparent transparent;left:10px}.widget-tooltip.widget-tooltip-arrow-bottom{padding-bottom:35px}.widget-tooltip.widget-tooltip-arrow-bottom:before{border-width:26px 15px 0;border-color:#737373 transparent transparent;bottom:10px;margin-bottom:-1px}.widget-tooltip.widget-tooltip-arrow-bottom:after{border-width:26px 15px 0;border-color:#fbfbfb transparent transparent;bottom:10px}.widget-tooltip.widget-tooltip-arrow-h-center:after,.widget-tooltip.widget-tooltip-arrow-h-center:before{left:50%;margin-left:-16px}.widget-tooltip.widget-tooltip-arrow-h-left:after,.widget-tooltip.widget-tooltip-arrow-h-left:before{left:45px}.widget-tooltip.widget-tooltip-arrow-h-right:after,.widget-tooltip.widget-tooltip-arrow-h-right:before{right:45px}.widget-tooltip.widget-tooltip-arrow-v-top:after,.widget-tooltip.widget-tooltip-arrow-v-top:before{top:45px}.widget-tooltip.widget-tooltip-arrow-v-bottom:after,.widget-tooltip.widget-tooltip-arrow-v-bottom:before{bottom:45px}.widget-tooltip.widget-tooltip-arrow-v-center:after,.widget-tooltip.widget-tooltip-arrow-v-center:before{top:50%;margin-top:-16px}.widget-tooltip .header{line-height:28px;color:#fff;background-color:#326794;border-radius:6px 6px 0 0;padding:5px 16px;font-size:16px}.widget-tooltip .header img{padding-right:4px;padding-bottom:3px;vertical-align:middle}.widget-tooltip .header #tooltip-header-image{height:22px}.widget-tooltip .logo{background:transparent url(\"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA2IDEwIj48c3ltYm9sIGlkPSJjIiB2aWV3Qm94PSItMTgzLjEgLTg1LjQgMzY2LjEgMTcwLjkiPjxwYXRoIGZpbGw9IiMzNEEzOTkiIGQ9Ik0tMzYuMy01MC45bC0uOC44Yy00LjUtMS41LTEwLjItMS44LTE3LjMtMS44aC02My44Yy0yMi4xIDAtMjguMiAzLjUtMjguMiAyNS45djQ5LjljMCAyMC42IDUuNiAyNy45IDI4LjIgMjcuOWg4MS44bC0yNy41IDMzLjZoLTU2Yy00OS45IDAtNjMuMS0xNy4xLTYzLjEtNTkuOHYtNTMuMWMwLTQyLjcgMTMuMi01Ny45IDYzLjEtNTcuOWg2Ni44YzE3IDAgMjkuOSAxLjcgMzkuNiA1LjdsLTIyLjggMjguOHoiLz48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTM3LjcgODUuNGMtNTAuNCAwLTYyLjEtMTcuMS02Mi4xLTU5Ljh2LTUwLjFjMC02LjMtLjYtMTEuMS0xLjktMTQuOWwyNS4yLTMyLjcgMy41IDRjNyA5LjIgOS44IDIyLjUgOS44IDQwLjd2NTAuMmMwIDI0LjEgNS42IDI5LjIgMjYuNyAyOS4yaDYzLjhjMjIuMSAwIDI4LjQtNS4zIDI4LjQtMjcuN1YtMjcuNGMwLTMuMS0uMi01LjQtLjEtOC4yLTIuMy0xMi40LTEwLjItMTYuMi0yOC40LTE2LjJIMjQuNGwyNy41LTMzLjZoNTIuNmMyMC44IDAgMzUuOSAyLjYgNDUuOSA4LjkgNy45LTQuOCAxNy40LTcuNiAzMi42LTguNnYzNC44Yy05LjEgMi45LTEyLjIgMTAtMTIuMiAyNC43djUxLjRjMCA0Mi43LTE2LjQgNTkuOC02Ni40IDU5LjhIMzcuN3oiLz48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYSIgb3ZlcmZsb3c9InZpc2libGUiIGZpbGw9IiMwNzZCOTEiLz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMwNzZCOTEiIGQ9Ik0tMjYuMyA4NS40aDIwOS40Vi04NS40SC0yNi4zeiIvPjwvc3ltYm9sPjxnIGZpbGw9IiMxODQyNzUiPjxwYXRoIGQ9Ik0yMC4zIDIuNGMtMS40IDAtMi43IDEtMi43IDIuNnMxLjMgMi42IDIuNyAyLjZjLjcgMCAxLjMtLjEgMS43LS40bC0uMi43Yy0uNC4yLS45LjMtMS43LjNDMTguNiA4LjIgMTcgNyAxNyA1czEuNi0zLjIgMy4zLTMuMmMuOCAwIDEuNC4yIDEuOC40bC0uMS42Yy0uNC0uMi0xLS40LTEuNy0uNHpNMjUuNCA4LjJDMjQgOC4yIDIzIDcuMyAyMyA1Ljl2LTRoLjd2NGMwIDEuMS42IDEuNyAxLjggMS43IDEuMSAwIDEuOC0uNiAxLjgtMS43di00aC42djRjLS4xIDEuNC0xIDIuMy0yLjUgMi4zek0zMC42IDguMmMtLjcgMC0xLjMtLjItMS42LS41bC0uMi0uN2MuNS40IDEuMS43IDEuOS43LjggMCAxLjMtLjQgMS4zLTEuMSAwLS43LS40LTEtMS4zLTEuMy0xLjEtLjQtMS42LTEtMS42LTEuOHMuNi0xLjYgMS44LTEuNmMuNiAwIDEgLjIgMS4zLjRsLS4xLjVjLS4yLS4yLS43LS40LTEuMi0uNC0uOCAwLTEuMi41LTEuMiAxcy4zLjkgMS4xIDEuMmMxLjEuNCAxLjguOSAxLjggMS45IDAgMS0uOCAxLjctMiAxLjd6TTM1LjYgOC4xSDM1VjIuNWgtMi4xdi0uNmg0Ljl2LjZoLTIuMXY1LjZ6TTQxLjIgOC4yQzM5LjUgOC4yIDM4IDYuOSAzOCA1YzAtMS45IDEuNS0zLjIgMy4yLTMuMiAxLjcgMCAzLjIgMS4zIDMuMiAzLjIgMCAxLjktMS41IDMuMi0zLjIgMy4yem0wLTUuOGMtMS40IDAtMi42IDEtMi42IDIuNnMxLjIgMi42IDIuNiAyLjZjMS4zIDAgMi42LTEgMi42LTIuNi0uMS0xLjYtMS4zLTIuNi0yLjYtMi42ek01MS40IDQuOWMwLS41LS4xLTEuMS0uMS0xLjYtLjIuNS0uNSAxLjEtLjggMS42bC0xLjYgMy4yaC0uMmwtMS42LTMuMmMtLjItLjUtLjUtMS4xLS44LTEuNiAwIC41LS4xIDEuMS0uMSAxLjZMNDYgOC4xaC0uNmwuNS02LjJoLjRMNDggNS40Yy4zLjYuNiAxLjIuOCAxLjcuMi0uNi41LTEuMS44LTEuN2wxLjctMy41aC40bC41IDYuMmgtLjZsLS4yLTMuMnpNNTMuNCAxLjloMy4ydi42SDU0djIuMmgyLjF2LjZINTR2Mi4zaDN2LjZoLTMuNlYxLjl6TTU5LjYgNS4zaC0xLjF2Mi44aC0uNlYxLjloMS44Yy45IDAgMS44LjYgMS44IDEuNyAwIC44LS41IDEuNC0xLjIgMS42bDIuMiAyLjloLS44bC0yLjEtMi44em0tLjEtMi44aC0xdjIuMmgxYy43IDAgMS4yLS40IDEuMi0xLjEuMS0uNy0uNS0xLjEtMS4yLTEuMXoiLz48L2c+PGcgZmlsbD0iIzE4NDI3NSI+PHBhdGggZD0iTTY3LjkgNi40aC0yLjZsLS43IDEuN0g2NGwyLjYtNi4zaC4ybDIuNiA2LjNoLS43bC0uOC0xLjd6TTY2LjYgM2MtLjEuMy0uMi43LS40IDFsLS43IDEuOWgyLjJMNjcgNGMtLjItLjMtLjMtLjctLjQtMXpNNzAuMyAxLjloLjZ2NS42aDIuOXYuNmgtMy41VjEuOXpNNzQuNyAxLjloLjZ2NS42aDIuOXYuNmgtMy41VjEuOXpNNzkuNCAxLjloLjZ2Ni4yaC0uNlYxLjl6TTg1LjIgNi40aC0yLjZsLS43IDEuN2gtLjZsMi42LTYuM2guMWwyLjYgNi4zaC0uN2wtLjctMS43ek04My45IDNjLS4xLjMtLjIuNy0uNCAxbC0uNyAxLjlIODVMODQuMyA0Yy0uMi0uMy0uMy0uNy0uNC0xek04OS44IDQuOGMtLjUtLjYtMS4xLTEuMy0xLjUtMS44djUuMWgtLjZWMS45aC41TDkxIDUuMmMuNC41IDEgMS4yIDEuNCAxLjd2LTVoLjZ2Ni4zaC0uMmwtMy0zLjR6TTk3LjYgMi40Yy0xLjQgMC0yLjcgMS0yLjcgMi42czEuMyAyLjYgMi43IDIuNmMuNyAwIDEuMy0uMSAxLjctLjRsLS4yLjdjLS40LjItLjkuMy0xLjcuMy0xLjcgMC0zLjMtMS4yLTMuMy0zLjJzMS42LTMuMiAzLjMtMy4yYy44IDAgMS40LjIgMS44LjRsLS4xLjZjLS4zLS4yLS45LS40LTEuNS0uNHpNMTAwLjQgMS45aDMuMnYuNkgxMDF2Mi4yaDIuMXYuNkgxMDF2Mi4zaDIuOXYuNmgtMy42VjEuOXoiLz48L2c+PHVzZSB4bGluazpocmVmPSIjYyIgd2lkdGg9IjM2Ni4xIiBoZWlnaHQ9IjE3MC45IiB4PSItMTgzLjEiIHk9Ii04NS40IiB0cmFuc2Zvcm09Im1hdHJpeCguMDM3NzEgMCAwIC0uMDM3NzEgOC45MDQgNC45NzYpIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvc3ZnPg==\") no-repeat 50%}.widget-tooltip .body{padding:20px;border-radius:0 0 6px 6px;border:1px solid #999;border-top:0;background:#fbfbfb url(\"data:image\/svg+xml;base64,PHN2ZyB3aWR0aD0iNDk3IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoNDk3djI2NS4ySDB6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0xMTkuNTM1IDBILjA3djIzOC45M0gyMzlWMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiNGQkZCRkIiIHhsaW5rOmhyZWY9IiNhIi8+PGcgb3BhY2l0eT0iLjI5NyIgbWFzaz0idXJsKCNiKSI+PHBhdGggZD0iTTQxNS4zMzIgMjAzLjI4N2MtMS40NS0uNzA2LTMuMTg2LS4wNjUtMy44NzMgMS40My0zLjE0IDYuODU2LTkuOTIxIDExLjI4Ni0xNy4yNzMgMTEuMjg2LTIuODEzIDAtNS41MjEtLjYxNS04LjA0OC0xLjgyOS0xLjQ1OC0uNjk3LTMuMTg3LS4wNDctMy44NjUgMS40NTMtLjY3OSAxLjUwMS0uMDQ4IDMuMjg1IDEuNDA4IDMuOTg0QTI0LjA3OCAyNC4wNzggMCAwMDM5NC4xODYgMjIyYzkuNTkyIDAgMTguNDM3LTUuNzc5IDIyLjUzNS0xNC43Mi42ODYtMS40OTguMDY0LTMuMjg0LTEuMzktMy45OTMiIGZpbGw9IiNEOEQ4RDgiLz48cGF0aCBkPSJNMzQyIDExNi4wMThsLjAyNi0uMDE4LS4wMjYuMDE4IiBmaWxsPSIjM0M1RjlDIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQxIDUzKSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZD0iTTEwNy4yMTUgNTguNDdsLjEtLjA1OGMtLjAzMy4wMTktLjA2Ni4wMzktLjEuMDU3IiBmaWxsPSIjM0M1RjlDIiBtYXNrPSJ1cmwoI2QpIi8+PHBhdGggZD0iTTE2MS43MDcgMTk5LjQ3OGMtMy40MjcgMS4yNTIgNi42NS0xMi4zOTgtMS4yMjQtMTUuODc4YTY4LjM5OCA2OC4zOTggMCAwMS0xOS42MjYgMi44NjhjLTcuNDYgMC0xNC42MzMtMS4yMDktMjEuMzU1LTMuNDE2YTY4LjM0NiA2OC4zNDYgMCAwMS0yMS4zNzcgMy40MTZjLTM3Ljc5IDAtNjguNDI1LTMwLjYzNC02OC40MjUtNjguNDIzIDAtMzcuNzkgMzAuNjM1LTY4LjQyNCA2OC40MjUtNjguNDI0YTY4LjMxNCA2OC4zMTQgMCAwMTIxLjM2NiAzLjQyIDY4LjMxNSA2OC4zMTUgMCAwMTIxLjM2Ni0zLjQyMmMzNy43OSAwIDY4Ljc5MyAzMC42MzggNjguNDI0IDY4LjQyNi0uNjIzIDYzLjg2Mi00Ny41NzQgODEuNDMzLTQ3LjU3NCA4MS40MzN6TTE4Mi41NDMgMEg1Ni40NTdDMjUuNDA1IDAgMCAyNS40MDUgMCA1Ni40NTd2MTI2LjA4NkMwIDIxMy41OTUgMjUuNDA1IDIzOSA1Ni40NTcgMjM5aDEyNi4wODZDMjEzLjU5NSAyMzkgMjM5IDIxMy41OTUgMjM5IDE4Mi41NDNWNTYuNDU3QzIzOSAyNS40MDUgMjEzLjU5NSAwIDE4Mi41NDMgMHoiIGZpbGw9IiNEOEQ4RDgiIG1hc2s9InVybCgjZCkiLz48L2c+PHBhdGggZD0iTTMxMy44MjcgMTcxLjVjMC0zMC4zNiAxOS43NzktNTYuMDkgNDcuMTYxLTY1LjA3NUE2OC41MzMgNjguNTMzIDAgMDAzMzkuNTc1IDEwM0MzMDEuNzAyIDEwMyAyNzEgMTMzLjY2OCAyNzEgMTcxLjVjMCAzNy44MzMgMzAuNzAyIDY4LjUgNjguNTc1IDY4LjVBNjguNTY1IDY4LjU2NSAwIDAwMzYxIDIzNi41OGMtMjcuMzg4LTguOTgzLTQ3LjE3My0zNC43MTYtNDcuMTczLTY1LjA4IiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIuMzUyIi8+PC9nPjwvZz48L3N2Zz4=\") no-repeat 100% 100%;background-size:contain}.widget-tooltip .body>.row{position:relative}.widget-tooltip .body .brand-name{letter-spacing:2px;font-weight:400}.widget-tooltip .body .rating{margin-top:12px;font-size:14px}.widget-tooltip .body .col{padding:0 10px}.widget-tooltip .body .hotel-count,.widget-tooltip .body .number-of-portals,.widget-tooltip .body .review-count{margin-top:3px}.widget-tooltip .body .hotel-count,.widget-tooltip .body .number-of-portals,.widget-tooltip .body .overall-rating,.widget-tooltip .body .rating-text,.widget-tooltip .body .rating-value,.widget-tooltip .body .review-count{text-align:left;padding-left:11px}.widget-tooltip .body .overall-rating{font-size:15px}.widget-tooltip .body .random-comment-text{text-align:left}.widget-tooltip .body .container-buttons{padding-top:20px;text-align:right}.widget-tooltip .body.small-version{background-position:0 0;background-size:cover}.widget-tooltip .body.small-version .hotel-count,.widget-tooltip .body.small-version .number-of-portals,.widget-tooltip .body.small-version .overall-rating,.widget-tooltip .body.small-version .rating-powered-by,.widget-tooltip .body.small-version .rating-text,.widget-tooltip .body.small-version .rating-value,.widget-tooltip .body.small-version .review-count{padding-left:0;text-align:center}.widget-tooltip .body.small-version .container-buttons,.widget-tooltip .body.small-version .random-comment-text{text-align:center}.widget-tooltip .body.small-version .rating-powered-by{width:100%}.widget-tooltip .body .rating-powered-by{position:absolute;bottom:0;font-size:10px}.tooltip-fullscreen{z-index:99999}.tooltip-fullscreen .modal-close-row{float:none;position:absolute;top:12px;right:12px;margin:0;padding:0;width:24px;height:24px;z-index:1}.tooltip-fullscreen .modal-close-row button{display:inline-block;cursor:pointer;text-align:center;align-items:flex-start;margin:0;padding:0;border:0;outline:0;vertical-align:top;background:transparent url(\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAW0lEQVR4AeXTuw3AIBgD4SzBGOxf\/Uuw0KVwl1zjNhEd+JN4mItyfA1shvWKLIbtYIDzIIsDjIMshvhMgBOPBzjReIASjQc48XgP+i31h+6vtX+4vhp9+f72RW8ruoB7tmxV7gAAAABJRU5ErkJggg==\") 0 0 no-repeat;background-size:24px 24px;width:24px;height:24px;opacity:.8;transition:opacity .25s}.tooltip-fullscreen .brand{position:absolute;top:15px;left:12px;height:20px;width:20px;background:transparent url(\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAdNJREFUOBGllM0rRFEYxu\/FjJEFooiklC1TUqaYomYh4c+ws1dWdpbKQvMHkI0SZaEpTRJTFooi8lFmQxYiNJkZv+fO3NuZ26gx89Rv3nPe855nzlfXsorK5\/ONMAfnUKlOKJyCBtfHiST64BCq1T4Tu1yzEJ1ktU7GvD3aAYufGSNZazOqvS+X7L\/QyRLu4Al+IAM3cA+tMAaTUA+mJmQYNjO0X2AXHkFmCUjZtp0nemIrMTrr0O8lLau7zuio+QYboNUFIIHRqd+MvEXugDALz+oXlfMbJhlQQRPINAV\/CtNLBlfMAtPwk4Fr0DHYcFFuZeT92ibx4SZNw3eSX6CcLuUVKpF2pHN3ZBrqxrQySdF\/g85AmR95eD5eg2QL6Elodcr3QCXqoEg4Mg11q8MgQxHmaYSInug79cRBiBYHRonNbpFpqNwIDIHOsh2mmWhufYD+ovJwS1vz58GTTbLkwTKix3wEZyDjKziGNLeeoVxP6lsvAC3QXgVXcWVVHHEzRpSZbk9\/KBPdZhp01nHQ81qDILha0schpr\/6p9Jl6nPkIjIMgr5ntWoLg8J50+iEnSods8zbhDbt233IWqna40V6if7LIlUi1T9AkgvSPTj6BYK\/aqwSTdOXAAAAAElFTkSuQmCC\") 0 0 no-repeat;background-size:20px 20px}.tooltip-fullscreen .title{color:#fff;margin:12px;padding:0;font-size:13px;line-height:24px;vertical-align:baseline;text-overflow:ellipsis;text-align:center;left:48px;right:48px;width:auto;position:absolute;float:none;display:block;overflow:hidden;white-space:nowrap}.tooltip-fullscreen .header{height:48px;background:transparent none repeat scroll 0 0;padding:0;top:0}.tooltip-fullscreen .body,.tooltip-fullscreen .header{display:block;position:fixed;width:100%;margin:0;left:0}.tooltip-fullscreen .body{background-color:#fbfbfb;height:auto;top:48px;overflow:auto;bottom:48px;right:0;background-size:cover}.tooltip-fullscreen .body-inner{margin:10px 0;padding:0}.tooltip-fullscreen .rating{margin:0 0 12px}.tooltip-fullscreen .col-subcategory{margin:20px 0}.tooltip-fullscreen .col-subcategory>h2{margin:0 0 20px}.tooltip-fullscreen .footer{display:block;position:fixed;bottom:0;left:0;height:48px;width:100%;text-align:center;border-top:1px solid #ccc;background-color:#fff}.tooltip-fullscreen .footer .btn{width:40%;margin:10px 0}.tooltip-fullscreen.custom-brand .brand{width:100px;height:18px}.tooltip-fullscreen.custom-brand .title{left:102px;right:98px;overflow:inherit;font-size:12px}.col-rating{text-align:center}.col-rating .rating-text{font-weight:600;font-size:21px}.col-rating .rating-text.rating-text-sm{font-size:18px}.col-rating .rating-text.rating-text-md{font-size:15px}.col-rating .rating-value{line-height:48px;font-size:48px;font-weight:300}.col-text{text-align:center;font-size:13px}.col-text .review-count,h2{font-weight:400}h3.review-title{color:#333}.ratings-sub-categories{font-size:13px}.ratings-sub-categories .text-rating-scale{color:#586370}.random-comment{margin-top:15px;background:#fff;border:1px solid #aaa;padding:10px;border-radius:4px}.random-comment a{text-decoration:underline;color:#1e7dba}.random-comment-text{color:#666;line-height:150%}.random-comment-link{text-decoration:underline;color:#aaa;display:block}.rating-sub-categories-headline{font-size:16px;font-style:italic;font-weight:600;line-height:16px;display:inline-block;padding:2px;margin:0}.ellipsis{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rating-by-icon{margin-left:5px;vertical-align:middle}.col-with-rating{padding-bottom:25px}@media screen and (min-width:480px){.widget-tooltip .body .ratings-sub-categories{margin-bottom:12px}.widget-tooltip .body .rating{float:left;position:relative;display:inline-block;width:45%;margin:12px 0 0}.widget-tooltip .body .rating.even{float:right;margin:12px 12px 0 0}.tooltip-fullscreen .rating{float:left;position:relative;display:inline-block;width:45%}.tooltip-fullscreen .rating.even{float:right}}.html,body{background-color:transparent}.widget:hover{cursor:pointer}.widget .header{line-height:15px;border-radius:4px 4px 0 0;padding:5px 10px}.widget .header .checkmark{display:block;line-height:15px;height:100%;font-size:15px}.widget .header .checkmark:before{display:inline-block;position:relative;content:\" \";background:transparent url(\"data:image\/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNTY3IDEwLjA3MmEuMzM1LjMzNSAwIDAxLS4yMjktLjA4OEwxLjA5NSA2Ljk2YS4yODguMjg4IDAgMDEwLS40MjguMzQxLjM0MSAwIDAxLjQ1OSAwbDMuMDE0IDIuODEgOC44NS04LjI1M2EuMzQxLjM0MSAwIDAxLjQ2IDAgLjI4OC4yODggMCAwMTAgLjQyN0w0Ljc5NiA5Ljk4NGEuMzM2LjMzNiAwIDAxLS4yMy4wODhoMHoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIxLjA2OSIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+\") no-repeat;width:16px;line-height:100%;height:11px;margin-right:8px}.widget .header .checkmark .text{font-size:12px}.widget .body{background-color:#fbfbfb;padding-top:5px;padding-bottom:10px;border-radius:0 0 4px 4px;border:1px solid #999;border-top:0}.widget .body .col{padding:0 10px}.widget .body .col-rating{text-align:center}.widget .body .col-rating .rating-text{font-weight:600}.widget .body .col-rating .rating-value{line-height:32px;font-size:32px;font-weight:300}.widget .body .col-text{font-size:13px;line-height:16px}.widget .body .col-text .review-count{font-weight:400}.widget .body .col-text .number-of-portals{font-style:normal;font-weight:400}.widget .body a{display:block;font-size:10px;margin-top:4px}.widget .body img{margin-top:8px}.widget.widget-horizontal .blank-widget .rating-text{margin-top:12px}.widget.widget-horizontal .body .col-rating .rating-text{font-size:19px}.widget.widget-horizontal .body .col-rating .rating-text.rating-text-long-md{font-size:17px}.widget.widget-horizontal .body .col-rating .rating-text.rating-text-long-sm{font-size:15px}.widget.widget-horizontal .body .col-rating .rating-text.rating-text-long-xs{font-size:13px}.widget.widget-vertical .header{text-align:center}.widget.widget-vertical .body .col{width:100%;text-align:center}.widget.widget-vertical .body .col-rating .rating-text,.widget.widget-vertical .body .col-rating .rating-text.rating-text-long-md{font-size:16px}.widget.widget-vertical .body .col-rating .rating-text.rating-text-long-sm{font-size:14px}.widget.widget-vertical .body .col-rating .rating-text.rating-text-long-xs{font-size:12px}.widget.widget-vertical .body .col-text{padding-top:5px}.btn{display:inline-block;margin-bottom:0;text-align:center;vertical-align:initial;cursor:pointer;background-image:none;border:1px solid transparent;border-radius:4px;white-space:nowrap;background-color:#676767;padding:4px 8px;color:#fff;font-size:13px;font-weight:700;text-transform:uppercase;outline:none;line-height:18px}.btn:focus,.btn:hover{text-decoration:none;background-color:#818181;text-shadow:1px 1px 1px #333;box-shadow:2px 2px 0 hsla(0,0%,40%,.4);color:#fff}.btn.active,.btn:active{outline:0;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.progress-bar{position:relative;border-color:#c8c8c8;border-left:1px solid hsla(0,0%,78.4%,.8);border-top:1px solid hsla(0,0%,78.4%,.8);border-bottom:1px solid #fff;border-bottom:hsla(0,0%,100%,.8);border-right:1px solid #fff;border-right:hsla(0,0%,100%,.8);box-shadow:inset 0 0 3px hsla(0,0%,39.2%,.3);background:#fff;height:17px}.progress-bar span{color:rgba(0,0,0,.5);display:block;height:0;line-height:17px;font-size:12px;text-align:center}.progress-bar div{position:absolute;box-shadow:inset 1px 1px 3px hsla(0,0%,39.2%,.3);height:100%}.progress-bar hr{position:absolute;top:2px;margin:0 0 0 -3px;width:2px;height:13px;border:0;background:grey;zoom:1;opacity:.2;filter:alpha(opacity=20)}.rating-color-progress-bar-red-background{background-color:#d88497}.rating-color-progress-bar-yellow-background{background-color:#deba7c}.rating-color-progress-bar-green-background{background-color:#99cfcb}<\/style>\n        <script>(function(e){var t={};function n(o){if(t[o]){return t[o].exports}var r=t[o]={i:o,l:false,exports:{}};e[o].call(r.exports,r,r.exports,n);r.l=true;return r.exports}n.m=e;n.c=t;n.d=function(e,t,o){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:o})}};n.r=function(e){if(typeof Symbol!==\"undefined\"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"})}Object.defineProperty(e,\"__esModule\",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e===\"object\"&&e&&e.__esModule)return e;var o=Object.create(null);n.r(o);Object.defineProperty(o,\"default\",{enumerable:true,value:e});if(t&2&&typeof e!=\"string\")for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o};n.n=function(e){var t=e&&e.__esModule?function t(){return e[\"default\"]}:function t(){return e};n.d(t,\"a\",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p=\"\/build\/widget\/\";return n(n.s=\"LrV2\")})({LrV2:function(e,t){window.onload=function(){var e=function e(){var t=document.getElementById(\"btn-certificate\");var n=document.getElementById(\"btn-booking\");if(t&&n&&t.offsetTop!=n.offsetTop){n.style.marginTop=\"10px\";return true}return false};var t=function e(){var t=document.getElementById(\"left-column-valign-middle-wrapper\");var n=document.getElementById(\"statistics-wrapper\");if(t&&n){var o=n.scrollHeight-t.scrollHeight;var r=document.getElementById(\"left-column-title-container\");if(r){o-=r.scrollHeight}t.style.marginTop=Math.max(0,Math.ceil(.5*o))+\"px\"}};var n=function e(){var t=document.getElementById(\"left-column\");var n=document.getElementById(\"right-column\");var o=30;if(t&&n){var r=n.clientHeight-o;if(r>=t.clientHeight){t.style.height=n.clientHeight+\"px\"}else{t.style.height=t.clientHeight+o+\"px\"}}};n();var o=function e(t){window.parent.postMessage(t,window.location.origin||\"*\")};var r=function e(t){o(t.type)};var i=function e(t){o(\"tooltip-\"+(t.target===document.getElementById(\"modal-close-button\")?\"close\":\"open\"))};var l=function e(){var t=document.getElementById(\"slider\");var n=document.getElementById(\"slider-next\");var o=document.getElementById(\"slider-prev\");if(n&&o&&t){n.onclick=function(){t.insertBefore(t.lastElementChild,t.firstChild)};o.onclick=function(){t.appendChild(t.firstElementChild)}}};var c=e()?250:50;t();l();if(document.addEventListener){document.body.addEventListener(\"mouseenter\",r);document.body.addEventListener(\"mouseleave\",r);document.addEventListener(\"click\",i)}else if(document.attachEvent){document.body.attachEvent(\"onmouseenter\",r);document.body.attachEvent(\"onmouseleave\",r);document.attachEvent(\"onclick\",i)}setTimeout((function(){o(\"ca-content-loaded\")}),c)}}});<\/script>\n    <\/head>\n    <body>%body_html_placeholder%<\/body>\n<\/html>\n",
        placeholder: '%body_html_placeholder%',
        widgetCenterOffset: 55,
        state: null,
        expanded: false,
        closeTimer: null,
        closeDelay: 750,
        frames: {
            widget: null,
            tooltip: null
        },
        mode: {
            desktop: {
                widget: {
                    width: '115px',
                    height: 0,
                    body: "<style>\n    .overlay-text-color {\n        color: #fff;\n    }\n<\/style>\n<div class=\"widget widget-vertical\" style=\"width: 115px\" data-ca-widget-hash=\"ea976a7df169b502\">\n    <div class=\"header overlay-text-color\" style=\"background-color: #009ccc;\">\n        <span class=\"checkmark\">\n                    <\/span>\n    <\/div>\n        <div class=\"container body non-blank-widget\">\n        <div class=\"row\">\n            <div class=\"col col-xs-5 col-rating\">\n                                \n                                    <div class=\"rating-text \">&quot;\u0445\u043e\u0440\u043e\u0448\u043e&quot;<\/div>\n                                    <div class=\"rating-value\">\n        77%\n    <\/div>\n            <\/div>\n            <div class=\"col col-xs-7 col-text\">\n                                    <div class=\"review-count\">\n                        2,589 \u043e\u0446\u0435\u043d\u043e\u043a\n                    <\/div>\n                \n                \n                                    <div class=\"number-of-portals\">\u043d\u0430 14 \u043f\u043e\u0440\u0442\u0430\u043b\u0430\u0445<\/div>\n                \n                                    <a id=\"see-more-link\" href=\"https:\/\/reviews.customer-alliance.com\/hotel\/sanatorium-uzdrowiskowe-baltyk-kolobrzeg-83e1991e2a5d3362.html?_locale=ru\" target=\"_blank\">\n                        \u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\n                    <\/a>\n                                <img width=\"22\" height=\"22\" alt=\"Customer Alliance\" src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAABGdBTUEAALGPC\/xhBQAAEdRJREFUeAHtXQtwVNd5vufcu3d39RYgEIiHAOPExsF2TBuDBIimTAEjCXuC6rGdhFegk9q1PdO6sTuZwZNx2uYxTVJPJ1BAhOnEHiWxQSI4rY0R0QObmhQ7xg5G2MhgYwwY9NzHfZx+\/10tXoSQ7rm7KxbQGcTex3n857v\/\/c\/\/\/+c\/5zIlyTTnbxpKVFOZYdviZlR1N\/6mc8HGC2aLJKse5uJcUYT4WDDlPUXYr3GmHtVs3ta47Z5PkiGEeSlc9q36mdzi1TZTFoOq25jCChnXUJUAjTYR6qXaq1+GoScMQONXWAZ14wzj7E0m2G5TMRv2b6lukyVSCuCylbvmKSp7FAguUVU9SwgLDxt\/BOp1mAhsxlUAriq2Ge3knL9oWNbPXqut\/IPb7roCeO6a30xhiv9pxtiD4FTNtqLXLpe6RaZfPgds1QeGMkLgp81c8O811S490y\/bZadDAly2cud9TNV+wlXfJMuMoIJr9PW\/rOseL0B8cNWv2Hb0T8Ky\/7a1turVwWoaFODy1Q3fQW3fQwWasM3B6rnh7oHhSDSGbNt6rHVr1aYrAXBFgMtW7fw+1\/xP2rZxw4mDK4HV\/\/rnA6L1Dy21VT\/qf5\/OBwS4bGX9U9ynP2NjJL3hRcJAqCVci4HMMd5b61pqKzcn3HIOLwPYkbmarw4l1GtW3erfyzSf93FyyLKsJftrq\/YlNncJwHevfLFUU32t0E3Gj8jcRJiGPiaZjDf+iGGaZQe233cuXgJa9ecJet4\/M1UfAfdzSFwfkThVtcAXNFX9bmKhixxcvrahQlH4K8K2oVnf4KpYIkIyx1DhAF1IMPbnrVuWvU1F4xzMhC2egNUyAq4MoP3zwrbmmh6ErHg8fsvhYOi7t8PJcQDo6yPcG4fG268z4AnRoWjKrOZNlR\/GOJiJFarqHwHXG6aXlCK\/DNP0fGHYVXSDV1Ts1cDZi8lxM5JShAB5ExlbSrWxud98cTpT1bdwIWtE700NwDExYX9iMX2mBnBvhocs62roveSSF3jasb9LO0cDMryz5JrFX+y3Xw5cJ3ciSTkn06W3nXrJN22j\/uF1pzrtMWUss6LTNQxsdxOhw6GY0ZtjAVUC1KepIj9bFXnZusjJ0llWUDV0lfvg4GamCZ9g1FS7ewzW2WMoXb0mC0ctYMkVzedzgIR\/1rSF+Qkz2UkM0DTrcB4wd9NAjfM8uMyLAPwEPJoSaEf5NCHg+K7hvx6OgZxzndt2eBqmIcRfUcPpTJhOcoDNCmhi4tgsMW1inigZk8UKcv1KwM+5ClCRMMjGfCMAymcLwYgJo4at9EYFO30urPzx6JlTbSc7m4TCXgHvHghrweMHNy3quBLtSx7Z7e\/pVscKZtwKH\/YCVL8Idd\/JNL8am7FIH2cT09qcFbOy1fWfoeHCdDxVAhZAKUUFAftLM0aJL04pYKPydWJSFruHVomtr5B8ug6uIxBEc9Cvbi0u8r00c+pYz3NkFRv2asbJrtmKzR4CCTVM9RWlC2hYdYph9j7JytY00Dt7hS56v2yYtjIq32\/ffVuRmDmtkIN7GYkHAnaoRPaOpmog0GjFw\/\/XyOlJv62pYSl9zcrXNUwWpvIw5M46xtR8Z5ZmKMIk7hPAphX+DnHw0D2WqJgABHeIO78wSpTfMY5BxjLTisldN9XoekCxLPOsbVlPt4eM\/\/y7pTNoGiVtac7KHV9SNfX7jGnLUjm\/GAc4biqnpAMEZE7QJ+5bOEUsmTuRZwd9jDh5MDGQ2LA\/EFRMM7LPioYXVC8sfTbd4FLb+7ct\/2PzxIPVeKAwb1lvbHY8karkjlMGMIE7YUzQfmDxdHHL1AJO527EAZEPjld03a9EwuHNLFtfuvwvZ7yTXLckS2\/YYLdsXfYTpkSroH2cJNdjqlJKACYunTQuW9QsmsaKCv2czt0mAtfn0xXDiPxg+cLSb1XOntDrtmyq8zVtuXePaRpLISqOpgrkpAE2LQdc+2tfLYV40Bx5K9NxHzg3Gg3\/qLpi6j\/KlEtXXhIZnCnVtm1+yHjynJwUwKQVFOb6xfIFU5RsgEvnMolkbiQS+q9DGQJunPbfb172rhDG\/dARLzhmb\/yGh1\/PAJNm51O5uKd8koA6xi3IXJlEnGtEwwcNUzy8AWqxTNnhyNu69b79ijAehS0u17F+xHkG2IQBMGfWWDGtJFdK5lL7ZPJigrAb6tj6mkXTr2iJ9aN12E+bty7fDlGxDeELntv2BDCJgolFWWRESMtcopS4F+D++N6\/uOmgZ8qHqaBuq08JK3rSiVHz0KYngMnDVX5HMVQrFf4CuTdI03wkd9+DpvFvHugd9iIUvoouPjNsAJN+O21Crj1jUh55vaQ7TGYwvIc\/zmTR0L9TYU3ZbpuRd7wYIdIcDBVG+fIXx0D2Ex\/LJRX+hWgk\/EFP2HxeruTVzX1wU2UvQv7+wwsXSwFMltnYwoBdOiGHWdB\/ZZOPfLm2+OVDS2d0ypa92vkNbv8aXHxGVm2TApgGtxmT80XAkb1yXSaLLRINR4Vl\/lquZGbkfn1z9Wk481+Gi1OKICmANei9cJaDCaXacDKrGs0oiMMFvo+cgAz5GjKghMrqZV27rgEmUAtyfaKowI+pEHnxQPIXxDUtXLjwmg00tkzzdfiNu+Gdcv203QMMhMfk+xXMLMg+RIcYmpmAmNjvmrIMzBg4XnASZB2Dg941da4BJn13dGEQYVcSj6+PDCpiGJikVJQ\/uaYsAzM2NuLtY+w9GW3CNcDU38IcmpeUTwQwNJBOhHN7nk+TbzU9JSApP6BwArfJNcAASWRnIQjIwwDXp9pcyB8V7HJLWMbms+zTMrS5Bhj+GQbvGY1UMvU7eYmD8a+n48i4sHThDCuASdJezDC6pso1wPRacJhx7qvuR4Ng1ooVirz60a+aq32KqB338gHEugaYnpozY+y1h0zQ0Ou6Pa\/NZFo51x2GliWgB0CHlXqATn9JcONf9q8a3wlmGgDS9DAlKy2DHEBiPSGDxKl0cmJmmVKoqtm50oUzrYDgBTIkueZgqvR8F9Yoe0gx1YPlQckb76F4RhXBMDQuPYMcWPfs+TB2gZBX1KiI7tdVBHfcklFoeSAGkZslMqasaw4mDeJcR0QJhcmYkZcTpAsjqGqOhz5lTBEKHgS4k2Xijd0DDEw7ug326fmIjXBT6U7DUUIq3vw33hBy\/j7pltJXwGr7DDHHxMHutU3XABPZCDJhxz7qJKNBOmGSE3t5qLd81PX+7dKFM6SArak3YSqnIC0cTH0kzm37sIOFIiacPnK9jslhP2xtViNXMoNyMz4bIVVSPZfiYJLDZ85H+PsnuwSc79I9Nwy4exi7f1dTOwK+r72EAW6+zABHPZRGiUzlPxw5R+JC2momMeH3ByaZhv31TIB3zjcaSpQNG1xhMGdN3Sg4Cr4iu1jIVeWJYGgqU9pP9bCjH3baPk26OOJ\/yRhkj7\/wyrujE+sd7uOyVTse17Oz3y5vv+thN21zkVWOYMDxMvKX6pVHCIWgaLOmQ5\/0yWIpkUQRPYo\/EChlXH\/CTcfSkaf8Gy\/cjK1y\/glPugAI5Llrw6qJLRlzlzueyxPANNidOhviLW9+ClksBzA1HI1EsBxLf2Tnq21lcUKG65d20FJ033OaFhxtRrratF7l50O1XbZ65wQ8jCWYER8q62X3PQFMtWgQDwcOn2VH2jukRUXMN8GDWNS7sWHvkTGXUZXEhXmrdtw676HfXGaSV6zcGyhfs2sFtifbw9Xgly0r0oW4ybWNz1WeHao5IfhDCAAcJSseqF440L0l4lvMLrOXWk9SjLBdVBjAsgH3CrhpRDHgBWdGImLTxjfEX6+fzaBiJJfmfnPnfKFqewRTz2Fxzz7IssMwICOwC6YarKsMC11u0xApaZnhU4owVzfVVu8bqsWvPLgbixqtdV7XEnrmYCKM1DasxGQvNrazC90RadUNQYCkVdxb3HX8Z3V1jr94qP4Oeh9hcxegRn2s+gLjfIG8Gi2Q+7Sq5\/6LL5i3XtOzbwNLhCwj\/EvDDC1o3lL9u0Er67up+o212CBquqz2EK87Jcu4KCCweHRQfO2rU0Vhri7FyZBtABkLYCLhn+crxx9JNm6iYl3DGNPmiwB0ueM3YMKPMflTWGAHoVv+T8svqg7HOz\/UryN7mfoGfC\/YZkdumV58GVdKACZCCWQsgLGr5k1RSsZmSQZlY5URQLaikec7uzu\/\/eCyWeeH6vxw3IeY2QzZuwYxadLNxQFOSkQktkraxFlYec\/99\/vs0HvnYLZjd0eIEHdJUNSlovkD9+fm5r+8c++x2e7KpS\/X3FX11ZxrK7HoPKlGUgYwUaEC5LBhsoamE3zHvnZxoSvqaBhuI10j4RB2bvLdBXt\/T33j8afq9h7OSap3HgvP\/3r9VCxzeBb6ftJ7GKUUYOoPgUl68lttn\/Htvz2qwCCxesOmA7QbN6cRjUB0ijwsM3gmoOY2N+w7\/kBd3Ylhm8ur+PbeHMunbEOw9URZuTvQ80zbYnBqjDxoJJtpqdfMmwrsW0sLsVAxwCBOaKsCZ5aapl+uNEdCCxTJa4eOvqnr\/Bd6QNux4PbiDwbqSCqu3bVuoy9oFm9nWuB+L3I3kYa4DE7rdgbxBmlLA1rmhVkjMR7aRmlJrpg8NkcpzNNZMKBhZT2MUI59pkmliCV6NuRQQkyxpXSHLHb6fFR5u+1MR\/up7v3QCPZAmX3dp\/iOdunjzh3cNHtAHZp0WH\/QLsEW0rM495fbZujllq3V9XG6En9j4I7fiL0kViULLtVLADvbGZSv2tmCs7mpeB0SCR7omNxvFFtBfyoGwSxEauZm+eycLI0F\/Zqp+xDjivgW0xQI1bZ4TyjKu3oNpQcARw0Lu99gxxMNU6dg675Nos9hCv1jPA3aKPkCrnfjCekkYvC0xiBbMV6QcZDpfq5iuW605zg8YrMA8iUhXBUr6nKMvOBG5HkgFeBS3x2ArdBjGuJUXsZMw1zwGF1PayL2JDncJ4vhLLIUyGf1VGynRwLGaR96pxNlSOKB5v9IGYl77hL3dcA832hw8+jYIOpkjpV36oHooWAOrHGkbQ+JgZAjR+gWyfOLAM9fWz\/VEHwLHsLCVIFLRNAuXvhYwCkN08QHBHdv4jo9SNF\/FwG8WB8gkEiObwB2cOyxDFGQJl2FdUIvLsQOL7FUtnpXlSXYT7HyqTSV4FLt2HfZBmkfULjkEewA3wtWua639XKWYAlzd+OGheafrdoxyc81cleuRb\/VZHXdvud18ceJJhX2p7aqH+N6e0E77rwLpfpihuvvAJLXihoIPfzfsjX1fw9wX8NilvV4A1SvPobBMKKHCQF1aP+WxZ9xitrGq\/o7mbD4wSrPzHukCmIPKK7UYrutH4JzJ8REgivhIt8lAIqRYxcVjBkagv0K\/lHYhHIyUL7lq1oCdiYvpEEyndtIOgE2ZuQCF5ajDjoAN2+tfAvj3isc64iv5+TFYS6LB62jg97\/wu9rl5+gsnFTmRa3\/BCqDHS165qLZfGSyw\/RAJWwF\/N9Fxe6xwFWmjdXNgLfumT2RpCj5vrLTR8wgX62Mb77NfXwIsBOd7n6JEbbU15WlV9\/cMn1CIYKtN3wEcMyn0kseQnArVvuacf3IChOAGbPiKhIBGqwY2dgE3YvPADrE79AQGUuAZgutGyrfgH7OX6XOzsujYBMmAyWHKMC+\/rgu0aP9v+GBpUbcE3oiUPPN0+6o0aH82MeXDOD1X9D3\/sc3OgTLbXVzw4ExoAAU8YT\/\/fcq5PvrAljqrsCFcGQHwE6EUCSuUi92DTp4dba5QOCSxmGlAHz1jQsF4z\/FKb0ZOsG\/I4cgXRJwtgk87mzy2TwJZXhpGlL5Q6F2\/Msy9gGTjYcNe4GHABJHFDfYS+E4Bz6d271zh\/qW3KE5ZAcnAj4vDW7yyDNH4Mzeyk+C3GDfHISTjAwFOLSOuDR2IGo3dR\/cjIRZDqm+C+bq9VoeTFMbPpo6ihnqxXyzfY5zfuXuVbOycFPgJKTHi6xMzg+hAsv2cPx0dSBQKIgZpWbMwT3TYcZMwdPuRiza9fkiIhd4zF5wk9gqvZ1lfmPqpY4luxnf\/8f0YlgZKIJMEkAAAAASUVORK5CYII=\" \/>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div>\n",
                    styles: {"right":0,"top":"50%","marginTop":"-%half_widget_height%px"},
                    zIndex: 99998,
                    transform: [2,6].indexOf(2) !== -1 ? 'perspective(1px) translate(0, -50%)' : ''
                },
                tooltip: {
                    width: 315 + 'px',
                    height: 0,
                    body: "\n<style>\n    .widget-tooltip.widget-tooltip-arrow-top::before {\n        border-bottom-color: #009ccc;\n    }\n    .widget-tooltip .overlay-text-color {\n        color: #fff;\n    }\n<\/style>\n<div class=\"widget-tooltip widget-tooltip-arrow-right widget-tooltip-arrow-v-center\">\n    <div class=\"header\" style=\"background-color: #009ccc;\">\n                                                <img id=\"tooltip-header-image\" src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAUCAYAAADm4VNYAAAABGdBTUEAALGPC\/xhBQAACpdJREFUeAHtmnuwV1UVx+8FBC8ibzLAQIiHUmpWlpSO1yQJIxWQHiI6QGEWjY8aR7NwcBobybLBoKmQjJJRSkoZiiAIaIQpipTAQF7CgLxEQBG4At4+n3PP\/rF\/v3sucAn\/uZzvzPfutdda+7X2Xvuc84OysgjV1dWt4V3wDXiyeJuGD8L3Rl3nYh6BPAJxBEiQNnAxPFVYRUfnxWPkch6B0z0CTaIAfBW5b1QP4naEzXAfbAbPhFvgSngA+iS7FH4YxuhNZTT8dqzM5TwCp3ME4oT7SkkgTLR5cB08BA\/DxfBf5eXlJl8BPMnspxKOg5+AAe8LQl7mEcgjUFYWJ1wcjzVUnoEmVlP4DpxBoq2mrAX0JuNfSLwllD+Dw1In22UC37MxXAQtt8L\/0o\/ff62Qz0B+jbIA9C2oVKDfGZToLkE+B76Mfj31DsjtUvuRtGyclnvw2ZbKZfh2RfYpXAWXY9sdbJbYjc3Zpfrgg924NMe+Rx11n\/TOvdw6MCbrE6mszIunAlbDV2nzZqo\/ZkGfbXE4iP\/+2BH9GdS17cBmnwVgc73GQVut+GPXtg+bbydFwNYRvXtRBPQtUTiPt4sMVLAZ7ypspZewcegD3R9jtAqfZB20ce6tYSMonOcm7MasQSMr4TzoM6DBcWMNyh8JRmayYSsAn7cIpk\/K7rBvwVAipD76OdZe+B64EY6Ew2FPeAeMcR2VSjia9s7rMdgLboad0Y2ivBLeDD2EXaBzfwW6+TPhBPzc6PHwQrgJNoOd0E9j\/j9GDuiM8AT6ga4rKKPSV\/Bz4T2pzoumI\/RwOZ4Xg3MyMWdD3xi8BPxWHk+fTyEfD+NwWAqnlji+n\/ok2B\/69hHDWD4NB8I3YkMqT6T8JfxTbEvjMo1yKHNzX2KMptIX2+exhYss2B9CWAx\/FRT4fRLZubtPxsFLtTH6YbQ3Dg\/DS+EuKIyvsSpcpiobIrISbgEL9QY2WI3hBvgCPCEQ0AME9n6c50MPXhGwfROFSTUS32Ua0ZkYXZWBB9QkKIXz8ftRVEIT5lP0UUX75siHkd30ZOPRueEt0DleAnQVCNPhy3AANpPD8c+nmELZCp3thH1WwsHw17AA\/JyHF8LzBWWN\/\/20nxvp7Nt+fDJ8Ee6AHkYTeQm+G5Ez4VwwmDReHKUJZ7w8xFkoR6nNMgtnoTSWpbgKxRWwHyy9DBxvABwLH4AxXJ97loB5X45gvO6Dz7DGQxrQ96AIF4Br+yF8EibA750gN+TSQAYo+1qwFoZEVOfrVjVlffA3nNfBoo0l6N3Q3Q6H0GeSbMhlBhua2MKxssaL9e3w2UubKhtQ7oelrzuxv25iBKzGdwxMkk0l8iqKG+HNzPECdcAxXoLD0RUOlAYwCB6GIU7qHK+uQ5PMhXFcp7HZAnvBY+F6jAthBeP3yXCsayxdj2XLiottvBAegV9gvHIVEbwAJ8NLsI2K9IqF\/rC53z+A32GdT8Ek2XRCXgvDa6xtjlA3Hgn1OR1QmnC+SuyHIeAGbFt9A0EQPYwrYHwg7eazcCl2k\/H\/wTwad2WDH4Xn1qOjG\/D11a8WmNOrKD3gvroKvz3mw9dh0HlTu6Zb4I9gaxijEfZyGStTWZv0CdcJrs7wiVVDqThXE\/Sm2HCqZebUmz47woegr6QfhDE8Jz6dboN34n9lbIxk2\/n0nx7p6hKzYlSXb4PRxwnnonxKePsEeFMWbqmgPMHS9\/JSdEWxplRZ3zrJ4bu+yWN\/CzgAY2Fpchd1i921miDriwzFFefWJVW1pfT7chK8PW2vyVcr3wT8LmuFPjzFjdvDcA6ci\/5jlEK9r1C+pi2Gj8N7WcMmykzQ1idaS3yWUHp4+6HzIL9b+BIdz2M8k2ouHJYxUFPsW9F\/HU5kPt0yfIzddvwOZdhilfZ76ePPcA78dGxsyHKccB6MFrBxtGAP8VlRvT5iG5ztM4YHuH2syJC9+Urb6aaucCuyqWvgYHRDoOW34LFg+ypoItWFDhico9DvAGMsojQOV0HhLf9zqJ\/6Ciic2wTogfwaXAmFehPU+Y1P5aIfLNCVwgRYw0HsSem8HacSnnIwRlM6HQhfQO5lCa9FDuuiehRpPB5FMxUfL4EjR63JU9AzdDy4nt\/Au+FdcCk8LRAnnE8zD5xPAWVh8nVLpHr8YSNs1wPGm2EP8+EV6UZZz4JP2eYZBhO\/1s3JAXgRvT+M+MSrE\/h5cP8Oh2Y5MSefVFdDX1eFCbc7kcrKfkHpr6MfoWwG9fG1WcQHbCPj+E8U8q0ac\/LXOGxAN4NyLpyYaDP+pLH5DCafFh5sf1xw7ibhu4HL6dTX5y9DX5NHQb9fK2EmWMfjGHz66i+cn3Av2rOGPkmt7j9eQhvpZ2XKPXW7NixLnHAGzUPnoQqHyYNyMQHMSgBMR4HPIBhuRW\/m7jD0ExzdpJVwEr7erEVA50aYFJche+BjDKbiK5nfUZ1iA7KXRPggLzEVVSdQ8\/XsxlhL3Th4eDbDBVDY5+uJVPNvku2RH4OTOSReSAeh62sJA2pdCMFA2SSVx1H2ZMybIlssmvTbGOMa6D9JfI76tdB96Bw5+mNDXeO5l36LnwhG4DTWcaLxvotu5HEa34fdX0MHQWPhDyPGawqczFyNVxHSOAdd6dkI+gZdhkMQL\/LjVNbBNdCk8LbrD38Pi0AAB6DwwH0I7oXPQTEc+pTzYBbAhtCk+jYUk+E8ZL+DtkMPkmO58UvR289syt9Rmkje+D4xpkExAttFlAuh43s4PAAxvDxkAfS9iXa3ovAb5AbK56FPTvuvgrfi4yUjOsA9Cuj8pw7Xfyf8Q6o7jM71hYPl\/Megsy8vDjELesGcCRMdfR3EZwz1pymXUV+FnIC6Pj5hptdoav7isxPbv6ndAr8PTahu6MZRhhgbp5+k9Y6UD2JPEgHZw\/1T+jEhmkH3xourK8WF8A7rEVzj3dh70GYtsnF0fQWgP4L9GyjcB\/sMeATBmPgdO5PSc9Qang8fgK9Bx\/cX4Q9QFkCfrqdBIzkErpDFr6folq7Ww\/0sfAnqY0D\/AecQFA9mgjRgfai8gj55D0fXm\/pi2BZORe8BrwX8rkYpvSV3wOfw9ZUkAfb+CP2gm+3Yv8We3OjYWlD3ZvVp7HyexeaYBeCjrQl6n5hFwOYBGAI9LB7KRdB\/3PcgJ8DnGoQX0XkhGB\/X05v6EusCnXNcgW4LspdPD5gcZkqxEC6H18PZ+BWeOmnbXej+iS0BOi9A5+Vc3qzR1vzF1gupJ\/pZyK2Qh0HjEOA6vMhMQC+8NjDAS2QKbXfTdiCyr3IbkLsjX2CfwTGUqd9qbH5L+gOQsSyKsb7YTCR\/4HGPCkD\/USrXwXPgPvhXOAs\/TNXu68UwjpUX23h0DRpxwm1gpedFq3Xj\/gOXQRPC+jZoEpqcWwmQN38Fsr9g7UX2ZpsJL4OizoSrMed\/8wicXhHwRg0woWI0ouItJL1tfWXxaePt6k29lQTz6dIOPok8hfIJ6G0YYB858gjkESiNAAlzDzxZLKfhrozG3ysdJ6\/nEcgjQARIFv8Rd1FG0pysagUNu+TBzSOQR+BoBArfcKpIEH\/AGAr9QaK5Klgf2J8\/bPgR7v+l21mfxrlvHoGGHoH\/ATp8CUbRYlvGAAAAAElFTkSuQmCC\" alt=\"Customer Alliance\">\n\n                <span class=\"pull-right overlay-text-color\">\n             \u0418\u043d\u0434\u0435\u043a\u0441 \u0423\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432         <\/span>\n    <\/div>\n            <div class=\"container-fluid body small-version\">\n        <div class=\"row\">\n            <div>\n                <div class=\"col-xs-12 text-center \">\n                                            <div id=\"left-column-title-container\">\n                            <h3 class=\"review-title\">Sanatorium Uzdrowiskowe \u201eBa\u0142tyk\u201d<\/h3>\n                        <\/div>\n                                                                <div class=\"col-rating\">\n                                                            <div class=\"rating-text\">&quot;\u0445\u043e\u0440\u043e\u0448\u043e&quot;<\/div>\n                                                            <div class=\"rating-value\">\n        77%\n    <\/div>\n                        <\/div>\n\n                        <div class=\"col-text\">\n                                                            <div class=\"review-count\">\n                                    2,589 \u043e\u0446\u0435\u043d\u043e\u043a\n                                <\/div>\n                            \n                                                            <div class=\"number-of-portals\">\u043d\u0430 14 \u043f\u043e\u0440\u0442\u0430\u043b\u0430\u0445<\/div>\n                            \n                            \n                                                            <div class=\"random-comment\">\n                                    <p class=\"random-comment-text\">Przebywa\u0142am w obiekcie w okresie Sylwestra i Nowego Roku. Ws...\n                                        <a class=\"random-comment-link\" href=\"https:\/\/reviews.customer-alliance.com\/hotel\/sanatorium-uzdrowiskowe-baltyk-kolobrzeg-83e1991e2a5d3362.html?_locale=ru\" target=\"_blank\">\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435<\/a>\n                                    <\/p>\n                                <\/div>\n                                                    <\/div>\n                                                            <\/div>\n            <\/div>\n\n            \n                            <div class=\"col-xs-12 text-center\">\n                                    <div class=\"container-buttons\">\n                                            <a id=\"btn-certificate\" class=\"btn\" href=\"https:\/\/reviews.customer-alliance.com\/hotel\/sanatorium-uzdrowiskowe-baltyk-kolobrzeg-83e1991e2a5d3362.html?_locale=ru\" target=\"_blank\">\n                            \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0437\u044b\u0432\u044b\n                        <\/a>\n                                            <a class=\"btn\"  id=\"btn-booking\" title=\"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441\" href=\"https:\/\/widget.customer-alliance.com\/book\/ea976a7df169b502\" target=\"_blank\" style=\"background-color: #34a299;\">\n        \u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441    <\/a>\n                <\/div>\n            \n                <\/div>\n                    <\/div>\n    <\/div>\n<\/div>\n",
                    styles: {"right":"%widget_width%px","top":"50%","marginTop":"-%half_tooltip_height%px"},
                    zIndex: 99999,
                    transform: [2,6].indexOf(2) !== -1 ? 'perspective(1px) translate(0, -50%)' : ''
                }
            },
            mobile: {
                widget: {
                    width: '96px',
                    height: '96px',
                    body: "<style type=\"text\/css\">\n    #widget-mobile {\n        background-color: #009ccc;\n                display: inline-block;\n        border-radius: 50%;\n        width: 72px;\n        height: 72px;\n        margin: 12px;\n        padding: 12px;\n        color: #fff;\n        text-align: center;\n        font-size: 24px;\n        line-height: 48px;\n        box-shadow: 1px 1px 1px rgba(0,0,0,0.6);\n        cursor: pointer;\n        \/* disable text-highlighting on mobile devices *\/\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        outline-style:none; \/*IE*\/\n    }\n    #widget-mobile::before {\n        content: url(\"data:image\/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTFweCIgdmlld0JveD0iMCAwIDE1IDExIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMzUwX2NoZWNrbWFyay1jb3B5LTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiCiAgICAgICAgICAgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEuMDY5MiIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjU2NzM0ODQ0LDkuMDcyMzI0MDEgQzMuNDg0MzI2NTIsOS4wNzIzMjQwMSAzLjQwMTMwNDU5LDkuMDQyODM4OTYgMy4zMzgwNjUyMyw4Ljk4MzcxNzY1IEwwLjA5NTAyMTE5MDMsNS45NTk2MDk2NCBDLTAuMDMxNjE5Njc5NCw1Ljg0MTUxODIzIC0wLjAzMTYxOTY3OTQsNS42NTAwOTIxOSAwLjA5NTAyMTE5MDMsNS41MzIwMDA3NyBDMC4yMjE2NjIwNiw1LjQxMzkwOTM1IDAuNDI2OTQ2NzQ4LDUuNDEzOTA5MzUgMC41NTM3NDk3Nyw1LjUzMjAwMDc3IEwzLjU2NzUxMDYsOC4zNDIzMDQzNCBMMTIuNDE4NzUwNywwLjA4ODYwNjM2NDUgQzEyLjU0NTM5MTYsLTAuMDI5NDg1MDUzIDEyLjc1MDY3NjIsLTAuMDI5NDg1MDUzIDEyLjg3NzMxNzEsMC4wODg2MDYzNjQ1IEMxMy4wMDM5NTgsMC4yMDY2OTc3ODIgMTMuMDAzOTU4LDAuMzk4MTIzODE5IDEyLjg3NzMxNzEsMC41MTYzNjY0NDIgTDMuNzk2NzkzODEsOC45ODM4Njg4NSBDMy43MzMzOTIzLDkuMDQyODM4OTYgMy42NTA1MzI1Miw5LjA3MjQ3NTIyIDMuNTY3NTEwNiw5LjA3MjQ3NTIyIEwzLjU2NzM0ODQ0LDkuMDcyMzI0MDEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K\");\n        position: absolute;\n        display:inline-block;\n        top: 0;\n        left: 50%;\n        margin: 0 0 0 -6px;\n        padding: 0;\n    }\n<\/style>\n\n<div id=\"widget-mobile\">\n        <div class=\"rating-value\">\n        77%\n    <\/div>\n<\/div>\n",
                    styles: {"right":0,"top":"50%","marginTop":"-%half_widget_height%px"},
                    zIndex: 99998
                },
                tooltip: {
                    body: "\n<div class=\"tooltip-fullscreen\">\n    <div style=\"background-color: #009ccc\" class=\"header\">\n        <div class=\"brand\" ><\/div>\n        <h1 class=\"title\">\n                         \u0418\u043d\u0434\u0435\u043a\u0441 \u0423\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432         <\/h1>\n        <div class=\"modal-close-row\">\n            <button id=\"modal-close-button\" class=\"modal-close-button-\"><\/button>\n        <\/div>\n    <\/div>\n    <div class=\"body\">\n        <div class=\"body-inner\">\n\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-xs-10 col-xs-push-1 col-sm-push-2 col-sm-8 text-center\">\n                        <div class=\"col-rating\">\n                                                        <img class=\"checkmark-image\" width=\"16\" height=\"11\" src=\"data:image\/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OTdweCIgaGVpZ2h0PSIyNjZweCIgdmlld0JveD0iMCAwIDQ5NyAyNjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+YmFja2dyb3VuZCBjb2xvciBjb3B5IDI8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+ICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDk3IiBoZWlnaHQ9IjI2NS4yIj48L3JlY3Q+ICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjExOS41MzUxNDcgMCAwLjA3MDI5NDExNzYgMCAwLjA3MDI5NDExNzYgMjM4LjkyOTcwNiAyMzkgMjM4LjkyOTcwNiAyMzkgMCI+PC9wb2x5Z29uPiAgICA8L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImJhY2tncm91bmQtY29sb3ItY29weS0yIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNGQkZCRkIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgIDxnIGlkPSJiYWNrZ3JvdW5kLWNvbG9yIiBvcGFjaXR5PSIwLjI5NzE1ODA2MiIgbWFzaz0idXJsKCNtYXNrLTIpIj4gICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQxLjAwMDAwMCwgNTMuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTc0LjMzMTc0LDE1MC4yODczMDggQzE3Mi44ODEyODMsMTQ5LjU4MTEwMSAxNzEuMTQ1NjAzLDE1MC4yMjE1ODcgMTcwLjQ1OTIxNSwxNTEuNzE3NjQ2IEMxNjcuMzE4Mjk2LDE1OC41NzI5OTIgMTYwLjUzNzg5OCwxNjMuMDAyNjE4IDE1My4xODU4OTgsMTYzLjAwMjYxOCBDMTUwLjM3MzA5OSwxNjMuMDAyNjE4IDE0Ny42NjQ2NSwxNjIuMzg4NDIxIDE0NS4xMzgyMzQsMTYxLjE3NDM2NyBDMTQzLjY3OTY2LDE2MC40NzY1MjQgMTQxLjk1MDkzNywxNjEuMTI2NTY5IDE0MS4yNzI2NjUsMTYyLjYyNzQwOCBDMTQwLjU5NDM5MywxNjQuMTI4MjQ3IDE0MS4yMjUxMjgsMTY1LjkxMjI4NiAxNDIuNjgxMzgzLDE2Ni42MTEzMjQgQzE0NS45ODQ2MjQsMTY4LjE5NzAwMyAxNDkuNTE3NDM0LDE2OSAxNTMuMTg1ODk4LDE2OSBDMTYyLjc3NzkzNCwxNjkgMTcxLjYyMzI5MiwxNjMuMjIxMjkxIDE3NS43MjA3NDgsMTU0LjI3OTU4OCBDMTc2LjQwNzEzNiwxNTIuNzgyMzM0IDE3NS43ODQ1MTcsMTUwLjk5NTkwNSAxNzQuMzMxNzQsMTUwLjI4NzMwOCIgaWQ9IkZpbGwtMTciIGZpbGw9IiNEOEQ4RDgiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDEsNjMuMDE4IEMxMDEuMDA5LDYzLjAxMiAxMDEuMDE3LDYzLjAwNiAxMDEuMDI2LDYzIEMxMDEuMDE3LDYzLjAwNiAxMDEuMDA5LDYzLjAxMiAxMDEsNjMuMDE4IiBpZD0iRmlsbC0xOCIgZmlsbD0iIzNDNUY5QyI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIyIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+ICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMjAiPjwvZz4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA3LjIxNDkzMSw1OC40Njk0NzU1IEMxMDcuMjQ3NzM1LDU4LjQ1MDczMDQgMTA3LjI4MTcxMSw1OC40MzA4MTM3IDEwNy4zMTQ1MTUsNTguNDEyMDY4NiBDMTA3LjI4MTcxMSw1OC40MzA4MTM3IDEwNy4yNDg5MDcsNTguNDUwNzMwNCAxMDcuMjE0OTMxLDU4LjQ2OTQ3NTUiIGlkPSJGaWxsLTE5IiBmaWxsPSIjM0M1RjlDIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYxLjcwNjkzMSwxOTkuNDc4MzA0IEMxNTguMjgwMDkzLDIwMC43Mjk1MzkgMTY4LjM1Njc1NSwxODcuMDc5NTkzIDE2MC40ODI2NDIsMTgzLjYwMDAzNCBDMTU0LjI2Mzk1NiwxODUuNDU5MzE0IDE0Ny42Nzk3NCwxODYuNDY4MDM0IDE0MC44NTY1MjUsMTg2LjQ2ODAzNCBDMTMzLjM5NzE0NywxODYuNDY4MDM0IDEyNi4yMjM2MzIsMTg1LjI1ODk3NSAxMTkuNTAyMzQzLDE4My4wNTE3NCBDMTEyLjc3NTE5NiwxODUuMjYyNDkgMTA1LjU5MjMwOSwxODYuNDY4MDM0IDk4LjEyNDczMDQsMTg2LjQ2ODAzNCBDNjAuMzM0NjEyNywxODYuNDY4MDM0IDI5LjcwMDQzNjMsMTU1LjgzMzg1OCAyOS43MDA0MzYzLDExOC4wNDQ5MTIgQzI5LjcwMDQzNjMsODAuMjU0Nzk0MSA2MC4zMzQ2MTI3LDQ5LjYyMDYxNzYgOTguMTI0NzMwNCw0OS42MjA2MTc2IEMxMDUuNTg4Nzk0LDQ5LjYyMDYxNzYgMTEyLjc2NTgyNCw1MC44MzIwMTk2IDExOS40OTA2MjcsNTMuMDQxNTk4IEMxMjYuMjE1NDMxLDUwLjgzMjAxOTYgMTMzLjM5MjQ2MSw0OS42MTk0NDYxIDE0MC44NTY1MjUsNDkuNjE5NDQ2MSBDMTc4LjY0NjY0Miw0OS42MTk0NDYxIDIwOS42NDk4NjMsODAuMjU3MTM3MyAyMDkuMjgwODE5LDExOC4wNDQ5MTIgQzIwOC42NTc1NDQsMTgxLjkwNzExOCAxNjEuNzA2OTMxLDE5OS40NzgzMDQgMTYxLjcwNjkzMSwxOTkuNDc4MzA0IFogTTE4Mi41NDMyNzksMCBMNTYuNDU2NzIwNiwwIEMyNS40MDU0NjU3LDAgMCwyNS40MDU0NjU3IDAsNTYuNDU2NzIwNiBMMCwxODIuNTQzMjc5IEMwLDIxMy41OTQ1MzQgMjUuNDA1NDY1NywyMzkgNTYuNDU2NzIwNiwyMzkgTDE4Mi41NDMyNzksMjM5IEMyMTMuNTk0NTM0LDIzOSAyMzksMjEzLjU5NDUzNCAyMzksMTgyLjU0MzI3OSBMMjM5LDU2LjQ1NjcyMDYgQzIzOSwyNS40MDU0NjU3IDIxMy41OTQ1MzQsMCAxODIuNTQzMjc5LDAgTDE4Mi41NDMyNzksMCBaIiBpZD0iRmlsbC0yMSIgZmlsbD0iI0Q4RDhEOCIgbWFzaz0idXJsKCNtYXNrLTQpIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzIuODI3MjI5OSwxMTguNTAwNTg2IEM3Mi44MjcyMjk5LDg4LjE0MDcxOTMgOTIuNjA1ODM2OCw2Mi40MTAxODk1IDExOS45ODgyNTgsNTMuNDI0Nzk0NyBDMTEzLjI0ODYyLDUxLjIxMjc1MjcgMTA2LjA1NTc1OSw1MCA5OC41NzUyMzA2LDUwIEM2MC43MDE3NTIxLDUwIDMwLDgwLjY2ODMzMzIgMzAsMTE4LjUwMDU4NiBDMzAsMTU2LjMzMjg0IDYwLjcwMTc1MjEsMTg3IDk4LjU3NTIzMDYsMTg3IEMxMDYuMDU5MjgyLDE4NyAxMTMuMjU4MDE0LDE4NS43OTMxMTIgMTIwLDE4My41Nzk4OTcgQzkyLjYxMTcwNzYsMTc0LjU5Njg0OCA3Mi44MjcyMjk5LDE0OC44NjM5NzIgNzIuODI3MjI5OSwxMTguNTAwNTg2IiBpZD0iRmlsbC0yMyIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMC4zNTE3MzIzMzciPjwvcGF0aD4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==\">\n                                                            <div class=\"rating-text\">&quot;\u0445\u043e\u0440\u043e\u0448\u043e&quot;<\/div>\n                                                            <div class=\"rating-value\">\n        77%\n    <\/div>\n                        <\/div>\n\n                        <div class=\"col-text\">\n                                                            <div class=\"review-count\">\n                                    2,589 \u043e\u0446\u0435\u043d\u043e\u043a\n                                <\/div>\n                                                                                                                    <div class=\"number-of-portals\">\u043d\u0430 14 \u043f\u043e\u0440\u0442\u0430\u043b\u0430\u0445<\/div>\n                                                        \n                                \n                                                            <div class=\"random-comment nomargin\">\n    \n    <p class=\"random-comment-text\">Przebywa\u0142am w obiekcie w okresie Sylwestra i Nowego Roku. Ws...\n                    <a class=\"random-comment-link\" href=\"https:\/\/reviews.customer-alliance.com\/hotel\/sanatorium-uzdrowiskowe-baltyk-kolobrzeg-83e1991e2a5d3362.html?_locale=ru\" target=\"_blank\">\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435<\/a>\n            <\/p>\n<\/div>\n                                                    <\/div>\n                    <\/div>\n\n                                    <\/div>\n            <\/div>\n        <\/div>\n    <\/div>\n    <div class=\"footer\">\n        <div class=\"container-buttons\">\n                            <a class=\"btn\" style=\"background-color: #009ccc\" title=\"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0437\u044b\u0432\u044b\" href=\"https:\/\/reviews.customer-alliance.com\/hotel\/sanatorium-uzdrowiskowe-baltyk-kolobrzeg-83e1991e2a5d3362.html?_locale=ru\" target=\"_blank\">\n                    <span class=\"ellipsis\">\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0437\u044b\u0432\u044b<\/span>\n                <\/a>\n                            <a class=\"btn\"   title=\"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441\" href=\"https:\/\/widget.customer-alliance.com\/book\/ea976a7df169b502\" target=\"_blank\" style=\"background-color: #34a299;\">\n        <span class=\"ellipsis\">\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441<\/span>    <\/a>\n        <\/div>\n    <\/div>\n<\/div>\n",
                    width: '100%',
                    styles: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 99999,
                        opacity: 1
                    }
                }
            }
        }
    };

    function getOrigin(location) {
        var plainProtocolName, portNumberWithSeparator;

        // modern clients provide `origin` property automatically
        if (location.origin) {
            return location.origin;
        }

        // begin polyfill:
        // replaces colons, etc. so 'http:' becomes 'http' in all browsers, so appending '://' works always
        plainProtocolName = location.protocol.replace(/[^a-z]/, '');
        // if non-standard port is used, we need to specify port number and prepend it with a colon
        portNumberWithSeparator = ['', '80', '443'].indexOf(String(location.port)) === -1 ? ':' + location.port : '';

        return plainProtocolName + '://' + location.hostname + portNumberWithSeparator;
    }

    /**
     * @param {HTMLIFrameElement} frame
     * @param {String} content
     */
    function setFrameContent(frame, content) {
        frame.contentWindow.document.open();
        frame.contentWindow.document.write(content);
        frame.contentWindow.document.close();
    }

    /**
     * @param {string} body
     * @returns {string}
     */
    function renderFrameBody(body) {
        return settings.template.replace(settings.placeholder, body);
    }

    /**
     *
     * @param {Element} target
     * @param {String} property
     * @param {*} value
     */
    function setStyleProperty(target, property, value) {
        if (typeof target.style.setProperty === 'function') {
            target.style.setProperty(property === 'zIndex' ? 'z-index' : property, String(value), 'important');
        } else {
            target.style[property] = value;
        }
    }


    function getFrameDimensions(frame) {
        var element = frame.contentDocument.body;
        return {
            width: (element.scrollWidth || element.offsetWidth),
            height: (element.scrollHeight || element.offsetHeight)
        };
    }

    /**
     * Reset width if widget iframe width doesn't match hardcoded value
     * @param {HTMLIFrameElement} frame
     * @param {*} preset
     */
    function resetFrameWidth(frame, preset) {
        if (preset && frame.style.width !== preset) {
            setStyleProperty(frame, 'width', preset);
        }
    }

    /**
     *
     * @param {HTMLIFrameElement} widgetFrame
     * @param {object} options
     */
    function positionWidget(widgetFrame, options) {
        var attr, value, frameSize = getFrameDimensions(widgetFrame);
        for(attr in options.styles) {
            if (options.styles.hasOwnProperty(attr)) {
                value = String(options.styles[attr])
                        .replace('%half_widget_width%', String(Math.ceil(frameSize.width / 2)))
                        .replace('%half_widget_height%', String(Math.ceil(frameSize.height / 2)));
                setStyleProperty(widgetFrame, attr, value);
            }
        }
        resetFrameWidth(widgetFrame, options.width);
        setStyleProperty(widgetFrame, 'height', frameSize.height + 'px');
    }

    function calculateMaximumDimension(wanted, constraint, offset) {
        var numWanted = parseInt(wanted, 10);
        var numConstraint = parseInt(constraint, 10);
        var numOffset = parseInt(offset, 10) || 0;
        var numTotal = numWanted + numOffset;
        if ((numConstraint - numTotal) < 0) {
            return numWanted + (numConstraint - numTotal);
        }

        return numWanted;
    }

    function positionTooltipFrame() {
        var widgetFrame = settings.frames.widget;
        var tooltipFrame = settings.frames.tooltip;
        var tooltipSize = getFrameDimensions(tooltipFrame);
        var widgetSize = getFrameDimensions(widgetFrame);
        var attr, value, styles = settings.mode[getMode()].tooltip.styles;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        for(attr in styles) {
            if (styles.hasOwnProperty(attr)) {
                value = String(styles[attr])
                    .replace('%half_widget_width%', String(Math.ceil(widgetSize.width/2)-settings.widgetCenterOffset))
                    .replace('%widget_width%', widgetSize.width)
                    .replace('%half_widget_height%', String(Math.ceil(widgetSize.height/2)-settings.widgetCenterOffset))
                    .replace('%widget_height%', widgetSize.height)
                    .replace('%half_tooltip_width%', String(Math.ceil(tooltipSize.width/2)))
                    .replace('%half_tooltip_height%', String(Math.ceil(tooltipSize.height/2)));
                setStyleProperty(tooltipFrame, attr, value);
            }
        }
        resetFrameWidth(tooltipFrame, settings.mode[getMode()].tooltip.width);
        setStyleProperty(tooltipFrame, 'height', styles.height || tooltipSize.height + 'px');
        if (getMode() === 'desktop') {
            // resize tooltip so it fits viewport
            if ((settings.orientation === 'horizontal' && [2,6].indexOf(settings.position) !== -1) || (settings.orientation === 'vertical' && [0,4].indexOf(settings.position) === -1)) {
                // do nothing on media-query fail, most like IE8 or worse
                if (windowWidth > 768) {
                    setStyleProperty(tooltipFrame, 'width', calculateMaximumDimension(styles.width || tooltipSize.width, windowWidth, settings.frames.widget.style.width) + 'px');
                }
            } else {
                setStyleProperty(tooltipFrame, 'width', styles.width || tooltipSize.width);
            }
        }

        track('expand', 'widget');
        settings.expanded = true;
    }

    /**
     * @param {object} options
     * @param {String} name
     * @param {String} state
     * @returns {HTMLIFrameElement}
     */
    function attachFrame(options, name, state) {
        var frame = document.createElement('iframe');

        frame.setAttribute('name', 'ca-review-'+name);
        frame.setAttribute('frameBorder', '0');
        frame.setAttribute('scrolling', 'no');
        frame.setAttribute('border', '0');
        frame.setAttribute('marginheight', '0');
        frame.setAttribute('marginwidth', '0');
        frame.setAttribute('hspace', '0');
        frame.setAttribute('vspace', '0');
        frame.setAttribute('allowtransparency', 'true');
        frame.frameBorder = 0;

        setStyleProperty(frame, 'margin', 0);
        setStyleProperty(frame, 'padding', 0);
        setStyleProperty(frame, 'width', options.width || 0);
        setStyleProperty(frame, 'height', options.height || 0);
        setStyleProperty(frame, 'display', 'block');
        if (options.zIndex) {
            setStyleProperty(frame, 'zIndex', options.zIndex);
        }
        if (options.transform) {
            setStyleProperty(frame, '-ms-transform', options.transform);
            setStyleProperty(frame, '-webkit-transform', options.transform);
            setStyleProperty(frame, 'transform', options.transform);
        }

        if (hasWidgetContainer()) {
            // reset zIndex when placed relative
            if (name === 'widget') {
                setStyleProperty(frame, 'zIndex', 0);
            }

            setStyleProperty(frame, 'position', state === 'mobile' && name === 'tooltip' ? 'fixed' : 'absolute');
            document.getElementById('ca-widget-container').appendChild(frame);
        } else {
            setStyleProperty(frame, 'position', 'fixed');
            // must be attached to parent if "document.write" hack is supposed to work
            document.body.appendChild(frame);
        }

        setFrameContent(frame, renderFrameBody(options.body));

        return frame;
    }

    /**
     * @return {bool}
     */
    function hasWidgetContainer()
    {
        return document.getElementById('ca-widget-container') !== null;
    }

    /**
     * @returns {string}
     */
    function getMode() {
        return isMobile() ? 'mobile' : 'desktop';
    }

    function setMode(event) {
        var state = getMode();
        if (state !== settings.state) {
            settings.state = state;
            for (var name in settings.frames) {
                if (settings.frames.hasOwnProperty(name)) {
                    if (settings.frames[name] !== null) {
                        // remove the iframe on resize
                        settings.frames[name].outerHTML = '';
                    }
                    // attach the iframe again
                    settings.frames[name] = attachFrame(settings.mode[state][name], name, state);
                }
            }
        } else if (state === 'desktop' && event) { // && event.type === 'resize' doesn't work in IE8
            // remove the tooltip and attach it again
            settings.frames.tooltip.outerHTML = '';
            settings.frames.tooltip = attachFrame(settings.mode[state].tooltip, 'tooltip');
        }
    }

    /**
     * @returns {string}
     */
    function isMobile() {
        return window.matchMedia('screen and (max-width: 768px)').matches;
    }

    function hideTooltip() {
        settings.expanded = false;
        setStyleProperty(settings.frames.tooltip, 'height', 0);
    }

    function detectWidgetWidthMutation() {
        var target = settings.frames.widget;
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (target === settings.frames.widget && mutation.type === 'attributes' &&  mutation.attributeName === 'style') {
                    resetFrameWidth(target, settings.mode[getMode()].widget.width);
                    // observer.disconnect();
                }
            });
        });
        var config = { attributes: true };
        observer.observe(target, config);
    }

    /**
     *
     * @param {MessageEvent} message
     */
    function messageHandler(message) {
        var msg = String(message.data);
        var src = message.source;
        try {
            var frame = (getOrigin(location) && src.frameElement) || null;
            var options = settings.mode[getMode()];

            switch (msg) {
                case 'ca-content-loaded':
                    if (frame && frame === settings.frames.widget) {
                        if (typeof MutationObserver === 'function' && MutationObserver.prototype && MutationObserver.prototype.constructor === MutationObserver) {
                            detectWidgetWidthMutation();
                        }
                        positionWidget(frame, options.widget);
                    } else if (settings.expanded) {
                        positionTooltipFrame();
                    }
                    break;
                case 'tooltip-open':
                    if (!settings.expanded) {
                        positionTooltipFrame();
                    } else if (frame && frame === settings.frames.widget) {
                        hideTooltip();
                    }
                    break;
                case 'tooltip-close':
                    hideTooltip();
                    break;
                case 'mouseenter':
                    clearTimeout(settings.closeTimer);
                    if (!isMobile() && !settings.expanded) {
                        positionTooltipFrame();
                    }
                    break;
                case 'mouseleave':
                    if (readyFired && !isMobile() && settings.expanded) {
                        settings.closeTimer = setTimeout(hideTooltip, settings.closeDelay);
                    }
                    break;
            }
        } catch (DOMException) {}
    }

    /**
     * Attach event to Element with IE8 fallback
     * @param {String} event
     * @param {Function} handler
     * @param {Element} [target] default: `window`
     */
    function on(event, handler, target) {
        var eventTarget = target || window;
        if (eventTarget.addEventListener) {
            eventTarget.addEventListener(event, handler, false);
        } else if (eventTarget.attachEvent) {
            eventTarget.attachEvent('on' + event, handler);
        }
    }

    function ready() {
        if (!readyFired) {
            readyFired = true;
            setMode();
            on('resize', debounce(setMode, 125));
            on('message', messageHandler);
            on('click', hideTooltip);
            setTimeout(setTrackingEvents, 1000);
        }
    }

    function readyStateChange() {
        if ( document.readyState === 'complete' ) {
            ready();
        }
    }

    if (document.readyState === 'complete') {
        setTimeout(ready, 1);
    } else {
        if (document.addEventListener) {
            // first choice is DOMContentLoaded event
            document.addEventListener('DOMContentLoaded', ready, false);
            // backup is window load event
            window.addEventListener('load', ready, false);
        } else {
            // must be IE, 'DOMContentLoaded' (may) never fires
            document.attachEvent('onreadystatechange', readyStateChange);
            window.attachEvent('onload', ready);
        }
    }

    /**
     * Attach google tracking events.
     */
    function setTrackingEvents() {
        var tooltip = settings.frames.tooltip.contentDocument;
        var widget = settings.frames.widget.contentDocument;

        var bookingBtn = tooltip.getElementById('btn-booking');
        var certificateBtn = tooltip.getElementById('btn-certificate');
        var seeMoreLink = widget.getElementById('see-more-link');

        on('click', trackHandler, bookingBtn);
        on('click', trackHandler, certificateBtn);
        on('click', trackHandler, seeMoreLink);
    }

    /**
     * @param {MouseEvent} event
     */
    function trackHandler(event) {
        var targets = ['btn-booking', 'btn-certificate', 'see-more-link'];

        if (targets.indexOf(event.target.id) < 0) {
            return;
        }

        track('click', event.target.id);
    }

    /**
     * @param {String} action
     * @param {String} label
     */
    function track(action, label) {
        try {
            if (typeof parent.ga === 'function') {
                parent.ga('send', 'event', 'ca-widget', action, label);
            }

            else if (typeof parent._gaq === 'object' && typeof parent._gaq.push === 'function') {
                parent._gaq.push(['_trackEvent','ca-widget', action, label]);
            }
        } catch (DOMException) {}
    }
})();
