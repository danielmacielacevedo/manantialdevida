"use strict";
exports.id = 7677;
exports.ids = [7677];
exports.modules = {

/***/ 7677:
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



function TimeAgo(props, { useLocalTime =true  }) {
    const [timeElapsed, setTimeElapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const fechaPublicacion = `${props.año}-${props.mes}-${props.dia}T${props.hora}:00:00.000Z`;
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
                setTimeElapsed(`${secondsElapsed} segundos`);
            } else if (secondsElapsed < 3600) {
                const minutes = Math.floor(secondsElapsed / 60);
                setTimeElapsed(`${minutes} minutos`);
            } else if (secondsElapsed < 86400) {
                const hours = Math.floor(secondsElapsed / 3600);
                setTimeElapsed(`${hours} horas`);
            } else if (secondsElapsed < 172800) {
                const days = Math.floor(secondsElapsed / 86400);
                if (days === 1) {
                    setTimeElapsed(`${days} día`);
                } else {
                    setTimeElapsed(`${days} días`);
                }
            } else if (secondsElapsed < 2592000) {
                const days = Math.floor(secondsElapsed / 86400);
                if (days === 1) {
                    setTimeElapsed(`${days} día`);
                } else {
                    setTimeElapsed(`${days} días`);
                }
            } else if (secondsElapsed < 31536000) {
                const months = Math.floor(secondsElapsed / 2592000);
                if (months === 1) {
                    setTimeElapsed(`${months} mes`);
                } else {
                    setTimeElapsed(`${months} meses`);
                }
            } else {
                const years = Math.floor(secondsElapsed / 31536000);
                if (years === 1) {
                    setTimeElapsed(`${years} año`);
                } else {
                    setTimeElapsed(`${years} años`);
                }
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        fechaPublicacion,
        useLocalTime
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "jsx-b6596229129eca1",
                children: [
                    "Hace ",
                    timeElapsed
                ]
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