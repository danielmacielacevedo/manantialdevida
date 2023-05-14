"use strict";
exports.id = 7855;
exports.ids = [7855];
exports.modules = {

/***/ 3998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserContext": () => (/* binding */ UserContext),
/* harmony export */   "UserProvider": () => (/* binding */ UserProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_client__WEBPACK_IMPORTED_MODULE_2__]);
_firebase_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { loginWithGoogle, onAuthStateChanged } from "../firebase/client";
const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const UserProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_firebase_client__WEBPACK_IMPORTED_MODULE_2__/* .onAuthStateChanged */ .Aj)(setUser);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginSuccessful)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserProvider__WEBPACK_IMPORTED_MODULE_4__]);
_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function LoginSuccessful() {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_UserProvider__WEBPACK_IMPORTED_MODULE_4__.UserContext);
    // Verificar si user está definido
    if (!user || !user.picture) {
        return null; // O muestra algún mensaje de error o redirige a otra página
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-3187745945a42b70" + " " + "EntrarContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-3187745945a42b70" + " " + "EntrarContentContainer",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-3187745945a42b70" + " " + "EntrarContent",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-3187745945a42b70" + " " + "ImageContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        referrerPolicy: "no-referrer",
                                        src: user.picture,
                                        className: "jsx-3187745945a42b70"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/light_logo_manantial.png",
                                        className: "jsx-3187745945a42b70"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "jsx-3187745945a42b70",
                                children: "\xa1Ya est\xe1s dentro!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "jsx-3187745945a42b70",
                                children: user.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-3187745945a42b70",
                                children: user.email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "ButtonStyle",
                                href: encodeURI("/"),
                                children: "Continuar"
                            })
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3187745945a42b70",
                children: ".EntrarContainer.jsx-3187745945a42b70{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;text-align:center}.EntrarContentContainer.jsx-3187745945a42b70{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.EntrarContent.jsx-3187745945a42b70{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:400px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;padding:20px;background-color:var(--light-grey)}.EntrarContent.jsx-3187745945a42b70 h1.jsx-3187745945a42b70{padding:0 20px}.EntrarContent.jsx-3187745945a42b70 img.jsx-3187745945a42b70{width:auto;height:80px}.EntrarButtons.jsx-3187745945a42b70{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.ImageContainer.jsx-3187745945a42b70{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:300px;height:100px;gap:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ImageContainer.jsx-3187745945a42b70 img.jsx-3187745945a42b70:first-child{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;right:66px}.ImageContainer.jsx-3187745945a42b70 img.jsx-3187745945a42b70:last-child{position:absolute;left:66px}"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;