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
                className: "jsx-ced9b774b057dc4a" + " " + "ArticleListContainer",
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-ced9b774b057dc4a" + " " + "LoadingSpinnerContainer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-ced9b774b057dc4a" + " " + "Spinner"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/favicon_manantial.png",
                            className: "jsx-ced9b774b057dc4a" + " " + "SpinnerImage"
                        })
                    ]
                }) : articles && articles.length > 0 ? articles.map((article)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-ced9b774b057dc4a" + " " + "MaestroContainer article-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-ced9b774b057dc4a",
                                children: article.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-ced9b774b057dc4a" + " " + "MaestroClasses",
                                children: article.classes.map((clase)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-ced9b774b057dc4a" + " " + "TableContainerInfo.open",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-ced9b774b057dc4a" + " " + "NameContainer",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "jsx-ced9b774b057dc4a",
                                                    children: clase.titulo
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-ced9b774b057dc4a" + " " + "NameContainerDetails",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-ced9b774b057dc4a",
                                                            children: [
                                                                "D\xeda ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-ced9b774b057dc4a",
                                                                    children: clase.dia
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-ced9b774b057dc4a",
                                                            children: [
                                                                "Hora ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-ced9b774b057dc4a",
                                                                    children: clase.hora
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-ced9b774b057dc4a",
                                                            children: [
                                                                "Lugar ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-ced9b774b057dc4a",
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
                    className: "jsx-ced9b774b057dc4a" + " " + "TextAlignCenter",
                    children: "No hay nada que mostrar."
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ced9b774b057dc4a",
                children: ".ArticleListContainer.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.MaestroContainer.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px;cursor:pointer;border:none;text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;background:var(--light-grey);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s}.MaestroContainer.jsx-ced9b774b057dc4a:hover{background-color:var(--mid-grey)}.MaestroContainer.jsx-ced9b774b057dc4a h2.jsx-ced9b774b057dc4a{color:var(--secondary-color);{}}.MaestroClasses.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.TableContainerInfo.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 0 0 0;gap:20px}.NameContainer.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;font-size:16px;font-weight:100;background-color:var(--primary-color)}.NameContainer.jsx-ced9b774b057dc4a span.jsx-ced9b774b057dc4a{font-weight:400}.NameContainerDetails.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px}.TitleTableCalendar.jsx-ced9b774b057dc4a{font-size:14px;font-weight:100}.TableContainerInfo.jsx-ced9b774b057dc4a{display:none}.TableContainerInfo.open.jsx-ced9b774b057dc4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}"
            })
        ]
    });
}


/***/ })

};
;