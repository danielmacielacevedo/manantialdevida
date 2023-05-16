"use strict";
exports.id = 5186;
exports.ids = [5186];
exports.modules = {

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonDayList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ButtonDayList({ articles , filterDay  }) {
    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [selectedDay, setSelectedDay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    // Obtener los días únicos de los artículos
    const getUniqueDays = ()=>{
        const uniqueDays = [];
        articles.forEach((article)=>{
            article.classes.forEach((clase)=>{
                if (clase.dia && !uniqueDays.includes(clase.dia)) {
                    uniqueDays.push(clase.dia);
                }
            });
        });
        return uniqueDays;
    };
    // Actualizar los días únicos al montar el componente o al cambiar los artículos
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const uniqueDays = getUniqueDays();
        setDays(uniqueDays.sort()); // Ordenar los días alfabéticamente
    }, [
        articles
    ]);
    const handleDayClick = (day)=>{
        setSelectedDay(day);
        filterDay(day);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "jsx-c68d59382ad24e4a",
                children: "Filtrar por d\xeda:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-c68d59382ad24e4a" + " " + "ButtonDays",
                children: days && days.length > 0 ? days.map((day)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>handleDayClick(day),
                        className: "jsx-c68d59382ad24e4a" + " " + `ButtonDayListContainer btn-day ${selectedDay === day ? "active" : ""}`,
                        children: day
                    }, day)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-c68d59382ad24e4a",
                    children: "Loading..."
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c68d59382ad24e4a",
                children: ".ButtonDays.jsx-c68d59382ad24e4a{display:grid;grid-template-columns:repeat(4,1fr);width:100%;gap:20px}.ButtonDayListContainer.jsx-c68d59382ad24e4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;max-width:100%;padding:10px;cursor:pointer;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:12px;background:var(--manantial-color);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;{}}.ButtonDayListContainer.jsx-c68d59382ad24e4a:hover{background:var(--secondary-color);color:var(--primary-color)}"
            })
        ]
    });
}


/***/ })

};
;