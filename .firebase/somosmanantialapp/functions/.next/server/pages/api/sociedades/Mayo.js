"use strict";
(() => {
var exports = {};
exports.id = 6718;
exports.ids = [6718];
exports.modules = {

/***/ 1587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const data = [
    {
        id: "Damas",
        title: "Damas",
        classes: [
            {
                category: "Damas",
                titulo: "Festejo a las mam\xe1s",
                dia: "S\xe1bado 06",
                hora: "05:00 PM",
                lugar: "Manantial de Vida"
            }
        ]
    },
    {
        id: "Ni\xf1os",
        title: "Ni\xf1os",
        classes: [
            {
                category: "Ni\xf1os",
                titulo: "Tarde de pel\xedcula",
                dia: "S\xe1bado 13",
                hora: "06:00 PM",
                lugar: "Manantial de Vida"
            }
        ]
    },
    {
        id: "J\xf3venes",
        title: "J\xf3venes",
        classes: [
            {
                category: "J\xf3venes",
                titulo: "Velada de oraci\xf3n",
                dia: "Viernes 12",
                hora: "08:00 PM",
                lugar: 'La finca "Luis Acevedo"'
            },
            {
                category: "J\xf3venes",
                titulo: "Hamburguesada",
                dia: "S\xe1bado 20",
                hora: "06:00 PM",
                lugar: "Manantial de Vida"
            }
        ]
    }
];
function handler(req, res) {
    res.status(200).json(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1587));
module.exports = __webpack_exports__;

})();