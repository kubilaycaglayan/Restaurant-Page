!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],u=n[d]||0,s="".concat(d," ").concat(u);n[d]=u+1;var l=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:s,updater:b(f,t),references:1}),o.push(s)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var i=m++;n=h||(h=u(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=u(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=d(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap);"]),t.push([e.i,'body{font-family:"Lora",serif;padding-top:200px;overflow-y:scroll;min-height:100vh;background-color:#dc3545}body .header{background-color:#dc3546c9;border-bottom:10px #fff solid}body .header h1{font-size:5vw}body .header .button{border-top-left-radius:20%;border-top-right-radius:20%;cursor:pointer}@media(max-width: 768px){body .header .button{font-size:13px}}body .menu img{width:40vw}@media(max-width: 768px){body .menu img{width:80vw}}@media(min-width: 1250px){body .menu img{width:30vw}}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";function o(e,t){const n=document.createElement(e);return n.className=t,n}function r(e,t,n){const o=document.createElement(e);return o.className=t,o.innerHTML=n,o}function i(e,t,n){const o=new Image;return o.src=e,o.alt=t,o.className=n,o}n.r(t);const a=()=>{const e=o("div","header pt-3 text-center text-white fixed-top"),t=r("h1","","Welcome To The Michelin's Place");return e.appendChild(t),e.appendChild((()=>{const e=o("div","try d-flex justify-content-center");return[r("div","button","Main"),r("div","button","Menu"),r("div","button","Contact")].forEach(t=>{e.appendChild(t)}),e})()),e};var c=n.p+"69c089055bf732edfae8317f6a43f78d.png",d=n.p+"b102c2d17006c7c96d2e58fec56afa99.png";const u=()=>{const e=[],t=o("div","text-center"),n=i(c,"single michelin star","w-25 rounded");e.push(n);const a=o("section","text-white lead");e.push(a);[r("p","","In our wonderful restaurant, you will find unique fusion tastes from different cultures."),r("p",""," Once you eat here, you will never forget this experience."),r("p",""," To order your meal, you can scan the qr code in your table, and follow the instructions.")].forEach(e=>{a.appendChild(e)});const u=i(d,"fusion dish","w-50");return e.push(u),e.forEach(e=>{t.appendChild(e)}),t},s=()=>{const e=document.createElement("div"),t=document.createElement("p");return t.innerHTML="fusion-cuisine@eathere.com",e.appendChild(t),e.className="p-2 pt-3 text-center text-white m-0",e};var l=n.p+"45bbda6afb430cb57d48274535d8d939.png",f=n.p+"fdced79281544a3e938e5fe14d410101.png",p=n.p+"18360c59dca36ea19857721748b9ccf6.png",h=n.p+"f9887902122154f841ddb25ad2082019.png";const m=()=>{const e=o("div","container-fluid menu");let t;return[l,f,p,h].forEach((n,a)=>{a%2==0&&(t=o("div","row mb-4 px-5 mx-3"));const c=o("div","col-md-6 text-center"),d=i(n,"dish "+a,""),u=r("div","text-white lead pb-3",`Option ${a+1}: Marinated with sauce.`);c.appendChild(u),c.appendChild(d),t.appendChild(c),a%2==1&&e.appendChild(t)}),e},b={"Manager:":"Degustator Definitive","E-mail:":"fusion-cuisine@eathere.com","Address:":"Neighborhood","Telephone:":"0-555-55-666-321"},v=()=>{const e=o("div","table-wrapper w-50 mx-auto my-5"),t=o("table","table text-white"),n=o("tbody","");return Object.keys(b).forEach(e=>{const t=o("tr",""),i=r("th","",e);i.scope="row";const a=r("td","",b[e]);t.appendChild(i),t.appendChild(a),n.appendChild(t)}),t.appendChild(n),e.appendChild(t),e};n(0);document.getElementById("content").appendChild(a());const y=(e=0)=>{!function(){const e=document.getElementById("content").childNodes;e&&[...e].forEach((e,t)=>{0!==t&&e.remove()})}();const t=function(e){let t;switch(e){case 1:t=[m];break;case 2:t=[v];break;default:t=[u]}return t.push(s),t}(e),n=document.getElementById("content");t.forEach(e=>{n.appendChild(e())}),(e=>{[0,1,2].forEach(t=>{let n;t===e?(n=document.getElementsByClassName("button")[t],n.className="button px-4 pt-2 text-danger bg-light lead"):(n=document.getElementsByClassName("button")[t],n.className="button px-4 pt-2 lead")})})(e)};y();[...document.getElementsByClassName("button")].forEach((e,t)=>{e.addEventListener("click",y.bind(void 0,t))})}]);