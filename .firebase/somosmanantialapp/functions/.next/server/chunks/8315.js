"use strict";
exports.id = 8315;
exports.ids = [8315];
exports.modules = {

/***/ 6341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const NodeCache = __webpack_require__(4580);
const cache = new NodeCache();
module.exports = cache;


/***/ }),

/***/ 8315:
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
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6341);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cache__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TimeAgoFull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7677);






function PredicaCard(props) {
    const [cardVideo, setCardVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function fetchPredicaDetails() {
            const cacheKey = `predicaDetails-${props.nombre}-${props.indice}`;
            const cachedData = _cache__WEBPACK_IMPORTED_MODULE_4___default().get(cacheKey);
            if (cachedData) {
                setCardVideo(cachedData);
            } else {
                const res = await fetch("/api/detallesVideos");
                const data = await res.json();
                const cardVideoData = data[props.nombre][props.indice];
                _cache__WEBPACK_IMPORTED_MODULE_4___default().set(cacheKey, cardVideoData);
                setCardVideo(cardVideoData);
            }
        }
        fetchPredicaDetails();
    }, [
        props.nombre,
        props.indice
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            cardVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-947f51d2efbced0f" + " " + "LinkContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: encodeURI(cardVideo.profileURL.replace("?", "/") + cardVideo.url),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-947f51d2efbced0f" + " " + "PredicadorContainer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-947f51d2efbced0f" + " " + "ImageContainer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: cardVideo.image,
                                    alt: cardVideo.title,
                                    className: "jsx-947f51d2efbced0f"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-947f51d2efbced0f" + " " + "PredicadorData",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "jsx-947f51d2efbced0f",
                                        children: cardVideo.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-947f51d2efbced0f" + " " + "InfoReproductor",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-947f51d2efbced0f" + " " + "ProfilePicture",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: cardVideo.picture,
                                                    alt: cardVideo.autor,
                                                    className: "jsx-947f51d2efbced0f"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-947f51d2efbced0f" + " " + "DetailsInfoReproductor",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "jsx-947f51d2efbced0f",
                                                    children: cardVideo.autor
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeAgoFull__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        dia: cardVideo.dia,
                                        mes: cardVideo.mes,
                                        año: cardVideo.año,
                                        hora: cardVideo.hora
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "947f51d2efbced0f",
                children: ".LinkContainer.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.PredicadorContainer.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto}.ImageContainer.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:160px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ImageContainer.jsx-947f51d2efbced0f img.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;background-position:center;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-border-radius:20px 0 0 20px;-moz-border-radius:20px 0 0 20px;border-radius:20px 0 0 20px}.PredicadorData.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left;-webkit-border-radius:0 20px 20px 0;-moz-border-radius:0 20px 20px 0;border-radius:0 20px 20px 0;padding:20px;gap:10px;font-size:12px;background-color:var(--light-grey);color:var(--primary-color)}.PredicadorData.jsx-947f51d2efbced0f h3.jsx-947f51d2efbced0f{font-size:18px}.PredicadorData.jsx-947f51d2efbced0f span.jsx-947f51d2efbced0f{font-size:10px;color:var(--secondary-color)}.InfoReproductor.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.ProfilePicture.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--primary-color)}.ProfilePicture.jsx-947f51d2efbced0f img.jsx-947f51d2efbced0f{width:20px;height:20px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.DetailsInfoReproductor.jsx-947f51d2efbced0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.DetailsInfoReproductor.jsx-947f51d2efbced0f h4.jsx-947f51d2efbced0f{font-size:12px}@media only screen and (max-width:860px){.LinkContainer.jsx-947f51d2efbced0f{max-width:none}.DetailsInfoReproductor.jsx-947f51d2efbced0f h4.jsx-947f51d2efbced0f{font-size:11px}}"
            })
        ]
    });
}


/***/ })

};
;