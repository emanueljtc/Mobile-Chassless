!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var n=document.getElementById("options"),o=document.getElementById("arrowUp"),d=document.getElementById("arrowDown"),l=document.getElementById("line"),r=document.getElementById("buttonKeyboard"),c=document.getElementById("buttonCombo"),a=document.getElementById("Keyboard"),u=document.getElementById("combo");o.addEventListener("click",function(){n.classList.replace("hide","show"),o.classList.replace("show","hide"),d.classList.replace("hide","show"),r.classList.contains("hide")&&(l.classList.remove("show"),l.classList.add("hide"));r.disabled=!1,c.disabled=!1}),d.addEventListener("click",function(){n.classList.replace("show","hide"),o.classList.replace("hide","show"),d.classList.replace("show","hide"),l.classList.remove("hide"),r.disabled=!0,c[i].disabled=!0}),r.addEventListener("click",function(){a.classList.remove("hide"),u.classList.add("hide"),r.classList.remove("show"),r.classList.add("hide"),c.classList.remove("hide"),c.classList.add("show_null"),l.classList.add("hide")}),c.addEventListener("click",function(){a.classList.add("hide"),a.classList.remove("show"),u.classList.remove("hide"),u.classList.add("show"),c.classList.remove("show_null"),c.classList.add("hide"),r.classList.remove("hide"),r.classList.add("show_null"),l.classList.remove("hide")})}]);