// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,A=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){return"string"==typeof r}function P(r){var e,t,n;if(!T(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,V=Object.prototype,$=V.toString,C=V.__defineGetter__,M=V.__defineSetter__,R=V.__lookupGetter__,B=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var L=I;function G(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function q(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var z=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,W=function(r){return z.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=q(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=D(r),t="/"===tr(r,-1);return(r=q(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function Y(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")}function H(r){var e=W(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function K(r,e){var t=W(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Q(r){return W(r)[3]}var rr={extname:Q,basename:K,dirname:H,sep:"/",delimiter:":",relative:Y,join:J,isAbsolute:D,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=Z(Object.freeze({__proto__:null,basename:K,default:rr,delimiter:":",dirname:H,extname:Q,isAbsolute:D,join:J,normalize:X,relative:Y,resolve:U,sep:"/"}));var or=Object,ir=/./;function ar(r){return"boolean"==typeof r}var ur="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function cr(){return ur&&"symbol"==typeof Symbol.toStringTag}var fr=Object.prototype.toString;var lr=Object.prototype.hasOwnProperty;var sr,pr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof pr?pr.toStringTag:"";sr=cr()?function(r){var e,t,n,o,i;if(null==r)return fr.call(r);t=r[gr],i=gr,e=null!=(o=r)&&lr.call(o,i);try{r[gr]=void 0}catch(e){return fr.call(r)}return n=fr.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return fr.call(r)};var yr=sr,dr=Boolean,br=Boolean.prototype.toString;var hr=cr();function vr(r){return"object"==typeof r&&(r instanceof dr||(hr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===yr(r)))}function wr(r){return ar(r)||vr(r)}function mr(){return new Function("return this;")()}G(wr,"isPrimitive",ar),G(wr,"isObject",vr);var jr="object"==typeof self?self:null,_r="object"==typeof window?window:null,Er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ar="object"==typeof Er?Er:null,Or="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!ar(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return mr()}if(Or)return Or;if(jr)return jr;if(_r)return _r;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Sr.document&&Sr.document.childNodes,xr=Int8Array;function Fr(){return/^\s*function\s*([^(]*)/i}var Nr,Tr=/^\s*function\s*([^(]*)/i;G(Fr,"REGEXP",Tr),Nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===yr(r)};var Pr=Nr;function Ir(r){return null!==r&&"object"==typeof r}var Vr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ir);function $r(r){var e,t,n,o;if(("Object"===(t=yr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Tr.exec(n.toString()))return e[1]}return Ir(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(Ir,"isObjectLikeArray",Vr);var Cr="function"==typeof ir||"object"==typeof xr||"function"==typeof kr?function(r){return $r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$r(r).toLowerCase():e};var Mr,Rr,Br=Object.getPrototypeOf;Rr=Object.getPrototypeOf,Mr="function"===Cr(Rr)?Br:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===yr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lr=Mr;function Gr(r){return null==r?null:(r=or(r),Lr(r))}function Zr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===yr(r))return!0;r=Gr(r)}return!1}var qr="function"==typeof Math.fround?Math.fround:null,zr="function"==typeof Float32Array;var Wr=Number.POSITIVE_INFINITY,Ur="function"==typeof Float32Array?Float32Array:null;var Xr,Dr="function"==typeof Float32Array?Float32Array:void 0;Xr=function(){var r,e;if("function"!=typeof Ur)return!1;try{r=function(r){return zr&&r instanceof Float32Array||"[object Float32Array]"===yr(r)}(e=new Ur([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Wr}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr=new Xr(1);var Yr="function"==typeof qr?qr:function(r){return Jr[0]=r,Jr[0]},Hr=Math.floor;function Kr(r,e,t,n,o){var i,a,u,c,f,l,s,p,g,y,d,b,h,v;if(i=o,r<8){for(d=0,b=0,v=0;v<r;v++)(h=t[i])==h&&(d=Yr(d+h),b+=1),i+=n;return e[0]=Yr(e[0]+d),e[1]+=b,e}if(r<=128){for(a=0,u=0,c=0,f=0,l=0,s=0,p=0,g=0,b=0,y=r%8,v=0;v<r-y;v+=8)(h=t[i])==h&&(a=Yr(a+h),b+=1),(h=t[i+=n])==h&&(u=Yr(u+h),b+=1),(h=t[i+=n])==h&&(c=Yr(c+h),b+=1),(h=t[i+=n])==h&&(f=Yr(f+h),b+=1),(h=t[i+=n])==h&&(l=Yr(l+h),b+=1),(h=t[i+=n])==h&&(s=Yr(s+h),b+=1),(h=t[i+=n])==h&&(p=Yr(p+h),b+=1),(h=t[i+=n])==h&&(g=Yr(g+h),b+=1),i+=n;for(d=Yr(Yr(Yr(a+u)+Yr(c+f))+Yr(Yr(l+s)+Yr(p+g)));v<r;v++)(h=t[i])==h&&(d=Yr(d+h),b+=1),i+=n;return e[0]=Yr(e[0]+d),e[1]+=b,e}return b=Hr(r/2),Yr(Kr(b-=b%8,e,t,n,i)+Kr(r-b,e,t,n,i+b*n))}var Qr=[0,0];function re(r,e,t,n){var o,i,a,u,c,f,l,s,p;if(r<=0)return NaN;if(1===r||0===n)return(l=t[0])==l&&r-e>0?0:NaN;if(i=n<0?(1-r)*n:0,Qr[0]=0,Qr[1]=0,Kr(r,Qr,t,n,i),(u=(s=Qr[1])-e)<=0)return NaN;for(o=Yr(Qr[0]/s),a=0,c=0,p=0;p<r;p++)(l=t[i])==l&&(f=Yr(l-o),a=Yr(a+Yr(f*f)),c=Yr(c+f),s+=1),i+=n;return Yr(Yr(a/u)-Yr(Yr(c/s)*Yr(c/u)))}var ee=[0,0];G(re,"ndarray",(function(r,e,t,n,o){var i,a,u,c,f,l,s,p,g;if(r<=0)return NaN;if(1===r||0===n)return(s=t[o])==s&&r-e>0?0:NaN;if(a=o,ee[0]=0,ee[1]=0,Kr(r,ee,t,n,a),(c=(p=ee[1])-e)<=0)return NaN;for(i=Yr(ee[0]/p),u=0,f=0,g=0;g<r;g++)(s=t[a])==s&&(l=Yr(s-i),u=Yr(u+Yr(l*l)),f=Yr(f+l),p+=1),a+=n;return Yr(Yr(u/c)-Yr(Yr(f/p)*Yr(f/c)))}));var te,ne=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Zr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,nr.join)("/home/runner/work/stats-base-snanvariance/stats-base-snanvariance/node_modules/@stdlib/stats-base-snanvariancepn/lib","./native.js")),oe=te=Zr(ne)?re:ne;const{ndarray:ie}=te;function ae(r,e,t,n){return oe(r,e,t,n)}function ue(r,e,t,n,o){return ie(r,e,t,n,o)}G(ae,"ndarray",ue);export{ae as default,ue as ndarray};
//# sourceMappingURL=mod.js.map
