!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}Object.create;function s(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}Object.create;var a=function(t){return"[obvious] you are trying to remove a listener of the broadcast event "+t+", but "+t+" hasn't been registed as a broadcast event"},c=function(t){return"[obvious] you are trying to remove a listener of the broadcast event "+t+", but the listener hasn't been registed"},u=function(t){return"[obvious] one of the callbacks of the broadcast event "+t+" throws an uncaught error"},f=function(t){return"[obvious] you are trying to remove a listener of the unicast event "+t+", but "+t+" hasn't been registed as a unicast event"},h=function(t){return"[obvious] you are trying to remove a listener of the unicast event "+t+", but the listener hasn't been registed"},p=function(t){return"[obvious] you are trying to regist a unicast event "+t+", but it has been registed before"},l=function(t){return"[obvious] "+t+" is existing, you are not allowed to create it again"},d=function(t,e){return"[obvious] can not find any assets of the app "+t+" on the bus "+e},v=function(t){return"[obvious] you are trying to activate app "+t+", but it was not created"},b=function(t){return"[obvious] state "+t+" is private, you are not allowed to set it"},y=function(t){return"[obvious] it's not allowed to set, watch or unwatch state "+t+" before it is initialized"},m=function(t){return"[obvious] wait for states "+JSON.stringify(t)+" timeout"},w=function(t){return"[obvious] duplicated initialized state "+t},g=function(t){return"[obvious] state "+t+" can't be initialized to undefined, please initial it to null instead"},E=function(){return"[obvious] bus.state is readonly"},_=function(t){return"[obvious] "+t+" is not a valid asset"},j=function(t){return void 0===t&&(t=100),"[obvious] the number of apps bootstraped at a time is greater than the maximum value of "+t+", it means that there may be circular dependencies, please check the app dependencies declaration or reset the bus's maxDependencyDepth"},x=function(){return"[obvious] next() called multiple times in the middleware"},A=function(){return"[obvious] the middleware must be a function"},B=function(){return"[obvious] the app's name is not indicated when load or activate"},O=function(t,e){return"[obvious] state."+t+' is an Array, but the subscript you set("'+e+'") is not a number, therefore, the state will not be changed'},S=function(t,e){return"[obvious] state."+t+" is a "+e+", but you regard it as a object and try to traverse it while setting state"},P=function(t){return"[obvious] you have emitted "+t+" event, but there is no listener of this event"},D=function(t){return"[object Object]"===Object.prototype.toString.call(t)},k=function(t){var e={};return Object.keys(t).forEach((function(n){e[n]=t[n].value})),e},$=function(t){var e="";return t.forEach((function(n,r){var o="string"==typeof t[r+1];e+="number"==typeof n?o?"["+n+"].":"["+n+"]":o?n+".":n})),e},C=function(t){var e=t.split("."),n=[];return e.forEach((function(t){var e=/(.+)\[(\d+)\]$/.exec(t);if(null!==e){var r=e[1],o=e[2];C(r).forEach((function(t){n.push(t)})),n.push(Number(o))}else n.push(t)})),n},L=function(t,e){for(var n=t,r=0,o=e;r<o.length;r++){var i=o[r];if(Array.isArray(n)){if("number"!=typeof i)return;n=n[i]}else{if(!D(n))return;n=n[i]}}return n},F=function(t){return function(e,n){var r=-1,o=function(i){if(i<=r)return Promise.reject(new Error(x()));r=i;var s=t[i];if(i===t.length&&(s=n),!s)return Promise.resolve();try{return Promise.resolve(s(e,o.bind(null,i+1)))}catch(t){return Promise.reject(t)}};return o(0)}},U=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.getBroadcastEvents=function(){return this.broadcastEvents},t.prototype.addBroadcastEventListener=function(t,e){this.broadcastEvents[t]=this.broadcastEvents[t]||[],this.broadcastEvents[t].push(e)},t.prototype.addUnicastEventListener=function(t,e){if(this.unicastEvents[t])throw new Error(p(t));this.unicastEvents[t]=e},t.prototype.removeBroadcastEventListener=function(t,e){var n=this.broadcastEvents[t];if(!n){i=a(t);throw new Error(i)}for(var r=-1,o=0;o<n.length;o++)if(n[o]===e){r=o;break}if(-1===r){var i=c(t);throw new Error(i)}n.splice(r,1)},t.prototype.removeUnicastEventListener=function(t,e){if(!this.unicastEvents[t]){var n=f(t);throw new Error(n)}if(this.unicastEvents[t]!==e){n=h(t);throw new Error(n)}delete this.unicastEvents[t]},t.prototype.emitBroadcast=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.broadcastEvents[t],o=t.startsWith("$state");r&&0!==r.length?r.forEach((function(t){try{t.apply(void 0,e)}catch(t){console.error(u),console.error(t)}})):o||console.warn(P(t))},t.prototype.emitUnicast=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.unicastEvents[t];return r.apply(void 0,e)},t}(),M=function(){function t(t,e){this.eventEmitter=t,this._state=e,this.eventEmitter=t,this._state=e}return t.prototype.onBroadcast=function(t,e){this.eventEmitter.addBroadcastEventListener(t,e)},t.prototype.offBroadcast=function(t,e){this.eventEmitter.removeBroadcastEventListener(t,e)},t.prototype.broadcast=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];(e=this.eventEmitter).emitBroadcast.apply(e,s([t],n))},t.prototype.onUnicast=function(t,e){this.eventEmitter.addUnicastEventListener(t,e)},t.prototype.offUnicast=function(t,e){this.eventEmitter.removeUnicastEventListener(t,e)},t.prototype.unicast=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return(e=this.eventEmitter).emitUnicast.apply(e,s([t],n))},t.prototype.existState=function(t){var e=C(t)[0];return void 0!==this._state[e]},t.prototype.initState=function(t,e,n){if(void 0===n&&(n=!1),void 0!==this._state[t])throw new Error(w(t));if(void 0===e)throw new Error(g(t));this._state[t]={value:e,owner:n?this:null},this.broadcast("$state-initial",t)},t.prototype.getState=function(t){var e=k(this._state);return L(e,C(t))},t.prototype.setState=function(t,e){var n=this,r=C(t),o=r[0];if(void 0===this._state[o]){var i=y(o);throw new Error(i)}var a=this._state[o].owner;if(a!==this&&null!==a){i=b(o);throw new Error(i)}var c=function(t,e){var n=/^\$state-(.+)-change$/,r=[];return e.forEach((function(e){var o=n.exec(e);if(o){var i=o[1];i.startsWith(t)&&r.push(i),t.startsWith(i)&&!r.includes(i)&&r.push(i)}})),r}(t,Object.keys(this.eventEmitter.getBroadcastEvents())),u=c.map((function(t){return C(t)})),f=k(this._state),h={};c.forEach((function(t,e){var n=u[e];h[t]=L(f,n)}));var p="function"==typeof e,l=this.getState(t),d=p?e(l):e;if(1===r.length)this._state[o].value=d;else{var v=r.slice(1);if(null===this._state[o].value||void 0===this._state[o].value)switch(typeof v[0]){case"number":this._state[o].value=[];break;case"string":this._state[o].value={}}if(!function(t,e,n,r){for(var o=e,i=0;i<n.length;i++){var a=n[i];if(i===n.length-1)if(Array.isArray(o)){if("number"!=typeof a){var c=$(s([t],n.slice(0,i)));return console.error(O(c,a)),!1}o[a]=r}else o[a]=r;else{var u=null;if(Array.isArray(o)){if("number"!=typeof a){c=$(s([t],n.slice(0,i)));return console.error(O(c,a)),!1}u=a}else u=a;if(void 0===o[u]||null===o[u]){var f=n[i+1];o[u]="number"==typeof f?[]:{}}else if(!Array.isArray(o[u])&&!D(o[u])){c=$(s([t],n.slice(0,i+1)));var h=typeof o[u];return console.error(S(c,h)),!1}o=o[u]}}return!0}(o,this._state[o].value,v,d))return}var m=k(this._state),w={};c.forEach((function(t,e){var n=u[e];w[t]=L(m,n)})),c.forEach((function(t){n.broadcast("$state-"+t+"-change",w[t],h[t])}))},t.prototype.watchState=function(t,e){var n=C(t)[0];if(void 0===this._state[n]){var r=y(n);throw new Error(r)}this.eventEmitter.addBroadcastEventListener("$state-"+t+"-change",e)},t.prototype.unwatchState=function(t,e){if(!this.existState(t))throw new Error(y(t));this.eventEmitter.removeBroadcastEventListener("$state-"+t+"-change",e)},t.prototype.waitState=function(t,e){var n=this;return void 0===e&&(e=1e4),0===(t=t.map((function(t){return C(t)[0]})).filter((function(t){return void 0===n._state[t]}))).length?Promise.resolve(k(this._state)):new Promise((function(r,o){var i=setTimeout((function(){clearTimeout(i);var e=m(t);o(new Error(e))}),e),s=function(e){var o=t.indexOf(e);-1!==o&&t.splice(o,1),0===t.length&&(clearTimeout(i),n.offBroadcast("$state-initial",s),r(k(n._state)))};n.onBroadcast("$state-initial",s)}))},t}(),T=function(){function t(t){this.name=t,this.dependenciesReady=!1,this.bootstrapped=!1,this.dependencies=[],this.name=t}return t.prototype.relyOn=function(t){return this.dependencies=t,this},t.prototype.bootstrap=function(t){return this.doBootstrap=t,this},t.prototype.activate=function(t){return this.doActivate=t,this},t.prototype.destroy=function(t){return this.doDestroy=t,this},t.prototype.activateDependenciesApp=function(t){return o(this,void 0,void 0,(function(){var e,n,r,o,s;return i(this,(function(i){switch(i.label){case 0:if(this.dependenciesReady||0===this.dependencies.length)return[3,7];e=0,n=this.dependencies,i.label=1;case 1:return e<n.length?"string"!=typeof(r=n[e])?[3,3]:[4,t(r)]:[3,6];case 2:return i.sent(),[3,5];case 3:return D(r)?(o=r.ctx,s=r.config,[4,t(o,s)]):[3,5];case 4:i.sent(),i.label=5;case 5:return e++,[3,1];case 6:this.dependenciesReady=!0,i.label=7;case 7:return[2]}}))}))},t}(),R=function(t){return o(void 0,void 0,void 0,(function(){return i(this,(function(e){return[2,new Promise((function(e){var n=document.createElement("script");n.type="text/javascript",n.src=t,n.onload=function(){e()},document.body.appendChild(n)}))]}))}))},J=function(t){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,document.head.appendChild(e)},z=function(t){return o(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,fetch(t)];case 1:return[4,e.sent().text()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,""];case 4:return[2]}}))}))},W=function(t){new Function(t)()},N=function(){function t(t){var e=this;this.eventEmitter=new U,this._state={},this.apps={},this.dependencyDepth=0,this.conf={maxDependencyDepth:100,loadScriptByFetch:!1,assets:{}},this.middlewares=[],this.name=t,this.composedMiddlewareFn=F(this.middlewares),Object.defineProperty(this,"state",{get:function(){return k(e._state)},set:function(){throw new Error(E())}})}return t.prototype.config=function(t){return this.conf=r(r(r({},this.conf),t),{assets:r(r({},this.conf.assets),(null==t?void 0:t.assets)||{})}),this},t.prototype.use=function(t){if("function"!=typeof t)throw new Error(A());return this.middlewares.push(t),this.composedMiddlewareFn=F(this.middlewares),this},t.prototype.createContext=function(t){var e={name:"",loadJs:R,loadCss:J,fetchJs:z,excuteCode:W,conf:this.conf};if("string"==typeof t)e.name=t;else{if(!t.name)throw new Error(B());e=r(r({},e),t)}return e},t.prototype.loadResourcesFromAssetsConfig=function(t){return o(this,void 0,void 0,(function(){var e,n,r,o,s,a,c,u,f,h,p,l,v,b,y,m,w;return i(this,(function(i){switch(i.label){case 0:if(e=t.name,n=t.loadJs,r=void 0===n?R:n,o=t.loadCss,s=void 0===o?J:o,a=t.fetchJs,c=void 0===a?z:a,u=t.excuteCode,f=void 0===u?W:u,h=t.conf,p=void 0===h?this.conf:h,l=p.assets,v=p.loadScriptByFetch,!l[e])return[3,9];if(l[e].css&&l[e].css.forEach((function(t){/^.+\.css$/.test(t)?s(t):console.error(_(t))})),!l[e].js)return[3,8];b=0,y=l[e].js,i.label=1;case 1:return b<y.length?(m=y[b],/^.+\.js$/.test(m)?v?[3,3]:[4,r(m)]:[3,6]):[3,8];case 2:return i.sent(),[3,5];case 3:return[4,c(m)];case 4:(w=i.sent())&&f(w),i.label=5;case 5:return[3,7];case 6:console.error(_(m)),i.label=7;case 7:return b++,[3,1];case 8:return l[e].isLib&&(this.apps[e]=!0),[3,10];case 9:throw new Error(d(e,this.name));case 10:return[2]}}))}))},t.prototype.createSocket=function(){return new M(this.eventEmitter,this._state)},t.prototype.createApp=function(t){if(this.apps[t])throw new Error(l(t));var e=new T(t);return this.apps[t]=e,e},t.prototype.loadApp=function(t){return o(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return e=this.createContext(t),[4,this.composedMiddlewareFn(e,this.loadResourcesFromAssetsConfig.bind(this))];case 1:return n.sent(),[2]}}))}))},t.prototype.activateApp=function(t,e){return o(this,void 0,void 0,(function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return n=this.createContext(t),r=n.name,this.apps[r]?[3,2]:[4,this.loadApp(n)];case 1:i.sent(),i.label=2;case 2:if(!this.apps[r])throw new Error(v(r));if(!("boolean"!=typeof this.apps[r]))return[3,11];if((o=this.apps[r]).bootstrapped)return[3,8];if(this.dependencyDepth>this.conf.maxDependencyDepth)throw this.dependencyDepth=0,new Error(j(this.conf.maxDependencyDepth));return this.dependencyDepth++,[4,o.activateDependenciesApp(this.activateApp.bind(this))];case 3:return i.sent(),o.doBootstrap?[4,o.doBootstrap(e)]:[3,5];case 4:return i.sent(),[3,7];case 5:return o.doActivate?[4,o.doActivate(e)]:[3,7];case 6:i.sent(),i.label=7;case 7:return o.bootstrapped=!0,this.dependencyDepth--,[3,11];case 8:return o.doActivate?[4,o.doActivate(e)]:[3,10];case 9:i.sent(),i.label=10;case 10:i.label=11;case 11:return[2]}}))}))},t.prototype.destroyApp=function(t,e){return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return(n=this.apps[t])&&"boolean"!=typeof n?n.doDestroy?[4,n.doDestroy(e)]:[3,2]:[3,3];case 1:r.sent(),r.label=2;case 2:n.bootstrapped=!1,n.dependenciesReady=!1,r.label=3;case 3:return[2]}}))}))},t}(),G={},I=function(t){if(void 0===self.__Bus__&&Object.defineProperty(self,"__Bus__",{value:G,writable:!1}),self.__Bus__[t])throw new Error("[obvious] the bus named "+t+" has been defined before, please rename your bus");var e=new N(t);return Object.defineProperty(self.__Bus__,t,{value:e,writable:!1}),e};const q=I("host");q.config({assets:{"react-app":{js:["http://localhost:3000/static/js/bundle.js","http://localhost:3000/static/js/0.chunk.js","http://localhost:3000/static/js/1.chunk.js","http://localhost:3000/static/js/main.chunk.js"]},"vue-app":{js:["http://localhost:8080/js/app.js","http://localhost:8080/js/chunk-vendors.js"]}}}).use(async(t,e)=>{try{await e()}catch(e){alert(`启动app:${t.name}失败`)}}).use(async(t,e)=>{console.log("开始启动app:"+t.name),await e(),console.log(`启动app:${t.name}成功`)}).use(async(t,e)=>{console.log(t),await e()}),q.createApp("unit-app").relyOn([{ctx:"vue-app",config:{mountPoint:"#vue-app"}},{ctx:"react-app",config:{mountPoint:"#react-app"}}]).bootstrap(async()=>{setTimeout(()=>{alert("I can not wait to star obvious.js")},2e3)}),q.activateApp("unit-app")}]);
//# sourceMappingURL=main.js.map