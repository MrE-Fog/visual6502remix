
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,l="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");m=l?ka.dirname(m)+"/":__dirname+"/";ha=(a,b)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);
process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;});process.on("unhandledRejection",function(a){throw a;});da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof la||u("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(ea||l)l?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=g.print||console.log.bind(console),u=g.printErr||console.warn.bind(console);
Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(da=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var h=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|h:(e&7)<<18|f<<12|h<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?ra(z,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var n=a.charCodeAt(++f);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ta,B,z,ua,va,C,D,E,F;function wa(){var a=oa.buffer;ta=a;g.HEAP8=B=new Int8Array(a);g.HEAP16=ua=new Int16Array(a);g.HEAP32=C=new Int32Array(a);g.HEAPU8=z=new Uint8Array(a);g.HEAPU16=va=new Uint16Array(a);g.HEAPU32=D=new Uint32Array(a);g.HEAPF32=E=new Float32Array(a);g.HEAPF64=F=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=g.preRun.shift();ya.unshift(a)}var G=0,Ea=null,H=null;function na(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";u(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="v6502r.wasm";if(!Fa()){var Ga=I;I=g.locateFile?g.locateFile(Ga,m):m+Ga}
function Ha(){var a=I;try{if(a==I&&x)return new Uint8Array(x);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Ia(){if(!x&&(ea||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ia)return new Promise(function(a,b){ia(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(){var a=document.getElementById("picker"),b=a.files[0];a.value=null;console.log("--- load file:");console.log("  name: "+b.name);console.log("  type: "+b.type);console.log("  size: "+b.size);256E3>b.size?(a=new FileReader,a.onload=function(c){console.log("file loaded!");(c=c.target.result)?(console.log("content length: "+c.byteLength),c=new Uint8Array(c),0==Ka([b.name,c,c.length])&&console.warn("util_emsc_loadfile() failed!")):console.warn("load result empty!")},a.readAsArrayBuffer(b)):
console.warn("ignoring file because it is too big")}function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function La(a){for(;0<a.length;)a.shift()(g)}function Ma(a){var b=Na();a();Oa(b)}var Pa=0;function Qa(){for(var a=J.length-1;0<=a;--a)Ra(a);J=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.jc)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Zc.apply(null,b.Pc)}}var J=[];
function Ra(a){var b=J[a];b.target.removeEventListener(b.Zb,b.Gc,b.ac);J.splice(a,1)}function K(a){function b(d){++Pa;Ua=a;Ta();a.cc(d);Ta();--Pa}if(a.bc)a.Gc=b,a.target.addEventListener(a.Zb,b,a.ac),J.push(a),Va||(Ba.push(Qa),Va=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Zb==a.Zb&&Ra(c--)}function Wa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Va,Ua,Xa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function L(a){a=2<a?y(a):a;return db[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var fb=[];function M(a){var b=fb[a];b||(a>=fb.length&&(fb.length=a+1),fb[a]=b=xa.get(a));return b}
function gb(a,b,c,d,e,f){Xa||(Xa=N(256));a={target:L(a),Zb:f,bc:d,cc:function(h){h=h||event;var n=h.target.id?h.target.id:"",p=Xa;A(Wa(h.target),z,p+0,128);A(n,z,p+128,128);M(d)(e,p,b)&&h.preventDefault()},ac:c};K(a)}
function hb(a,b,c,d,e,f){Ya||(Ya=N(176));a={target:L(a),jc:!0,Zb:f,bc:d,cc:function(h){var n=Ya;F[n>>3]=h.timeStamp;var p=n>>2;C[p+2]=h.location;C[p+3]=h.ctrlKey;C[p+4]=h.shiftKey;C[p+5]=h.altKey;C[p+6]=h.metaKey;C[p+7]=h.repeat;C[p+8]=h.charCode;C[p+9]=h.keyCode;C[p+10]=h.which;A(h.key||"",z,n+44,32);A(h.code||"",z,n+76,32);A(h.char||"",z,n+108,32);A(h.locale||"",z,n+140,32);M(d)(e,n,b)&&h.preventDefault()},ac:c};K(a)}
function ib(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=eb(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,f){Za||(Za=N(72));a=L(a);K({target:a,jc:"mousemove"!=f&&"mouseenter"!=f&&"mouseleave"!=f,Zb:f,bc:d,cc:function(h){h=h||event;ib(Za,h,a);M(d)(e,Za,b)&&h.preventDefault()},ac:c})}function jb(a,b,c,d,e){$a||($a=N(260));K({target:a,Zb:e,bc:d,cc:function(f){f=f||event;var h=$a,n=document.pointerLockElement||document.hc||document.tc||document.sc;C[h>>2]=!!n;var p=n&&n.id?n.id:"";A(Wa(n),z,h+4,128);A(p,z,h+132,128);M(d)(20,h,b)&&f.preventDefault()},ac:c})}
function kb(a,b,c,d,e){K({target:a,Zb:e,bc:d,cc:function(f){f=f||event;M(d)(38,0,b)&&f.preventDefault()},ac:c})}
function lb(a,b,c,d){ab||(ab=N(36));a=L(a);K({target:a,Zb:"resize",bc:d,cc:function(e){e=e||event;if(e.target==a){var f=document.body;if(f){var h=ab;C[h>>2]=e.detail;C[h+4>>2]=f.clientWidth;C[h+8>>2]=f.clientHeight;C[h+12>>2]=innerWidth;C[h+16>>2]=innerHeight;C[h+20>>2]=outerWidth;C[h+24>>2]=outerHeight;C[h+28>>2]=pageXOffset;C[h+32>>2]=pageYOffset;M(d)(10,h,b)&&e.preventDefault()}}},ac:c})}
function mb(a,b,c,d,e,f){bb||(bb=N(1696));a=L(a);K({target:a,jc:"touchstart"==f||"touchend"==f,Zb:f,bc:d,cc:function(h){for(var n,p={},q=h.touches,r=0;r<q.length;++r)n=q[r],n.vc=n.wc=0,p[n.identifier]=n;for(r=0;r<h.changedTouches.length;++r)n=h.changedTouches[r],n.vc=1,p[n.identifier]=n;for(r=0;r<h.targetTouches.length;++r)p[h.targetTouches[r].identifier].wc=1;q=bb;F[q>>3]=h.timeStamp;var w=q>>2;C[w+3]=h.ctrlKey;C[w+4]=h.shiftKey;C[w+5]=h.altKey;C[w+6]=h.metaKey;w+=7;var X=eb(a),k=0;for(r in p)if(n=
p[r],C[w]=n.identifier,C[w+1]=n.screenX,C[w+2]=n.screenY,C[w+3]=n.clientX,C[w+4]=n.clientY,C[w+5]=n.pageX,C[w+6]=n.pageY,C[w+7]=n.vc,C[w+8]=n.wc,C[w+9]=n.clientX-X.left,C[w+10]=n.clientY-X.top,w+=13,31<++k)break;C[q+8>>2]=k;M(d)(e,q,b)&&h.preventDefault()},ac:c})}function nb(a,b,c,d,e,f){a={target:L(a),Zb:f,bc:d,cc:function(h){h=h||event;M(d)(e,0,b)&&h.preventDefault()},ac:c};K(a)}
function ob(a,b,c,d){cb||(cb=N(104));K({target:a,jc:!0,Zb:"wheel",bc:d,cc:function(e){e=e||event;var f=cb;ib(f,e,a);F[f+72>>3]=e.deltaX;F[f+80>>3]=e.deltaY;F[f+88>>3]=e.deltaZ;C[f+96>>2]=e.deltaMode;M(d)(9,f,b)&&e.preventDefault()},ac:c})}
function pb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,f){b.drawArraysInstancedANGLE(c,d,e,f)},a.drawElementsInstanced=function(c,d,e,f,h){b.drawElementsInstancedANGLE(c,d,e,f,h)})}
function qb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function sb(a){a.Uc=a.getExtension("WEBGL_multi_draw")}
var tb=1,ub=[],P=[],vb=[],wb=[],xb=[],R=[],yb=[],zb={};function S(a){Ab||(Ab=a)}function Bb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}function Cb(a,b){a.hc||(a.hc=a.getContext,a.getContext=function(d,e){e=a.hc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(yb),d={Sc:c,attributes:b,version:b.Jc,pc:a};a.canvas&&(a.canvas.Oc=d);yb[c]=d;("undefined"==typeof b.uc||b.uc)&&Eb(d);return c}
function Eb(a){a||(a=Gb);if(!a.Ic){a.Ic=!0;var b=a.pc;pb(b);qb(b);rb(b);b.Rc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,Gb,Hb=["default","low-power","high-performance"],Ib={};
function Jb(){if(!Kb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in Ib)void 0===Ib[b]?delete a[b]:a[b]=Ib[b];var c=[];for(b in a)c.push(b+"="+a[b]);Kb=c}return Kb}var Kb,Lb=[null,[],[]];function Mb(a,b,c,d){for(var e=0;e<a;e++){var f=T[c](),h=f&&Bb(d);f?(f.name=h,d[h]=f):S(1282);C[b+4*e>>2]=h}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else S(1281)}function Ob(a){var b=sa(a)+1,c=N(b);A(a,z,c,b);return c}
function Pb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Qb(a,b,c,d,e){a-=5120;a=1==a?z:4==a?C:6==a?E:5==a||28922==a?D:va;var f=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>f,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<f)+4-1&-4)>>f)}function U(a){var b=T.Fc;if(b){var c=b.ic[a];"number"==typeof c&&(b.ic[a]=c=T.getUniformLocation(b,b.Dc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var V=[],W=[];function Rb(a){return 0===a%4&&(0!==a%100||0===a%400)}
var Sb=[31,29,31,30,31,30,31,31,30,31,30,31],Tb=[31,28,31,30,31,30,31,31,30,31,30,31];function Ub(a){var b=Array(sa(a)+1);A(a,b,0,b.length);return b}
function Vb(a,b,c,d){function e(k,t,v){for(k="number"==typeof k?k.toString():k||"";k.length<t;)k=v[0]+k;return k}function f(k,t){return e(k,t,"0")}function h(k,t){function v(Fb){return 0>Fb?-1:0<Fb?1:0}var Q;0===(Q=v(k.getFullYear()-t.getFullYear()))&&0===(Q=v(k.getMonth()-t.getMonth()))&&(Q=v(k.getDate()-t.getDate()));return Q}function n(k){switch(k.getDay()){case 0:return new Date(k.getFullYear()-1,11,29);case 1:return k;case 2:return new Date(k.getFullYear(),0,3);case 3:return new Date(k.getFullYear(),
0,2);case 4:return new Date(k.getFullYear(),0,1);case 5:return new Date(k.getFullYear()-1,11,31);case 6:return new Date(k.getFullYear()-1,11,30)}}function p(k){var t=k.ec;for(k=new Date((new Date(k.fc+1900,0,1)).getTime());0<t;){var v=k.getMonth(),Q=(Rb(k.getFullYear())?Sb:Tb)[v];if(t>Q-k.getDate())t-=Q-k.getDate()+1,k.setDate(1),11>v?k.setMonth(v+1):(k.setMonth(0),k.setFullYear(k.getFullYear()+1));else{k.setDate(k.getDate()+t);break}}v=new Date(k.getFullYear()+1,0,4);t=n(new Date(k.getFullYear(),
0,4));v=n(v);return 0>=h(t,k)?0>=h(v,k)?k.getFullYear()+1:k.getFullYear():k.getFullYear()-1}var q=C[d+40>>2];d={Mc:C[d>>2],Lc:C[d+4>>2],nc:C[d+8>>2],qc:C[d+12>>2],oc:C[d+16>>2],fc:C[d+20>>2],$b:C[d+24>>2],ec:C[d+28>>2],$c:C[d+32>>2],Kc:C[d+36>>2],Nc:q?y(q):""};c=y(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d",
"%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var w="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),X="January February March April May June July August September October November December".split(" ");q={"%a":function(k){return w[k.$b].substring(0,3)},"%A":function(k){return w[k.$b]},"%b":function(k){return X[k.oc].substring(0,3)},"%B":function(k){return X[k.oc]},
"%C":function(k){return f((k.fc+1900)/100|0,2)},"%d":function(k){return f(k.qc,2)},"%e":function(k){return e(k.qc,2," ")},"%g":function(k){return p(k).toString().substring(2)},"%G":function(k){return p(k)},"%H":function(k){return f(k.nc,2)},"%I":function(k){k=k.nc;0==k?k=12:12<k&&(k-=12);return f(k,2)},"%j":function(k){for(var t=0,v=0;v<=k.oc-1;t+=(Rb(k.fc+1900)?Sb:Tb)[v++]);return f(k.qc+t,3)},"%m":function(k){return f(k.oc+1,2)},"%M":function(k){return f(k.Lc,2)},"%n":function(){return"\n"},"%p":function(k){return 0<=
k.nc&&12>k.nc?"AM":"PM"},"%S":function(k){return f(k.Mc,2)},"%t":function(){return"\t"},"%u":function(k){return k.$b||7},"%U":function(k){return f(Math.floor((k.ec+7-k.$b)/7),2)},"%V":function(k){var t=Math.floor((k.ec+7-(k.$b+6)%7)/7);2>=(k.$b+371-k.ec-2)%7&&t++;if(t)53==t&&(v=(k.$b+371-k.ec)%7,4==v||3==v&&Rb(k.fc)||(t=1));else{t=52;var v=(k.$b+7-k.ec-1)%7;(4==v||5==v&&Rb(k.fc%400-1))&&t++}return f(t,2)},"%w":function(k){return k.$b},"%W":function(k){return f(Math.floor((k.ec+7-(k.$b+6)%7)/7),2)},
"%y":function(k){return(k.fc+1900).toString().substring(2)},"%Y":function(k){return k.fc+1900},"%z":function(k){k=k.Kc;var t=0<=k;k=Math.abs(k)/60;return(t?"+":"-")+String("0000"+(k/60*100+k%60)).slice(-4)},"%Z":function(k){return k.Nc},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));c=c.replace(/\0\0/g,"%");r=Ub(c);if(r.length>b)return 0;B.set(r,a);return r.length-1}
function Wb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);pa=!0}da(a,new la(a))}function Y(a){var b=sa(a)+1,c=Xb(b);A(a,B,c,b);return c}
function Ka(a){var b=["string","array","number"],c={string:p=>{var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=Xb(r);A(p,z,q,r)}return q},array:p=>{var q=Xb(p.length);B.set(p,q);return q}},d=g._util_emsc_loadfile,e=[],f=0;if(a)for(var h=0;h<a.length;h++){var n=c[b[h]];n?(0===f&&(f=Na()),e[h]=n(a[h])):e[h]=a[h]}a=d.apply(null,e);return a=function(p){0!==f&&Oa(f);return p}(a)}for(var T,Yb=new Float32Array(288),Z=0;288>Z;++Z)V[Z]=Yb.subarray(0,Z+1);var Zb=new Int32Array(288);
for(Z=0;288>Z;++Z)W[Z]=Zb.subarray(0,Z+1);
var gc={ha:function(){return 0},gb:function(){return 0},hb:function(){},ab:function(){return!0},a:function(){na("")},Ta:function(a,b,c){a=y(a);for(var d="",e=0;e<c;e++)d+=String.fromCharCode(z[b+e]);console.log(btoa(d));b=document.createElement("a");b.setAttribute("href","data:application/octet-stream;base64,"+btoa(d));b.setAttribute("download",a);b.style.display="none";document.body.appendChild(b);b.click();document.body.removeChild(b)},y:function(a,b){a=y(a);b=y(b);var c=document.createElement("a");
c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b));c.setAttribute("download",a);c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c)},Hb:function(){g.emsc_js_onload=Ja},Gb:function(){return navigator.userAgent.includes("Macintosh")?1:0},Pa:function(){document.getElementById("picker").click()},Ka:function(a){a=y(a);window.open(a)},bb:function(){return Date.now()},ia:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||
1},ma:function(a,b,c){a=L(a);if(!a)return-4;a=eb(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},db:function(a,b,c){z.copyWithin(a,b,b+c)},Za:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{oa.grow(e-ta.byteLength+65535>>>16);wa();var f=1;break a}catch(h){}f=
void 0}if(f)return!0}return!1},P:function(a,b,c,d){gb(a,b,c,d,12,"blur");return 0},ga:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},Q:function(a,b,c,d){gb(a,b,c,d,13,"focus");return 0},Z:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},X:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},Y:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},da:function(a,b,c,d){O(a,b,c,d,5,"mousedown");return 0},aa:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");return 0},$:function(a,b,c,d){O(a,
b,c,d,34,"mouseleave");return 0},ba:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},ca:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},S:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.hc||document.body.tc||document.body.sc))return-1;a=L(a);if(!a)return-4;jb(a,b,c,d,"pointerlockchange");jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");return 0},R:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||
document.body.hc||document.body.tc||document.body.sc))return-1;a=L(a);if(!a)return-4;kb(a,b,c,d,"pointerlockerror");kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return 0},zb:function(a,b,c,d){lb(a,b,c,d);return 0},T:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");return 0},U:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},V:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},W:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},
O:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},_:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(ob(a,b,c,d),0):-1},ea:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:Hb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],Jc:C[b+8],Tc:C[b+9],uc:C[b+10],Hc:C[b+11],Vc:C[b+12],Wc:C[b+13]};a=L(a);
return!a||b.Hc?0:Cb(a,b)},Ua:function(a,b){a=yb[a];b=y(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&pb(T);"OES_vertex_array_object"==b&&qb(T);"WEBGL_draw_buffers"==b&&rb(T);"WEBGL_multi_draw"==b&&sb(T);return!!a.pc.getExtension(b)},Wa:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Va:function(a){Gb=yb[a];g.Qc=T=Gb&&Gb.pc;return!a||T?0:-5},_a:function(a,b){var c=0;Jb().forEach(function(d,e){var f=b+c;e=D[a+4*e>>2]=f;for(f=0;f<d.length;++f)B[e++>>
0]=d.charCodeAt(f);B[e>>0]=0;c+=d.length+1});return 0},$a:function(a,b){var c=Jb();D[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});D[b>>2]=d;return 0},fa:function(){return 52},fb:function(){return 52},Xa:function(){return 70},eb:function(a,b,c,d){for(var e=0,f=0;f<c;f++){var h=D[b>>2],n=D[b+4>>2];b+=8;for(var p=0;p<n;p++){var q=z[h+p],r=Lb[a];0===q||10===q?((1===a?ma:u)(ra(r,0)),r.length=0):r.push(q)}e+=n}D[d>>2]=e;return 0},c:function(a){T.activeTexture(a)},C:function(a,b){T.attachShader(P[a],
R[b])},d:function(a,b){T.bindBuffer(a,ub[b])},la:function(a,b){T.bindFramebuffer(a,vb[b])},ya:function(a,b){T.bindRenderbuffer(a,wb[b])},b:function(a,b){T.bindTexture(a,xb[b])},G:function(a,b,c,d){T.blendColor(a,b,c,d)},H:function(a,b){T.blendEquationSeparate(a,b)},I:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},Ba:function(a,b,c,d){T.bufferData(a,c?z.subarray(c,c+b):b,d)},l:function(a,b,c,d){T.bufferSubData(a,b,z.subarray(d,d+c))},Ab:function(a){T.clear(a)},Db:function(a,b,c,d){T.clearColor(a,
b,c,d)},Cb:function(a){T.clearDepth(a)},Bb:function(a){T.clearStencil(a)},m:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},na:function(a){T.compileShader(R[a])},va:function(a,b,c,d,e,f,h,n){T.compressedTexImage2D(a,b,c,d,e,f,n?z.subarray(n,n+h):null)},ta:function(){var a=Bb(P),b=T.createProgram();b.name=a;b.mc=b.kc=b.lc=0;b.rc=1;P[a]=b;return a},pa:function(a){var b=Bb(R);R[b]=T.createShader(a);return b},D:function(a){T.cullFace(a)},Ga:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=ub[d];
e&&(T.deleteBuffer(e),e.name=0,ub[d]=null)}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=vb[d];e&&(T.deleteFramebuffer(e),e.name=0,vb[d]=null)}},w:function(a){if(a){var b=P[a];b?(T.deleteProgram(b),b.name=0,P[a]=null):S(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=wb[d];e&&(T.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},s:function(a){if(a){var b=R[a];b?(T.deleteShader(b),R[a]=null):S(1281)}},Fa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=xb[d];e&&(T.deleteTexture(e),
e.name=0,xb[d]=null)}},v:function(a){T.depthFunc(a)},u:function(a){T.depthMask(!!a)},e:function(a){T.disable(a)},K:function(a){T.disableVertexAttribArray(a)},jb:function(a,b,c){T.drawArrays(a,b,c)},kb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},lb:function(a,b,c,d){T.drawElements(a,b,c,d)},mb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},g:function(a){T.enable(a)},wb:function(a){T.enableVertexAttribArray(a)},E:function(a){T.frontFace(a)},Ca:function(a,b){Mb(a,b,"createBuffer",ub)},
za:function(a,b){Mb(a,b,"createRenderbuffer",wb)},wa:function(a,b){Mb(a,b,"createTexture",xb)},Eb:function(a,b){return T.getAttribLocation(P[a],y(b))},f:function(a,b){Nb(a,b)},qa:function(a,b,c,d){a=T.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(C[c>>2]=b)},B:function(a,b,c){if(c)if(a>=tb)S(1281);else if(a=P[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.mc=
Math.max(a.mc,T.getActiveUniform(a,b).name.length+1);C[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.kc=Math.max(a.kc,T.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.kc}else if(35381==b){if(!a.lc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,T.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.lc}else C[c>>2]=T.getProgramParameter(a,b);else S(1281)},Fb:function(a,b,c,d){a=T.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,
z,d,b):0;c&&(C[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(R[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=T.getShaderParameter(R[a],b):S(1281)},Ha:function(a){var b=zb[a];if(!b){switch(a){case 7939:b=T.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ob(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=T.getParameter(a))||S(1280);b=b&&Ob(b);break;case 7938:b=
Ob("OpenGL ES 2.0 ("+T.getParameter(7938)+")");break;case 35724:b=T.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ob(b);break;default:S(1280)}zb[a]=b}return b},k:function(a,b){b=y(b);if(a=P[a]){var c=a,d=c.ic,e=c.Ec,f;if(!d)for(c.ic=d={},c.Dc={},f=0;f<T.getProgramParameter(c,35718);++f){var h=T.getActiveUniform(c,f);var n=h.name;h=h.size;var p=Pb(n);p=0<p?n.slice(0,p):n;var q=c.rc;
c.rc+=h;e[p]=[h,q];for(n=0;n<h;++n)d[q]=n,c.Dc[q++]=p}c=a.ic;d=0;e=b;f=Pb(b);0<f&&(d=parseInt(b.slice(f+1))>>>0,e=b.slice(0,f));if((e=a.Ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else S(1281);return-1},ra:function(a){a=P[a];T.linkProgram(a);a.ic=0;a.Ec={}},F:function(a,b){T.polygonOffset(a,b)},xa:function(a,b,c,d){T.renderbufferStorage(a,b,c,d)},q:function(a,b,c,d){T.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",f=0;f<b;++f){var h=d?C[d+4*f>>2]:-1;e+=y(C[c+4*f>>
2],0>h?void 0:h)}T.shaderSource(R[a],e)},Ea:function(a,b,c){T.stencilFunc(a,b,c)},ka:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},t:function(a){T.stencilMask(a)},Da:function(a,b,c){T.stencilOp(a,b,c)},ja:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},ua:function(a,b,c,d,e,f,h,n,p){T.texImage2D(a,b,c,d,e,f,h,n,p?Qb(n,h,d,e,p):null)},h:function(a,b,c){T.texParameteri(a,b,c)},ib:function(a,b,c,d,e,f,h,n,p){var q=null;p&&(q=Qb(n,h,e,f,p));T.texSubImage2D(a,b,c,d,e,f,h,n,q)},vb:function(a,b,c){if(288>=
b)for(var d=V[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);T.uniform1fv(U(a),d)},A:function(a,b){T.uniform1i(U(a),b)},rb:function(a,b,c){if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);T.uniform1iv(U(a),d)},ub:function(a,b,c){if(144>=b)for(var d=V[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);T.uniform2fv(U(a),d)},qb:function(a,b,c){if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*
e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);T.uniform2iv(U(a),d)},tb:function(a,b,c){if(96>=b)for(var d=V[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);T.uniform3fv(U(a),d)},pb:function(a,b,c){if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);T.uniform3iv(U(a),d)},sb:function(a,b,c){if(72>=b){var d=V[4*b-1],e=E;c>>=2;for(var f=
0;f<4*b;f+=4){var h=c+f;d[f]=e[h];d[f+1]=e[h+1];d[f+2]=e[h+2];d[f+3]=e[h+3]}}else d=E.subarray(c>>2,c+16*b>>2);T.uniform4fv(U(a),d)},ob:function(a,b,c){if(72>=b)for(var d=W[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);T.uniform4iv(U(a),d)},nb:function(a,b,c,d){if(18>=b){var e=V[16*b-1],f=E;d>>=2;for(var h=0;h<16*b;h+=16){var n=d+h;e[h]=f[n];e[h+1]=f[n+1];e[h+2]=f[n+2];e[h+3]=f[n+3];e[h+4]=f[n+4];e[h+
5]=f[n+5];e[h+6]=f[n+6];e[h+7]=f[n+7];e[h+8]=f[n+8];e[h+9]=f[n+9];e[h+10]=f[n+10];e[h+11]=f[n+11];e[h+12]=f[n+12];e[h+13]=f[n+13];e[h+14]=f[n+14];e[h+15]=f[n+15]}}else e=E.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(U(a),!!c,e)},j:function(a){a=P[a];T.useProgram(a);T.Fc=a},xb:function(a,b){T.vertexAttribDivisor(a,b)},yb:function(a,b,c,d,e,f){T.vertexAttribPointer(a,b,c,!!d,e,f)},r:function(a,b,c,d){T.viewport(a,b,c,d)},Sa:function(){g.xc=a=>{0!=$b()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
g.xc)},Ra:function(){g.Cc=a=>{const b=a.clipboardData.getData("text");Ma(()=>{const c=Y(b);ac(c)})};window.addEventListener("paste",g.Cc)},Qa:function(a){g.Xc=[];a=y(a);a=document.getElementById(a);g.yc=b=>{b.stopPropagation();b.preventDefault()};g.zc=b=>{b.stopPropagation();b.preventDefault()};g.Ac=b=>{b.stopPropagation();b.preventDefault()};g.Bc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Yc=c;bc(c.length);for(let d=0;d<c.length;d++)Ma(()=>{const e=Y(c[d].name);cc(d,
e)});dc(b.clientX,b.clientY)};a.addEventListener("dragenter",g.yc,!1);a.addEventListener("dragleave",g.zc,!1);a.addEventListener("dragover",g.Ac,!1);a.addEventListener("drop",g.Bc,!1)},Ja:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ec()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},
sa:function(a){a=y(a);g.dc=document.getElementById(a);g.dc||console.log("sokol_app.h: invalid target:"+a);g.dc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Oa:function(){window.removeEventListener("beforeunload",g.xc)},Na:function(){window.removeEventListener("paste",g.Cc)},Ma:function(a){a=y(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.yc);a.removeEventListener("dragleave",g.zc);a.removeEventListener("dragover",g.Ac);a.removeEventListener("drop",
g.Bc)},x:function(){g.dc&&g.dc.requestPointerLock&&g.dc.requestPointerLock()},M:function(a,b){if(g.dc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.dc.style.cursor=a}},Ia:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),f=e.createImageData(a,b);f.data.set(z.subarray(c,c+a*b*4));e.putImageData(f,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},La:function(a){a=y(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize",
"off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Aa:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Ma(()=>{const e=Y(c),f=Y(d);fc(e,f)})}},J:function(){return navigator.userAgent.includes("Macintosh")?1:0},Ya:function(a,b,
c,d){return Vb(a,b,c,d)}};
(function(){function a(e){g.asm=e.exports;oa=g.asm.Ib;wa();xa=g.asm.Vb;za.unshift(g.asm.Jb);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ea&&(clearInterval(Ea),Ea=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(f){return WebAssembly.instantiate(f,d)}).then(function(f){return f}).then(e,function(f){u("failed to asynchronously prepare wasm: "+f);na(f)})}var d={a:gc};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||I.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){u("wasm streaming compile failed: "+f);u("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Jb).apply(null,arguments)};g._util_emsc_loadfile=function(){return(g._util_emsc_loadfile=g.asm.Kb).apply(null,arguments)};
var N=g._malloc=function(){return(N=g._malloc=g.asm.Lb).apply(null,arguments)},ec=g.__sapp_emsc_notify_keyboard_hidden=function(){return(ec=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Mb).apply(null,arguments)},ac=g.__sapp_emsc_onpaste=function(){return(ac=g.__sapp_emsc_onpaste=g.asm.Nb).apply(null,arguments)},$b=g.__sapp_html5_get_ask_leave_site=function(){return($b=g.__sapp_html5_get_ask_leave_site=g.asm.Ob).apply(null,arguments)},bc=g.__sapp_emsc_begin_drop=function(){return(bc=g.__sapp_emsc_begin_drop=
g.asm.Pb).apply(null,arguments)},cc=g.__sapp_emsc_drop=function(){return(cc=g.__sapp_emsc_drop=g.asm.Qb).apply(null,arguments)},dc=g.__sapp_emsc_end_drop=function(){return(dc=g.__sapp_emsc_end_drop=g.asm.Rb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Sb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Tb).apply(null,arguments)};
var fc=g.__sargs_add_kvp=function(){return(fc=g.__sargs_add_kvp=g.asm.Ub).apply(null,arguments)},Na=g.stackSave=function(){return(Na=g.stackSave=g.asm.Wb).apply(null,arguments)},Oa=g.stackRestore=function(){return(Oa=g.stackRestore=g.asm.Xb).apply(null,arguments)},Xb=g.stackAlloc=function(){return(Xb=g.stackAlloc=g.asm.Yb).apply(null,arguments)};g.___start_em_js=4885172;g.___stop_em_js=4893486;var hc;H=function ic(){hc||jc();hc||(H=ic)};
function kc(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=Xb(4*(c+1)),e=d>>2;a.forEach(h=>{C[e++]=Y(h)});C[e]=0;try{var f=b(c,d);Wb(f)}catch(h){h instanceof la||"unwind"==h||da(1,h)}}
function jc(){function a(){if(!hc&&(hc=!0,g.calledRun=!0,!pa)){La(za);La(Aa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();lc&&kc(b);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ca.unshift(c)}La(Ca)}}var b=b||ba;if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Da();La(ya);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);
a()},1)):a())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var lc=!0;g.noInitialRun&&(lc=!1);jc();
