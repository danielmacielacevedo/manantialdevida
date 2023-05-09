(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", ()=>{
                navigator.serviceWorker.register("/service-worker.js").then((registration)=>{
                    console.log("Service worker registered: ", registration);
                }).catch((error)=>{
                    console.log("Service worker registration failed: ", error);
                });
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                className: "my-progress-bar",
                color: "#2d2d2d",
                startPosition: 0.3,
                stopDelayMs: 200,
                height: 85,
                showOnShallow: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp); // import 'daniel/styles/globals.css'
 // import NextNProgress from 'nextjs-progressbar';
 // export default function App({ Component, pageProps }) {
 //   return (
 //     <>
 //       <NextNProgress className="my-progress-bar" color="#2d2d2d" startPosition={0.3} stopDelayMs={200} height={85} showOnShallow={true} />
 //       <Component {...pageProps} />
 //     </>
 //     )
 // }


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(731));
module.exports = __webpack_exports__;

})();