(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6004)}])},6004:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(3814);var o=r(3457),s=r.n(o),i=r(7294);t.default=function(e){let{Component:t,pageProps:r}=e;return(0,i.useEffect)(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("Service worker registered: ",e)}).catch(e=>{console.log("Service worker registration failed: ",e)})})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{className:"my-progress-bar",color:"#2d2d2d",startPosition:.3,stopDelayMs:200,height:85,showOnShallow:!0}),(0,n.jsx)(t,{...r})]})}},3814:function(){},1163:function(e,t,r){e.exports=r(6885)},3457:function(e,t,r){var n,o=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,l=e=>s(e,"__esModule",{value:!0}),p=(e,t)=>s(e,"name",{value:t,configurable:!0}),f=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of a(t))!c.call(e,o)&&(r||"default"!==o)&&s(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},d=(e,t)=>f(l(s(null!=e?o(u(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),m=(n="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>n&&n.get(e)||(t=f(l({}),e,1),n&&n.set(e,t),t)),g={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(g,{default:()=>S});var h=d(r(1163)),v=d(r(4865)),b=d(r(5697)),y=d(r(7294)),w=p(({color:e="#29D",startPosition:t=.3,stopDelayMs:r=200,height:n=3,showOnShallow:o=!0,options:s,nonce:i,transformCSS:a=p(e=>y.createElement("style",{nonce:i},e),"transformCSS")})=>{let u=null;y.useEffect(()=>(s&&v.configure(s),h.default.events.on("routeChangeStart",c),h.default.events.on("routeChangeComplete",l),h.default.events.on("routeChangeError",f),()=>{h.default.events.off("routeChangeStart",c),h.default.events.off("routeChangeComplete",l),h.default.events.off("routeChangeError",f)}),[]);let c=p((e,{shallow:r})=>{(!r||o)&&(v.set(t),v.start())},"routeChangeStart"),l=p((e,{shallow:t})=>{(!t||o)&&(u&&clearTimeout(u),u=setTimeout(()=>{v.done(!0)},r))},"routeChangeEnd"),f=p((e,t,{shallow:n})=>{(!n||o)&&(u&&clearTimeout(u),u=setTimeout(()=>{v.done(!0)},r))},"routeChangeError");return a(`
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: ${n}px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogresss-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `)},"NextNProgress");w.propTypes={color:b.string,startPosition:b.number,stopDelayMs:b.number,height:b.number,showOnShallow:b.bool,options:b.object,nonce:b.string,transformCSS:b.func};var S=y.memo(w);e.exports=m(g)},4865:function(e,t,r){var n,o;void 0!==(n="function"==typeof(o=function(){var e,t,r,n={};n.version="0.2.0";var o=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,r){return e<t?t:e>r?r:e}n.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(o[t]=r);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=s(e,o.minimum,1),n.status=1===e?null:e;var r=n.render(!t),u=r.querySelector(o.barSelector),c=o.speed,l=o.easing;return r.offsetWidth,i(function(t){var s,i;""===o.positionUsing&&(o.positionUsing=n.getPositioningCSS()),a(u,(s=e,(i="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+c+"ms "+l,i)),1===e?(a(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){a(r,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},c)},c)):setTimeout(t,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*o.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()&&(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var r,s,i=t.querySelector(o.barSelector),u=e?"-100":(-1+(n.status||0))*100,l=document.querySelector(o.parent);return a(i,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),!o.showSpinner&&(s=t.querySelector(o.spinnerSelector))&&f(s),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(t),t},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var i=(r=[],function(e){r.push(e),1==r.length&&function e(){var t=r.shift();t&&t(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],t={};function r(r,n,o){var s;n=t[s=(s=n).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var r=document.body.style;if(t in r)return t;for(var n,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((n=e[o]+s)in r)return n;return t}(s)),r.style[n]=o}return function(e,t){var n,o,s=arguments;if(2==s.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,s[1],s[2])}}();function u(e,t){return("string"==typeof e?e:p(e)).indexOf(" "+t+" ")>=0}function c(e,t){var r=p(e);u(r,t)||(e.className=(r+t).substring(1))}function l(e,t){var r,n=p(e);u(e,t)&&(r=n.replace(" "+t+" "," "),e.className=r.substring(1,r.length-1))}function p(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?o.call(t,r,t,e):o)&&(e.exports=n)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,i){if(i!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);