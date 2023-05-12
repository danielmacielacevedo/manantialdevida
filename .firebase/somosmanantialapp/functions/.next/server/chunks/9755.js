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
    const [coverInfo, setCoverInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        async function fecthCoverDetails() {
            const res = await fetch("/api/detallesVideos");
            const data = await res.json();
            setCoverInfo(data[props.nombre][props.indice]);
        }
        fecthCoverDetails();
    }, [
        props.nombre,
        props.indice
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-20d5f6a9b7d856f1" + " " + "CoverPredicaContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-20d5f6a9b7d856f1" + " " + "CoverBackground",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "ImageCoverPredica",
                            className: "jsx-20d5f6a9b7d856f1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: coverInfo.image,
                                className: "jsx-20d5f6a9b7d856f1"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-20d5f6a9b7d856f1" + " " + "CoverSectionsContainer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "jsx-20d5f6a9b7d856f1" + " " + "LeftSection",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "jsx-20d5f6a9b7d856f1",
                                        children: "\xdaltima predicaci\xf3n"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `${coverInfo.profileURL}/${coverInfo.url}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-20d5f6a9b7d856f1",
                                            children: coverInfo.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-20d5f6a9b7d856f1" + " " + "ButtonsCoverPredica",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: encodeURI(coverInfo.profileURL),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-20d5f6a9b7d856f1" + " " + "InfoReproductor",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-20d5f6a9b7d856f1" + " " + "ProfilePicture",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: coverInfo.picture,
                                                                    className: "jsx-20d5f6a9b7d856f1"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "jsx-20d5f6a9b7d856f1"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-20d5f6a9b7d856f1" + " " + "DetailsInfoReproductor",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "jsx-20d5f6a9b7d856f1",
                                                                    children: coverInfo.autor
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeAgoFull__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                                    dia: "07",
                                                                    mes: "05",
                                                                    año: "2023",
                                                                    hora: "13"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "ContentButton",
                                                href: `${coverInfo.profileURL}/${coverInfo.url}`,
                                                children: "VER AHORA"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "jsx-20d5f6a9b7d856f1" + " " + "RightSection",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `${coverInfo.profileURL}/${coverInfo.url}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: coverInfo.image,
                                        className: "jsx-20d5f6a9b7d856f1"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "20d5f6a9b7d856f1",
                children: '.CoverPredicaContainer.jsx-20d5f6a9b7d856f1{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px}.CoverPredicaContainer.jsx-20d5f6a9b7d856f1 span.jsx-20d5f6a9b7d856f1{padding:10px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--dark-transparent);color:var(--secondary-color)}.CoverPredicaContainer.jsx-20d5f6a9b7d856f1 h1.jsx-20d5f6a9b7d856f1{font-size:70px}.CoverBackground.jsx-20d5f6a9b7d856f1{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:20px}.CoverSectionsContainer.jsx-20d5f6a9b7d856f1{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:450px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:40px;text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.LeftSection.jsx-20d5f6a9b7d856f1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;padding:20px}.RightSection.jsx-20d5f6a9b7d856f1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-right:20px}.RightSection.jsx-20d5f6a9b7d856f1 img.jsx-20d5f6a9b7d856f1{width:100%;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.ButtonsCoverPredica.jsx-20d5f6a9b7d856f1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;gap:20px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:left;-webkit-align-items:left;-moz-box-align:left;-ms-flex-align:left;align-items:left}#ImageCoverPredica.jsx-20d5f6a9b7d856f1{z-index:-1;top:0px;width:100%;height:450px;overflow:hidden}#ImageCoverPredica.jsx-20d5f6a9b7d856f1 img.jsx-20d5f6a9b7d856f1{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow:hidden}.InfoReproductor.jsx-20d5f6a9b7d856f1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:20px}.ProfilePicture.jsx-20d5f6a9b7d856f1{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--light-grey)}.ProfilePicture.jsx-20d5f6a9b7d856f1 img.jsx-20d5f6a9b7d856f1{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.DetailsInfoReproductor.jsx-20d5f6a9b7d856f1{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto}.DetailsInfoReproductor.jsx-20d5f6a9b7d856f1 p.jsx-20d5f6a9b7d856f1{font-size:10px}.ProfilePicture.jsx-20d5f6a9b7d856f1 i.jsx-20d5f6a9b7d856f1{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}@media only screen and (max-width:1024px){.RightSection.jsx-20d5f6a9b7d856f1{display:none}}@media only screen and (max-width:860px){.RightSection.jsx-20d5f6a9b7d856f1{display:none}#ImageCoverPredica.jsx-20d5f6a9b7d856f1{height:450px}.CoverPredicaContainer.jsx-20d5f6a9b7d856f1 h1.jsx-20d5f6a9b7d856f1{font-size:50px}.InfoReproductor.jsx-20d5f6a9b7d856f1{{}}.ButtonsCoverPredica.jsx-20d5f6a9b7d856f1{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:30px}}'
            })
        ]
    });
}


/***/ })

};
;