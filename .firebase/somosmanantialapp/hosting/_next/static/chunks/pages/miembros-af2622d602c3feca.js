(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5316],{3989:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miembros",function(){return i(3815)}])},8525:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return s}});var t=i(5893),o=i(6465),n=i.n(o);function s(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-71d2cab3554e21cc BackHeaderContainer"}),(0,t.jsx)(n(),{id:"71d2cab3554e21cc",children:".BackHeaderContainer.jsx-71d2cab3554e21cc{width:100%;height:80px;background:var(--primary-color)}"})]})}},3398:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return s}});var t=i(5893),o=i(6465),n=i.n(o);function s(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-b71919704977ce6e BackMenuMobileContainer"}),(0,t.jsx)(n(),{id:"b71919704977ce6e",children:".BackMenuMobileContainer.jsx-b71919704977ce6e{width:100%;height:100px;background:var(--primary-color)}"})]})}},6091:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return c}});var t=i(5893),o=i(6465),n=i.n(o),s=i(1664),r=i.n(s);function c(e){let{children:a,props:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{href:"/entrar",children:(0,t.jsx)("div",{className:"jsx-dcf66ee1d796daa9 Button",children:a})}),(0,t.jsx)(n(),{id:"dcf66ee1d796daa9",children:".Button.jsx-dcf66ee1d796daa9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;padding:10px 20px;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;gap:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--secondary-color);color:var(--primary-color);-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s}.Button.jsx-dcf66ee1d796daa9:hover{background-color:var(--light-grey);color:var(--secondary-color)}"})]})}},1533:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return s}});var t=i(5893),o=i(6465),n=i.n(o);function s(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"jsx-72d8b8c5650c0387 NovedadContainer",children:[(0,t.jsxs)("div",{className:"jsx-72d8b8c5650c0387 NovedadHeader",children:[(0,t.jsx)("img",{src:"/assets/icons/shines.png",className:"jsx-72d8b8c5650c0387"}),(0,t.jsx)("h6",{className:"jsx-72d8b8c5650c0387",children:"Novedad"})]}),(0,t.jsx)("div",{className:"jsx-72d8b8c5650c0387 NovedadContent",children:e.content})]}),(0,t.jsx)(n(),{id:"72d8b8c5650c0387",children:".NovedadContainer.jsx-72d8b8c5650c0387{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--manantial-color);gap:10px}.NovedadHeader.jsx-72d8b8c5650c0387{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.NovedadHeader.jsx-72d8b8c5650c0387 img.jsx-72d8b8c5650c0387{width:20px;height:20px}.NovedadHeader.jsx-72d8b8c5650c0387 h6.jsx-72d8b8c5650c0387{font-size:16px;color:var(--secondary-color)}"})]})}},7677:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return r}});var t=i(5893),o=i(6465),n=i.n(o),s=i(7294);function r(e,a){let{useLocalTime:i=!0}=a,[o,r]=(0,s.useState)(""),c="".concat(e.año,"-").concat(e.mes,"-").concat(e.dia,"T").concat(e.hora,":00:00.000Z");return(0,s.useEffect)(()=>{let e=setInterval(()=>{let e;let a=new Date(c);i?e=new Date:(e=new Date().toUTCString(),e=new Date(e.slice(0,e.lastIndexOf(" ")-1)));let t=Math.floor((e-a)/1e3);if(t<60)r("".concat(t," segundos"));else if(t<3600)r("".concat(Math.floor(t/60)," minutos"));else if(t<86400)r("".concat(Math.floor(t/3600)," horas"));else if(t<172800){let e=Math.floor(t/86400);1===e?r("".concat(e," d\xeda")):r("".concat(e," d\xedas"))}else if(t<2592e3){let e=Math.floor(t/86400);1===e?r("".concat(e," d\xeda")):r("".concat(e," d\xedas"))}else if(t<31536e3){let e=Math.floor(t/2592e3);1===e?r("".concat(e," mes")):r("".concat(e," meses"))}else{let e=Math.floor(t/31536e3);1===e?r("".concat(e," a\xf1o")):r("".concat(e," a\xf1os"))}},1e3);return()=>clearInterval(e)},[c,i]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{className:"jsx-113fd82444e4b943",children:["Hace ",o]}),(0,t.jsx)(n(),{id:"113fd82444e4b943",children:"p.jsx-113fd82444e4b943{font-size:12px}"})]})}},5237:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return r}});var t=i(5893),o=i(6465),n=i.n(o),s=i(5671);function r(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-1fd31c6922dcbcc4 AllPostContainer",children:(0,t.jsxs)("div",{className:"jsx-1fd31c6922dcbcc4 PostContainer",children:[(0,t.jsx)(s.default,{autor:"Manantial de Vida",mensaje:"",novedad:"",alerta:"Si a\xfan no lo haces, crea una cuenta para no perder tu acceso como miembro autorizado y seguir viendo el calendario.",registro:"true",link:"/miembros/calendario-maestros/mayo",titleLink:"",picture:"/assets/light_logo_manantial.png",dia:"16",mes:"05",año:"2023",hora:"09"}),(0,t.jsx)(s.default,{autor:"Manantial de Vida",mensaje:"\uD83D\uDCC6 \uD83D\uDC48",novedad:"Ya puedes filtrar el calendario por d\xeda.",link:"/miembros/calendario-maestros/mayo",titleLink:"Ver calendario",picture:"/assets/light_logo_manantial.png",dia:"14",mes:"05",año:"2023",hora:"23"}),(0,t.jsx)(s.default,{autor:"Manantial de Vida",mensaje:"Ya est\xe1 disponible el calendario con las actividades de cada sociedad.",novedad:"",link:"/miembros/calendario-sociedades",titleLink:"Ver actividades",picture:"/assets/light_logo_manantial.png",dia:"06",mes:"05",año:"2023",hora:"09"}),(0,t.jsx)(s.default,{autor:"Manantial de Vida",mensaje:"",novedad:"Ya puedes filtrar los calendarios por clases.",link:"/miembros/calendario-maestros",titleLink:"Ver calendarios",picture:"/assets/light_logo_manantial.png",dia:"05",mes:"05",año:"2023",hora:"23"}),(0,t.jsx)(s.default,{autor:"Manantial de Vida",mensaje:"Hola, ya est\xe1 disponible el rol de maestros para el mes de mayo.",link:"/miembros/calendario-maestros/",titleLink:"Ver calendarios",picture:"/assets/light_logo_manantial.png",dia:"03",mes:"05",año:"2023",hora:"10"}),(0,t.jsx)(s.default,{autor:"Manantial de Vida",mensaje:"Ya puedes descargar todos los logotipos de nuestra iglesia.",link:"/miembros/recursos/logotipo",titleLink:"Descargar logotipos",picture:"/assets/light_logo_manantial.png",dia:"02",mes:"05",año:"2023",hora:"10"})]})}),(0,t.jsx)(n(),{id:"1fd31c6922dcbcc4",children:".PostContainer.jsx-1fd31c6922dcbcc4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;max-width:500px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}"})]})}},5671:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return f}});var t=i(5893),o=i(6465),n=i.n(o),s=i(1664),r=i.n(s),c=i(7677),l=i(1533),d=i(6880),x=i(6091);function f(e){let a=e.link,i="".concat(e.año,"-").concat(e.mes,"-").concat(e.dia,"T").concat(e.hora,":00:00.000Z"),o=encodeURI(a);return console.log(o),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostGlobalContainer",children:[(0,t.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostAutorContainer",children:[(0,t.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostProfilePicture",children:[(0,t.jsx)("img",{src:e.picture,alt:e.autor,className:"jsx-efaf87ba5023fd95"}),(0,t.jsx)("i",{className:"jsx-efaf87ba5023fd95"})]}),(0,t.jsxs)("div",{className:"jsx-efaf87ba5023fd95",children:[(0,t.jsx)("h4",{className:"jsx-efaf87ba5023fd95",children:e.autor}),(0,t.jsx)(c.default,{dia:e.dia,mes:e.mes,año:e.año,hora:e.hora,fechaPublicacion:i,useLocalTime:!0})]})]}),(0,t.jsxs)("div",{className:"jsx-efaf87ba5023fd95 PostMensajeContainer",children:[e.mensaje&&(0,t.jsx)("p",{className:"jsx-efaf87ba5023fd95",children:e.mensaje}),e.novedad&&(0,t.jsx)("div",{className:"jsx-efaf87ba5023fd95 NovedadContainer",children:(0,t.jsx)(l.default,{content:"".concat(e.novedad)})}),e.alerta&&(0,t.jsx)("div",{className:"jsx-efaf87ba5023fd95 NovedadContainer",children:(0,t.jsx)(d.default,{content:"".concat(e.alerta)})})]}),e.titleLink&&(0,t.jsx)(r(),{href:o,children:(0,t.jsx)("div",{className:"jsx-efaf87ba5023fd95 PostLinkContainer",children:e.titleLink})}),e.registro&&(0,t.jsxs)(x.default,{children:[(0,t.jsx)("img",{id:"ButtonImg",src:"/assets/icons/google.png",className:"jsx-efaf87ba5023fd95"}),"Entrar"]})]}),(0,t.jsx)(n(),{id:"efaf87ba5023fd95",children:'.PostGlobalContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--light-grey);padding:20px;gap:20px}.PostAutorContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-efaf87ba5023fd95{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;background-color:var(--primary-color);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-efaf87ba5023fd95 img.jsx-efaf87ba5023fd95{width:auto;height:18px}.PostProfilePicture.jsx-efaf87ba5023fd95 i.jsx-efaf87ba5023fd95{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}.PostMensajeContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.NovedadContainer.jsx-efaf87ba5023fd95{color:var(--secondary-color)}.PostLinkContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:10px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:16px;font-weight:700;-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;background-color:var(--mid-grey);color:var(--secondary-color)}.PostLinkContainer.jsx-efaf87ba5023fd95:hover{background-color:var(--ligth-grey)}'})]})}},3815:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return l}});var t=i(5893),o=i(9008),n=i.n(o),s=i(8525),r=i(3398),c=i(5237);function l(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"Notificaciones Miembros | Manantial"}),(0,t.jsx)("meta",{name:"description",content:"Panel para Miembros de Manantial de Vida."}),(0,t.jsx)("meta",{property:"og:title",content:"Panel miembros | Manantial"}),(0,t.jsx)("meta",{property:"og:url",content:"https://somosmamantial.org/miembros"}),(0,t.jsx)("meta",{property:"og:image",content:"/assets/iconApp.jpg"}),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"/assets/iconApp.jpg"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/assets/favicon_manantial.png"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap",rel:"stylesheet"})]}),(0,t.jsx)(s.default,{}),(0,t.jsx)("div",{className:"PageGlobalContainer",children:(0,t.jsx)("div",{className:"PrincipalSectionContent",children:(0,t.jsx)("div",{className:"PageContainer",children:(0,t.jsx)("div",{className:"PageContent PageContentIntern",children:(0,t.jsx)(c.default,{})})})})}),(0,t.jsx)(r.default,{})]})}},9008:function(e,a,i){e.exports=i(2636)}},function(e){e.O(0,[6880,9774,2888,179],function(){return e(e.s=3989)}),_N_E=e.O()}]);