(()=>{var r={857:(r,e,t)=>{"use strict";function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}t.r(e),t.d(e,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>v,bindActionCreators:()=>E,combineReducers:()=>y,compose:()=>O,createStore:()=>s,legacy_createStore:()=>d});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(r){if("object"!=typeof r||null===r)return!1;for(var e=r;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function s(r,e,t){var n;if("function"==typeof e&&"function"==typeof t||"function"==typeof t&&"function"==typeof arguments[3])throw new Error(i(0));if("function"==typeof e&&void 0===t&&(t=e,e=void 0),void 0!==t){if("function"!=typeof t)throw new Error(i(1));return t(s)(r,e)}if("function"!=typeof r)throw new Error(i(2));var o=r,c=e,f=[],d=f,y=!1;function l(){d===f&&(d=f.slice())}function E(){if(y)throw new Error(i(3));return c}function O(r){if("function"!=typeof r)throw new Error(i(4));if(y)throw new Error(i(5));var e=!0;return l(),d.push(r),function(){if(e){if(y)throw new Error(i(6));e=!1,l();var t=d.indexOf(r);d.splice(t,1),f=null}}}function v(r){if(!p(r))throw new Error(i(7));if(void 0===r.type)throw new Error(i(8));if(y)throw new Error(i(9));try{y=!0,c=o(c,r)}finally{y=!1}for(var e=f=d,t=0;t<e.length;t++)(0,e[t])();return r}function b(r){if("function"!=typeof r)throw new Error(i(10));o=r,v({type:a.REPLACE})}function h(){var r,e=O;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(i(11));function t(){r.next&&r.next(E())}return t(),{unsubscribe:e(t)}}})[u]=function(){return this},r}return v({type:a.INIT}),(n={dispatch:v,subscribe:O,getState:E,replaceReducer:b})[u]=h,n}var d=s;function y(r){for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var o=e[n];"function"==typeof r[o]&&(t[o]=r[o])}var c,u=Object.keys(t);try{!function(r){Object.keys(r).forEach((function(e){var t=r[e];if(void 0===t(void 0,{type:a.INIT}))throw new Error(i(12));if(void 0===t(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(i(13))}))}(t)}catch(r){c=r}return function(r,e){if(void 0===r&&(r={}),c)throw c;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=t[a],s=r[a],d=p(s,e);if(void 0===d)throw e&&e.type,new Error(i(14));o[a]=d,n=n||d!==s}return(n=n||u.length!==Object.keys(r).length)?o:r}}function l(r,e){return function(){return e(r.apply(this,arguments))}}function E(r,e){if("function"==typeof r)return l(r,e);if("object"!=typeof r||null===r)throw new Error(i(16));var t={};for(var n in r){var o=r[n];"function"==typeof o&&(t[n]=l(o,e))}return t}function O(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return 0===e.length?function(r){return r}:1===e.length?e[0]:e.reduce((function(r,e){return function(){return r(e.apply(void 0,arguments))}}))}function v(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return function(){var t=r.apply(void 0,arguments),n=function(){throw new Error(i(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=e.map((function(r){return r(o)}));return n=O.apply(void 0,u)(t.dispatch),c(c({},t),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",INCREMENTO_IMPAR:"INCREMENTO_IMPAR",INCREMENTO_ASYNC:"INCREMENTO_ASYNC"}},518:(r,e,t)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTO_IMPAR:c,INCREMENTO_ASYNC:i}=t(883);r.exports={incremento:()=>({type:n}),decremento:()=>({type:o}),incrementoImpar:()=>({type:c}),incrementoAsync:()=>({type:i})}},616:(r,e,t)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTO_IMPAR:c,INCREMENTO_ASYNC:i}=t(883),u={contador:0};r.exports=function(r=u,e){switch(e.type){case n:return{...r,contador:r.contador+1};case o:return{...r,contador:r.contador-1};case c:let e=1;return r.contador%2!=0&&e++,{...r,contador:r.contador+e};case i:return console.log("a"),{...r,contador:r.contador+1};default:return r}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return r[n](c,c.exports,t),c.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=t(857),e=t(616),{incremento:n,decremento:o,incrementoImpar:c,incrementoAsync:i}=t(518);var u=r(e),f=document.querySelector("#valor");function a(){f.innerHTML=u.getState().contador}a(),u.subscribe((()=>{a()})),document.querySelector("#incremento").addEventListener("click",(()=>{u.dispatch(n())})),document.querySelector("#decremento").addEventListener("click",(()=>{u.dispatch(o())})),document.querySelector("#incrementoImpar").addEventListener("click",(()=>{u.dispatch(c())})),document.querySelector("#incrementoAsync").addEventListener("click",(()=>{setTimeout((()=>{u.dispatch(i())}),1e3)}))})()})();