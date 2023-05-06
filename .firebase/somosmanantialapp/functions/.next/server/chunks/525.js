"use strict";
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 525:
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
                className: "jsx-5050019b5f27ae36" + " " + "ArticleListContainer",
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-5050019b5f27ae36" + " " + "LoadingSpinnerContainer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-5050019b5f27ae36" + " " + "Spinner"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/favicon_manantial.png",
                            className: "jsx-5050019b5f27ae36" + " " + "SpinnerImage"
                        })
                    ]
                }) : articles && articles.length > 0 ? articles.map((article)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-5050019b5f27ae36" + " " + "MaestroContainer article-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-5050019b5f27ae36",
                                children: article.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-5050019b5f27ae36" + " " + "MaestroClasses",
                                children: article.classes.map((clase)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-5050019b5f27ae36" + " " + "TableContainerInfo.open",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-5050019b5f27ae36" + " " + "NameContainer",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-5050019b5f27ae36",
                                                    children: clase.date
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-5050019b5f27ae36",
                                                    children: clase.class
                                                })
                                            ]
                                        })
                                    }, clase.date))
                            })
                        ]
                    }, article.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-5050019b5f27ae36" + " " + "TextAlignCenter",
                    children: "Este calendario a\xfan no est\xe1 disponible."
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "5050019b5f27ae36",
                children: ".ArticleListContainer.jsx-5050019b5f27ae36{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.MaestroContainer.jsx-5050019b5f27ae36{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px;cursor:pointer;border:none;text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;background:var(--light-grey);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s}.MaestroContainer.jsx-5050019b5f27ae36:hover{background-color:var(--mid-grey)}.MaestroContainer.jsx-5050019b5f27ae36 h2.jsx-5050019b5f27ae36{color:var(--secondary-color);{}}.MaestroClasses.jsx-5050019b5f27ae36{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.TableContainerInfo.jsx-5050019b5f27ae36{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 0 0 0;gap:20px}.NameContainer.jsx-5050019b5f27ae36{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;font-size:16px;font-weight:400;background-color:var(--primary-color);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.TitleTableCalendar.jsx-5050019b5f27ae36{font-size:14px;font-weight:100}.NameContainer.jsx-5050019b5f27ae36 span.jsx-5050019b5f27ae36:nth-child(1){width:50%}.NameContainer.jsx-5050019b5f27ae36 span.jsx-5050019b5f27ae36:nth-child(2){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:50%}.TableContainerInfo.jsx-5050019b5f27ae36{display:none}.TableContainerInfo.open.jsx-5050019b5f27ae36{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}"
            })
        ]
    });
}


/***/ })

};
;