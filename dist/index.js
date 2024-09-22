"use strict";var f=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var b=f(function(B,m){
var k=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-abs/dist');function x(a,e,u){var t,n,i,r;if(a<=0)return NaN;if(a===1||u===0)return s(e[0]);for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(i=e[n],i!==i);r++)n+=u;if(r===a)return NaN;for(t=s(i),r+=1,r;r<a;r++)n+=u,i=s(e[n]),!k(i)&&i<t&&(t=i);return t}m.exports=x
});var p=f(function(C,c){
var R=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-abs/dist');function _(a,e,u,t){var n,i,r,v;if(a<=0)return NaN;if(a===1||u===0)return o(e[t]);for(i=t,v=0;v<a&&(r=e[i],r!==r);v++)i+=u;if(v===a)return NaN;for(n=o(r),v+=1,v;v<a;v++)i+=u,r=o(e[i]),!R(r)&&r<n&&(n=r);return n}c.exports=_
});var l=f(function(D,j){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=b(),O=p();E(y,"ndarray",O);j.exports=y
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=l(),q,d=h(g(__dirname,"./native.js"));w(d)?q=z:q=d;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
