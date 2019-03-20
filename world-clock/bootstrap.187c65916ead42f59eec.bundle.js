/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
var shimFeatures={"no-bootstrap":!0,"intersection-observer":!1,"resize-observer":!1,"web-animations":!1,"build-fetch":!1};window.DojoHasEnvironment&&window.DojoHasEnvironment.staticFeatures&&Object.keys(window.DojoHasEnvironment.staticFeatures).forEach(function(e){shimFeatures[e]=window.DojoHasEnvironment.staticFeatures[e]}),window.DojoHasEnvironment={staticFeatures:shimFeatures},function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("world_clock",[],t):"object"==typeof exports?exports.world_clock=t():e.world_clock=t()}(window,function(){return function(e){function t(t){for(var n,o,i=t[0],a=t[1],u=0,s=[];u<i.length;u++)o=i[u],r[o]&&s.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);s.length;)s.shift()()}var n={},o={0:0},r={0:0};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{1:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var o=({1:"main",2:"platform/IntersectionObserver",3:"platform/ResizeObserver",4:"platform/WebAnimations",5:"platform/client",6:"platform/fetch",7:"platform/pointerEvents"}[e]||e)+"."+{1:"fde7d6c403c2b92ce672",2:"31d6cfe0d16ae931b73c",3:"31d6cfe0d16ae931b73c",4:"31d6cfe0d16ae931b73c",5:"31d6cfe0d16ae931b73c",6:"31d6cfe0d16ae931b73c",7:"31d6cfe0d16ae931b73c"}[e]+".bundle.css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=(c=a[u]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===o||s===r))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var c;if((s=(c=l[u]).getAttribute("data-href"))===o||s===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,n(i)},f.href=r,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){o[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=a);var u,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({1:"main",2:"platform/IntersectionObserver",3:"platform/ResizeObserver",4:"platform/WebAnimations",5:"platform/client",6:"platform/fetch",7:"platform/pointerEvents"}[e]||e)+"."+{1:"99a3b3e3acf2ffaba167",2:"b39bacfbe361366875f2",3:"c43d2b653cf24664ce86",4:"71925fad8d41b6ef3c4b",5:"5d19f5394a6ae10dc271",6:"05e5bfe3c851f1740fd8",7:"12f4c5fb05d9ac49c88a"}[e]+".bundle.js"}(e),u=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,s.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.dojoWebpackJsonpworld_clock=window.dojoWebpackJsonpworld_clock||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;return i(i.s=6)}([function(e,t,n){"use strict";n.r(t),function(e){const n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0;t.default=n}.call(this,n(5))},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"testCache",function(){return r}),n.d(t,"testFunctions",function(){return i}),n.d(t,"load",function(){return s}),n.d(t,"normalize",function(){return l}),n.d(t,"exists",function(){return c}),n.d(t,"add",function(){return f}),n.d(t,"default",function(){return d});var o=n(0);const r={},i={},{staticFeatures:a}=o.default.DojoHasEnvironment||{};"DojoHasEnvironment"in o.default&&delete o.default.DojoHasEnvironment;const u=a?"function"==typeof a?a.apply(o.default):a:{};function s(e,t,n,o){e?t([e],n):n()}function l(e,t){const n=e.match(/[\?:]|[^:\?]*/g)||[];let o=0;const r=function e(t){const r=n[o++];return":"===r?null:"?"===n[o++]?!t&&d(r)?e():(e(!0),e(t)):r}();return r&&t(r)}function c(e){const t=e.toLowerCase();return Boolean(t in u||t in r||i[t])}function f(e,t,n=!1){const o=e.toLowerCase();if(c(o)&&!n&&!(o in u))throw new TypeError(`Feature "${e}" exists and overwrite not true.`);"function"==typeof t?i[o]=t:(r[o]=t,delete i[o])}function d(e){let t;const n=e.toLowerCase();if(n in u)t=u[n];else if(i[n])t=r[n]=i[n].call(null),delete i[n];else{if(!(n in r))throw new TypeError(`Attempt to detect unregistered has feature "${e}"`);t=r[n]}return t}f("public-path",void 0),f("dojo-debug",!1),f("host-browser","undefined"!=typeof document&&"undefined"!=typeof location),f("host-node",function(){if("object"==typeof e&&e.versions&&e.versions.node)return e.versions.node}),f("fetch","fetch"in o.default&&"function"==typeof o.default.fetch,!0),f("es6-array",()=>["from","of"].every(e=>e in o.default.Array)&&["findIndex","find","copyWithin"].every(e=>e in o.default.Array.prototype),!0),f("es6-array-fill",()=>"fill"in o.default.Array.prototype&&1===[1].fill(9,Number.POSITIVE_INFINITY)[0],!0),f("es7-array",()=>"includes"in o.default.Array.prototype,!0),f("es6-map",()=>{if("function"==typeof o.default.Map)try{const e=new o.default.Map([[0,1]]);return e.has(0)&&"function"==typeof e.keys&&d("es6-symbol")&&"function"==typeof e.values&&"function"==typeof e.entries}catch(e){return!1}return!1},!0),f("es6-math",()=>["clz32","sign","log10","log2","log1p","expm1","cosh","sinh","tanh","acosh","asinh","atanh","trunc","fround","cbrt","hypot"].every(e=>"function"==typeof o.default.Math[e]),!0),f("es6-math-imul",()=>"imul"in o.default.Math&&-5===Math.imul(4294967295,5),!0),f("es6-object",()=>d("es6-symbol")&&["assign","is","getOwnPropertySymbols","setPrototypeOf"].every(e=>"function"==typeof o.default.Object[e]),!0),f("es2017-object",()=>["values","entries","getOwnPropertyDescriptors"].every(e=>"function"==typeof o.default.Object[e]),!0),f("es-observable",()=>void 0!==o.default.Observable,!0),f("es6-promise",()=>void 0!==o.default.Promise&&d("es6-symbol"),!0),f("es2018-promise-finally",()=>d("es6-promise")&&void 0!==o.default.Promise.prototype.finally,!0),f("es6-set",()=>{if("function"==typeof o.default.Set){const e=new o.default.Set([1]);return e.has(1)&&"keys"in e&&"function"==typeof e.keys&&d("es6-symbol")}return!1},!0),f("es6-string",()=>["fromCodePoint"].every(e=>"function"==typeof o.default.String[e])&&["codePointAt","normalize","repeat","startsWith","endsWith","includes"].every(e=>"function"==typeof o.default.String.prototype[e]),!0),f("es6-string-raw",()=>{if("raw"in o.default.String){let e=function(e,...t){const n=[...e];return n.raw=e.raw,n}`a\n${1}`;return e.raw=["a\\n"],"a\\n"===o.default.String.raw(e,42)}return!1},!0),f("es2017-string",()=>["padStart","padEnd"].every(e=>"function"==typeof o.default.String.prototype[e]),!0),f("es6-symbol",()=>void 0!==o.default.Symbol&&"symbol"==typeof Symbol(),!0),f("es6-weakmap",()=>{if(void 0!==o.default.WeakMap){const e={},t={},n=new o.default.WeakMap([[e,1]]);return Object.freeze(e),1===n.get(e)&&n.set(t,2)===n&&d("es6-symbol")}return!1},!0),f("microtasks",()=>d("es6-promise")||d("host-node")||d("dom-mutationobserver"),!0),f("postmessage",()=>void 0!==o.default.window&&"function"==typeof o.default.postMessage,!0),f("raf",()=>"function"==typeof o.default.requestAnimationFrame,!0),f("setimmediate",()=>void 0!==o.default.setImmediate,!0),f("dom-mutationobserver",()=>{if(d("host-browser")&&Boolean(o.default.MutationObserver||o.default.WebKitMutationObserver)){const e=document.createElement("div"),t=new(o.default.MutationObserver||o.default.WebKitMutationObserver)(function(){});return t.observe(e,{attributes:!0}),e.style.setProperty("display","block"),Boolean(t.takeRecords().length)}return!1},!0),f("dom-webanimation",()=>d("host-browser")&&void 0!==o.default.Animation&&void 0!==o.default.KeyframeEffect,!0),f("abort-controller",()=>void 0!==o.default.AbortController),f("abort-signal",()=>void 0!==o.default.AbortSignal),f("dom-intersection-observer",()=>d("host-browser")&&void 0!==o.default.IntersectionObserver,!0),f("dom-resize-observer",()=>d("host-browser")&&void 0!==o.default.ResizeObserver,!0),f("dom-pointer-events",()=>d("host-browser")&&void 0!==o.default.onpointerdown,!0),f("build-elide",!1)}.call(this,n(10))},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(0);n(1);function r(e){e&&e.isActive&&e.callback&&e.callback()}function i(e,t){return{destroy:function(){this.destroy=function(){},e.isActive=!1,e.callback=null,t&&t()}}}!function(){let e,t;{const e=[];o.default.addEventListener("message",function(t){t.source===o.default&&"dojo-queue-message"===t.data&&(t.stopPropagation(),e.length&&r(e.shift()))}),t=function(t){e.push(t),o.default.postMessage("dojo-queue-message","*")}}}();let a=function(){let e;return e=function(e){o.default.Promise.resolve(e).then(r)},function(t){const n={isActive:!0,callback:t};return e(n),i(n)}}()},function(e,t,n){"use strict";function o(e,t=!1,n=!0,o=!0){return{value:e,enumerable:t,writable:n,configurable:o}}function r(e){return function(t,...n){return e.apply(t,n)}}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},function(e,t,n){"use strict";n(1);var o=n(0),r=n(3);let i=o.default.Symbol;["hasInstance","isConcatSpreadable","iterator","species","replace","search","split","match","toPrimitive","toStringTag","unscopables","observable"].forEach(e=>{i[e]||Object.defineProperty(i,e,Object(r.a)(i.for(e),!1,!1))})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(7),e.exports=n(9)},function(e,t,n){},,function(e,t,n){var o=n(1);n(11),n(12);var r=[];o.default("build-serve")&&r.push(n.e(5).then(n.t.bind(null,13,7))),o.default("intersection-observer")&&!o.default("dom-intersection-observer")&&r.push(n.e(2).then(n.bind(null,14))),o.default("no-bootstrap"),o.default("web-animations")&&!o.default("dom-webanimation")&&r.push(n.e(4).then(n.bind(null,16))),o.default("resize-observer")&&!o.default("dom-resize-observer")&&r.push(n.e(3).then(n.bind(null,17))),o.default("dom-pointer-events")||r.push(n.e(7).then(n.bind(null,18))),Promise.all(r).then(function(){n.e(1).then(n.bind(null,19))})},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var s,l=[],c=!1,f=-1;function d(){c&&s&&(c=!1,s.length?l=s.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=u(d);c=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,c=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=b,r.addListener=b,r.once=b,r.off=b,r.removeListener=b,r.removeAllListeners=b,r.emit=b,r.prependListener=b,r.prependOnceListener=b,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"ShimPromise",function(){return a}),n.d(t,"isThenable",function(){return u});var o=n(0),r=n(2),i=(n(4),n(1));let a=o.default.Promise;const u=function(e){return e&&"function"==typeof e.then};var s;Object(i.default)("es6-promise")||(o.default.Promise=((s=class e{constructor(t){this.state=1,this[Symbol.toStringTag]="Promise";let n=!1;const o=()=>1!==this.state||n;let i=[],a=function(e){i&&i.push(e)};const s=(e,t)=>{1===this.state&&(this.state=e,this.resolvedValue=t,a=r.a,i&&i.length>0&&Object(r.a)(function(){if(i){let e=i.length;for(let t=0;t<e;++t)i[t].call(null);i=null}}))},l=(e,t)=>{o()||(u(t)?(t.then(s.bind(null,0),s.bind(null,2)),n=!0):s(e,t))};this.then=((t,n)=>new e((e,o)=>{a(()=>{const r=2===this.state?n:t;if("function"==typeof r)try{e(r(this.resolvedValue))}catch(e){o(e)}else 2===this.state?o(this.resolvedValue):e(this.resolvedValue)})}));try{t(l.bind(null,0),l.bind(null,2))}catch(e){s(2,e)}}static all(t){return new this(function(n,o){const r=[];let i=0,a=0,s=!0;function l(e,t){r[e]=t,++i,c()}function c(){s||i<a||n(r)}let f=0;for(const n of t)d=f,++a,u(p=n)?p.then(l.bind(null,d),o):e.resolve(p).then(l.bind(null,d)),f++;var d,p;s=!1,c()})}static race(t){return new this(function(n,o){for(const r of t)r instanceof e?r.then(n,o):e.resolve(r).then(n)})}static reject(e){return new this(function(t,n){n(e)})}static resolve(e){return new this(function(t){t(e)})}catch(e){return this.then(void 0,e)}})[Symbol.species]=a,a=s)),Object(i.default)("es2018-promise-finally")||(o.default.Promise.prototype.finally=function(e){return this.then(e&&(t=>Promise.resolve(e()).then(()=>t)),e&&(t=>Promise.resolve(e()).then(()=>{throw t})))}),t.default=a},function(e,t,n){var o=n(1),r=n(0);if(o.exists("build-time-render")||o.add("build-time-render",!1,!1),o.exists("build-serve")||o.add("build-serve",!1,!1),r.default.__public_path__||r.default.__public_origin__){var i=r.default.__public_origin__||window.location.origin;r.default.__public_path__&&(i=origin+r.default.__public_path__,o.add("public-path",r.default.__public_path__,!0)),n.p=i}}])});
//# sourceMappingURL=bootstrap.187c65916ead42f59eec.bundle.js.map