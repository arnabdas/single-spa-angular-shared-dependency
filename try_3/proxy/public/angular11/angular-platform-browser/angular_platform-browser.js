System.register(["@angular/common","@angular/core"],function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="cUpR")}({"0S4P":function(e,n){e.exports=t},cUpR:function(e,t,n){"use strict";n.r(t),n.d(t,"BrowserModule",function(){return ae}),n.d(t,"BrowserTransferStateModule",function(){return ve}),n.d(t,"By",function(){return Oe}),n.d(t,"DomSanitizer",function(){return W}),n.d(t,"EVENT_MANAGER_PLUGINS",function(){return y}),n.d(t,"EventManager",function(){return E}),n.d(t,"HAMMER_GESTURE_CONFIG",function(){return x}),n.d(t,"HAMMER_LOADER",function(){return H}),n.d(t,"HammerGestureConfig",function(){return U}),n.d(t,"HammerModule",function(){return G}),n.d(t,"Meta",function(){return ue}),n.d(t,"Title",function(){return pe}),n.d(t,"TransferState",function(){return Ee}),n.d(t,"VERSION",function(){return Te}),n.d(t,"disableDebugTools",function(){return _e}),n.d(t,"enableDebugTools",function(){return we}),n.d(t,"makeStateKey",function(){return ye}),n.d(t,"platformBrowser",function(){return se}),n.d(t,"\u0275BROWSER_SANITIZATION_PROVIDERS",function(){return oe}),n.d(t,"\u0275BROWSER_SANITIZATION_PROVIDERS__POST_R3__",function(){return re}),n.d(t,"\u0275BrowserDomAdapter",function(){return i}),n.d(t,"\u0275BrowserGetTestability",function(){return p}),n.d(t,"\u0275DomEventsPlugin",function(){return P}),n.d(t,"\u0275DomRendererFactory2",function(){return N}),n.d(t,"\u0275DomSanitizerImpl",function(){return X}),n.d(t,"\u0275DomSharedStylesHost",function(){return O}),n.d(t,"\u0275ELEMENT_PROBE_PROVIDERS",function(){return b}),n.d(t,"\u0275ELEMENT_PROBE_PROVIDERS__POST_R3__",function(){return w}),n.d(t,"\u0275HAMMER_PROVIDERS__POST_R3__",function(){return z}),n.d(t,"\u0275HammerGesturesPlugin",function(){return B}),n.d(t,"\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS",function(){return ne}),n.d(t,"\u0275KeyEventsPlugin",function(){return J}),n.d(t,"\u0275NAMESPACE_URIS",function(){return T}),n.d(t,"\u0275SharedStylesHost",function(){return v}),n.d(t,"\u0275TRANSITION_ID",function(){return u}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_a",function(){return ee}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_b",function(){return te}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_c",function(){return ie}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_d",function(){return ce}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_e",function(){return de}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_f",function(){return Se}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_g",function(){return S}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_h",function(){return F}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_i",function(){return V}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_j",function(){return Q}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_k",function(){return l}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_l",function(){return d}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_m",function(){return g}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_n",function(){return _}),n.d(t,"\u0275angular_packages_platform_browser_platform_browser_o",function(){return s}),n.d(t,"\u0275escapeHtml",function(){return be}),n.d(t,"\u0275flattenStyles",function(){return M}),n.d(t,"\u0275initDomAdapter",function(){return Y}),n.d(t,"\u0275shimContentAttribute",function(){return A}),n.d(t,"\u0275shimHostAttribute",function(){return j});var r=n("0S4P"),o=n("vOrQ");n.d(t,"\u0275getDOM",function(){return r["\u0275getDOM"]});class s extends r["\u0275DomAdapter"]{constructor(){super()}supportsDOMEvents(){return!0}}class i extends s{static makeCurrent(){Object(r["\u0275setRootDomAdapter"])(new i)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=c||(c=document.querySelector("base"),c)?c.getAttribute("href"):null;return null==t?null:(n=t,a||(a=document.createElement("a")),a.setAttribute("href",n),"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname);var n}resetBaseElement(){c=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return Object(r["\u0275parseCookieValue"])(document.cookie,e)}}let a,c=null;const u=new o.InjectionToken("TRANSITION_ID");function l(e,t,n){return()=>{n.get(o.ApplicationInitStatus).donePromise.then(()=>{const n=Object(r["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}}const d=[{provide:o.APP_INITIALIZER,useFactory:l,deps:[u,r.DOCUMENT,o.Injector],multi:!0}];class p{static init(){Object(o.setTestabilityGetter)(new p)}addToWindow(e){o["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},o["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),o["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),o["\u0275global"].frameworkStabilizers||(o["\u0275global"].frameworkStabilizers=[]),o["\u0275global"].frameworkStabilizers.push(e=>{const t=o["\u0275global"].getAllAngularTestabilities();let n=t.length,r=!1;const s=function(t){r=r||t,n--,0==n&&e(r)};t.forEach(function(e){e.whenStable(s)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const o=e.getTestability(t);return null!=o?o:n?Object(r["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}function f(e,t){"undefined"!=typeof COMPILED&&COMPILED||((o["\u0275global"].ng=o["\u0275global"].ng||{})[e]=t)}const h=(()=>({ApplicationRef:o.ApplicationRef,NgZone:o.NgZone}))();function m(e){return Object(o["\u0275getDebugNodeR2"])(e)}function g(e){return f("probe",m),f("coreTokens",Object.assign(Object.assign({},h),(e||[]).reduce((e,t)=>(e[t.name]=t.token,e),{}))),()=>m}const w=[],_=[{provide:o.APP_INITIALIZER,useFactory:g,deps:[[o.NgProbeToken,new o.Optional]],multi:!0}],b=w,y=new o.InjectionToken("EventManagerPlugins");let E=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error("No event manager plugin found for event "+e)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](y),o["\u0275\u0275inject"](o.NgZone))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class S{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const o=Object(r["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${t}`);return this.addEventListener(o,t,n)}}let v=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),O=(()=>{class e extends v{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>Object(r["\u0275getDOM"])().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const T={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},C=/%COMP%/g;function A(e){return"_ngcontent-%COMP%".replace(C,e)}function j(e){return"_nghost-%COMP%".replace(C,e)}function M(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?M(e,o,n):(o=o.replace(C,e),n.push(o))}return n}function R(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let N=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new I(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new D(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case o.ViewEncapsulation.ShadowDom:return new k(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=M(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](E),o["\u0275\u0275inject"](O),o["\u0275\u0275inject"](o.APP_ID))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class I{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(T[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=T[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=T[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?e.style.setProperty(t,n,r&o.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&o.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,R(n)):this.eventManager.addEventListener(e,t,R(n))}}class D extends I{constructor(e,t,n,r){super(e),this.component=n;const o=M(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr=A(r+"-"+n.id),this.hostAttr=j(r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class k extends I{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=M(r.id,r.styles,[]);for(let s=0;s<o.length;s++){const e=document.createElement("style");e.textContent=o[s],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let P=(()=>{class e extends S{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const L={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0},x=new o.InjectionToken("HammerGestureConfig"),H=new o.InjectionToken("HammerLoader");let U=(()=>{class e{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const n in this.overrides)t.get(n).set(this.overrides[n]);return t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),B=(()=>{class e extends S{constructor(e,t,n,r){super(e),this._config=t,this.console=n,this.loader=r}supports(e){return!(!L.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader&&(this.console.warn(`The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`),1))}addEventListener(e,t,n){const r=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){let r=!1,o=()=>{r=!0};return this.loader().then(()=>{if(!window.Hammer)return this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."),void(o=()=>{});r||(o=this.addEventListener(e,t,n))}).catch(()=>{this.console.warn(`The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`),o=()=>{}}),()=>{o()}}return r.runOutsideAngular(()=>{const o=this._config.buildHammer(e),s=function(e){r.runGuarded(function(){n(e)})};return o.on(t,s),()=>{o.off(t,s),"function"==typeof o.destroy&&o.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT),o["\u0275\u0275inject"](x),o["\u0275\u0275inject"](o["\u0275Console"]),o["\u0275\u0275inject"](H,8))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const z=[],F=[{provide:y,useClass:B,multi:!0,deps:[r.DOCUMENT,x,o["\u0275Console"],[new o.Optional,H]]},{provide:x,useClass:U,deps:[]}],V=z;let G=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:F}),e})();const K=["alt","control","meta","shift"],Z={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},q={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let J=(()=>{class e extends S{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,o){const s=e.parseEventName(n),i=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Object(r["\u0275getDOM"])().onAndCancel(t,s.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let s="";if(K.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),s+=e+".")}),s+=o,0!=n.length||0===o.length)return null;const i={};return i.domEventName=r,i.fullKey=s,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&$.hasOwnProperty(t)&&(t=$[t]))}return Z[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),K.forEach(r=>{r!=n&&(0,q[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(o["\u0275\u0275defineInjectable"])({factory:function(){return Object(o["\u0275\u0275inject"])(X)},token:e,providedIn:"root"}),e})();function Q(e){return new X(e.get(r.DOCUMENT))}let X=(()=>{class e extends W{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case o.SecurityContext.NONE:return t;case o.SecurityContext.HTML:return Object(o["\u0275allowSanitizationBypassAndThrow"])(t,"HTML")?Object(o["\u0275unwrapSafeValue"])(t):Object(o["\u0275_sanitizeHtml"])(this._doc,String(t));case o.SecurityContext.STYLE:return Object(o["\u0275allowSanitizationBypassAndThrow"])(t,"Style")?Object(o["\u0275unwrapSafeValue"])(t):t;case o.SecurityContext.SCRIPT:if(Object(o["\u0275allowSanitizationBypassAndThrow"])(t,"Script"))return Object(o["\u0275unwrapSafeValue"])(t);throw new Error("unsafe value used in a script context");case o.SecurityContext.URL:return Object(o["\u0275getSanitizationBypassType"])(t),Object(o["\u0275allowSanitizationBypassAndThrow"])(t,"URL")?Object(o["\u0275unwrapSafeValue"])(t):Object(o["\u0275_sanitizeUrl"])(String(t));case o.SecurityContext.RESOURCE_URL:if(Object(o["\u0275allowSanitizationBypassAndThrow"])(t,"ResourceURL"))return Object(o["\u0275unwrapSafeValue"])(t);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return Object(o["\u0275bypassSanitizationTrustHtml"])(e)}bypassSecurityTrustStyle(e){return Object(o["\u0275bypassSanitizationTrustStyle"])(e)}bypassSecurityTrustScript(e){return Object(o["\u0275bypassSanitizationTrustScript"])(e)}bypassSecurityTrustUrl(e){return Object(o["\u0275bypassSanitizationTrustUrl"])(e)}bypassSecurityTrustResourceUrl(e){return Object(o["\u0275bypassSanitizationTrustResourceUrl"])(e)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=Object(o["\u0275\u0275defineInjectable"])({factory:function(){return Q(Object(o["\u0275\u0275inject"])(o.INJECTOR))},token:e,providedIn:"root"}),e})();function Y(){i.makeCurrent(),p.init()}function ee(){return new o.ErrorHandler}function te(){return Object(o["\u0275setDocument"])(document),document}const ne=[{provide:o.PLATFORM_ID,useValue:r["\u0275PLATFORM_BROWSER_ID"]},{provide:o.PLATFORM_INITIALIZER,useValue:Y,multi:!0},{provide:r.DOCUMENT,useFactory:te,deps:[]}],re=[],oe=re,se=Object(o.createPlatformFactory)(o.platformCore,"browser",ne),ie=[oe,{provide:o["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:o.ErrorHandler,useFactory:ee,deps:[]},{provide:y,useClass:P,multi:!0,deps:[r.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:y,useClass:J,multi:!0,deps:[r.DOCUMENT]},V,{provide:N,useClass:N,deps:[E,O,o.APP_ID]},{provide:o.RendererFactory2,useExisting:N},{provide:v,useExisting:O},{provide:O,useClass:O,deps:[r.DOCUMENT]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone]},{provide:E,useClass:E,deps:[y,o.NgZone]},b];let ae=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:o.APP_ID,useValue:t.appId},{provide:u,useExisting:o.APP_ID},d]}}}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(o["\u0275\u0275inject"](e,12))},providers:ie,imports:[r.CommonModule,o.ApplicationModule]}),e})();function ce(){return new ue(Object(o["\u0275\u0275inject"])(r.DOCUMENT))}let ue=(()=>{class e{constructor(e){this._doc=e,this._dom=Object(r["\u0275getDOM"])()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((e,n)=>(n&&e.push(this._getOrCreateElement(n,t)),e),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const n=this.getTag(t);return n?this._setMetaElementAttributes(e,n):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const t=this._parseSelector(e),n=this.getTag(t);if(n&&this._containsAttributes(e,n))return n}const n=this._dom.createElement("meta");return this._setMetaElementAttributes(e,n),this._doc.getElementsByTagName("head")[0].appendChild(n),n}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(n=>t.setAttribute(this._getMetaKeyMap(n),e[n])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(n=>t.getAttribute(this._getMetaKeyMap(n))===e[n])}_getMetaKeyMap(e){return le[e]||e}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=Object(o["\u0275\u0275defineInjectable"])({factory:ce,token:e,providedIn:"root"}),e})();const le={httpEquiv:"http-equiv"};function de(){return new pe(Object(o["\u0275\u0275inject"])(r.DOCUMENT))}let pe=(()=>{class e{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=Object(o["\u0275\u0275defineInjectable"])({factory:de,token:e,providedIn:"root"}),e})();const fe="undefined"!=typeof window&&window||{};class he{constructor(e,t){this.msPerTick=e,this.numTicks=t}}class me{constructor(e){this.appRef=e.injector.get(o.ApplicationRef)}timeChangeDetection(e){const t=e&&e.record,n="Change Detection",o=null!=fe.console.profile;t&&o&&fe.console.profile(n);const s=Object(r["\u0275getDOM"])().performanceNow();let i=0;for(;i<5||Object(r["\u0275getDOM"])().performanceNow()-s<500;)this.appRef.tick(),i++;const a=Object(r["\u0275getDOM"])().performanceNow();t&&o&&fe.console.profileEnd(n);const c=(a-s)/i;return fe.console.log(`ran ${i} change detection cycles`),fe.console.log(c.toFixed(2)+" ms per check"),new he(c,i)}}const ge="profiler";function we(e){return f(ge,new me(e)),e}function _e(){f(ge,null)}function be(e){const t={"&":"&a;",'"':"&q;","'":"&s;","<":"&l;",">":"&g;"};return e.replace(/[&"'<>]/g,e=>t[e])}function ye(e){return e}let Ee=(()=>{class e{constructor(){this.store={},this.onSerializeCallbacks={}}static init(t){const n=new e;return n.store=t,n}get(e,t){return void 0!==this.store[e]?this.store[e]:t}set(e,t){this.store[e]=t}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}onSerialize(e,t){this.onSerializeCallbacks[e]=t}toJson(){for(const t in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(e){console.warn("Exception in onSerialize callback: ",e)}return JSON.stringify(this.store)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function Se(e,t){const n=e.getElementById(t+"-state");let r={};if(n&&n.textContent)try{r=JSON.parse(function(e){const t={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return e.replace(/&[^;]+;/g,e=>t[e])}(n.textContent))}catch(o){console.warn("Exception while restoring TransferState for app "+t,o)}return Ee.init(r)}let ve=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[{provide:Ee,useFactory:Se,deps:[r.DOCUMENT,o.APP_ID]}]}),e})();class Oe{static all(){return()=>!0}static css(e){return t=>null!=t.nativeElement&&function(e,t){return!!Object(r["\u0275getDOM"])().isElementNode(e)&&(e.matches&&e.matches(t)||e.msMatchesSelector&&e.msMatchesSelector(t)||e.webkitMatchesSelector&&e.webkitMatchesSelector(t))}(t.nativeElement,e)}static directive(e){return t=>-1!==t.providerTokens.indexOf(e)}}const Te=new o.Version("11.0.4")},vOrQ:function(e,t){e.exports=n}}))}}});