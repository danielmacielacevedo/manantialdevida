"use strict";
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaestrosFiltro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticleListSociedades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4165);
/* harmony import */ var _ButtonListSociedades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3969);
/* harmony import */ var _Novedad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1533);






function MaestrosFiltro(props) {
    const [originalArticles, setOriginalArticles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [filteredArticles, setFilteredArticles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const fetchData = async ()=>{
        if (props.mes) {
            const response = await fetch(encodeURI(`/api/sociedades/${props.mes}`));
            const data = await response.json();
            setOriginalArticles(data);
            setFilteredArticles(data);
        }
    };
    // Realizar la solicitud fetch cuando se monta el componente
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchData();
    }, [
        props.mes
    ]);
    const filterCategory = (category)=>{
        if (category === "Todos") {
            setFilteredArticles(originalArticles);
        } else {
            const filteredArticles = originalArticles.map((article)=>({
                    ...article,
                    classes: article.classes.filter((clase)=>clase.category === category)
                })).filter((article)=>article.classes.length > 0);
            setFilteredArticles(filteredArticles);
        }
    };
    const categories = [
        "Todos",
        "Damas",
        "Ni\xf1os",
        "J\xf3venes",
        "Varones"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-83d97df5f6a30faf" + " " + "MaestrosFiltroContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonListSociedades__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        categories: categories,
                        filterCategory: filterCategory
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ArticleListSociedades__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        articles: filteredArticles
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "83d97df5f6a30faf",
                children: ".MaestrosFiltroContainer.jsx-83d97df5f6a30faf{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}"
            })
        ]
    });
}


/***/ })

};
;