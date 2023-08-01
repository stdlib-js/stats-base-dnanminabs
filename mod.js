// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;function c(r){return r!=r}function f(r){return Math.abs(r)}function _(r,e,t){var n,o,a,u;if(r<=0)return NaN;if(1===r||0===t)return f(e[0]);for(o=t<0?(1-r)*t:0,u=0;u<r&&(a=e[o])!=a;u++)o+=t;if(u===r)return NaN;for(n=f(a),u+=1;u<r;u++)c(a=f(e[o+=t]))||a<n&&(n=a);return n}function p(r,e,t,n){var o,a,u,i;if(r<=0)return NaN;if(1===r||0===t)return f(e[n]);for(a=n,i=0;i<r&&(u=e[a])!=u;i++)a+=t;if(i===r)return NaN;for(o=f(u),i+=1;i<r;i++)c(u=f(e[a+=t]))||u<o&&(o=u);return o}e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p});export{_ as default,p as ndarray};
//# sourceMappingURL=mod.js.map
