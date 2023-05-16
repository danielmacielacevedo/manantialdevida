"use strict";
exports.id = 5671;
exports.ids = [5671];
exports.modules = {

/***/ 5671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimeAgoFull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7677);
/* harmony import */ var _Novedad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1533);
/* harmony import */ var _Alerta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6880);
/* harmony import */ var _EntrarButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6091);







function PostComponent(props) {
    const link = props.link;
    const fechaPublicacion = `${props.año}-${props.mes}-${props.dia}T${props.hora}:00:00.000Z`;
    const ruta = link;
    const rutaCodificada = encodeURI(ruta);
    console.log(rutaCodificada);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-efaf87ba5023fd95" + " " + "PostGlobalContainer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-efaf87ba5023fd95" + " " + "PostAutorContainer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-efaf87ba5023fd95" + " " + "PostProfilePicture",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: props.picture,
                                        alt: props.autor,
                                        className: "jsx-efaf87ba5023fd95"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "jsx-efaf87ba5023fd95"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-efaf87ba5023fd95",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "jsx-efaf87ba5023fd95",
                                        children: props.autor
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeAgoFull__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        dia: props.dia,
                                        mes: props.mes,
                                        año: props.año,
                                        hora: props.hora,
                                        fechaPublicacion: fechaPublicacion,
                                        useLocalTime: true
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-efaf87ba5023fd95" + " " + "PostMensajeContainer",
                        children: [
                            props.mensaje && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-efaf87ba5023fd95",
                                children: props.mensaje
                            }),
                            props.novedad && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-efaf87ba5023fd95" + " " + "NovedadContainer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Novedad__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    content: `${props.novedad}`
                                })
                            }),
                            props.alerta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-efaf87ba5023fd95" + " " + "NovedadContainer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Alerta__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    content: `${props.alerta}`
                                })
                            })
                        ]
                    }),
                    props.titleLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: rutaCodificada,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-efaf87ba5023fd95" + " " + "PostLinkContainer",
                            children: props.titleLink
                        })
                    }),
                    props.registro && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_EntrarButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                id: "ButtonImg",
                                src: "/assets/icons/google.png",
                                className: "jsx-efaf87ba5023fd95"
                            }),
                            "Entrar"
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "efaf87ba5023fd95",
                children: '.PostGlobalContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--light-grey);padding:20px;gap:20px}.PostAutorContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-efaf87ba5023fd95{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;background-color:var(--primary-color);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-efaf87ba5023fd95 img.jsx-efaf87ba5023fd95{width:auto;height:18px}.PostProfilePicture.jsx-efaf87ba5023fd95 i.jsx-efaf87ba5023fd95{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}.PostMensajeContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.NovedadContainer.jsx-efaf87ba5023fd95{color:var(--secondary-color)}.PostLinkContainer.jsx-efaf87ba5023fd95{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:10px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:16px;font-weight:700;-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;background-color:var(--mid-grey);color:var(--secondary-color)}.PostLinkContainer.jsx-efaf87ba5023fd95:hover{background-color:var(--ligth-grey)}'
            })
        ]
    });
}


/***/ })

};
;