"use strict";
exports.id = 8815;
exports.ids = [8815];
exports.modules = {

/***/ 8815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeAgo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function TimeAgo({ fechaPublicacion , useLocalTime =false  }) {
    const [timeElapsed, setTimeElapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const interval = setInterval(()=>{
            const timePosted = new Date(fechaPublicacion);
            let now;
            if (useLocalTime) {
                now = new Date();
            } else {
                now = new Date().toUTCString();
                now = new Date(now.slice(0, now.lastIndexOf(" ") - 1));
            }
            const secondsElapsed = Math.floor((now - timePosted) / 1000);
            if (secondsElapsed < 60) {
                setTimeElapsed(`${secondsElapsed}s`);
            } else if (secondsElapsed < 3600) {
                const minutes = Math.floor(secondsElapsed / 60);
                setTimeElapsed(`${minutes}m`);
            } else if (secondsElapsed < 86400) {
                const hours = Math.floor(secondsElapsed / 3600);
                setTimeElapsed(`${hours}h`);
            } else {
                const days = Math.floor(secondsElapsed / 86400);
                setTimeElapsed(`${days}d`);
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        fechaPublicacion,
        useLocalTime
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "jsx-b6596229129eca1",
                children: timeElapsed
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b6596229129eca1",
                children: "p.jsx-b6596229129eca1{font-size:12px}"
            })
        ]
    });
}


/***/ })

};
;