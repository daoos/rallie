function re(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(l){try{h(i.next(l))}catch(f){s(f)}}function o(l){try{h(i.throw(l))}catch(f){s(f)}}function h(l){var f;l.done?r(l.value):(f=l.value,f instanceof n?f:new n(function(p){p(f)})).then(a,o)}h((i=i.apply(t,e||[])).next())})}function u(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}function M(t,e,n,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n}function S(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(l){try{h(i.next(l))}catch(f){s(f)}}function o(l){try{h(i.throw(l))}catch(f){s(f)}}function h(l){var f;l.done?r(l.value):(f=l.value,f instanceof n?f:new n(function(p){p(f)})).then(a,o)}h((i=i.apply(t,e||[])).next())})}function c(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}function x(t,e,n,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n}const se=Object.assign,oe=Object.prototype.hasOwnProperty,it=(t,e)=>oe.call(t,e),P=Array.isArray,tt=t=>Ct(t)==="[object Map]",gt=t=>typeof t=="symbol",st=t=>t!==null&&typeof t=="object",ae=Object.prototype.toString,Ct=t=>ae.call(t),ce=t=>Ct(t).slice(8,-1),bt=t=>typeof t=="string"&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gt=(t,e)=>!Object.is(t,e),le=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let he;function Vt(t,e=he){e&&e.active&&e.effects.push(t)}const Ft=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ht=t=>(t.w&O)>0,Jt=t=>(t.n&O)>0,ht=new WeakMap;let N=0,O=1;const ft=30;let _;const L=Symbol(""),ut=Symbol("");class fe{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vt(this,i)}run(){if(!this.active)return this.fn();let e=_,n=B;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_,_=this,B=!0,O=1<<++N,N<=ft?(({deps:i})=>{if(i.length)for(let r=0;r<i.length;r++)i[r].w|=O})(this):Rt(this),this.fn()}finally{N<=ft&&(i=>{const{deps:r}=i;if(r.length){let s=0;for(let a=0;a<r.length;a++){const o=r[a];Ht(o)&&!Jt(o)?o.delete(i):r[s++]=o,o.w&=~O,o.n&=~O}r.length=s}})(this),O=1<<--N,_=this.parent,B=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_===this?this.deferStop=!0:this.active&&(Rt(this),this.onStop&&this.onStop(),this.active=!1)}}function Rt(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let B=!0;const At=[];function g(t,e,n){if(B&&_){let i=ht.get(t);i||ht.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ft()),function(s,a){let o=!1;N<=ft?Jt(s)||(s.n|=O,o=!Ht(s)):o=!s.has(_),o&&(s.add(_),_.deps.push(s))}(r)}}function W(t,e,n,i,r,s){const a=ht.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&P(t)){const h=le(i);a.forEach((l,f)=>{(f==="length"||f>=h)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),e){case"add":P(t)?bt(n)&&o.push(a.get("length")):(o.push(a.get(L)),tt(t)&&o.push(a.get(ut)));break;case"delete":P(t)||(o.push(a.get(L)),tt(t)&&o.push(a.get(ut)));break;case"set":tt(t)&&o.push(a.get(L))}if(o.length===1)o[0]&&Ot(o[0]);else{const h=[];for(const l of o)l&&h.push(...l);Ot(Ft(h))}}function Ot(t,e){const n=P(t)?t:[...t];for(const i of n)i.computed&&Pt(i);for(const i of n)i.computed||Pt(i)}function Pt(t,e){(t!==_||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ue=function(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}("__proto__,__v_isRef,__isVue"),Kt=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gt)),de=qt(),pe=qt(!0),Wt=function(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=d(this);for(let s=0,a=this.length;s<a;s++)g(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(d)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){At.push(B),B=!1;const i=d(this)[e].apply(this,n);return function(){const r=At.pop();B=r===void 0||r}(),i}}),t}();function qt(t=!1,e=!1){return function(n,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?ke:Xt:e?Se:Qt).get(n))return n;const s=P(n);if(!t&&s&&it(Wt,i))return Reflect.get(Wt,i,r);const a=Reflect.get(n,i,r);return(gt(i)?Kt.has(i):ue(i))?a:(t||g(n,"get",i),e?a:z(a)?s&&bt(i)?a:a.value:st(a)?t?K(a):Et(a):a)}}const we={get:de,set:function(t=!1){return function(e,n,i,r){let s=e[n];if(dt(s)&&z(s)&&!z(i))return!1;if(!t&&(function(h){return!(!h||!h.__v_isShallow)}(i)||dt(i)||(s=d(s),i=d(i)),!P(e)&&z(s)&&!z(i)))return s.value=i,!0;const a=P(e)&&bt(n)?Number(n)<e.length:it(e,n),o=Reflect.set(e,n,i,r);return e===d(r)&&(a?Gt(i,s)&&W(e,"set",n,i):W(e,"add",n,i)),o}}(),deleteProperty:function(t,e){const n=it(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&W(t,"delete",e,void 0),i},has:function(t,e){const n=Reflect.has(t,e);return gt(e)&&Kt.has(e)||g(t,"has",e),n},ownKeys:function(t){return g(t,"iterate",P(t)?"length":L),Reflect.ownKeys(t)}},ve={get:pe,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},_t=t=>t,ot=t=>Reflect.getPrototypeOf(t);function q(t,e,n=!1,i=!1){const r=d(t=t.__v_raw),s=d(e);n||(e!==s&&g(r,"get",e),g(r,"get",s));const{has:a}=ot(r),o=i?_t:n?kt:St;return a.call(r,e)?o(t.get(e)):a.call(r,s)?o(t.get(s)):void(t!==r&&t.get(e))}function D(t,e=!1){const n=this.__v_raw,i=d(n),r=d(t);return e||(t!==r&&g(i,"has",t),g(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Q(t,e=!1){return t=t.__v_raw,!e&&g(d(t),"iterate",L),Reflect.get(t,"size",t)}function $t(t){t=d(t);const e=d(this);return ot(e).has.call(e,t)||(e.add(t),W(e,"add",t,t)),this}function xt(t,e){e=d(e);const n=d(this),{has:i,get:r}=ot(n);let s=i.call(n,t);s||(t=d(t),s=i.call(n,t));const a=r.call(n,t);return n.set(t,e),s?Gt(e,a)&&W(n,"set",t,e):W(n,"add",t,e),this}function Lt(t){const e=d(this),{has:n,get:i}=ot(e);let r=n.call(e,t);r||(t=d(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&W(e,"delete",t,void 0),s}function Bt(){const t=d(this),e=t.size!==0,n=t.clear();return e&&W(t,"clear",void 0,void 0),n}function X(t,e){return function(n,i){const r=this,s=r.__v_raw,a=d(s),o=e?_t:t?kt:St;return!t&&g(a,"iterate",L),s.forEach((h,l)=>n.call(i,o(h),o(l),r))}}function Y(t,e,n){return function(...i){const r=this.__v_raw,s=d(r),a=tt(s),o=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,l=r[t](...i),f=n?_t:e?kt:St;return!e&&g(s,"iterate",h?ut:L),{next(){const{value:p,done:at}=l.next();return at?{value:p,done:at}:{value:o?[f(p[0]),f(p[1])]:f(p),done:at}},[Symbol.iterator](){return this}}}}function R(t){return function(...e){return t!=="delete"&&this}}const[me,ye,ge,be]=function(){const t={get(r){return q(this,r)},get size(){return Q(this)},has:D,add:$t,set:xt,delete:Lt,clear:Bt,forEach:X(!1,!1)},e={get(r){return q(this,r,!1,!0)},get size(){return Q(this)},has:D,add:$t,set:xt,delete:Lt,clear:Bt,forEach:X(!1,!0)},n={get(r){return q(this,r,!0)},get size(){return Q(this,!0)},has(r){return D.call(this,r,!0)},add:R("add"),set:R("set"),delete:R("delete"),clear:R("clear"),forEach:X(!0,!1)},i={get(r){return q(this,r,!0,!0)},get size(){return Q(this,!0)},has(r){return D.call(this,r,!0)},add:R("add"),set:R("set"),delete:R("delete"),clear:R("clear"),forEach:X(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Y(r,!1,!1),n[r]=Y(r,!0,!1),e[r]=Y(r,!1,!0),i[r]=Y(r,!0,!0)}),[t,n,e,i]}();function Dt(t,e){const n=e?t?be:ge:t?ye:me;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(it(n,r)&&r in i?n:i,r,s)}const _e={get:Dt(!1,!1)},Ee={get:Dt(!0,!1)},Qt=new WeakMap,Se=new WeakMap,Xt=new WeakMap,ke=new WeakMap;function Et(t){return dt(t)?t:Yt(t,!1,we,_e,Qt)}function K(t){return Yt(t,!0,ve,Ee,Xt)}function Yt(t,e,n,i,r){if(!st(t)||t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=(o=t).__v_skip||!Object.isExtensible(o)?0:function(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(ce(o));var o;if(a===0)return t;const h=new Proxy(t,a===2?i:n);return r.set(t,h),h}function dt(t){return!(!t||!t.__v_isReadonly)}function d(t){const e=t&&t.__v_raw;return e?d(e):t}const St=t=>st(t)?Et(t):t,kt=t=>st(t)?K(t):t;function z(t){return!(!t||t.__v_isRef!==!0)}const Re=t=>`[@rallie/core] you are trying to remove a listener of the broadcast event ${t}, but ${t} hasn't been registed as a broadcast event`,Ae=t=>`[@rallie/core] you are trying to remove a listener of the broadcast event ${t}, but the listener hasn't been registed`,Oe=t=>`[@rallie/core] one of the callbacks of the broadcast event ${t} throws an uncaught error`,Pe=t=>`[@rallie/core] you are trying to remove a listener of the unicast event ${t}, but ${t} hasn't been registed as a unicast event`,We=t=>`[@rallie/core] you are trying to register a unicast event ${t}, but it has been registered before`,$e=t=>`[@rallie/core] you have emitted ${t} unicast, but there is no listener of this event`,xe=t=>`[@rallie/core] ${t} is existing, you are not allowed to create it again`,Le=(t,e)=>`[@rallie/core] can not find any assets of the app ${t} on the bus ${e}`,Be=t=>`[@rallie/core] you are trying to activate app ${t}, but it was not created`,Me=t=>`[@rallie/core] state ${t} is private, you are not allowed to set it`,je=t=>`[@rallie/core] please describe your action when you modify the state ${t}`,Zt=t=>`[@rallie/core] it's not allowed to set or watch state ${t} before it is initialized`,Te=t=>`[@rallie/core] duplicated initialized state ${t}`,Ne=t=>`[@rallie/core] it's not allowed to initialized state ${t} to a primitive value`,ze=t=>`[@rallie/core] the bus named ${t} has been defined before, please rename your bus`,Ue=(t,e)=>`[@rallie/core] There is a circular dependency when activating the app ${t}, and the circular path is ${e.join("->")}`,Ie=()=>"[@rallie/core] next() called multiple times in the middleware",Ce=()=>"[@rallie/core] the middleware must be a function",Ge=(t,e)=>`[@rallie/core] the event ${t} is not in the events pool that you specified when calling on${e?"Unicast":"Broadcast"}`,Mt=t=>(e,n)=>{let i=-1;const r=s=>{if(s<=i)return Promise.reject(new Error(Ie()));i=s;let a=t[s];if(s===t.length&&(a=n),!a)return Promise.resolve();try{return Promise.resolve(a(e,r.bind(null,s+1)))}catch(o){return Promise.reject(o)}};return r(0)};var E,$,et,U,I,v,b,pt,te;class Ve{constructor(){E.set(this,{}),$.set(this,{})}addBroadcastEventListener(e,n){c(this,E,"f")[e]=c(this,E,"f")[e]||new Set,c(this,E,"f")[e].add(n)}addUnicastEventListener(e,n){if(c(this,$,"f")[e])throw new Error(We(e));c(this,$,"f")[e]=n}removeBroadcastEventListener(e,n){const i=c(this,E,"f")[e];if(!i){const r=Re(e);throw new Error(r)}if(!i.has(n)){const r=Ae(e);throw new Error(r)}i.delete(n)}removeUnicastEventListener(e){if(!c(this,$,"f")[e]){const n=Pe(e);throw new Error(n)}delete c(this,$,"f")[e]}emitBroadcast(e,...n){c(this,E,"f")[e]=c(this,E,"f")[e]||new Set,c(this,E,"f")[e].forEach(i=>{try{i(...n)}catch(r){console.error(Oe(e)),console.error(r)}})}emitUnicast(e,...n){const i=c(this,$,"f")[e];if(i)return i(...n);throw new Error($e(e))}}E=new WeakMap,$=new WeakMap;class Fe{constructor(e,n){et.set(this,void 0),U.set(this,void 0),x(this,et,e,"f"),x(this,U,n,"f"),c(this,U,"f")[e].watchers.add(this)}do(e){return this.handler=e,()=>this.unwatch()}unwatch(){this==null||this.stopEffect(),this.handler=null;const e=c(this,U,"f")[c(this,et,"f")].watchers;e.has(this)&&e.delete(this)}}et=new WeakMap,U=new WeakMap;class He{constructor(e,n){I.add(this),v.set(this,void 0),b.set(this,void 0),x(this,v,e,"f"),x(this,b,n,"f")}onBroadcast(e){return Object.entries(e).forEach(([n,i])=>{c(this,v,"f").addBroadcastEventListener(n,i)}),n=>{c(this,I,"m",pt).call(this,e,!1,n)}}onUnicast(e){return Object.entries(e).forEach(([n,i])=>{try{c(this,v,"f").addUnicastEventListener(n,i)}catch(r){console.error(r)}}),n=>{c(this,I,"m",pt).call(this,e,!0,n)}}createBroadcaster(e){return new Proxy({},{get:(n,i)=>(...r)=>(e==null||e(i),c(this,v,"f").emitBroadcast(i,...r)),set:()=>!1})}createUnicaster(e){return new Proxy({},{get:(n,i)=>(...r)=>(e==null||e(i),c(this,v,"f").emitUnicast(i,...r)),set:()=>!1})}existState(e){return!!c(this,b,"f")[e]}initState(e,n,i=!1){if(this.existState(e))throw new Error(Te(e));if(["string","number","boolean","undefined"].includes(typeof n))throw new Error(Ne(e));return c(this,b,"f")[e]={state:Et(n),owner:i?this:null,watchers:new Set},c(this,v,"f").emitBroadcast("$state-initialized",e),this.getState(e)}getState(e,n){if(this.existState(e)){const i=K(c(this,b,"f")[e].state);return n?n(i):i}return null}setState(e,n,i){return S(this,void 0,void 0,function*(){const r=c(this,I,"m",te).call(this,e);if(!n)throw new Error(je(e));{const s=i(r);yield Promise.resolve(s)}})}watchState(e,n){if(!this.existState(e)){const o=Zt(e);throw new Error(o)}let i=!1;const r=K(c(this,b,"f")[e].state),s=new Fe(e,c(this,b,"f")),a=function(o,h){o.effect&&(o=o.effect.fn);const l=new fe(o);h&&(se(l,h),h.scope&&Vt(l,h.scope)),h&&h.lazy||l.run();const f=l.run.bind(l);return f.effect=l,f}(()=>n(r),{lazy:!0,scheduler:()=>{i||(i=!0,Promise.resolve().then(()=>{var o;const h=d(n(r));(o=s.handler)===null||o===void 0||o.call(s,h,s.oldWatchingStates),s.oldWatchingStates=d(h),i=!1}))}});return s.oldWatchingStates=a(),s.stopEffect=()=>a.effect.stop(),s}}v=new WeakMap,b=new WeakMap,I=new WeakSet,pt=function(t,e,n){let i=e?c(this,v,"f").removeUnicastEventListener:c(this,v,"f").removeBroadcastEventListener;i=i.bind(c(this,v,"f")),n?t[n]?(i(n,t[n]),delete t[n]):console.warn(Ge(n,e)):Object.entries(t).forEach(([r,s])=>{i(r,s)})},te=function(t){if(!this.existState(t)){const n=Zt(t);throw new Error(n)}const e=c(this,b,"f")[t].owner;if(e!==this&&e!==null){const n=Me(t);throw new Error(n)}return c(this,b,"f")[t].state};class Je{constructor(e){this.name=e,this.activated=null,this.dependencies=[],this.relatedApps=[],this.name=e,this.isRallieCoreApp=!0}relateTo(e){return this.relatedApps=Array.from(new Set([...this.relatedApps,...e])),this}relyOn(e){return this.relateTo(e),this.dependencies=Array.from(new Set([...this.dependencies,...e])),this}onActivate(e){return this.doActivate=e,this}}var k,rt,wt,vt,m,C,G,V,jt,ee,ne,mt,Tt,Nt,Z={loadScript:t=>S(void 0,void 0,void 0,function*(){return new Promise(e=>{let n=null;t instanceof HTMLScriptElement?n=t:(n=document.createElement("script"),Object.entries(typeof t!="string"?t:{type:"text/javascript",src:t}).forEach(([r,s])=>{n.setAttribute(r,s)})),n.src&&(n.onload=n.onerror=()=>{e()}),document.body.appendChild(n),n.src||e()})}),loadLink:t=>{let e=null;if(t instanceof HTMLLinkElement)e=t;else{const n=typeof t!="string"?t:{rel:"stylesheet",type:"text/css",href:t};e=document.createElement("link"),Object.entries(n).forEach(([i,r])=>{e.setAttribute(i,r)})}document.head.appendChild(e)}};class Ke{constructor(e){k.add(this),rt.set(this,void 0),wt.set(this,new Ve),vt.set(this,{}),m.set(this,{}),C.set(this,{}),this.conf=K({assets:{}}),G.set(this,[]),V.set(this,void 0),x(this,rt,e,"f"),x(this,V,Mt(c(this,G,"f")),"f")}createSocket(){return new He(c(this,wt,"f"),c(this,vt,"f"))}existApp(e){return!!c(this,m,"f")[e]}createApp(e){if(this.existApp(e))throw new Error(xe(e));const n=new Je(e);return c(this,m,"f")[e]=n,n}loadApp(e){return S(this,void 0,void 0,function*(){c(this,m,"f")[e]||(c(this,C,"f")[e]||(c(this,C,"f")[e]=new Promise((n,i)=>{const r=c(this,k,"m",ee).call(this,e);c(this,V,"f").call(this,r,c(this,k,"m",ne).bind(this)).then(()=>{e.startsWith("lib:")&&!c(this,m,"f")[e]&&(c(this,m,"f")[e]=!0),c(this,m,"f")[e]||i(new Error(Be(e))),n()}).catch(s=>{i(s)})})),yield c(this,C,"f")[e])})}activateApp(e){return S(this,void 0,void 0,function*(){yield c(this,k,"m",mt).call(this,e,[])})}config(e){return this.conf=Object.assign(Object.assign(Object.assign({},this.conf),e),{assets:Object.assign(Object.assign({},this.conf.assets),(e==null?void 0:e.assets)||{})}),this}use(e){if(typeof e!="function")throw new Error(Ce());return c(this,G,"f").push(e),x(this,V,Mt(c(this,G,"f")),"f"),this}}rt=new WeakMap,wt=new WeakMap,vt=new WeakMap,m=new WeakMap,C=new WeakMap,G=new WeakMap,V=new WeakMap,k=new WeakSet,jt=function(t){return c(this,m,"f")[t]&&typeof c(this,m,"f")[t]!="boolean"},ee=function(t){return{name:t,loadScript:Z.loadScript,loadLink:Z.loadLink}},ne=function(t){return S(this,void 0,void 0,function*(){const{name:e,loadScript:n=Z.loadScript,loadLink:i=Z.loadLink}=t,{assets:r}=this.conf;if(!r[e])throw new Error(Le(e,c(this,rt,"f")));if(r[e].css&&r[e].css.forEach(s=>{i(s)}),r[e].js)for(const s of r[e].js)yield n(s)})},mt=function(t,e){return S(this,void 0,void 0,function*(){if(yield this.loadApp(t),c(this,k,"m",jt).call(this,t)){const n=c(this,m,"f")[t];if(yield c(this,k,"m",Nt).call(this,n),e.includes(t)){const i=e.indexOf(t),r=[...e.slice(i),t];throw new Error(Ue(t,r))}if(e.push(t),!n.activated){const i=()=>S(this,void 0,void 0,function*(){yield c(this,k,"m",Tt).call(this,n,e),n.doActivate&&(yield Promise.resolve(n.doActivate()))});n.activated=i()}yield n.activated,e.pop()}})},Tt=function(t,e){return S(this,void 0,void 0,function*(){if(t.dependencies.length!==0)for(const n of t.dependencies)yield c(this,k,"m",mt).call(this,n,e)})},Nt=function(t){return S(this,void 0,void 0,function*(){yield Promise.all(t.relatedApps.map(e=>this.loadApp(e)))})};const qe={},ct="DEFAULT_BUS",yt=(t=ct)=>{let e=null,n=!1;const i=((r=ct)=>window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[r])(t);return i?(e=i,n=!1):(e=((r=ct)=>{if(window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:qe,writable:!1}),window.RALLIE_BUS_STORE[r])throw new Error(ze(r));{const s=new Ke(r);return Reflect.defineProperty(window.RALLIE_BUS_STORE,r,{value:s,writable:!1}),s}})(t),n=!0),[e,n]},y={privateBus:t=>`${t}.bus`,stateNamespace:t=>`${t}.state`,isGlobalBusAccessible:"isGlobalBusAccessible",exportMethodName:"__RallieInnerExport__"},lt=t=>`[rallie] ${t}`,nt={stateNotInitialized:t=>lt(` the block ${t}'s state is not initialized, please check:
1. whether the block ${t} is loaded.
2. whether the block ${t} has initialized the state`),duplicatedBlockName:t=>lt(`the block ${t} is already registered before, please rename your block`),stateIsReadonly:t=>lt(`the state of ${t} is readonly`)},zt=(t,e)=>new Proxy(t,{get:(n,i)=>(...r)=>(0,n[i])(r,e),set:()=>!1}),ie=t=>{const e={};return Object.entries(t).forEach(([n,i])=>{e[n]=(r,s)=>i.call({trigger:s},...r)}),e};var w,A,F,j,H,T,J;class Ut{constructor(e,n,i){w.set(this,void 0),this.name=e,M(this,w,i,"f");const r=u(this,w,"f").createBroadcaster(),s=u(this,w,"f").createUnicaster();this.events=zt(r,n),this.methods=zt(s,n),Reflect.defineProperty(this,"state",{get:()=>u(this,w,"f").getState(y.stateNamespace(this.name)),set:()=>{throw new Error(nt.stateIsReadonly(this.name))}})}setState(e,n){if(u(this,w,"f").existState(y.stateNamespace(this.name)))return u(this,w,"f").setState(y.stateNamespace(this.name),e,n);throw new Error(nt.stateNotInitialized(this.name))}watchState(e){if(u(this,w,"f").existState(y.stateNamespace(this.name)))return u(this,w,"f").watchState(y.stateNamespace(this.name),e);throw new Error(nt.stateNotInitialized(this.name))}listenEvents(e){return u(this,w,"f").onBroadcast(ie(e))}}w=new WeakMap;class De extends Ut{constructor(e,n,i,r){const[s]=yt(y.privateBus(e)),a=s.createSocket();super(e,e,a),A.set(this,void 0),F.set(this,void 0),j.set(this,void 0),H.set(this,void 0),T.set(this,void 0),J.set(this,{}),M(this,H,a,"f"),M(this,A,n,"f"),M(this,F,i,"f"),M(this,T,n.createApp(e),"f"),M(this,j,r,"f")}initState(e,n){return u(this,H,"f").initState(y.stateNamespace(this.name),e,n),this}addMethods(e){return u(this,H,"f").onUnicast(ie(e))}relyOn(e){return u(this,T,"f").relyOn(e),this}relateTo(e){return u(this,T,"f").relateTo(e),this}onActivate(e){return u(this,T,"f").onActivate(e),this}connect(e){if(!u(this,J,"f")[e]){const[n]=yt(y.privateBus(e)),i=n.createSocket();u(this,J,"f")[e]=new Ut(e,this.name,i)}return u(this,J,"f")[e]}load(e){return u(this,A,"f").loadApp(e)}activate(e){return u(this,A,"f").activateApp(e)}run(e){var n;return re(this,void 0,void 0,function*(){const i=u(this,j,"f")||((n=u(this,F,"f").getState(y.isGlobalBusAccessible))===null||n===void 0?void 0:n.value),r=o=>{u(this,j,"f")&&u(this,F,"f").setState(y.isGlobalBusAccessible,o?"unfreeze the enviroment":"freeze the enviroment",h=>{h.value=o})},s={isEntry:u(this,j,"f"),use:o=>{i&&u(this,A,"f").use(o)},config:o=>{i&&u(this,A,"f").config(o)},freeze:()=>{r(!1)},unfreeze:()=>{r(!0)}},a=e(new Proxy(s,{get:(o,h,l)=>h==="conf"?JSON.parse(JSON.stringify(u(this,A,"f").conf)):Reflect.get(o,h,l),set:()=>!1}));yield Promise.resolve(a)})}}function Ye(t){const[e,n]=yt();if(e.existApp(t))throw new Error(nt.duplicatedBlockName(t));const i=e.createSocket();return n&&i.initState(y.isGlobalBusAccessible,{value:!0},!0),new De(t,e,i,n)}A=new WeakMap,F=new WeakMap,j=new WeakMap,H=new WeakMap,T=new WeakMap,J=new WeakMap;const Qe="modulepreload",Xe=function(t){return"/rallie/"+t},It={},Ze=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Xe(s),s in It)return;It[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let f=r.length-1;f>=0;f--){const p=r[f];if(p.href===s&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Qe,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((f,p)=>{l.addEventListener("load",f),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};export{Ye as V,Ze as _};