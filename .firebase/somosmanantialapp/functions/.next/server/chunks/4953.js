"use strict";
exports.id = 4953;
exports.ids = [4953];
exports.modules = {

/***/ 3998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserContext": () => (/* binding */ UserContext),
/* harmony export */   "UserProvider": () => (/* binding */ UserProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_client__WEBPACK_IMPORTED_MODULE_2__]);
_firebase_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { loginWithGoogle, onAuthStateChanged } from "../firebase/client";
const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const UserProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_firebase_client__WEBPACK_IMPORTED_MODULE_2__/* .onAuthStateChanged */ .Aj)(setUser);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuMembers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SmallNovedad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserProvider__WEBPACK_IMPORTED_MODULE_5__]);
_UserProvider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MenuMembers(props) {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_UserProvider__WEBPACK_IMPORTED_MODULE_5__.UserContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            user && user.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-52ee18ff1acdaa6e" + " " + "theme MenuGlobalContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "jsx-52ee18ff1acdaa6e",
                        children: "Menu"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        href: "/",
                        className: "jsx-52ee18ff1acdaa6e",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        id: "user_profile_picture",
                                        src: user.picture,
                                        alt: "Home Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "InfoUserMenuGlobal",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-52ee18ff1acdaa6e",
                                            children: user.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-52ee18ff1acdaa6e",
                                            children: user.email
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "InicioDesktop",
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/home-icon.png",
                                        alt: "Home Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Inicio"
                                })
                            ]
                        })
                    }),
                    "Accesos directos",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/blog",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/blog-icon.png",
                                        alt: "Home Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Blog"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/predicas",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/new-predicas-icon.png",
                                        alt: "Home Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Pr\xe9dicas"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/boletin",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/news-icon.png",
                                        alt: "Home Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Bolet\xedn"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-52ee18ff1acdaa6e" + " " + "PrivateContainerMenu",
                        children: [
                            "Privados",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/miembros/calendario-maestros",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/icons/calendar-icon.png",
                                                alt: "Calendar Icon",
                                                className: "jsx-52ee18ff1acdaa6e"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-52ee18ff1acdaa6e",
                                            children: "Maestros"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/miembros/calendario-sociedades",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/icons/calendar-icon.png",
                                                alt: "Calendar Icon",
                                                className: "jsx-52ee18ff1acdaa6e"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-52ee18ff1acdaa6e",
                                            children: "Sociedades"
                                        })
                                    ]
                                })
                            }),
                            "Guias",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/miembros/tutoriales/como-ser-ujier",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/icons/ujier-icon.png",
                                                alt: "Ujier Icon",
                                                className: "jsx-52ee18ff1acdaa6e"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-52ee18ff1acdaa6e",
                                            children: "Como ser ujier"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    "Calendarios",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/actividades",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/calendar-icon.png",
                                        alt: "Calendar Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Actividades"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallNovedad__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                            ]
                        })
                    }),
                    "Como llegar",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://maps.app.goo.gl/BJ5W33SYbQfQr8cg9?g_st=ic",
                        className: "jsx-52ee18ff1acdaa6e",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/map-icon-active.png",
                                        alt: "Image Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Ver mapa"
                                })
                            ]
                        })
                    }),
                    "Recursos",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/miembros/recursos/logotipo",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-52ee18ff1acdaa6e" + " " + "ItemMenuContainer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-52ee18ff1acdaa6e" + " " + "PostProfilePicture",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/icons/image-icon.png",
                                        alt: "Image Icon",
                                        className: "jsx-52ee18ff1acdaa6e"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-52ee18ff1acdaa6e",
                                    children: "Logotipos"
                                })
                            ]
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "52ee18ff1acdaa6e",
                children: ".MenuGlobalContainer.jsx-52ee18ff1acdaa6e{top:0;bottom:0;position:fixed;overflow-y:scroll;overflow-x:hidden;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:400px;height:auto;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;gap:20px;color:var(--secondary-color);margin-top:80px;padding:20px}.MenuGlobalContainer.jsx-52ee18ff1acdaa6e::-webkit-scrollbar{width:8px}.MenuGlobalContainer.jsx-52ee18ff1acdaa6e::-webkit-scrollbar-thumb{background-color:#1d1d1d;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.MenuGlobalContainer.jsx-52ee18ff1acdaa6e::-webkit-scrollbar-track{background-color:#000}.MenuGlobalContainer.jsx-52ee18ff1acdaa6e h1.jsx-52ee18ff1acdaa6e{display:none}.PrivateContainerMenu.jsx-52ee18ff1acdaa6e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:var(--mid-grey);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:20px;gap:20px}.ItemMenuContainer.jsx-52ee18ff1acdaa6e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;max-width:260px;height:auto;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:10px 20px;gap:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--light-grey);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s}.ItemMenuContainer.jsx-52ee18ff1acdaa6e:hover{background-color:var(--mid-grey)}.ItemMenuContainer.jsx-52ee18ff1acdaa6e span.jsx-52ee18ff1acdaa6e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:6px 10px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:10px;background-color:var(--primary-color)}.PostProfilePicture.jsx-52ee18ff1acdaa6e{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;background-color:var(--primary-color);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.PostProfilePicture.jsx-52ee18ff1acdaa6e img.jsx-52ee18ff1acdaa6e{width:auto;height:18px}#user_profile_picture.jsx-52ee18ff1acdaa6e{width:auto;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.InfoUserMenuGlobal.jsx-52ee18ff1acdaa6e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}@media only screen and (max-width:1024px){p.jsx-52ee18ff1acdaa6e{font-size:10px}.ItemMenuContainer.jsx-52ee18ff1acdaa6e{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px 10px}.InfoUserMenuGlobal.jsx-52ee18ff1acdaa6e{display:none}}@media only screen and (max-width:860px){p.jsx-52ee18ff1acdaa6e{font-size:16px}.MenuGlobalContainer.jsx-52ee18ff1acdaa6e{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;max-width:none;margin-top:80px;padding:0}.MenuGlobalContainer.jsx-52ee18ff1acdaa6e h1.jsx-52ee18ff1acdaa6e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:20px}.ItemMenuContainer.jsx-52ee18ff1acdaa6e{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:none;padding:10px 20px}.InfoUserMenuGlobal.jsx-52ee18ff1acdaa6e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;