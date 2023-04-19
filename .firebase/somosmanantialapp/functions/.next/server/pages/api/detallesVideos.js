"use strict";
(() => {
var exports = {};
exports.id = 5378;
exports.ids = [5378];
exports.modules = {

/***/ 4935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detallesVideos)
/* harmony export */ });
function detallesVideos(req, res) {
    const pastorIsaac = [
        {
            title: "\xc9l Vive",
            autor: "Pastor Isaac Delgado",
            picture: "/assets/predicadores/pastor-isaac.png",
            date: "09 ABRIL 2023",
            desc: "Predicaci\xf3n Manantial de Vida",
            image: "/assets/predicadores/pastor-isaac/el-vive.jpg",
            url: "/@pastorisaac/el-vive",
            profileURL: "/@pastorisaac",
            embed: "YOCJ-BZ5fvA"
        }
    ];
    const pastoraDina = [
        {
            title: "Hossana",
            autor: "Pastora Dina Campos",
            picture: "/assets/predicadores/pastora-dina.png",
            date: "02 ABRIL 2023",
            desc: "Predicaci\xf3n Manantial de Vida",
            image: "/assets/predicadores/pastora-dina/hossana.jpg",
            url: "/@pastoradina/hossana",
            profileURL: "/@pastoradina",
            embed: "Xf769btY9aw"
        }
    ];
    const franciscoSerrano = [
        {
            title: "Crucifixi\xf3n",
            autor: "Francisco Serrano",
            picture: "/assets/predicadores/francisco-serrano.png",
            date: "07 ABRIL 2023",
            desc: "Predicaci\xf3n Manantial de Vida",
            image: "/assets/predicadores/francisco-serrano/crucifixion.jpg",
            url: "/@franciscoserrano/crucifixion",
            profileURL: "/@franciscoserrano",
            embed: "GpjFkvmX9yk"
        }
    ];
    const veliaAcevedo = [
        {
            title: "Getseman\xed",
            autor: "Velia Acevedo",
            picture: "/assets/predicadores/velia-acevedo.png",
            date: "05 ABRIL 2023",
            desc: "Predicaci\xf3n Manantial de Vida",
            image: "/assets/predicadores/velia-acevedo/getsemani.jpg",
            url: "/@veliaacevedo/getsemani",
            profileURL: "/@veliaacevedo",
            embed: "4Id_ZH0aRIM"
        }
    ];
    res.status(200).json({
        PastorIsaac: pastorIsaac,
        PastoraDina: pastoraDina,
        FranciscoSerrano: franciscoSerrano,
        VeliaAcevedo: veliaAcevedo
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4935));
module.exports = __webpack_exports__;

})();