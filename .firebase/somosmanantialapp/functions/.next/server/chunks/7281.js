"use strict";
exports.id = 7281;
exports.ids = [7281];
exports.modules = {

/***/ 7281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function EventCountdown({ eventDate  }) {
    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timer = setInterval(()=>{
            const now = Date.now();
            const eventTime = new Date(eventDate).getTime();
            const localOffset = new Date().getTimezoneOffset() * 60 * 1000;
            const eventOffset = new Date(eventDate).getTimezoneOffset() * 60 * 1000;
            const timeDifference = eventTime - eventOffset + localOffset - now;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);
            setTimeRemaining({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);
        return ()=>clearInterval(timer);
    }, [
        eventDate
    ]);
    const pad = (number)=>number.toString().padStart(2, "0");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-20d74b93a8e1aea9",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                className: "jsx-20d74b93a8e1aea9",
                children: [
                    timeRemaining.days,
                    "d, ",
                    pad(timeRemaining.hours),
                    "h,",
                    " ",
                    pad(timeRemaining.minutes),
                    "m, ",
                    pad(timeRemaining.seconds),
                    "s"
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "20d74b93a8e1aea9",
                children: "h4.jsx-20d74b93a8e1aea9{text-align:center}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCountdown);


/***/ })

};
;