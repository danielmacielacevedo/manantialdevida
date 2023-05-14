"use strict";
exports.id = 1338;
exports.ids = [1338];
exports.modules = {

/***/ 1338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuMobile)
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





function MenuMobile() {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_UserProvider__WEBPACK_IMPORTED_MODULE_4__.UserContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            user && user.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-c998d887af0cfd72" + " " + "BottomMenuContainer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: 24,
                                height: 24,
                                src: "/assets/icons/home-icon.png",
                                alt: "Home Icon",
                                className: "jsx-c998d887af0cfd72"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-c998d887af0cfd72",
                                children: "Inicio"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/blog",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: 24,
                                height: 24,
                                src: "/assets/icons/blog-icon.png",
                                alt: "Home Icon",
                                className: "jsx-c998d887af0cfd72"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-c998d887af0cfd72",
                                children: "Blog"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/predicas",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: 24,
                                height: 24,
                                src: "/assets/icons/new-predicas-icon.png",
                                alt: "Home Icon",
                                className: "jsx-c998d887af0cfd72"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-c998d887af0cfd72",
                                children: "Pr\xe9dicas"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/miembros/menu",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                referrerPolicy: "no-referrer",
                                width: 24,
                                height: 24,
                                src: user.picture,
                                alt: "Menu Icon",
                                className: "jsx-c998d887af0cfd72" + " " + "ProfilePicture"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-c998d887af0cfd72",
                                children: "Men\xfa"
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c998d887af0cfd72",
                children: ".BottomMenuContainer.jsx-c998d887af0cfd72{position:fixed;bottom:0;display:none;width:100%;height:80px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000000b1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);{}}.BottomMenuContainer.jsx-c998d887af0cfd72 img.jsx-c998d887af0cfd72{width:24px;height:24px}.ProfilePicture.jsx-c998d887af0cfd72{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:solid 2px var(--mid-grey)}@media only screen and (max-width:860px){.BottomMenuContainer.jsx-c998d887af0cfd72{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;