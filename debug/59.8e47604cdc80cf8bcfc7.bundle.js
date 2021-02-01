(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[59],{6059:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var r=n(3058),a=n(7542),i=n.n(a),o=n(9085),c=n(2242);function s(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}var t,n,r,a,i;return t=e,(n=[{key:"openView",value:function(){var e=this;return new Promise((function(t,n){"presentation"===e.apiType?(e.presentationRequest=new PresentationRequest([e.receiverQuery]),navigator.presentation.defaultRequest=e.presentationRequest,e.presentationRequest.addEventListener("connectionavailable",(function(n){e.presentationConnection=n.connection,t(n.connection.id)})),e.presentationRequest.start().catch((function(e){return n(e)}))):(e.windowId=window.open(e.receiverQuery,"_blank","width=800,height=600"),t())}))}},{key:"changePage",value:function(e){var t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}},{key:"reconnect",value:(a=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("presentation"!==this.apiType){e.next=2;break}return e.abrupt("return",this.presentationRequest.reconnect(t));case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=a.apply(e,t);function o(e){s(i,n,r,o,c,"next",e)}function c(e){s(i,n,r,o,c,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"terminate",value:function(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}])&&u(t.prototype,n),r&&u(t,r),e}(),d=n(9360),f=n(9274),m=n.n(f),p=n(1439),v={insert:"head",singleton:!1};m()(p.Z,v);p.Z.locals;function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=["#444","#3498db","#ff874d","#67a2a0"],g=null,w=null,E=(0,r.memo)((function(e){var t=e.toolbar,n=e.disabled,a=e.hideGrid,i=(0,r.useRef)(),s=h((0,r.useState)(b[0]),2),u=s[0],l=s[1],f=function(){window.localStorage.setItem("fusumaCanvasCoordinate",i.current.getSaveData())},m=function(){var e=window.localStorage.getItem("fusumaCanvasCoordinate");g!==e&&(i.current.loadSaveData(e,!0),g=e)};return(0,r.useEffect)((function(){return w=t?setInterval(f,1e3):setInterval(m,1e3),function(){w&&clearInterval(w)}}),[]),r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"fusuma-canvas-toolbar"},r.createElement(c.ZkW,{onClick:function(){i.current.clear()},size:"32"}),r.createElement(o.wXW,{onClick:function(){i.current.undo()}}),r.createElement("div",{style:{background:u},onClick:function(){b=b.concat(b.splice(0,1)),l(b[0])},className:"fusuma-canvas-toolbar-color"})),r.createElement(d.Z,{ref:i,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:u,disabled:n,hideGrid:a,lazyRadius:0,brushRadius:8}))}));function S(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}function R(e){var t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0"),r=Math.floor(e/36e5%24).toString().padStart(2,"0");return"".concat(r,":").concat(n,":").concat(t)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=0,C=null,N=(0,r.memo)((function(e){var t=e.start,n=e.stop,a=e.reset,i=e.disabledStart,c=e.disabledStop,s=e.disabledReset,u=k((0,r.useState)(!0),2),l=u[0],d=u[1],f=k((0,r.useState)("00:00:00"),2),m=f[0],p=f[1];return(0,r.useEffect)((function(){return function(){C&&clearInterval(C)}}),[]),r.createElement("div",{className:"host-timer"},r.createElement(o.xrw,{onClick:function(){C&&n(),x=0,p("00:00:00"),a()},className:s?"disabled":void 0}),l?r.createElement(o.gmG,{onClick:function(){C=setInterval((function(){p(R(x+=1e3))}),1e3),d(!1),t()},className:i?"disabled":void 0}):r.createElement(o.JuG,{onClick:function(){clearInterval(C),d(!0),C=null,n()},className:c?"disabled":void 0}),r.createElement("span",null,m))})),P=n(627);function T(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var A=function(e){var t=e.items,n=e.url,a=(0,r.useRef)();return(0,r.useEffect)((function(){if(a.current){var e=a.current,n=function(){var t,n=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.addEventListener("loadedmetadata",(function(){e.duration===1/0&&(e.currentTime=Number.MAX_SAFE_INTEGER,e.addEventListener("timeupdate",(function n(){e.currentTime=0,e.removeEventListener("timeupdate",n),t()})))}))})));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(e){T(i,r,a,o,c,"next",e)}function c(e){T(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}(),r=document.querySelectorAll(".ReactModalPortal section > div");n();var i=!1;e.addEventListener("playing",(function(){i||(e.currentTime=0,i=!0)})),e.addEventListener("timeupdate",(function(){var n=function(e){for(var n=0,r=0;r<t.length;r++)if(e<=t[r].time){n=r;break}return n}(1e3*e.currentTime);r[n].scrollIntoView()}))}}),[]),r.createElement("div",{className:"host-timeline-container"},n&&r.createElement("div",{className:"host-timeline-audio"},r.createElement("audio",{src:n,controls:!0,ref:a})),r.createElement("div",{className:"host-timeline-body"},r.createElement(P.TY,null,t.map((function(e){var t=e.title,n=e.time,a=e.timeStr,i=e.Slide,o=e.color,c=e.Icon;return r.createElement(P.BJ,{key:n,title:t,createdAt:a,iconColor:o,icon:c},i&&r.createElement(i,null))})))))},O=n(8937),j=n(1930),M={insert:"head",singleton:!1};m()(j.Z,M);j.Z.locals;function L(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){L(i,r,a,o,c,"next",e)}function c(e){L(i,r,a,o,c,"throw",e)}o(void 0)}))}}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}i().setAppElement("#root");var z=function(e){var t=e.slideUrl,n=e.slideIndex;return r.createElement("iframe",{src:"".concat(t.replace(/slide-(\d?)/,"slide-".concat(n))),width:"100%",height:"100%"})},Z=null,G=null,$=null,_=[],J=0,W=null;const H=(0,r.memo)((function(e){var t=e.slides,n=e.currentIndex,a=e.terminate,s=e.onChangeSlideIndex;if(!$){var u=new URL(window.location),d=u.origin,f=u.pathname;G="".concat(d).concat(f,"?sidebar=false&reference=false&isLive=false#slide-"),$=new l}var m=D((0,r.useState)("prepare"),2),p=m[0],v=m[1],h=D((0,r.useState)(!1),2),y=h[0],b=h[1],g=D((0,r.useState)(!1),2),w=g[0],k=g[1],I=D((0,r.useState)(!0),2),x=I[0],C=I[1],P=D((0,r.useState)(!1),2),T=P[0],j=P[1],M=function(){try{a(),$&&($.terminate(),$=null)}catch(e){console.error(e)}},L=function(e){if("start"===p){var n=(new Date).getTime()-J,a=_.slice(-1)[0];_.push({slideNum:e+1,time:n,timeStr:"".concat(R(n)," (+").concat(R(n-a.time),")"),event:"changed",title:"Moved to the ".concat(e+1," slide from the ").concat(e," slide."),Slide:t[e].slide,color:"#3498db",Icon:r.createElement(o.PS5,{size:"22"})})}s(e),$.changePage(e)},U=function(){0===_.length&&(J=(new Date).getTime());var e=0===_.length?0:(new Date).getTime()-J;_.push({slideNum:n+1,time:e,timeStr:R(e),event:"started",title:"Started from the ".concat(n+1," slide."),Slide:t[n].slide,color:"#6fba1c",Icon:r.createElement(o.qL$,null)}),y&&(Z.startRecording(),W=null),C(!1),v("start")},H=function(){var e=q(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(new Date).getTime()-J,_.push({slideNum:n+1,time:t,timeStr:R(t),event:"stopped",title:"Stopped at the ".concat(n+1," slide."),color:"#e9546b",Icon:r.createElement(o.IkZ,null)}),!y){e.next=6;break}return e.next=5,Z.stopRecording();case 5:W=e.sent;case 6:v("stop");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){Z&&(Z.disposeRecording(),Z=null),b(!1)};return(0,r.useEffect)((function(){function e(){return(e=q(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,$){e.next=3;break}throw new Error("Not found PresenterController.");case 3:return e.next=5,$.openView();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){document.onkeyup=null,$&&M(),Q()}}),[]),(0,r.useEffect)((function(){document.onkeyup=function(e){"ArrowLeft"===e.key?L(Math.max(0,n-1)):"ArrowRight"===e.key&&L(Math.min(t.length-1,n+1))}})),r.createElement("div",{className:"host-container"},r.createElement(i(),{isOpen:w,onRequestClose:function(){k(!1)}},r.createElement(A,{items:_,url:W})),r.createElement("div",{className:"host-left-box"},r.createElement("div",{className:"host-note"},t&&r.createElement("pre",{dangerouslySetInnerHTML:{__html:t[n].fusumaProps.note}}))),r.createElement("div",{className:"host-right-box"},r.createElement("div",{className:"host-slide-layer"},r.createElement("h2",null,"Current"),r.createElement(c.e$R,{size:28,onClick:function(){j(!0),S({status:"start"})}}),r.createElement(z,{slideUrl:G,slideIndex:n+1})),r.createElement(i(),{isOpen:T,onRequestClose:function(){j(!1),S({status:"stop"})}},T&&r.createElement("div",{className:"host-slide-canvas"},r.createElement(E,{toolbar:!0,hideGrid:!0}),r.createElement(z,{slideUrl:G,slideIndex:n+1}))),r.createElement("div",{className:"host-slide-layer"},r.createElement("h2",null,"Next"),r.createElement(z,{slideUrl:G,slideIndex:n+2}))),r.createElement("div",{className:"host-bottom-box"},r.createElement(o.aHS,{onClick:M,className:"terminate-button"}),r.createElement("div",{className:"host-bottom-box-info"},r.createElement(N,{start:U,stop:H,reset:function(){W=null,_=[],J=0,v("prepare"),C(!0)},disabledStart:"stop"===p&&y&&!U.isEmptyRecordedTimeline,disabledStop:"stop"===p&&y&&!U.isEmptyRecordedTimeline,disabledReset:"start"===p&&y}),r.createElement("span",{className:"current-slide-num"},"".concat(n+1).padStart(2,"0")," / ","".concat(t.length).padStart(2,"0")),r.createElement(o.ceS,{onClick:function(){k(!0)},size:18,className:"start"===p&&y||x?"disabled":void 0}),y?r.createElement(o.kOf,{onClick:Q,className:"start"!==p&&x?void 0:"disabled",size:20,color:"#6fba1c"}):r.createElement(o.WzD,{onClick:function(){if(!Z)try{(Z=new O.u).setupRecording(),b(!0)}catch(e){alert(e)}},className:"start"!==p&&x?void 0:"disabled",size:20}))))}))},8937:(e,t,n)=>{"use strict";function r(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{u:()=>i});var i=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}var t,n,i,o,c;return t=e,(n=[{key:"setupRecording",value:function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handlerRecording)}},{key:"handlerRecording",value:function(e){var t=this,n=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(function(e){e.data.size>0&&n.push(e.data)})),this.mediaRecorder.addEventListener("stop",(function(){t.finishedProcess=!0,t.url=URL.createObjectURL(new Blob(n,{type:"audio/webm"}))}))}},{key:"startRecording",value:function(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}},{key:"stopRecording",value:function(){var e=this;return new Promise((function(t){e.mediaRecorder.stop();var n=setInterval((function(){e.finishedProcess&&(clearInterval(n),t(e.url))}),100)}))}},{key:"disposeRecording",value:function(){this.mediaRecorder.stream.getTracks().forEach((function(e){return e.stop()})),this.finishedProcess=!1,this.url=null}},{key:"startCapturing",value:(o=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia(t);case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})),c=function(){var e=this,t=arguments;return new Promise((function(n,a){var i=o.apply(e,t);function c(e){r(i,n,a,c,s,"next",e)}function s(e){r(i,n,a,c,s,"throw",e)}c(void 0)}))},function(e){return c.apply(this,arguments)})},{key:"stopCapturing",value:function(e){e.srcObject.getTracks().forEach((function(e){return e.stop()})),e.srcObject=null}}])&&a(t.prototype,n),i&&a(t,i),e}()},1439:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3746),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=a},1930:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3746),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=a}}]);