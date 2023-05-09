"use strict";
exports.id = 2719;
exports.ids = [2719];
exports.modules = {

/***/ 2719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reproductor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TimeAgoFull__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7677);





function Reproductor(props) {
    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function fetchVideo() {
            const res = await fetch("/api/detallesVideos");
            const data = await res.json();
            setVideo(data[props.nombre][props.indice]);
        }
        fetchVideo();
    }, [
        props.nombre,
        props.indice
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-8f21a1017a141169" + " " + "ReproductorContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-8f21a1017a141169" + " " + "Reproductor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                            src: `https://www.youtube.com/embed/${video.embed}?autohide=1&showinfo=0&rel=0&color=white&cc_load_policy=3`,
                            frameBorder: "0",
                            allowFullScreen: true,
                            className: "jsx-8f21a1017a141169"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-8f21a1017a141169" + " " + "InfoReproductorContainer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-8f21a1017a141169",
                                children: video.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-8f21a1017a141169" + " " + "InfoReproductor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: encodeURI(video.profileURL),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8f21a1017a141169" + " " + "InfoReproductor",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-8f21a1017a141169" + " " + "ProfilePicture",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: video.picture,
                                                    className: "jsx-8f21a1017a141169"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-8f21a1017a141169" + " " + "DetailsInfoReproductor",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "jsx-8f21a1017a141169",
                                                        children: video.autor
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "jsx-8f21a1017a141169"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                className: "jsx-8f21a1017a141169" + " " + "DescriptionContainer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-8f21a1017a141169",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeAgoFull__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            dia: video.dia,
                                            mes: video.mes,
                                            año: video.año,
                                            hora: video.hora
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-8f21a1017a141169",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-8f21a1017a141169",
                                                children: video.desc
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8f21a1017a141169",
                children: '.ReproductorContainer.jsx-8f21a1017a141169{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;gap:20px}.Reproductor.jsx-8f21a1017a141169{position:relative;padding-bottom:56.25%;padding-top:0px;height:0;overflow:hidden;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background-color:var(--light-grey)}.Reproductor.jsx-8f21a1017a141169 iframe.jsx-8f21a1017a141169{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.InfoReproductorContainer.jsx-8f21a1017a141169{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:20px}.InfoReproductor.jsx-8f21a1017a141169{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:20px}.ProfilePicture.jsx-8f21a1017a141169{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--light-grey)}.ProfilePicture.jsx-8f21a1017a141169 img.jsx-8f21a1017a141169{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.DetailsInfoReproductor.jsx-8f21a1017a141169{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.DetailsInfoReproductor.jsx-8f21a1017a141169 i.jsx-8f21a1017a141169{position:absolute;right:-26px;width:20px;height:20px;background-image:url("/assets/verify.png");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat}.DescriptionContainer.jsx-8f21a1017a141169{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;padding:20px;background-color:var(--light-grey);-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.DescriptionContainer.jsx-8f21a1017a141169 div.jsx-8f21a1017a141169{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px}.DescriptionContainer.jsx-8f21a1017a141169 p.jsx-8f21a1017a141169{font-size:12px;font-weight:700}.DescriptionContainer.jsx-8f21a1017a141169 span.jsx-8f21a1017a141169{font-weight:400;color:grey}@media only screen and (max-width:860px){.Reproductor.jsx-8f21a1017a141169{position:fixed;z-index:9999;width:inherit;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background-color:transparent}.Reproductor.jsx-8f21a1017a141169 iframe.jsx-8f21a1017a141169{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.InfoReproductorContainer.jsx-8f21a1017a141169{padding:62vw 20px 0}}'
            })
        ]
    });
}


/***/ })

};
;