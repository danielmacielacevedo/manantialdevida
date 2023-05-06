"use strict";
exports.id = 4165;
exports.ids = [4165];
exports.modules = {

/***/ 4165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticleList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ArticleList({ articles  }) {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-672653f5cb66bf79" + " " + "ArticleListContainer",
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-672653f5cb66bf79" + " " + "LoadingSpinnerContainer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-672653f5cb66bf79" + " " + "Spinner"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/favicon_manantial.png",
                            className: "jsx-672653f5cb66bf79" + " " + "SpinnerImage"
                        })
                    ]
                }) : articles && articles.length > 0 ? articles.map((article)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-672653f5cb66bf79" + " " + "MaestroContainer article-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-672653f5cb66bf79",
                                children: article.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-672653f5cb66bf79" + " " + "MaestroClasses",
                                children: article.classes.map((clase)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-672653f5cb66bf79" + " " + "TableContainerInfo.open",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-672653f5cb66bf79" + " " + "NameContainer",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "jsx-672653f5cb66bf79",
                                                    children: clase.titulo
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-672653f5cb66bf79" + " " + "NameContainerDetails",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-672653f5cb66bf79",
                                                            children: [
                                                                "D\xeda ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-672653f5cb66bf79",
                                                                    children: clase.dia
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-672653f5cb66bf79",
                                                            children: [
                                                                "Hora ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-672653f5cb66bf79",
                                                                    children: clase.hora
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-672653f5cb66bf79",
                                                            children: [
                                                                "Lugar ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-672653f5cb66bf79",
                                                                    children: clase.lugar
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, clase.date))
                            })
                        ]
                    }, article.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-672653f5cb66bf79" + " " + "TextAlignCenter",
                    children: "No hay nada que mostrar."
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "672653f5cb66bf79",
                children: ".ArticleListContainer.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.MaestroContainer.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px;cursor:pointer;border:none;text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;background:var(--light-grey);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s}.MaestroContainer.jsx-672653f5cb66bf79:hover{background-color:var(--mid-grey)}.MaestroContainer.jsx-672653f5cb66bf79 h2.jsx-672653f5cb66bf79{color:var(--secondary-color);{}}.MaestroClasses.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.TableContainerInfo.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 0 0 0;gap:20px}.NameContainer.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;font-size:16px;font-weight:100;background-color:var(--primary-color)}.NameContainer.jsx-672653f5cb66bf79 span.jsx-672653f5cb66bf79{font-weight:400}.NameContainerDetails.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px}.TitleTableCalendar.jsx-672653f5cb66bf79{font-size:14px;font-weight:100}.TableContainerInfo.jsx-672653f5cb66bf79{display:none}.TableContainerInfo.open.jsx-672653f5cb66bf79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}"
            })
        ]
    });
}


/***/ })

};
;