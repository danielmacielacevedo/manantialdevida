"use strict";
exports.id = 6913;
exports.ids = [6913];
exports.modules = {

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaestroDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function MaestroDetails(props) {
    const [maestro, setMaestro] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // nuevo estado local para seguir el estado del boton
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function fetchMaestro() {
            if (props.mes) {
                const res = await fetch(`/api/maestros/${props.mes}`);
                const data = await res.json();
                setMaestro(data[props.nombre]);
            }
        }
        fetchMaestro();
    }, [
        props.mes,
        props.nombre
    ]);
    function handleClick() {
        setOpen(!isOpen); // cambia el estado local al contrario de su estado actual
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            maestro && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: handleClick,
                className: "jsx-917374cdf8fe57c9" + " " + "MaestroContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "jsx-917374cdf8fe57c9",
                        children: maestro.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-917374cdf8fe57c9" + " " + ((isOpen ? "TableContainerInfo open" : "TableContainerInfo") || ""),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-917374cdf8fe57c9" + " " + "NameContainer TitleTableCalendar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: "D\xeda"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: "Clase"
                                    })
                                ]
                            }),
                            maestro.dia1 && maestro.clase1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-917374cdf8fe57c9" + " " + "NameContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.dia1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.clase1
                                    })
                                ]
                            }) : null,
                            maestro.dia2 && maestro.clase2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-917374cdf8fe57c9" + " " + "NameContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.dia2
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.clase2
                                    })
                                ]
                            }) : null,
                            maestro.dia3 && maestro.clase3 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-917374cdf8fe57c9" + " " + "NameContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.dia3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.clase3
                                    })
                                ]
                            }) : null,
                            maestro.dia4 && maestro.clase4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-917374cdf8fe57c9" + " " + "NameContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.dia4
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.clase4
                                    })
                                ]
                            }) : null,
                            maestro.dia5 && maestro.clase5 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-917374cdf8fe57c9" + " " + "NameContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.dia5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-917374cdf8fe57c9",
                                        children: maestro.clase5
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "917374cdf8fe57c9",
                children: ".MaestroContainer.jsx-917374cdf8fe57c9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px;cursor:pointer;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:var(--light-grey);color:var(--secondary-color);text-align:left}.MaestroContainer.jsx-917374cdf8fe57c9 h2.jsx-917374cdf8fe57c9{color:var(--secondary-color)}.TableContainerInfo.jsx-917374cdf8fe57c9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 0 0 0;gap:20px}.NameContainer.jsx-917374cdf8fe57c9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:16px;font-weight:700}.TitleTableCalendar.jsx-917374cdf8fe57c9{font-size:14px;font-weight:100}.NameContainer.jsx-917374cdf8fe57c9 span.jsx-917374cdf8fe57c9:nth-child(1){width:50%}.NameContainer.jsx-917374cdf8fe57c9 span.jsx-917374cdf8fe57c9:nth-child(2){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:50%}.TableContainerInfo.jsx-917374cdf8fe57c9{display:none}.TableContainerInfo.open.jsx-917374cdf8fe57c9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}"
            })
        ]
    });
}
;


/***/ })

};
;