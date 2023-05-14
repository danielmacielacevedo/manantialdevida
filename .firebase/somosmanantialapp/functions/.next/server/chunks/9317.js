"use strict";
exports.id = 9317;
exports.ids = [9317];
exports.modules = {

/***/ 9317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Entrar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8741);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_client__WEBPACK_IMPORTED_MODULE_4__]);
_firebase_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import React, { useContext } from "react";
// import { UserContext } from "../../UserProvider";





function Entrar() {
    // const { user, setUser } = useContext(UserContext);
    const handleClickGoogle = ()=>{
        (0,_firebase_client__WEBPACK_IMPORTED_MODULE_4__/* .loginWithGoogle */ .Cb)()// .then((user) => {
        //   const { name, email, id, picture } = user;
        //   setUser(user);
        //   window.location.reload(); 
        // })
        .catch((err)=>{
            console.log(err);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-8b8a85b4b40a26d4" + " " + "EntrarContainer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-8b8a85b4b40a26d4" + " " + "EntrarContent",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/light_logo_manantial.png",
                            className: "jsx-8b8a85b4b40a26d4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "jsx-8b8a85b4b40a26d4",
                            children: "Entrar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            onClick: handleClickGoogle,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    id: "ButtonImg",
                                    src: "/assets/icons/google.png",
                                    className: "jsx-8b8a85b4b40a26d4"
                                }),
                                "Entrar con Google"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "ButtonStyle",
                            href: "/",
                            children: "Volver al Inicio"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "jsx-8b8a85b4b40a26d4",
                            children: [
                                "Al hacer clic en Entrar con Google, aceptas nuestra",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "jsx-8b8a85b4b40a26d4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/legal/privacidad",
                                        children: "pol\xedtica de privacidad y pol\xedtica de cookies."
                                    })
                                }),
                                " "
                            ]
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8b8a85b4b40a26d4",
                children: ".EntrarContainer.jsx-8b8a85b4b40a26d4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;text-align:center}.EntrarContentContainer.jsx-8b8a85b4b40a26d4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.EntrarContent.jsx-8b8a85b4b40a26d4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:400px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:400px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:20px;background-color:var(--light-grey)}.EntrarContent.jsx-8b8a85b4b40a26d4 img.jsx-8b8a85b4b40a26d4{width:auto;height:80px}.EntrarContent.jsx-8b8a85b4b40a26d4 span.jsx-8b8a85b4b40a26d4{font-size:12px;line-height:20px;color:var(--mid-grey)}.EntrarContent.jsx-8b8a85b4b40a26d4 i.jsx-8b8a85b4b40a26d4{color:var(--dark-grey);font-style:normal;padding-left:4px}.ImageContainer.jsx-8b8a85b4b40a26d4{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:300px;height:100px;gap:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ImageContainer.jsx-8b8a85b4b40a26d4 img.jsx-8b8a85b4b40a26d4:first-child{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;right:66px}.ImageContainer.jsx-8b8a85b4b40a26d4 img.jsx-8b8a85b4b40a26d4:last-child{position:absolute;left:66px}"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;