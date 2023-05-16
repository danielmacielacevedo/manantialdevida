"use strict";
exports.id = 9755;
exports.ids = [9755];
exports.modules = {

/***/ 9755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoverPredica)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TimeAgoFull__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7677);





function CoverPredica(props) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [coverInfo, setCoverInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        async function fetchCoverDetails() {
            const res = await fetch("/api/detallesVideos");
            const data = await res.json();
            setCoverInfo(data[props.nombre][props.indice]);
            setTimeout(()=>{
                setLoading(false);
            }, 500); // Establece un retraso de 2 segundos antes de mostrar los datos
        }
        fetchCoverDetails();
    }, [
        props.nombre,
        props.indice
    ]);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "LoadingContainer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "LoadingBackground",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "LoadingSpinnerContainer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "Spinner"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "SpinnerImage",
                            src: "/assets/favicon_manantial.png",
                            alt: "Spinner"
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-f7402299d199d4d6" + " " + "CoverPredicaContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-f7402299d199d4d6" + " " + "CoverBackground",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "ImageCoverPredica",
                            className: "jsx-f7402299d199d4d6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: coverInfo.image,
                                className: "jsx-f7402299d199d4d6"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-f7402299d199d4d6" + " " + "CoverSectionsContainer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "jsx-f7402299d199d4d6" + " " + "LeftSection",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "jsx-f7402299d199d4d6",
                                        children: "\xdaltima predicaci\xf3n"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `${coverInfo.profileURL}${coverInfo.url}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-f7402299d199d4d6",
                                            children: coverInfo.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-f7402299d199d4d6" + " " + "ButtonsCoverPredica",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: encodeURI(coverInfo.profileURL),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f7402299d199d4d6" + " " + "InfoReproductor",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f7402299d199d4d6" + " " + "ProfilePicture",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: coverInfo.picture,
                                                                    className: "jsx-f7402299d199d4d6"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "jsx-f7402299d199d4d6"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f7402299d199d4d6" + " " + "DetailsInfoReproductor",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "jsx-f7402299d199d4d6",
                                                                    children: coverInfo.autor
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeAgoFull__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                                    dia: coverInfo.dia,
                                                                    mes: coverInfo.mes,
                                                                    año: coverInfo.año,
                                                                    hora: coverInfo.hora
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "ContentButton",
                                                href: `${coverInfo.profileURL}${coverInfo.url}`,
                                                children: "VER AHORA"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "jsx-f7402299d199d4d6" + " " + "RightSection",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `${coverInfo.profileURL}${coverInfo.url}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: coverInfo.image,
                                        className: "jsx-f7402299d199d4d6"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f7402299d199d4d6",
                children: '.CoverPredicaContainer.jsx-f7402299d199d4d6{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px}.CoverPredicaContainer.jsx-f7402299d199d4d6 span.jsx-f7402299d199d4d6{padding:10px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--dark-transparent);color:var(--secondary-color)}.CoverPredicaContainer.jsx-f7402299d199d4d6 h1.jsx-f7402299d199d4d6{font-size:50px}.CoverBackground.jsx-f7402299d199d4d6{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:20px}.CoverSectionsContainer.jsx-f7402299d199d4d6{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:450px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:40px;text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.LeftSection.jsx-f7402299d199d4d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;padding:20px}.RightSection.jsx-f7402299d199d4d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-right:20px}.RightSection.jsx-f7402299d199d4d6 img.jsx-f7402299d199d4d6{width:100%;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.ButtonsCoverPredica.jsx-f7402299d199d4d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;gap:20px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:left;-webkit-align-items:left;-moz-box-align:left;-ms-flex-align:left;align-items:left}#ImageCoverPredica.jsx-f7402299d199d4d6{z-index:-1;top:0px;width:100%;height:450px;overflow:hidden}#ImageCoverPredica.jsx-f7402299d199d4d6 img.jsx-f7402299d199d4d6{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow:hidden}.InfoReproductor.jsx-f7402299d199d4d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:20px}.ProfilePicture.jsx-f7402299d199d4d6{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--light-grey)}.ProfilePicture.jsx-f7402299d199d4d6 img.jsx-f7402299d199d4d6{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.DetailsInfoReproductor.jsx-f7402299d199d4d6{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto}.DetailsInfoReproductor.jsx-f7402299d199d4d6 p.jsx-f7402299d199d4d6{font-size:10px}.ProfilePicture.jsx-f7402299d199d4d6 i.jsx-f7402299d199d4d6{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}@media only screen and (max-width:1024px){.RightSection.jsx-f7402299d199d4d6{display:none}}@media only screen and (max-width:860px){.RightSection.jsx-f7402299d199d4d6{display:none}#ImageCoverPredica.jsx-f7402299d199d4d6{height:450px}.CoverPredicaContainer.jsx-f7402299d199d4d6 h1.jsx-f7402299d199d4d6{font-size:50px}.InfoReproductor.jsx-f7402299d199d4d6{{}}.ButtonsCoverPredica.jsx-f7402299d199d4d6{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:30px}}'
            })
        ]
    });
}


/***/ })

};
;