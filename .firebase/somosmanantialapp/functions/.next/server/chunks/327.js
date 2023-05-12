"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthEvents)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EventCountdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7281);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function MonthEvents() {
    function actualizarFechas() {
        const fechaDomingoInicial = new Date("2023-05-14T11:30:00-06:00").getTime();
        const fechaMiercolesInicial = new Date("2023-05-10T19:00:00-06:00").getTime();
        const fechaViernesInicial = new Date("2023-05-12T20:00:00-06:00").getTime();
        let fechaDomingo = fechaDomingoInicial;
        let fechaMiercoles = fechaMiercolesInicial;
        let fechaViernes = fechaViernesInicial;
        const fechaActual = new Date().getTime();
        const unaSemanaEnMillisegundos = 7 * 24 * 60 * 60 * 1000;
        while(fechaDomingo < fechaActual){
            fechaDomingo += unaSemanaEnMillisegundos;
        }
        while(fechaMiercoles < fechaActual){
            fechaMiercoles += unaSemanaEnMillisegundos;
        }
        while(fechaViernes < fechaActual){
            fechaViernes += unaSemanaEnMillisegundos;
        }
        return {
            fechaDomingo,
            fechaMiercoles,
            fechaViernes
        };
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const intervalId = setInterval(()=>{
            const { fechaDomingo , fechaMiercoles , fechaViernes  } = actualizarFechas();
            console.log("actualizado");
        }, 7 * 24 * 60 * 60 * 1000);
        return ()=>clearInterval(intervalId);
    }, []);
    const { fechaDomingo , fechaMiercoles , fechaViernes  } = actualizarFechas();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-246b0529713ade45" + " " + "MonthEventsContainer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "jsx-246b0529713ade45",
                children: "NUESTROS SERVICIOS"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-246b0529713ade45" + " " + "MonthEventsContent",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-246b0529713ade45" + " " + "ArticlesContainer",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "jsx-246b0529713ade45" + " " + "ArticleContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-246b0529713ade45",
                                    children: "Servicio Manantial"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/predicadores/pastora-dina/en-mi-angustia.jpg",
                                    className: "jsx-246b0529713ade45"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-246b0529713ade45",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-246b0529713ade45",
                                            children: "Todos los domingos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-246b0529713ade45",
                                            children: "11:30 AM"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventCountdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            eventDate: fechaDomingo
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-246b0529713ade45" + " " + "ArticlesContainer",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "jsx-246b0529713ade45" + " " + "ArticleContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-246b0529713ade45",
                                    children: "Servicio de Ense\xf1anza"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/predicadores/pastor-isaac/de-donde-vienes.jpg",
                                    className: "jsx-246b0529713ade45"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-246b0529713ade45",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-246b0529713ade45",
                                            children: "Todos los mi\xe9rcoles"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-246b0529713ade45",
                                            children: "7:00 PM"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventCountdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            eventDate: fechaMiercoles
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-246b0529713ade45" + " " + "ArticlesContainer",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "jsx-246b0529713ade45" + " " + "ArticleContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-246b0529713ade45",
                                    children: "Noche de Oraci\xf3n"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/predicadores/flor-fernandez/metamorfosis-del-alma.jpg",
                                    className: "jsx-246b0529713ade45"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-246b0529713ade45",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            id: "info",
                                            className: "jsx-246b0529713ade45",
                                            children: "Todos los viernes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-246b0529713ade45",
                                            children: "8:00 PM"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventCountdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            eventDate: fechaViernes
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "246b0529713ade45",
                children: ".MonthEventsContainer.jsx-246b0529713ade45{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 20px 0 20px;gap:20px;background-color:var(--primary-color)}.MonthEventsContent.jsx-246b0529713ade45{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px}.ArticlesContainer.jsx-246b0529713ade45{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px}.ArticleContainer.jsx-246b0529713ade45{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;height:auto;gap:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--light-grey)}.ArticleContainer.jsx-246b0529713ade45 img.jsx-246b0529713ade45{width:100%;height:auto;max-height:180px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ArticleContainer.jsx-246b0529713ade45 p.jsx-246b0529713ade45{font-size:16px;font-weight:100;text-align:center}.ArticleContainer.jsx-246b0529713ade45 div.jsx-246b0529713ade45{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}@media only screen and (max-width:860px){.MonthEventsContent.jsx-246b0529713ade45{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
            })
        ]
    });
}


/***/ })

};
;