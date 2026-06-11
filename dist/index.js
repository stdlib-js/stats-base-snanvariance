"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(h,t){
var x=require('@stdlib/stats-base-snanvariancepn/dist');function f(e,r,a,n){return x(e,r,a,n)}t.exports=f
});var c=i(function(k,v){
var j=require('@stdlib/stats-base-snanvariancepn/dist').ndarray;function m(e,r,a,n,y){return j(e,r,a,n,y)}v.exports=m
});var p=i(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),R=c();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),s,d=E(_(__dirname,"./native.js"));O(d)?s=b:s=d;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
