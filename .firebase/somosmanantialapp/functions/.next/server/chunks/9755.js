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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "ImageCoverPredica",
                className: "jsx-a9032e91768d4e9f",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: coverInfo.image,
                    className: "jsx-a9032e91768d4e9f"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a9032e91768d4e9f" + " " + "CoverPredicaContainer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-a9032e91768d4e9f" + " " + "LeftSection",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "jsx-a9032e91768d4e9f",
                                children: "\xdaltima predicaci\xf3n"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `${coverInfo.profileURL}/${coverInfo.url}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-a9032e91768d4e9f",
                                    children: coverInfo.title
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-a9032e91768d4e9f" + " " + "ButtonsCoverPredica",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: encodeURI(coverInfo.profileURL),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-a9032e91768d4e9f" + " " + "InfoReproductor",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-a9032e91768d4e9f" + " " + "ProfilePicture",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: coverInfo.picture,
                                                            className: "jsx-a9032e91768d4e9f"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "jsx-a9032e91768d4e9f"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-a9032e91768d4e9f" + " " + "DetailsInfoReproductor",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-a9032e91768d4e9f",
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
                        className: "jsx-a9032e91768d4e9f" + " " + "RightSection",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `${coverInfo.profileURL}/${coverInfo.url}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: coverInfo.image,
                                className: "jsx-a9032e91768d4e9f"
                            })
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a9032e91768d4e9f",
                children: '.CoverPredicaContainer.jsx-a9032e91768d4e9f{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;gap:100px;text-align:left}.CoverPredicaContainer.jsx-a9032e91768d4e9f span.jsx-a9032e91768d4e9f{padding:10px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:var(--dark-transparent);color:var(--secondary-color)}.CoverPredicaContainer.jsx-a9032e91768d4e9f h1.jsx-a9032e91768d4e9f{font-size:70px}.LeftSection.jsx-a9032e91768d4e9f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.RightSection.jsx-a9032e91768d4e9f img.jsx-a9032e91768d4e9f{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ButtonsCoverPredica.jsx-a9032e91768d4e9f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;gap:20px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:left;-webkit-align-items:left;-moz-box-align:left;-ms-flex-align:left;align-items:left}#ImageCoverPredica.jsx-a9032e91768d4e9f{position:absolute;z-index:1;top:80px;width:100%;height:410px;overflow:hidden}#ImageCoverPredica.jsx-a9032e91768d4e9f img.jsx-a9032e91768d4e9f{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}.InfoReproductor.jsx-a9032e91768d4e9f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:20px}.ProfilePicture.jsx-a9032e91768d4e9f{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--light-grey)}.ProfilePicture.jsx-a9032e91768d4e9f img.jsx-a9032e91768d4e9f{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.DetailsInfoReproductor.jsx-a9032e91768d4e9f{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto}.DetailsInfoReproductor.jsx-a9032e91768d4e9f p.jsx-a9032e91768d4e9f{font-size:10px}.ProfilePicture.jsx-a9032e91768d4e9f i.jsx-a9032e91768d4e9f{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}@media only screen and (max-width:860px){.RightSection.jsx-a9032e91768d4e9f{display:none}#ImageCoverPredica.jsx-a9032e91768d4e9f{height:410px}.CoverPredicaContainer.jsx-a9032e91768d4e9f h1.jsx-a9032e91768d4e9f{font-size:50px}.InfoReproductor.jsx-a9032e91768d4e9f{{}}.ButtonsCoverPredica.jsx-a9032e91768d4e9f{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:30px}}'
            })
        ]
    });
}


/***/ })

};
;