var g;g||(g=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in g)g.hasOwnProperty(l)&&(h[l]=g[l]);var p=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,w=!1,ba=!1,ca=!1;u="object"===typeof window;v="function"===typeof importScripts;w=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;ca=!u&&!w&&!v;var y="",da,z;
if(w){y=__dirname+"/";var ea,fa;da=function(a,b){ea||(ea=require("fs"));fa||(fa=require("path"));a=fa.normalize(a);a=ea.readFileSync(a);return b?a:a.toString()};z=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));p=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=g);process.on("uncaughtException",function(a){if(!(a instanceof ha))throw a;});process.on("unhandledRejection",A);t=function(a){process.exit(a)};
g.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(da=function(a){return read(a)}),z=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?p=scriptArgs:"undefined"!=typeof arguments&&(p=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?y=self.location.href:document.currentScript&&(y=document.currentScript.src),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(z=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=g.print||console.log.bind(console),B=g.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(g[l]=h[l]);h=null;g.arguments&&(p=g.arguments);g.thisProgram&&(aa=g.thisProgram);g.quit&&(t=g.quit);var ka;g.wasmBinary&&(ka=g.wasmBinary);var la;g.noExitRuntime&&(la=g.noExitRuntime);"object"!==typeof WebAssembly&&B("no native wasm support detected");var C,ma=new WebAssembly.Table({initial:426,maximum:426,element:"anyfunc"}),na=!1;function assert(a,b){a||A("Assertion failed: "+b)}
function oa(a){var b=g["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function pa(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=qa(c);D(a,E,b,c)}return b},array:function(a){var b=qa(a.length);G.set(a,b);return b}},f=oa(a),k=[];a=0;if(d)for(var m=0;m<d.length;m++){var r=e[c[m]];r?(0===a&&(a=ra()),k[m]=r(d[m])):k[m]=d[m]}c=f.apply(null,k);c=function(a){return"string"===b?H(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|k:(e&7)<<18|f<<12|k<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?ua(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var k=a.charCodeAt(f);if(55296<=k&&57343>=k){var m=a.charCodeAt(++f);k=65536+((k&1023)<<10)|m&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function wa(a){var b=va(a)+1,c=qa(b);D(a,G,c,b);return c}function xa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,G,E,ya,za,I,Aa,J,K;
function Ba(a){buffer=a;g.HEAP8=G=new Int8Array(a);g.HEAP16=ya=new Int16Array(a);g.HEAP32=I=new Int32Array(a);g.HEAPU8=E=new Uint8Array(a);g.HEAPU16=za=new Uint16Array(a);g.HEAPU32=Aa=new Uint32Array(a);g.HEAPF32=J=new Float32Array(a);g.HEAPF64=K=new Float64Array(a)}var Ca=g.TOTAL_MEMORY||33554432;g.wasmMemory?C=g.wasmMemory:C=new WebAssembly.Memory({initial:Ca/65536});C&&(buffer=C.buffer);Ca=buffer.byteLength;Ba(buffer);I[2736796]=16190224;
function Da(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ec;"number"===typeof c?void 0===b.Xb?g.dynCall_v(c):g.dynCall_vi(c,b.Xb):c(void 0===b.Xb?null:b.Xb)}}}var Ea=[],Fa=[],Ga=[],Ha=[],Ia=[];function Ja(){var a=g.preRun.shift();Ea.unshift(a)}var L=0,Ka=null,La=null;g.preloadedImages={};g.preloadedAudios={};function A(a){if(g.onAbort)g.onAbort(a);ja(a);B(a);na=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}
function Ma(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="v6502r.wasm";if(!Ma()){var Na=M;M=g.locateFile?g.locateFile(Na,y):y+Na}function Oa(){try{if(ka)return new Uint8Array(ka);if(z)return z(M);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}
function Pa(){return ka||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Oa())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Oa()})}
function Qa(){var a=document.getElementById("picker"),b=a.files[0];a.value=null;console.log("--- load file:");console.log("  name: "+b.name);console.log("  type: "+b.type);console.log("  size: "+b.size);256E3>b.size?(a=new FileReader,a.onload=function(a){console.log("file loaded!");(a=a.target.result)?(console.log("content length: "+a.byteLength),a=new Uint8Array(a),0==pa("util_emsc_loadfile","int",["string","array","number"],[b.name,a,a.length])&&console.warn("util_emsc_loadfile() failed!")):console.warn("load result empty!")},
a.readAsArrayBuffer(b)):console.warn("ignoring file because it is too big")}Fa.push({ec:function(){Ra()}});function Sa(a){g.___errno_location&&(I[g.___errno_location()>>2]=a)}var Ta=[null,[],[]],N=0;function Ua(){N+=4;return I[N-4>>2]}var Va={};function Wa(){A()}var Xa=0,Ya=0,O=0,Za=0,$a=0,ab=null,bb=null,cb=!1;function db(){for(var a=P.length-1;0<=a;--a)eb(a);P=[];fb=[]}var fb=[];function gb(){if(hb&&ib.Lb)for(var a=0;a<fb.length;++a){var b=fb[a];fb.splice(a,1);--a;b.Dc.apply(this,b.qc)}}
var hb=0,ib=null,P=[];function jb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function eb(a){var b=P[a];b.target.removeEventListener(b.Kb,b.cc,b.Mb);P.splice(a,1)}function Q(a){function b(b){++hb;ib=a;gb();a.Ob(b);gb();--hb}if(a.Nb)a.cc=b,a.target.addEventListener(a.Kb,b,a.Mb),P.push(a),cb||(Ha.push(db),cb=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Kb==a.Kb&&eb(c--)}
var kb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function R(a){try{if(!a)return window;"number"===typeof a&&(a=kb[a]||H(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?g.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function lb(a){"number"===typeof a&&(a=H(a));return a&&"#canvas"!==a?"undefined"!==typeof mb&&nb[a]?nb[a]:R(a):"undefined"!==typeof mb&&nb.canvas?nb.canvas:g.canvas}
function ob(a,b,c,d,e,f){Xa||(Xa=S(164));a={target:R(a),Lb:jb()?!1:!0,Kb:f,Nb:d,Ob:function(a){a=a||event;var c=Xa;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);I[c+64>>2]=a.location;I[c+68>>2]=a.ctrlKey;I[c+72>>2]=a.shiftKey;I[c+76>>2]=a.altKey;I[c+80>>2]=a.metaKey;I[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);I[c+152>>2]=a.charCode;I[c+156>>2]=a.keyCode;I[c+160>>2]=a.which;T(d,e,c,b)&&a.preventDefault()},Mb:c};Q(a)}
function pb(a,b,c){K[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();I[a+8>>2]=b.screenX;I[a+12>>2]=b.screenY;I[a+16>>2]=b.clientX;I[a+20>>2]=b.clientY;I[a+24>>2]=b.ctrlKey;I[a+28>>2]=b.shiftKey;I[a+32>>2]=b.altKey;I[a+36>>2]=b.metaKey;ya[a+40>>1]=b.button;ya[a+42>>1]=b.buttons;I[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-ab;I[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-bb;if(g.canvas){var d=g.canvas.getBoundingClientRect();
I[a+60>>2]=b.clientX-d.left;I[a+64>>2]=b.clientY-d.top}else I[a+60>>2]=0,I[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},I[a+52>>2]=b.clientX-d.left,I[a+56>>2]=b.clientY-d.top):(I[a+52>>2]=0,I[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(ab=b.screenX,bb=b.screenY)}
function qb(a,b,c,d,e,f){Ya||(Ya=S(72));a=R(a);c={target:a,Lb:"mousemove"!=f&&"mouseenter"!=f&&"mouseleave"!=f,Kb:f,Nb:d,Ob:function(c){c=c||event;pb(Ya,c,a);T(d,e,Ya,b)&&c.preventDefault()},Mb:c};jb()&&"mousedown"==f&&(c.Lb=!1);Q(c)}
function rb(a,b,c,d){Za||(Za=S(36));a=R(a);Q({target:a,Lb:!1,Kb:"resize",Nb:d,Ob:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],k=Za;I[k>>2]=c.detail;I[k+4>>2]=document.body.clientWidth;I[k+8>>2]=document.body.clientHeight;
I[k+12>>2]=innerWidth;I[k+16>>2]=innerHeight;I[k+20>>2]=outerWidth;I[k+24>>2]=outerHeight;I[k+28>>2]=e[0];I[k+32>>2]=e[1];T(d,10,k,b)&&c.preventDefault()}},Mb:c})}
function sb(a,b,c,d,e,f){$a||($a=S(1684));a=R(a);Q({target:a,Lb:"touchstart"==f||"touchend"==f,Kb:f,Nb:d,Ob:function(c){c=c||event;for(var f={},k=0;k<c.touches.length;++k){var q=c.touches[k];q.$b=!1;f[q.identifier]=q}for(k=0;k<c.changedTouches.length;++k)q=c.changedTouches[k],f[q.identifier]=q,q.$b=!0;for(k=0;k<c.targetTouches.length;++k)q=c.targetTouches[k],f[q.identifier].jc=!0;var n=q=$a;I[n+4>>2]=c.ctrlKey;I[n+8>>2]=c.shiftKey;I[n+12>>2]=c.altKey;I[n+16>>2]=c.metaKey;n+=20;var F=g.canvas?g.canvas.getBoundingClientRect():
void 0,ia=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},yb=0;for(k in f){var x=f[k];I[n>>2]=x.identifier;I[n+4>>2]=x.screenX;I[n+8>>2]=x.screenY;I[n+12>>2]=x.clientX;I[n+16>>2]=x.clientY;I[n+20>>2]=x.pageX;I[n+24>>2]=x.pageY;I[n+28>>2]=x.$b;I[n+32>>2]=x.jc;F?(I[n+44>>2]=x.clientX-F.left,I[n+48>>2]=x.clientY-F.top):(I[n+44>>2]=0,I[n+48>>2]=0);I[n+36>>2]=x.clientX-ia.left;I[n+40>>2]=x.clientY-ia.top;n+=52;if(32<=++yb)break}I[q>>2]=yb;T(d,e,q,b)&&c.preventDefault()},Mb:c})}
function tb(a,b,c,d,e,f){a||(a=g.canvas);a={target:R(a),Lb:!1,Kb:f,Nb:d,Ob:function(a){a=a||event;T(d,e,0,b)&&a.preventDefault()},Mb:c};Q(a)}
function ub(a,b,c,d,e){function f(c){c=c||event;pb(O,c,a);K[O+72>>3]=c.wheelDeltaX||0;K[O+80>>3]=-(c.wheelDeltaY||c.wheelDelta);K[O+88>>3]=0;I[O+96>>2]=0;T(d,9,O,b)&&c.preventDefault()}function k(c){c=c||event;var e=O;pb(e,c,a);K[e+72>>3]=c.deltaX;K[e+80>>3]=c.deltaY;K[e+88>>3]=c.deltaZ;I[e+96>>2]=c.deltaMode;T(d,9,e,b)&&c.preventDefault()}O||(O=S(104));Q({target:a,Lb:!0,Kb:e,Nb:d,Ob:"wheel"==e?k:f,Mb:c})}var vb=1,wb=0,xb=[],U=[],zb=[],Ab=[],Bb=[],V=[],W=[],Cb={},Db=null,nb={},Eb={},Fb={};
function X(a){wb||(wb=a)}function Gb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}var Hb=null,Y=[0];function Ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,f){b.drawArraysInstancedANGLE(a,d,e,f)},a.drawElementsInstanced=function(a,d,e,f,k){b.drawElementsInstancedANGLE(a,d,e,f,k)})}
function Jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Lb(a){a||(a=Db);if(!a.fc){a.fc=!0;var b=a.Wb;2>a.version&&(Ib(b),Jb(b),Kb(b));b.sc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var mb={},Mb,Nb,Ob=["default","low-power","high-performance"],Pb={};function Qb(){if(!Rb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa},b;for(b in Pb)a[b]=Pb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Rb=c}return Rb}var Rb;
function Sb(a,b,c,d){for(var e=0;e<a;e++){var f=Z[c](),k=f&&Gb(d);f?(f.name=k,d[k]=f):X(1282);I[b+4*e>>2]=k}}
function Tb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else X(1281)}function Ub(a){var b=va(a)+1,c=S(b);D(a,E,c,b);return c}
var Vb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Wb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function Xb(a,b,c,d,e){if(b=Vb[b]*Wb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return E.subarray(e,c);case 5126:return J.subarray(e>>2,c>>2);case 5125:case 34042:return Aa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return za.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}function Yb(a){return 0===a%4&&(0!==a%100||0===a%400)}
function Zb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var $b=[31,29,31,30,31,30,31,31,30,31,30,31],ac=[31,28,31,30,31,30,31,31,30,31,30,31];function bc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Yb(a.getFullYear())?$b:ac)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function cc(a,b,c,d){function e(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function f(a,b){return e(a,b,"0")}function k(a,b){function c(a){return 0>a?-1:0<a?1:0}var d;0===(d=c(a.getFullYear()-b.getFullYear()))&&0===(d=c(a.getMonth()-b.getMonth()))&&(d=c(a.getDate()-b.getDate()));return d}function m(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function r(a){a=bc(new Date(a.Jb+1900,0,1),a.Vb);var b=m(new Date(a.getFullYear()+1,0,4));return 0>=k(m(new Date(a.getFullYear(),0,4)),a)?0>=k(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var q=I[d+40>>2];d={mc:I[d>>2],lc:I[d+4>>2],Tb:I[d+8>>2],Sb:I[d+12>>2],Pb:I[d+16>>2],Jb:I[d+20>>2],Ub:I[d+24>>2],Vb:I[d+28>>2],Ec:I[d+32>>2],kc:I[d+36>>2],
nc:q?H(q):""};c=H(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var n in q)c=c.replace(new RegExp(n,"g"),q[n]);var F="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ia="January February March April May June July August September October November December".split(" ");q={"%a":function(a){return F[a.Ub].substring(0,3)},"%A":function(a){return F[a.Ub]},"%b":function(a){return ia[a.Pb].substring(0,3)},"%B":function(a){return ia[a.Pb]},"%C":function(a){return f((a.Jb+1900)/100|0,2)},"%d":function(a){return f(a.Sb,2)},"%e":function(a){return e(a.Sb,2," ")},"%g":function(a){return r(a).toString().substring(2)},"%G":function(a){return r(a)},"%H":function(a){return f(a.Tb,
2)},"%I":function(a){a=a.Tb;0==a?a=12:12<a&&(a-=12);return f(a,2)},"%j":function(a){return f(a.Sb+Zb(Yb(a.Jb+1900)?$b:ac,a.Pb-1),3)},"%m":function(a){return f(a.Pb+1,2)},"%M":function(a){return f(a.lc,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.Tb&&12>a.Tb?"AM":"PM"},"%S":function(a){return f(a.mc,2)},"%t":function(){return"\t"},"%u":function(a){return a.Ub||7},"%U":function(a){var b=new Date(a.Jb+1900,0,1),c=0===b.getDay()?b:bc(b,7-b.getDay());a=new Date(a.Jb+1900,a.Pb,a.Sb);return 0>
k(c,a)?f(Math.ceil((31-c.getDate()+(Zb(Yb(a.getFullYear())?$b:ac,a.getMonth()-1)-31)+a.getDate())/7),2):0===k(c,b)?"01":"00"},"%V":function(a){var b=m(new Date(a.Jb+1900,0,4)),c=m(new Date(a.Jb+1901,0,4)),d=bc(new Date(a.Jb+1900,0,1),a.Vb);return 0>k(d,b)?"53":0>=k(c,d)?"01":f(Math.ceil((b.getFullYear()<a.Jb+1900?a.Vb+32-b.getDate():a.Vb+1-b.getDate())/7),2)},"%w":function(a){return a.Ub},"%W":function(a){var b=new Date(a.Jb,0,1),c=1===b.getDay()?b:bc(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.Jb+
1900,a.Pb,a.Sb);return 0>k(c,a)?f(Math.ceil((31-c.getDate()+(Zb(Yb(a.getFullYear())?$b:ac,a.getMonth()-1)-31)+a.getDate())/7),2):0===k(c,b)?"01":"00"},"%y":function(a){return(a.Jb+1900).toString().substring(2)},"%Y":function(a){return a.Jb+1900},"%z":function(a){a=a.kc;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.nc},"%%":function(){return"%"}};for(n in q)0<=c.indexOf(n)&&(c=c.replace(new RegExp(n,"g"),q[n](d)));n=dc(c);if(n.length>
b)return 0;G.set(n,a);return n.length-1}w?Wa=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?Wa=dateNow:"object"===typeof performance&&performance&&"function"===typeof performance.now?Wa=function(){return performance.now()}:Wa=Date.now;var Z;Hb=new Float32Array(256);for(var ec=0;256>ec;ec++)Y[ec]=Hb.subarray(0,ec+1);function dc(a){var b=Array(va(a)+1);D(a,b,0,b.length);return b}
var kc={V:function(){},db:function(){Sa(63);return-1},X:function(a,b){N=b;return 0},lb:function(a,b){N=b;try{var c=H(Ua()),d=Ua(),e=Ua();return(void 0).open(c,d,e).fd}catch(f){return A(f),-f.Yb}},jb:function(a,b){N=b;return 0},cb:function(a,b){N=b;try{var c=Ua();var d=Ua();if(-1===c||0===d)var e=-28;else{var f=Va.ic[c];if(f&&d===f.xc){var k=(void 0).vc(f.fd);Va.tc(c,k,d,f.flags);(void 0).Ac(k);Va.ic[c]=null;f.pc&&fc(f.yc)}e=0}return e}catch(m){return A(m),-m.Yb}},k:function(){},a:function(){A()},
gb:function(a,b){if(0===a)a=Date.now();else if(1===a&&(w||"undefined"!==typeof dateNow||"object"===typeof performance&&performance&&"function"===typeof performance.now))a=Wa();else return Sa(28),-1;I[b>>2]=a/1E3|0;I[b+4>>2]=a%1E3*1E6|0;return 0},pa:function(){document.getElementById("canvas").style.cursor="default"},sa:function(){document.getElementById("canvas").style.cursor="pointer"},Ia:function(a,b,c){a=H(a);for(var d="",e=0;e<c;e++)d+=String.fromCharCode(E[b+e]);console.log(btoa(d));b=document.createElement("a");
b.setAttribute("href","data:application/octet-stream;base64,"+btoa(d));b.setAttribute("download",a);b.style.display="none";document.body.appendChild(b);b.click();document.body.removeChild(b)},Ta:function(a,b){a=H(a);b=H(b);var c=document.createElement("a");c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b));c.setAttribute("download",a);c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c)},sb:function(){g.emsc_js_onload=Qa},rb:function(){return navigator.userAgent.includes("Macintosh")?
1:0},Aa:function(){document.getElementById("picker").click()},va:function(a){a=H(a);window.open(a)},U:function(){return devicePixelRatio||1},Z:function(a,b,c){a=a?R(a):g.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),K[b>>3]=a.right-a.left,K[c>>3]=a.bottom-a.top):(K[b>>3]=a.clientWidth,K[c>>3]=a.clientHeight);return 0},_a:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ea:function(a,b){function c(d){hc(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},$a:function(a){if(2147418112<
a)return!1;for(var b=Math.max(G.length,16777216);b<a;)536870912>=b?b=xa(2*b):b=Math.min(xa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Ba(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},T:function(a,b,c){a=lb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Oa:function(a,b,c,d){ob(a,b,c,d,2,"keydown");return 0},Ma:function(a,b,c,d){ob(a,b,c,d,1,"keypress");return 0},Na:function(a,b,c,d){ob(a,b,c,d,3,"keyup");return 0},Va:function(a,b,c,d){qb(a,b,c,d,5,
"mousedown");return 0},Ra:function(a,b,c,d){qb(a,b,c,d,33,"mouseenter");return 0},Qa:function(a,b,c,d){qb(a,b,c,d,34,"mouseleave");return 0},Sa:function(a,b,c,d){qb(a,b,c,d,8,"mousemove");return 0},Ua:function(a,b,c,d){qb(a,b,c,d,6,"mouseup");return 0},kb:function(a,b,c,d){rb(a,b,c,d);return 0},Ha:function(a,b,c,d){sb(a,b,c,d,25,"touchcancel");return 0},Ja:function(a,b,c,d){sb(a,b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){sb(a,b,c,d,24,"touchmove");return 0},La:function(a,b,c,d){sb(a,b,c,
d,22,"touchstart");return 0},Ga:function(a,b,c,d){tb(a,b,c,d,31,"webglcontextlost");return 0},Fa:function(a,b,c,d){tb(a,b,c,d,32,"webglcontextrestored");return 0},Pa:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(ub(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ub(a,b,c,d,"mousewheel"),0):-1},S:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=
Ob[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.hc=I[b+8];c.zc=I[b+9];c.ac=I[b+10];c.dc=I[b+11];c.Bc=I[b+12];c.Cc=I[b+13];a=lb(a);if(!a||c.dc)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=S(8);var d={handle:b,attributes:c,version:c.hc,Wb:a};a.canvas&&(a.canvas.oc=d);Cb[b]=d;("undefined"===typeof c.ac||c.ac)&&Lb(d);c=b}else c=0;return c},Wa:function(a,b){a=Cb[a];b=H(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Ib(Z):"OES_vertex_array_object"==
b?Jb(Z):"WEBGL_draw_buffers"==b&&Kb(Z);return!!a.Wb.getExtension(b)},Ya:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},Xa:function(a){Db=Cb[a];g.rc=Z=Db&&Db.Wb;return!a||Z?0:-5},eb:function(a,b){var c=0;Qb().forEach(function(d,e){var f=b+c;e=I[a+4*e>>2]=f;for(f=0;f<d.length;++f)G[e++>>0]=d.charCodeAt(f);G[e>>0]=0;c+=d.length+1});return 0},fb:function(a,b){var c=Qb();I[a>>2]=c.length;var d=0;c.forEach(function(a){d+=a.length+1});I[b>>2]=d;return 0},W:function(){return 0},
hb:function(a,b,c,d){try{var e=Va.wc(a),f=Va.uc(e,b,c);I[d>>2]=f;return 0}catch(k){return A(k),k.Yb}},Za:function(){return 0},ib:function(a,b,c,d){try{for(var e=0,f=0;f<c;f++){for(var k=I[b+8*f>>2],m=I[b+(8*f+4)>>2],r=0;r<m;r++){var q=E[k+r],n=Ta[a];0===q||10===q?((1===a?ja:B)(ua(n,0)),n.length=0):n.push(q)}e+=m}I[d>>2]=e;return 0}catch(F){return A(F),F.Yb}},f:function(a){Z.activeTexture(a)},L:function(a,b){Z.attachShader(U[a],W[b])},c:function(a,b){Z.bindBuffer(a,xb[b])},J:function(a,b){Z.bindFramebuffer(a,
zb[b])},ya:function(a,b){Z.bindRenderbuffer(a,Ab[b])},b:function(a,b){Z.bindTexture(a,Bb[b])},C:function(a,b,c,d){Z.blendColor(a,b,c,d)},D:function(a,b){Z.blendEquationSeparate(a,b)},E:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},O:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},m:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},la:function(a){Z.clear(a)},oa:function(a,b,c,d){Z.clearColor(a,b,c,d)},na:function(a){Z.clearDepth(a)},ma:function(a){Z.clearStencil(a)},u:function(a,
b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},nb:function(a){Z.compileShader(W[a])},N:function(a,b,c,d,e,f,k,m){Z.compressedTexImage2D(a,b,c,d,e,f,m?E.subarray(m,m+k):null)},ua:function(){var a=Gb(U),b=Z.createProgram();b.name=a;U[a]=b;return a},pb:function(a){var b=Gb(W);W[b]=Z.createShader(a);return b},B:function(a){Z.cullFace(a)},R:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=xb[d];e&&(Z.deleteBuffer(e),e.name=0,xb[d]=null,d==Mb&&(Mb=0),d==Nb&&(Nb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=
I[b+4*c>>2],e=zb[d];e&&(Z.deleteFramebuffer(e),e.name=0,zb[d]=null)}},w:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null,Eb[a]=null):X(1281)}},n:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=Ab[d];e&&(Z.deleteRenderbuffer(e),e.name=0,Ab[d]=null)}},v:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=Bb[d];e&&(Z.deleteTexture(e),e.name=0,Bb[d]=null)}},s:function(a){Z.depthFunc(a)},t:function(a){Z.depthMask(!!a)},
d:function(a){Z.disable(a)},x:function(a){Z.disableVertexAttribArray(a)},aa:function(a,b,c){Z.drawArrays(a,b,c)},ba:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},A:function(a){Z.frontFace(a)},P:function(a,b){Sb(a,b,"createBuffer",xb)},za:function(a,b){Sb(a,b,"createRenderbuffer",Ab)},wa:function(a,b){Sb(a,b,"createTexture",Bb)},qa:function(a,b){return Z.getAttribLocation(U[a],H(b))},j:function(a,b){Tb(a,b)},ra:function(a,b,c,d){a=
Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(I[c>>2]=b)},K:function(a,b,c){if(c)if(a>=vb)X(1281);else{var d=Eb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(U[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Zb;else if(35722==b){if(-1==d.Qb){a=U[a];var e=Z.getProgramParameter(a,35721);for(b=d.Qb=0;b<e;++b)d.Qb=Math.max(d.Qb,Z.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.Qb}else if(35381==b){if(-1==d.Rb)for(a=U[a],e=Z.getProgramParameter(a,
35382),b=d.Rb=0;b<e;++b)d.Rb=Math.max(d.Rb,Z.getActiveUniformBlockName(a,b).length+1);I[c>>2]=d.Rb}else I[c>>2]=Z.getProgramParameter(U[a],b);else X(1282)}else X(1281)},mb:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(I[c>>2]=b)},Y:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),I[c>>2]=null===a||0==a.length?0:a.length+1):I[c>>2]=Z.getShaderParameter(W[a],
b):X(1281)},Ba:function(a){if(Fb[a])return Fb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Ub(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ub(b);break;case 7938:b=Ub("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+
c[1]+" ("+b+")");b=Ub(b);break;default:return X(1280),0}return Fb[a]=b},i:function(a,b){b=H(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Eb[a]&&Eb[a].bc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ta:function(a){Z.linkProgram(U[a]);var b=U[a];a=Eb[a]={bc:{},Zb:0,Qb:-1,Rb:-1};for(var c=a.bc,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var f=Z.getActiveUniform(b,e),k=f.name;a.Zb=Math.max(a.Zb,k.length+1);"]"==k.slice(-1)&&(k=k.slice(0,k.lastIndexOf("[")));
var m=Z.getUniformLocation(b,k);if(m){var r=Gb(V);c[k]=[f.size,r];V[r]=m;for(var q=1;q<f.size;++q)m=Z.getUniformLocation(b,k+"["+q+"]"),r=Gb(V),V[r]=m}}},z:function(a,b){Z.polygonOffset(a,b)},xa:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},H:function(a,b,c,d){Z.scissor(a,b,c,d)},ob:function(a,b,c,d){for(var e="",f=0;f<b;++f){var k=d?I[d+4*f>>2]:-1;e+=H(I[c+4*f>>2],0>k?void 0:k)}Z.shaderSource(W[a],e)},$:function(a,b,c){Z.stencilFunc(a,b,c)},G:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},
r:function(a){Z.stencilMask(a)},_:function(a,b,c){Z.stencilOp(a,b,c)},F:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},M:function(a,b,c,d,e,f,k,m,r){Z.texImage2D(a,b,c,d,e,f,k,m,r?Xb(m,k,d,e,r):null)},g:function(a,b,c){Z.texParameteri(a,b,c)},l:function(a,b,c,d,e,f,k,m,r){var q=null;r&&(q=Xb(m,k,e,f,r));Z.texSubImage2D(a,b,c,d,e,f,k,m,q)},ga:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=J[c+4*e>>2];else d=J.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},y:function(a,b){Z.uniform1i(V[a],
b)},fa:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2];else d=J.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},ea:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},da:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2],d[e+3]=J[c+(4*e+12)>>2];else d=
J.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},ca:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],f=0;f<16*b;f+=16)e[f]=J[d+4*f>>2],e[f+1]=J[d+(4*f+4)>>2],e[f+2]=J[d+(4*f+8)>>2],e[f+3]=J[d+(4*f+12)>>2],e[f+4]=J[d+(4*f+16)>>2],e[f+5]=J[d+(4*f+20)>>2],e[f+6]=J[d+(4*f+24)>>2],e[f+7]=J[d+(4*f+28)>>2],e[f+8]=J[d+(4*f+32)>>2],e[f+9]=J[d+(4*f+36)>>2],e[f+10]=J[d+(4*f+40)>>2],e[f+11]=J[d+(4*f+44)>>2],e[f+12]=J[d+(4*f+48)>>2],e[f+13]=J[d+(4*f+52)>>2],e[f+14]=J[d+(4*f+56)>>2],e[f+15]=J[d+(4*f+60)>>2];
else e=J.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},ka:function(a){Z.useProgram(U[a])},ab:function(a,b){Z.vertexAttribDivisor(a,b)},ja:function(a,b,c,d,e,f){Z.vertexAttribPointer(a,b,c,!!d,e,f)},I:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:C,q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ic()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},
Da:function(){window.addEventListener("beforeunload",function(a){0!=jc()&&(a.preventDefault(),a.returnValue=" ")})},ha:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste","void",["string"],[a])})},o:function(){document.getElementById("_sokol_app_input_element").blur()},Ca:function(a){a=H(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");
b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},qb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())pa("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},bb:function(a,b,c,d){return cc(a,b,c,d)},table:ma},lc=function(){function a(a){g.asm=a.exports;L--;
g.monitorRunDependencies&&g.monitorRunDependencies(L);0==L&&(null!==Ka&&(clearInterval(Ka),Ka=null),La&&(a=La,La=null,a()))}function b(b){a(b.instance)}function c(a){return Pa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){B("failed to asynchronously prepare wasm: "+a);A(a)})}var d={env:kc,wasi_unstable:kc};L++;g.monitorRunDependencies&&g.monitorRunDependencies(L);if(g.instantiateWasm)try{return g.instantiateWasm(d,a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){if(ka||"function"!==typeof WebAssembly.instantiateStreaming||Ma()||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){B("wasm streaming compile failed: "+a);B("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();g.asm=lc;var Ra=g.___wasm_call_ctors=function(){return g.asm.tb.apply(null,arguments)};g._util_emsc_loadfile=function(){return g.asm.ub.apply(null,arguments)};
var S=g._malloc=function(){return g.asm.vb.apply(null,arguments)},fc=g._free=function(){return g.asm.wb.apply(null,arguments)},ic=g.__sapp_emsc_notify_keyboard_hidden=function(){return g.asm.xb.apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return g.asm.yb.apply(null,arguments)};var jc=g.__sapp_html5_get_ask_leave_site=function(){return g.asm.zb.apply(null,arguments)};g._main=function(){return g.asm.Ab.apply(null,arguments)};g.__sargs_add_kvp=function(){return g.asm.Bb.apply(null,arguments)};
var ra=g.stackSave=function(){return g.asm.Cb.apply(null,arguments)},qa=g.stackAlloc=function(){return g.asm.Db.apply(null,arguments)},sa=g.stackRestore=function(){return g.asm.Eb.apply(null,arguments)};g.dynCall_vi=function(){return g.asm.Fb.apply(null,arguments)};g.dynCall_v=function(){return g.asm.Gb.apply(null,arguments)};var T=g.dynCall_iiii=function(){return g.asm.Hb.apply(null,arguments)},hc=g.dynCall_idi=function(){return g.asm.Ib.apply(null,arguments)};g.asm=lc;var mc;
function ha(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}La=function nc(){mc||oc();mc||(La=nc)};
function oc(a){function b(){if(!mc&&(mc=!0,!na)){Da(Fa);Da(Ga);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(pc){var b=a,d=g._main;b=b||[];var e=b.length+1,f=qa(4*(e+1));I[f>>2]=wa(aa);for(var k=1;k<e;k++)I[(f>>2)+k]=wa(b[k-1]);I[(f>>2)+e]=0;try{var m=d(e,f);if(!la||0!==m){if(!la&&(na=!0,g.onExit))g.onExit(m);t(m,new ha(m))}}catch(r){r instanceof ha||("SimulateInfiniteLoop"==r?la=!0:((b=r)&&"object"===typeof r&&r.stack&&(b=[r,r.stack]),B("exception thrown: "+b),t(1,r)))}finally{}}if(g.postRun)for("function"==
typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)b=g.postRun.shift(),Ia.unshift(b);Da(Ia)}}a=a||p;if(!(0<L)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ja();Da(Ea);0<L||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=oc;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var pc=!0;g.noInitialRun&&(pc=!1);la=!0;oc();
