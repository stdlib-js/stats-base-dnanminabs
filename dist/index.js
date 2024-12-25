"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=s(function(B,m){
var x=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(r,e,n,f){var t,u,a,i;if(r<=0)return NaN;if(r===1||n===0)return v(e[f]);for(u=f,i=0;i<r&&(a=e[u],a!==a);i++)u+=n;if(i===r)return NaN;for(t=v(a),i+=1,i;i<r;i++)u+=n,a=v(e[u]),!x(a)&&a<t&&(t=a);return t}m.exports=l
});var d=s(function(C,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function k(r,e,n){return _(r,e,n,R(r,n))}c.exports=k
});var y=s(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=d(),O=o();E(b,"ndarray",O);p.exports=b
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,j=h(g(__dirname,"./native.js"));w(j)?q=z:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
