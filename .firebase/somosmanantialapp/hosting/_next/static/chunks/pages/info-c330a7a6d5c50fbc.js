(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9776],{1866:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info",function(){return s(8977)}])},4104:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return c}});var a=s(5893),t=s(6465),o=s.n(t),n=s(264);function c(e){return(0,a.jsxs)("div",{className:"jsx-8c9e4113d471bc44 MonthEventsContainer",children:[(0,a.jsx)("h2",{className:"jsx-8c9e4113d471bc44",children:"ACTIVIDADES MAYO"}),(0,a.jsx)(n.default,{mes:e.mes}),(0,a.jsx)(o(),{id:"8c9e4113d471bc44",children:".MonthEventsContainer.jsx-8c9e4113d471bc44{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 0;gap:20px;background-color:var(--primary-color)}"})]})}},8525:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return n}});var a=s(5893),t=s(6465),o=s.n(t);function n(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-71d2cab3554e21cc BackHeaderContainer"}),(0,a.jsx)(o(),{id:"71d2cab3554e21cc",children:".BackHeaderContainer.jsx-71d2cab3554e21cc{width:100%;height:80px;background:var(--primary-color)}"})]})}},3398:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return n}});var a=s(5893),t=s(6465),o=s.n(t);function n(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-b71919704977ce6e BackMenuMobileContainer"}),(0,a.jsx)(o(),{id:"b71919704977ce6e",children:".BackMenuMobileContainer.jsx-b71919704977ce6e{width:100%;height:100px;background:var(--primary-color)}"})]})}},7281:function(e,i,s){"use strict";s.r(i);var a=s(5893),t=s(6465),o=s.n(t),n=s(7294);i.default=function(e){let{eventDate:i}=e,[s,t]=(0,n.useState)({days:0,hours:0,minutes:0,seconds:0});(0,n.useEffect)(()=>{let e=setInterval(()=>{let e=Date.now(),s=new Date(i).getTime(),a=6e4*new Date().getTimezoneOffset(),o=6e4*new Date(i).getTimezoneOffset(),n=s-o+a-e;t({days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4),seconds:Math.floor(n%6e4/1e3)})},1e3);return()=>clearInterval(e)},[i]);let c=e=>e.toString().padStart(2,"0");return(0,a.jsxs)("div",{className:"jsx-20d74b93a8e1aea9",children:[(0,a.jsxs)("h4",{className:"jsx-20d74b93a8e1aea9",children:[s.days,"d, ",c(s.hours),"h,"," ",c(s.minutes),"m, ",c(s.seconds),"s"]}),(0,a.jsx)(o(),{id:"20d74b93a8e1aea9",children:"h4.jsx-20d74b93a8e1aea9{text-align:center}"})]})}},4165:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return c}});var a=s(5893),t=s(6465),o=s.n(t),n=s(7294);function c(e){let{articles:i}=e,[s,t]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},2e3);return()=>clearTimeout(e)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-ced9b774b057dc4a ArticleListContainer",children:s?(0,a.jsxs)("div",{className:"jsx-ced9b774b057dc4a LoadingSpinnerContainer",children:[(0,a.jsx)("div",{className:"jsx-ced9b774b057dc4a Spinner"}),(0,a.jsx)("img",{src:"/assets/favicon_manantial.png",className:"jsx-ced9b774b057dc4a SpinnerImage"})]}):i&&i.length>0?i.map(e=>(0,a.jsxs)("div",{className:"jsx-ced9b774b057dc4a MaestroContainer article-container",children:[(0,a.jsx)("h2",{className:"jsx-ced9b774b057dc4a",children:e.title}),(0,a.jsx)("div",{className:"jsx-ced9b774b057dc4a MaestroClasses",children:e.classes.map(e=>(0,a.jsx)("div",{className:"jsx-ced9b774b057dc4a TableContainerInfo.open",children:(0,a.jsxs)("div",{className:"jsx-ced9b774b057dc4a NameContainer",children:[(0,a.jsx)("h4",{className:"jsx-ced9b774b057dc4a",children:e.titulo}),(0,a.jsxs)("div",{className:"jsx-ced9b774b057dc4a NameContainerDetails",children:[(0,a.jsxs)("p",{className:"jsx-ced9b774b057dc4a",children:["D\xeda ",(0,a.jsx)("span",{className:"jsx-ced9b774b057dc4a",children:e.dia})]}),(0,a.jsxs)("p",{className:"jsx-ced9b774b057dc4a",children:["Hora ",(0,a.jsx)("span",{className:"jsx-ced9b774b057dc4a",children:e.hora})]}),(0,a.jsxs)("p",{className:"jsx-ced9b774b057dc4a",children:["Lugar ",(0,a.jsx)("span",{className:"jsx-ced9b774b057dc4a",children:e.lugar})]})]})]})},e.date))})]},e.id)):(0,a.jsx)("p",{className:"jsx-ced9b774b057dc4a TextAlignCenter",children:"No hay nada que mostrar."})}),(0,a.jsx)(o(),{id:"ced9b774b057dc4a",children:".ArticleListContainer.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.MaestroContainer.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px;cursor:pointer;border:none;text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;background:var(--light-grey);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s}.MaestroContainer.jsx-ced9b774b057dc4a:hover{background-color:var(--mid-grey)}.MaestroContainer.jsx-ced9b774b057dc4a h2.jsx-ced9b774b057dc4a{color:var(--secondary-color);{}}.MaestroClasses.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.TableContainerInfo.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 0 0 0;gap:20px}.NameContainer.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;font-size:16px;font-weight:100;background-color:var(--primary-color)}.NameContainer.jsx-ced9b774b057dc4a span.jsx-ced9b774b057dc4a{font-weight:400}.NameContainerDetails.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px}.TitleTableCalendar.jsx-ced9b774b057dc4a{font-size:14px;font-weight:100}.TableContainerInfo.jsx-ced9b774b057dc4a{display:none}.TableContainerInfo.open.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}"})]})}},3969:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return n}});var a=s(5893),t=s(6465),o=s.n(t);function n(e){let{categories:i,filterCategory:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-b9ff22847cc35f7d ButtonCategories",children:i&&i.length>0?i.map(e=>(0,a.jsx)("button",{type:"button",onClick:()=>s(e),className:"jsx-b9ff22847cc35f7d ButtonListContainer btn-category",children:e},e)):(0,a.jsx)("p",{className:"jsx-b9ff22847cc35f7d",children:"Loading..."})}),(0,a.jsx)(o(),{id:"b9ff22847cc35f7d",children:".ButtonCategories.jsx-b9ff22847cc35f7d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px}.ButtonListContainer.jsx-b9ff22847cc35f7d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;padding:10px;cursor:pointer;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:12px;background:var(--light-grey);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;{}}.ButtonListContainer.jsx-b9ff22847cc35f7d:hover{background:var(--secondary-color);color:var(--primary-color)}"})]})}},264:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return l}});var a=s(5893),t=s(6465),o=s.n(t),n=s(7294),c=s(4165),r=s(3969);function l(e){let[i,s]=(0,n.useState)([]),[t,l]=(0,n.useState)([]),d=async()=>{if(e.mes){let i=await fetch(encodeURI("/api/sociedades/".concat(e.mes))),a=await i.json();s(a),l(a)}};(0,n.useEffect)(()=>{d()},[e.mes]);let x=e=>{if("Todos"===e)l(i);else{let s=i.map(i=>({...i,classes:i.classes.filter(i=>i.category===e)})).filter(e=>e.classes.length>0);l(s)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-2f3d0d5a771cde62 MaestrosFiltroContainer",children:[(0,a.jsx)(r.default,{categories:["Todos","Damas","Ni\xf1os","J\xf3venes","Varones"],filterCategory:x}),(0,a.jsx)(c.default,{articles:t})]}),(0,a.jsx)(o(),{id:"2f3d0d5a771cde62",children:".MaestrosFiltroContainer.jsx-2f3d0d5a771cde62{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0 20px;gap:20px}"})]})}},6845:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return x}});var a=s(5893),t=s(6465),o=s.n(t),n=s(1664),c=s.n(n),r=s(7294),l=s(3998),d=s(3398);function x(){let{user:e}=(0,r.useContext)(l.UserContext);return(0,a.jsxs)(a.Fragment,{children:[null===e&&(0,a.jsxs)("div",{className:"jsx-5f52834379b4d518 FooterContainer",children:[(0,a.jsxs)("div",{className:"jsx-5f52834379b4d518 FooterContent",children:[(0,a.jsx)("div",{className:"jsx-5f52834379b4d518 FooterImage",children:(0,a.jsx)("img",{src:"/assets/light_logo_manantial.png",className:"jsx-5f52834379b4d518"})}),(0,a.jsxs)("div",{className:"jsx-5f52834379b4d518 FooterLinksContainer",children:[(0,a.jsx)("h3",{className:"jsx-5f52834379b4d518",children:"Navegaci\xf3n"}),(0,a.jsxs)("ul",{className:"jsx-5f52834379b4d518 FooterLinks",children:[(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsx)("a",{href:"#Top",className:"jsx-5f52834379b4d518",children:"Volver arriba"})}),(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsx)(c(),{href:"/",children:"Inicio"})}),(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsx)(c(),{href:"/predicas",children:"Pr\xe9dicas"})}),(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsx)(c(),{href:"/info",children:"Info"})})]})]}),(0,a.jsxs)("div",{className:"jsx-5f52834379b4d518 FooterLinksContainer",children:[(0,a.jsx)("h3",{className:"jsx-5f52834379b4d518",children:"Como llegar"}),(0,a.jsx)("ul",{className:"jsx-5f52834379b4d518 FooterLinks",children:(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://maps.app.goo.gl/BJ5W33SYbQfQr8cg9?g_st=ic",className:"jsx-5f52834379b4d518",children:["Toma de Zacatecas #335 ",(0,a.jsx)("br",{className:"jsx-5f52834379b4d518"})," Victoria de Durango, Durango, M\xe9xico. ",(0,a.jsx)("br",{className:"jsx-5f52834379b4d518"})," CP 34230"]})})})]}),(0,a.jsxs)("div",{className:"jsx-5f52834379b4d518 FooterLinksContainer",children:[(0,a.jsx)("h3",{className:"jsx-5f52834379b4d518",children:"Social"}),(0,a.jsxs)("ul",{className:"jsx-5f52834379b4d518 FooterLinks",children:[(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/somosmanantial/",className:"jsx-5f52834379b4d518",children:[" ","Instagram"]})}),(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/somosmanantial.org/",className:"jsx-5f52834379b4d518",children:[" ","Facebook"]})}),(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tiktok.com/@somosmanantial",className:"jsx-5f52834379b4d518",children:[" ","TikTok"]})})]})]}),(0,a.jsxs)("div",{className:"jsx-5f52834379b4d518 FooterLinksContainer",children:[(0,a.jsx)("h3",{className:"jsx-5f52834379b4d518",children:"Legal"}),(0,a.jsx)("ul",{className:"jsx-5f52834379b4d518 FooterLinks",children:(0,a.jsx)("li",{className:"jsx-5f52834379b4d518",children:(0,a.jsx)(c(),{href:"/legal/privacidad",children:"Pol\xedtica de privacidad"})})})]})]}),(0,a.jsx)("p",{className:"jsx-5f52834379b4d518",children:"Manantial de Vida \xa9 2023"})]}),e&&e.email&&(0,a.jsx)(d.default,{}),(0,a.jsx)(o(),{id:"5f52834379b4d518",children:'.FooterContainer.jsx-5f52834379b4d518{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:400px;margin-top:20px;padding:40px;gap:50px;background-color:#000;color:#fff}.FooterContent.jsx-5f52834379b4d518{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;gap:20px}.FooterContainer.jsx-5f52834379b4d518 p.jsx-5f52834379b4d518{color:var(--light-grey);text-align:center}.FooterImage.jsx-5f52834379b4d518{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.FooterImage.jsx-5f52834379b4d518 img.jsx-5f52834379b4d518{width:auto;height:50px}.FooterLinksContainer.jsx-5f52834379b4d518{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:40px;color:var(--primary-color)}.FooterLinksContainer.jsx-5f52834379b4d518 h3.jsx-5f52834379b4d518{color:#fff;font-family:"Roboto",sans-serif;font-weight:700}.FooterLinks.jsx-5f52834379b4d518{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;list-style:none;color:#fff;gap:20px;font-family:"Roboto",sans-serif;font-size:14px;font-weight:400}@media only screen and (max-width:860px){.FooterContainer.jsx-5f52834379b4d518{padding:40px 20px;height:auto}.FooterContent.jsx-5f52834379b4d518{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:40px}}'})]})}},327:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return r}});var a=s(5893),t=s(6465),o=s.n(t),n=s(7281),c=s(7294);function r(){(0,c.useEffect)(()=>{let e=setInterval(()=>{},6048e5);return()=>clearInterval(e)},[]);let{fechaDomingo:e,fechaMiercoles:i,fechaViernes:s}=function(){let e=new Date("2023-05-14T11:30:00-06:00").getTime(),i=new Date("2023-05-10T19:00:00-06:00").getTime(),s=new Date("2023-05-12T20:00:00-06:00").getTime(),a=e,t=i,o=s,n=new Date().getTime();for(;a<n;)a+=6048e5;for(;t<n;)t+=6048e5;for(;o<n;)o+=6048e5;return{fechaDomingo:a,fechaMiercoles:t,fechaViernes:o}}();return(0,a.jsxs)("div",{className:"jsx-dc834b1cdc6a4989 MonthEventsContainer",children:[(0,a.jsx)("h2",{className:"jsx-dc834b1cdc6a4989",children:"NUESTROS SERVICIOS"}),(0,a.jsxs)("div",{className:"jsx-dc834b1cdc6a4989 MonthEventsContent",children:[(0,a.jsx)("div",{className:"jsx-dc834b1cdc6a4989 ArticlesContainer",children:(0,a.jsxs)("article",{className:"jsx-dc834b1cdc6a4989 ArticleContainer",children:[(0,a.jsx)("h3",{className:"jsx-dc834b1cdc6a4989",children:"Servicio Manantial"}),(0,a.jsx)("img",{src:"/assets/predicadores/pastora-dina/en-mi-angustia.jpg",className:"jsx-dc834b1cdc6a4989"}),(0,a.jsxs)("div",{className:"jsx-dc834b1cdc6a4989",children:[(0,a.jsx)("p",{className:"jsx-dc834b1cdc6a4989",children:"Todos los domingos"}),(0,a.jsx)("h2",{className:"jsx-dc834b1cdc6a4989",children:"11:30 AM"}),(0,a.jsx)(n.default,{eventDate:e})]})]})}),(0,a.jsx)("div",{className:"jsx-dc834b1cdc6a4989 ArticlesContainer",children:(0,a.jsxs)("article",{className:"jsx-dc834b1cdc6a4989 ArticleContainer",children:[(0,a.jsx)("h3",{className:"jsx-dc834b1cdc6a4989",children:"Servicio de Ense\xf1anza"}),(0,a.jsx)("img",{src:"/assets/predicadores/pastor-isaac/de-donde-vienes.jpg",className:"jsx-dc834b1cdc6a4989"}),(0,a.jsxs)("div",{className:"jsx-dc834b1cdc6a4989",children:[(0,a.jsx)("p",{className:"jsx-dc834b1cdc6a4989",children:"Todos los mi\xe9rcoles"}),(0,a.jsx)("h2",{className:"jsx-dc834b1cdc6a4989",children:"7:00 PM"}),(0,a.jsx)(n.default,{eventDate:i})]})]})}),(0,a.jsx)("div",{className:"jsx-dc834b1cdc6a4989 ArticlesContainer",children:(0,a.jsxs)("article",{className:"jsx-dc834b1cdc6a4989 ArticleContainer",children:[(0,a.jsx)("h3",{className:"jsx-dc834b1cdc6a4989",children:"Noche de Oraci\xf3n"}),(0,a.jsx)("img",{src:"/assets/predicadores/flor-fernandez/metamorfosis-del-alma.jpg",className:"jsx-dc834b1cdc6a4989"}),(0,a.jsxs)("div",{className:"jsx-dc834b1cdc6a4989",children:[(0,a.jsx)("p",{id:"info",className:"jsx-dc834b1cdc6a4989",children:"Todos los viernes"}),(0,a.jsx)("h2",{className:"jsx-dc834b1cdc6a4989",children:"8:00 PM"}),(0,a.jsx)(n.default,{eventDate:s})]})]})})]}),(0,a.jsx)(o(),{id:"dc834b1cdc6a4989",children:".MonthEventsContainer.jsx-dc834b1cdc6a4989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 20px 0 20px;gap:20px;background-color:var(--primary-color)}.MonthEventsContent.jsx-dc834b1cdc6a4989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px}.ArticlesContainer.jsx-dc834b1cdc6a4989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px}.ArticleContainer.jsx-dc834b1cdc6a4989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;height:auto;gap:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--light-grey)}.ArticleContainer.jsx-dc834b1cdc6a4989 img.jsx-dc834b1cdc6a4989{width:100%;height:auto;max-height:180px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ArticleContainer.jsx-dc834b1cdc6a4989 p.jsx-dc834b1cdc6a4989{font-size:16px;font-weight:100;text-align:center}.ArticleContainer.jsx-dc834b1cdc6a4989 div.jsx-dc834b1cdc6a4989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}@media only screen and (max-width:860px){.MonthEventsContent.jsx-dc834b1cdc6a4989{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"})]})}},8977:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return d}});var a=s(5893),t=s(9008),o=s.n(t),n=s(8525),c=s(327),r=s(6845),l=s(4104);function d(){return(0,a.jsxs)("div",{id:"Top",className:"theme",children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Inicio | Manantial"}),(0,a.jsx)("meta",{name:"description",content:"Porque contigo est\xe1 el manantial de la vida; En tu luz veremos la luz."}),(0,a.jsx)("meta",{property:"og:title",content:"Inicio | Manantial"}),(0,a.jsx)("meta",{property:"og:url",content:"https://somosmamantial.org/"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/favicon_manantial.png"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap",rel:"stylesheet"})]}),(0,a.jsx)(n.default,{}),(0,a.jsx)(l.default,{mes:"Mayo"}),(0,a.jsx)(c.default,{}),(0,a.jsx)(r.default,{})]})}},9008:function(e,i,s){e.exports=s(2636)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=1866)}),_N_E=e.O()}]);