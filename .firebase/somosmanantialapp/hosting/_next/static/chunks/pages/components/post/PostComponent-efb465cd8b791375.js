(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7824],{5890:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/post/PostComponent",function(){return o(5671)}])},6091:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return c}});var i=o(5893),t=o(6465),n=o.n(t),r=o(1664),s=o.n(r);function c(e){let{children:a,props:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{href:"/entrar",children:(0,i.jsx)("div",{className:"jsx-dcf66ee1d796daa9 Button",children:a})}),(0,i.jsx)(n(),{id:"dcf66ee1d796daa9",children:".Button.jsx-dcf66ee1d796daa9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;padding:10px 20px;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;gap:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--secondary-color);color:var(--primary-color);-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s}.Button.jsx-dcf66ee1d796daa9:hover{background-color:var(--light-grey);color:var(--secondary-color)}"})]})}},1533:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return r}});var i=o(5893),t=o(6465),n=o.n(t);function r(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"jsx-72d8b8c5650c0387 NovedadContainer",children:[(0,i.jsxs)("div",{className:"jsx-72d8b8c5650c0387 NovedadHeader",children:[(0,i.jsx)("img",{src:"/assets/icons/shines.png",className:"jsx-72d8b8c5650c0387"}),(0,i.jsx)("h6",{className:"jsx-72d8b8c5650c0387",children:"Novedad"})]}),(0,i.jsx)("div",{className:"jsx-72d8b8c5650c0387 NovedadContent",children:e.content})]}),(0,i.jsx)(n(),{id:"72d8b8c5650c0387",children:".NovedadContainer.jsx-72d8b8c5650c0387{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--manantial-color);gap:10px}.NovedadHeader.jsx-72d8b8c5650c0387{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.NovedadHeader.jsx-72d8b8c5650c0387 img.jsx-72d8b8c5650c0387{width:20px;height:20px}.NovedadHeader.jsx-72d8b8c5650c0387 h6.jsx-72d8b8c5650c0387{font-size:16px;color:var(--secondary-color)}"})]})}},7677:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return s}});var i=o(5893),t=o(6465),n=o.n(t),r=o(7294);function s(e,a){let{useLocalTime:o=!0}=a,[t,s]=(0,r.useState)(""),c="".concat(e.año,"-").concat(e.mes,"-").concat(e.dia,"T").concat(e.hora,":00:00.000Z");return(0,r.useEffect)(()=>{let e=setInterval(()=>{let e;let a=new Date(c);o?e=new Date:(e=new Date().toUTCString(),e=new Date(e.slice(0,e.lastIndexOf(" ")-1)));let i=Math.floor((e-a)/1e3);if(i<60)s("".concat(i," segundos"));else if(i<3600)s("".concat(Math.floor(i/60)," minutos"));else if(i<86400)s("".concat(Math.floor(i/3600)," horas"));else if(i<172800){let e=Math.floor(i/86400);1===e?s("".concat(e," d\xeda")):s("".concat(e," d\xedas"))}else if(i<2592e3){let e=Math.floor(i/86400);1===e?s("".concat(e," d\xeda")):s("".concat(e," d\xedas"))}else if(i<31536e3){let e=Math.floor(i/2592e3);1===e?s("".concat(e," mes")):s("".concat(e," meses"))}else{let e=Math.floor(i/31536e3);1===e?s("".concat(e," a\xf1o")):s("".concat(e," a\xf1os"))}},1e3);return()=>clearInterval(e)},[c,o]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{className:"jsx-113fd82444e4b943",children:["Hace ",t]}),(0,i.jsx)(n(),{id:"113fd82444e4b943",children:"p.jsx-113fd82444e4b943{font-size:12px}"})]})}},5671:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return f}});var i=o(5893),t=o(6465),n=o.n(t),r=o(1664),s=o.n(r),c=o(7677),d=o(1533),l=o(6880),x=o(6091);function f(e){let a=e.link,o="".concat(e.año,"-").concat(e.mes,"-").concat(e.dia,"T").concat(e.hora,":00:00.000Z"),t=encodeURI(a);return console.log(t),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostGlobalContainer",children:[(0,i.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostAutorContainer",children:[(0,i.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostProfilePicture",children:[(0,i.jsx)("img",{src:e.picture,alt:e.autor,className:"jsx-efaf87ba5023fd95"}),(0,i.jsx)("i",{className:"jsx-efaf87ba5023fd95"})]}),(0,i.jsxs)("div",{className:"jsx-efaf87ba5023fd95",children:[(0,i.jsx)("h4",{className:"jsx-efaf87ba5023fd95",children:e.autor}),(0,i.jsx)(c.default,{dia:e.dia,mes:e.mes,año:e.año,hora:e.hora,fechaPublicacion:o,useLocalTime:!0})]})]}),(0,i.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostMensajeContainer",children:[e.mensaje&&(0,i.jsx)("p",{className:"jsx-efaf87ba5023fd95",children:e.mensaje}),e.novedad&&(0,i.jsx)("div",{className:"jsx-efaf87ba5023fd95 NovedadContainer",children:(0,i.jsx)(d.default,{content:"".concat(e.novedad)})}),e.alerta&&(0,i.jsx)("div",{className:"jsx-efaf87ba5023fd95 NovedadContainer",children:(0,i.jsx)(l.default,{content:"".concat(e.alerta)})})]}),e.titleLink&&(0,i.jsx)(s(),{href:t,children:(0,i.jsx)("div",{className:"jsx-efaf87ba5023fd95 PostLinkContainer",children:e.titleLink})}),e.registro&&(0,i.jsxs)(x.default,{children:[(0,i.jsx)("img",{id:"ButtonImg",src:"/assets/icons/google.png",className:"jsx-efaf87ba5023fd95"}),"Entrar"]})]}),(0,i.jsx)(n(),{id:"efaf87ba5023fd95",children:'.PostGlobalContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--light-grey);padding:20px;gap:20px}.PostAutorContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-efaf87ba5023fd95{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;background-color:var(--primary-color);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-efaf87ba5023fd95 img.jsx-efaf87ba5023fd95{width:auto;height:18px}.PostProfilePicture.jsx-efaf87ba5023fd95 i.jsx-efaf87ba5023fd95{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}.PostMensajeContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.NovedadContainer.jsx-efaf87ba5023fd95{color:var(--secondary-color)}.PostLinkContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:10px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:16px;font-weight:700;-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;background-color:var(--mid-grey);color:var(--secondary-color)}.PostLinkContainer.jsx-efaf87ba5023fd95:hover{background-color:var(--ligth-grey)}'})]})}}},function(e){e.O(0,[6880,9774,2888,179],function(){return e(e.s=5890)}),_N_E=e.O()}]);