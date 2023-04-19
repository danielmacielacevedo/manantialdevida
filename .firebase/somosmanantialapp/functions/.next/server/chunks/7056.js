"use strict";
exports.id = 7056;
exports.ids = [7056];
exports.modules = {

/***/ 7056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PredicaCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function PredicaCard(props) {
    const [cardVideo, setCardVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function fetchPredicaDetails() {
            const res = await fetch("/api/detallesVideos");
            const data = await res.json();
            setCardVideo(data[props.nombre][props.indice]);
        }
        fetchPredicaDetails();
    }, [
        props.nombre,
        props.indice
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            cardVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-c75287d2dd71447f" + " " + "LinkContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: encodeURI(cardVideo.url),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-c75287d2dd71447f" + " " + "PredicadorContainer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c75287d2dd71447f" + " " + "ImageContainer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: cardVideo.image,
                                    alt: cardVideo.title,
                                    className: "jsx-c75287d2dd71447f"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c75287d2dd71447f" + " " + "PredicadorData",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "jsx-c75287d2dd71447f",
                                    children: [
                                        cardVideo.title,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            className: "jsx-c75287d2dd71447f"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-c75287d2dd71447f",
                                            children: cardVideo.date
                                        }),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c75287d2dd71447f",
                children: ".LinkContainer.jsx-c75287d2dd71447f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:300px;height:auto}.PredicadorContainer.jsx-c75287d2dd71447f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto}.ImageContainer.jsx-c75287d2dd71447f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:150px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ImageContainer.jsx-c75287d2dd71447f img.jsx-c75287d2dd71447f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;background-position:center;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.PredicadorData.jsx-c75287d2dd71447f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:60px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-size:12px;background-color:var(--light-grey);color:var(--primary-color)}.PredicadorData.jsx-c75287d2dd71447f span.jsx-c75287d2dd71447f{font-size:10px}@media only screen and (max-width:860px){.LinkContainer.jsx-c75287d2dd71447f{max-width:none}}"
            })
        ]
    });
}


/***/ })

};
;