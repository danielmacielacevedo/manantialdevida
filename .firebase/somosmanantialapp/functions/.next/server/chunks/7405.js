"use strict";
exports.id = 7405;
exports.ids = [7405];
exports.modules = {

/***/ 6341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const NodeCache = __webpack_require__(4580);
const cache = new NodeCache();
module.exports = cache;


/***/ }),

/***/ 7405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PredicadorCard)
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





function PredicadorCard(props) {
    const [predicador, setPredicador] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function fetchPredicador() {
            let data;
            if (_cache__WEBPACK_IMPORTED_MODULE_4___default().has(props.nombre)) {
                data = _cache__WEBPACK_IMPORTED_MODULE_4___default().get(props.nombre);
                if (JSON.stringify(data[props.nombre]) !== JSON.stringify(predicador)) {
                    setPredicador(data[props.nombre]);
                }
            } else {
                const res = await fetch("/api/predicadores");
                data = await res.json();
                _cache__WEBPACK_IMPORTED_MODULE_4___default().set(props.nombre, data);
                setPredicador(data[props.nombre]); // Obtener los datos del predicador
            }
        }
        fetchPredicador();
    }, [
        props.nombre,
        predicador
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            predicador && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-293dec2586d4b83b" + " " + "LinkContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: encodeURI(predicador.url),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-293dec2586d4b83b" + " " + "PredicadorContainer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-293dec2586d4b83b" + " " + "ImageContainer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: predicador.image,
                                    alt: predicador.name,
                                    className: "jsx-293dec2586d4b83b"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-293dec2586d4b83b" + " " + "PredicadorData",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-293dec2586d4b83b",
                                    children: predicador.name
                                })
                            })
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "293dec2586d4b83b",
                children: ".LinkContainer.jsx-293dec2586d4b83b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto}.PredicadorContainer.jsx-293dec2586d4b83b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto}.ImageContainer.jsx-293dec2586d4b83b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100px;background-color:var(--grey);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ImageContainer.jsx-293dec2586d4b83b img.jsx-293dec2586d4b83b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:150px;height:100px;background-position:center;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.PredicadorData.jsx-293dec2586d4b83b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:60px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-size:12px;background-color:var(--light-grey);color:var(--primary-color);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.PredicadorData.jsx-293dec2586d4b83b h3.jsx-293dec2586d4b83b{font-weight:700}"
            })
        ]
    });
}


/***/ })

};
;