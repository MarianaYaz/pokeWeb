import{f as V}from"./index.bc425d56.js";function fr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Me={exports:{}},ue={exports:{}},He=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},lr=He,fe=Object.prototype.toString,le=function(e){return function(r){var t=fe.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(e){return e=e.toLowerCase(),function(t){return le(t)===e}}function ce(e){return Array.isArray(e)}function F(e){return typeof e>"u"}function cr(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Je=A("ArrayBuffer");function dr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Je(e.buffer),r}function hr(e){return typeof e=="string"}function pr(e){return typeof e=="number"}function Ve(e){return e!==null&&typeof e=="object"}function B(e){if(le(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var vr=A("Date"),mr=A("File"),Er=A("Blob"),Rr=A("FileList");function de(e){return fe.call(e)==="[object Function]"}function yr(e){return Ve(e)&&de(e.pipe)}function wr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===r||de(e.toString)&&e.toString()===r)}var br=A("URLSearchParams");function Or(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Ar(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function oe(){var e={};function r(n,a){B(e[a])&&B(n)?e[a]=oe(e[a],n):B(n)?e[a]=oe({},n):ce(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],r);return e}function Sr(e,r,t){return he(r,function(n,a){t&&typeof n=="function"?e[a]=lr(n,t):e[a]=n}),e}function Cr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function xr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Pr(e,r,t){var i,n,a,s={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],s[a]||(r[a]=e[a],s[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Tr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function _r(e){if(!e)return null;var r=e.length;if(F(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Nr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:ce,isArrayBuffer:Je,isBuffer:cr,isFormData:wr,isArrayBufferView:dr,isString:hr,isNumber:pr,isObject:Ve,isPlainObject:B,isUndefined:F,isDate:vr,isFile:mr,isBlob:Er,isFunction:de,isStream:yr,isURLSearchParams:br,isStandardBrowserEnv:Ar,forEach:he,merge:oe,extend:Sr,trim:Or,stripBOM:Cr,inherits:xr,toFlatObject:Pr,kindOf:le,kindOfTest:A,endsWith:Tr,toArray:_r,isTypedArray:Nr,isFileList:Rr},P=v;function ye(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var We=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(P.isURLSearchParams(t))n=t.toString();else{var a=[];P.forEach(t,function(f,d){f===null||typeof f>"u"||(P.isArray(f)?d=d+"[]":f=[f],P.forEach(f,function(h){P.isDate(h)?h=h.toISOString():P.isObject(h)&&(h=JSON.stringify(h)),a.push(ye(d)+"="+ye(h))}))}),n=a.join("&")}if(n){var s=r.indexOf("#");s!==-1&&(r=r.slice(0,s)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Dr=v;function $(){this.handlers=[]}$.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};$.prototype.forEach=function(r){Dr.forEach(this.handlers,function(i){i!==null&&r(i)})};var Ur=$,gr=v,qr=function(r,t){gr.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},ze=v;function _(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}ze.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Xe=_.prototype,Ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ke[e]={value:e}});Object.defineProperties(_,Ke);Object.defineProperty(Xe,"isAxiosError",{value:!0});_.from=function(e,r,t,i,n,a){var s=Object.create(Xe);return ze.toFlatObject(e,s,function(f){return f!==Error.prototype}),_.call(s,e.message,r,t,i,n),s.name=e.name,a&&Object.assign(s,a),s};var D=_,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=v;function Br(e,r){r=r||new FormData;var t=[];function i(a){return a===null?"":w.isDate(a)?a.toISOString():w.isArrayBuffer(a)||w.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(w.isPlainObject(a)||w.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),w.forEach(a,function(f,d){if(!w.isUndefined(f)){var c=s?s+"."+d:d,h;if(f&&!s&&typeof f=="object"){if(w.endsWith(d,"{}"))f=JSON.stringify(f);else if(w.endsWith(d,"[]")&&(h=w.toArray(f))){h.forEach(function(u){!w.isUndefined(u)&&r.append(c,i(u))});return}}n(f,c)}}),t.pop()}else r.append(s,i(a))}return n(e),r}var Ge=Br,W,we;function Lr(){if(we)return W;we=1;var e=D;return W=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W}var z,be;function Fr(){if(be)return z;be=1;var e=v;return z=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,s,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&d.push("expires="+new Date(a).toGMTString()),e.isString(s)&&d.push("path="+s),e.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),z}var $r=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},jr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Ir=$r,kr=jr,Ye=function(r,t){return r&&!Ir(t)?kr(r,t):t},X,Oe;function Mr(){if(Oe)return X;Oe=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(i){var n={},a,s,o;return i&&e.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),a=e.trim(d.substr(0,o)).toLowerCase(),s=e.trim(d.substr(o+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([s]):n[a]=n[a]?n[a]+", "+s:s}}),n},X}var K,Ae;function Hr(){if(Ae)return K;Ae=1;var e=v;return K=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(s){var o=s;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(o){var f=e.isString(o)?a(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),K}var Q,Se;function j(){if(Se)return Q;Se=1;var e=D,r=v;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),Q=t,Q}var G,Ce;function Jr(){return Ce||(Ce=1,G=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),G}var Y,xe;function Pe(){if(xe)return Y;xe=1;var e=v,r=Lr(),t=Fr(),i=We,n=Ye,a=Mr(),s=Hr(),o=Qe,f=D,d=j(),c=Jr();return Y=function(u){return new Promise(function(ar,S){var U=u.data,g=u.headers,q=u.responseType,C;function me(){u.cancelToken&&u.cancelToken.unsubscribe(C),u.signal&&u.signal.removeEventListener("abort",C)}e.isFormData(U)&&e.isStandardBrowserEnv()&&delete g["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var sr=u.auth.username||"",or=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";g.Authorization="Basic "+btoa(sr+":"+or)}var M=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(M,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Ee(){if(!!l){var y="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,x=!q||q==="text"||q==="json"?l.responseText:l.response,O={data:x,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};r(function(J){ar(J),me()},function(J){S(J),me()},O),l=null}}if("onloadend"in l?l.onloadend=Ee:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Ee)},l.onabort=function(){!l||(S(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){S(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var x=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(x=u.timeoutErrorMessage),S(new f(x,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var Re=(u.withCredentials||s(M))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Re&&(g[u.xsrfHeaderName]=Re)}"setRequestHeader"in l&&e.forEach(g,function(x,O){typeof U>"u"&&O.toLowerCase()==="content-type"?delete g[O]:l.setRequestHeader(O,x)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),q&&q!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(C=function(y){!l||(S(!y||y&&y.type?new d:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(C),u.signal&&(u.signal.aborted?C():u.signal.addEventListener("abort",C))),U||(U=null);var H=c(M);if(H&&["http","https","file"].indexOf(H)===-1){S(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(U)})},Y}var Z,Te;function Vr(){return Te||(Te=1,Z=null),Z}var p=v,_e=qr,Ne=D,Wr=Qe,zr=Ge,Xr={"Content-Type":"application/x-www-form-urlencoded"};function De(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Kr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Pe()),e}function Qr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:Wr,adapter:Kr(),transformRequest:[function(r,t){if(_e(t,"Accept"),_e(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return De(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return zr(a?{"files[]":r}:r,s&&new s)}else if(i||n==="application/json")return De(t,"application/json"),Qr(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(s){if(a)throw s.name==="SyntaxError"?Ne.from(s,Ne.ERR_BAD_RESPONSE,this,null,this.response):s}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vr()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(Xr)});var pe=I,Gr=v,Yr=pe,Zr=function(r,t,i){var n=this||Yr;return Gr.forEach(i,function(s){r=s.call(n,r,t)}),r},ee,Ue;function Ze(){return Ue||(Ue=1,ee=function(r){return!!(r&&r.__CANCEL__)}),ee}var ge=v,re=Zr,et=Ze(),rt=pe,tt=j();function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tt}var nt=function(r){te(r),r.headers=r.headers||{},r.data=re.call(r,r.data,r.headers,r.transformRequest),r.headers=ge.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||rt.adapter;return t(r).then(function(n){return te(r),n.data=re.call(r,n.data,n.headers,r.transformResponse),n},function(n){return et(n)||(te(r),n&&n.response&&(n.response.data=re.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},E=v,er=function(r,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function a(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function s(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var u=d[h]||a,R=u(h);E.isUndefined(R)&&u!==f||(i[h]=R)}),i},ne,qe;function rr(){return qe||(qe=1,ne={version:"0.27.2"}),ne}var it=rr().version,b=D,ve={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ve[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Be={};ve.transitional=function(r,t,i){function n(a,s){return"[Axios v"+it+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,o){if(r===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Be[s]&&(Be[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,s,o):!0}};function at(e,r,t){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],s=r[a];if(s){var o=e[a],f=o===void 0||s(o,a,e);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var st={assertOptions:at,validators:ve},tr=v,ot=We,Le=Ur,Fe=nt,k=er,ut=Ye,nr=st,T=nr.validators;function N(e){this.defaults=e,this.interceptors={request:new Le,response:new Le}}N.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=k(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&nr.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(a=a&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var s=[];this.interceptors.response.forEach(function(R){s.push(R.fulfilled,R.rejected)});var o;if(!a){var f=[Fe,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=Fe(d)}catch(u){return Promise.reject(u)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};N.prototype.getUri=function(r){r=k(this.defaults,r);var t=ut(r.baseURL,r.url);return ot(t,r.params,r.paramsSerializer)};tr.forEach(["delete","get","head","options"],function(r){N.prototype[r]=function(t,i){return this.request(k(i||{},{method:r,url:t,data:(i||{}).data}))}});tr.forEach(["post","put","patch"],function(r){function t(i){return function(a,s,o){return this.request(k(o||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[r]=t(),N.prototype[r+"Form"]=t(!0)});var ft=N,ie,$e;function lt(){if($e)return ie;$e=1;var e=j();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(s){i=s});var n=this;this.promise.then(function(a){if(!!n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](a);n._listeners=null}}),this.promise.then=function(a){var s,o=new Promise(function(f){n.subscribe(f),s=f}).then(a);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s){n.reason||(n.reason=new e(s),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(s){i=s});return{token:n,cancel:i}},ie=r,ie}var ae,je;function ct(){return je||(je=1,ae=function(r){return function(i){return r.apply(null,i)}}),ae}var se,Ie;function dt(){if(Ie)return se;Ie=1;var e=v;return se=function(t){return e.isObject(t)&&t.isAxiosError===!0},se}var ke=v,ht=He,L=ft,pt=er,vt=pe;function ir(e){var r=new L(e),t=ht(L.prototype.request,r);return ke.extend(t,L.prototype,r),ke.extend(t,r),t.create=function(n){return ir(pt(e,n))},t}var m=ir(vt);m.Axios=L;m.CanceledError=j();m.CancelToken=lt();m.isCancel=Ze();m.VERSION=rr().version;m.toFormData=Ge;m.AxiosError=D;m.Cancel=m.CanceledError;m.all=function(r){return Promise.all(r)};m.spread=ct();m.isAxiosError=dt();ue.exports=m;ue.exports.default=m;(function(e){e.exports=ue.exports})(Me);const mt=fr(Me.exports),Rt=()=>{const e=V(null),r=V(null),t=V(!0);return{getData:async n=>{try{const a=await mt.get(n);e.value=a.data}catch(a){r.value="Error de servidor",console.log(a)}finally{t.value=!1}},data:e,error:r,loading:t}};export{Rt as u};
