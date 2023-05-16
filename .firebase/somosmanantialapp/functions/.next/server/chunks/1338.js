"use strict";
exports.id = 1338;
exports.ids = [1338];
exports.modules = {

/***/ 1338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuMobile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3998);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1189);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_icons_animated_icons_HomeIcon_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7880);
/* harmony import */ var _public_assets_icons_animated_icons_BlogIcon_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5637);
/* harmony import */ var _public_assets_icons_animated_icons_PredicaIcon_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1621);
/* harmony import */ var _public_assets_icons_animated_icons_ArticleIcon_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(161);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserProvider__WEBPACK_IMPORTED_MODULE_4__]);
_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










// import NewsIcon from "../../public/assets/icons/animated-icons/NewsIcon.json";
function MenuMobile() {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_UserProvider__WEBPACK_IMPORTED_MODULE_4__.UserContext);
    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [activeIcon, setActiveIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [iconColor, setIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("#515151");
    const handleIconClick = (iconName)=>{
        setIsPlaying(true);
        setActiveIcon(iconName);
        setIconColor("#fff"); // Cambiar el color al hacer clic
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Detener la animación cuando el componente se desmonte
        return ()=>{
            setIsPlaying(false);
            setActiveIcon(null);
            setIconColor("#515151"); // Restaurar el color por defecto
        };
    }, []);
    const animationRefs = {
        home: (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),
        blog: (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),
        predicas: (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),
        article: (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),
        news: (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null)
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        Object.keys(animationRefs).forEach((key)=>{
            const ref = animationRefs[key];
            if (isPlaying && activeIcon === key && ref.current) {
                ref.current.play();
            } else if ((!isPlaying || activeIcon !== key) && ref.current) {
                ref.current.stop();
            }
        });
    }, [
        isPlaying,
        activeIcon
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            user && user.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-adcd49c66b555911" + " " + "BottomMenuContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>handleIconClick("home"),
                            className: "jsx-adcd49c66b555911" + " " + `IconContainer ${activeIcon === "home" ? "active" : ""}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    options: {
                                        animationData: _public_assets_icons_animated_icons_HomeIcon_json__WEBPACK_IMPORTED_MODULE_6__,
                                        loop: false,
                                        autoplay: false
                                    },
                                    isStopped: activeIcon !== "home" || !isPlaying,
                                    width: 24,
                                    height: 24,
                                    isClickToPauseDisabled: true,
                                    ref: animationRefs.home
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-adcd49c66b555911",
                                    children: "Inicio"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/blog",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>handleIconClick("blog"),
                            className: "jsx-adcd49c66b555911" + " " + `IconContainer ${activeIcon === "blog" ? "active" : ""}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    options: {
                                        animationData: _public_assets_icons_animated_icons_BlogIcon_json__WEBPACK_IMPORTED_MODULE_7__,
                                        loop: false,
                                        autoplay: false
                                    },
                                    isStopped: activeIcon !== "blog" || !isPlaying,
                                    width: 24,
                                    height: 24,
                                    isClickToPauseDisabled: true,
                                    ref: animationRefs.blog
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-adcd49c66b555911",
                                    children: "Blog"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/predicas",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>handleIconClick("predicas"),
                            className: "jsx-adcd49c66b555911" + " " + `IconContainer ${activeIcon === "predicas" ? "active" : ""}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    options: {
                                        animationData: _public_assets_icons_animated_icons_PredicaIcon_json__WEBPACK_IMPORTED_MODULE_8__,
                                        loop: false,
                                        autoplay: false
                                    },
                                    isStopped: activeIcon !== "predicas" || !isPlaying,
                                    width: 24,
                                    height: 24,
                                    isClickToPauseDisabled: true,
                                    ref: animationRefs.predicas
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-adcd49c66b555911",
                                    children: "Pr\xe9dicas"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/boletin",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>handleIconClick("article"),
                            className: "jsx-adcd49c66b555911" + " " + `IconContainer ${activeIcon === "article" ? "active" : ""}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    options: {
                                        animationData: _public_assets_icons_animated_icons_ArticleIcon_json__WEBPACK_IMPORTED_MODULE_9__,
                                        loop: false,
                                        autoplay: false
                                    },
                                    className: "LottieIconBoletin",
                                    isStopped: activeIcon !== "article" || !isPlaying,
                                    width: 24,
                                    height: 24,
                                    isClickToPauseDisabled: true,
                                    ref: animationRefs.article
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-adcd49c66b555911",
                                    children: "Bolet\xedn"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "BottomMenuButton",
                        href: "/miembros/menu",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>handleIconClick("menu"),
                                className: "jsx-adcd49c66b555911" + " " + `IconContainer ${activeIcon === "menu" ? "active" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    referrerPolicy: "no-referrer",
                                    width: 24,
                                    height: 24,
                                    src: user.picture,
                                    alt: "Menu Icon",
                                    className: "jsx-adcd49c66b555911" + " " + "ProfilePicture"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-adcd49c66b555911",
                                children: "Men\xfa"
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "adcd49c66b555911",
                children: ".BottomMenuContainer.jsx-adcd49c66b555911{position:fixed;bottom:0;display:none;width:100%;height:80px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000000b1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);{}}.BottomMenuContainer.jsx-adcd49c66b555911 img.jsx-adcd49c66b555911{width:24px;height:24px}.ProfilePicture.jsx-adcd49c66b555911{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:solid 2px var(--primary-color)}.IconContainer.active.jsx-adcd49c66b555911{fill:#fff}.IconContainer.jsx-adcd49c66b555911{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px;fill:#515151}@media only screen and (max-width:860px){.BottomMenuContainer.jsx-adcd49c66b555911{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;