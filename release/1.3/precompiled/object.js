var Ab="isObject,isNaN".split(","),Bb="keys,values,each,merge,isEmpty,clone,equal,watch,tap,has".split(",");
function V(a){r.merge(this,a)}V.prototype.constructor=r;function Cb(a,b,c,d){var e=/^(.+?)(\[.*\])$/,g,f,i;if(d!==m&&(f=b.match(e))){i=f[1];b=f[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(h){g=!h||h.match(/^\d+$/);if(!i&&ca(a))i=a.length;a[i]||(a[i]=g?[]:{});a=a[i];i=h});if(!i&&g)i=a.length.toString();Cb(a,i,c)}else a[b]=c.match(/^[\d.]+$/)?parseFloat(c):c==="true"?j:c==="false"?m:c}
G(r,m,j,{watch:function(a,b,c){if(ba){var d=a[b];r.defineProperty(a,b,{enumerable:j,configurable:j,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});G(r,m,function(a,b){return C(b)},{keys:function(a,b){var c=r.keys(a);r.keys(a).forEach(function(d){b.call(a,d,a[d])});return c}});
G(r,m,m,{isObject:function(a){return la(a)},isNaN:function(a){return D(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return S(a)===S(b)},extended:function(a){return new V(a)},merge:function(a,b,c,d){var e,g;if(a&&typeof b!="string")for(e in b)if(ma(b,e)&&a){g=b[e];if(K(a[e])){if(d===m)continue;if(C(d))g=d.call(b,e,a[e],b[e])}if(c===j&&g&&ka(g))if(ea(g))g=new u(g.getTime());else if(F(g))g=new t(g.source,ra(g));else{a[e]||(a[e]=s.isArray(g)?[]:{});r.merge(a[e],b[e],c,d);continue}a[e]=g}return a},
values:function(a,b){var c=[];I(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},each:function(a,b){b&&I(a,function(c,d){b.call(a,c,d,a)});return a},isEmpty:function(a){if(!ka(a))return!(a&&a.length>0);return r.keys(a).length==0},clone:function(a,b){if(!ka(a))return a;if(s.isArray(a))return a.concat();var c=a instanceof V?new V:{};return r.merge(c,a,b)},fromQueryString:function(a,b){var c=r.extended();a=a&&a.toString?a.toString():"";decodeURIComponent(a.replace(/^.*?\?/,"")).split("&").forEach(function(d){d=
d.split("=");d.length===2&&Cb(c,d[0],d[1],b)});return c},tap:function(a,b){var c=b;C(b)||(c=function(){b&&a[b]()});c.call(a,a);return a},has:function(a,b){return ma(a,b)}});J(r,m,m,z,function(a,b){var c="is"+b;Ab.push(c);a[c]=function(d){return fa(d,b)}});(function(){G(r,m,function(){return arguments.length===0},{extend:function(){ta(Ab.concat(Bb),r)}})})();ta(Bb,V);
