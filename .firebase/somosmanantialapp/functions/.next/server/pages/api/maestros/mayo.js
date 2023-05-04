"use strict";
(() => {
var exports = {};
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 6620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Maestros)
/* harmony export */ });
function Maestros(req, res) {
    // Nota 1: Los nombres de las constantes deben empezar con minusculas, sin espacios, y las sigueintes palabras comienzan en mayusculas (Hacer esto se consideran buenas prácticas en la programación que ayudan a una mejor lectura del código).
    // Ejemplo incorrecto: const Daniel Maciel Acevedo = {};
    // Ejemplo correcto: const DanielMacielAcevedo = {};
    // Nota 2: El valor de cada propiedad dentro de cada obleto debe ir entre comillas ('') si es texto. (Strings siempre van entre comillas, solo los números, boleanos u otras constantes pueden ir sin comillas).
    // Ejemplo incorrecto: { name: Marlen Zamora, };
    // Ejemplo correcto: { name: 'Marlen Zamora', };
    //Nota 3: Cada propiedad y su valor debe llevar una coma simple (,) al final.
    // Ejemplo incorrecto: { name: 'Marlen Zamora' clase1: 'Domingo 12' clase1: 'Jóvenes' };
    // Ejemplo correcto: { name: 'Marlen Zamora', clase1: 'Domingo 12', clase1: 'Jóvenes' };
    const anitaMinchaca = {
        name: "Anita Minchaca",
        dia1: "Mes libre",
        clase1: "\uD83C\uDF89",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const carolinaMacias = {
        name: "Carolina Macias",
        dia1: "Domingo 21",
        clase1: "Ni\xf1os grandes",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const davidSolorzano = {
        name: "David Solorzano",
        dia1: "Domingo 14",
        clase1: "J\xf3venes",
        dia2: "Domingo 28",
        clase2: "J\xf3venes",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const doraCervantes = {
        name: "Dora Cervantes",
        dia1: "Domingo 14",
        clase1: "Ni\xf1os peque\xf1os",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const elusaiCazares = {
        name: "Elusai Cazares",
        dia1: "Viernes 12",
        clase1: "Ni\xf1os",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const emmanuelAguilar = {
        name: "Emmanuel Aguilar",
        dia1: "Domingo 07",
        clase1: "Dominical general",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const florFernandez = {
        name: "Flor Fern\xe1ndez",
        dia1: "Mi\xe9rcoles 3",
        clase1: "Ni\xf1os",
        dia2: "Domingo 21",
        clase2: "Dominical general",
        dia3: "Domingo 28",
        clase3: "Dominical ni\xf1os",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const franciscoSerrano = {
        name: "Francisco Serrano",
        dia1: "Mi\xe9rcoles 03",
        clase1: "J\xf3venes",
        dia2: "Mi\xe9rcoles 17",
        clase2: "J\xf3venes",
        dia3: "Mi\xe9rcoles 31",
        clase3: "J\xf3venes",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const hortensiaSigala = {
        name: "Hortensia Sigala",
        dia1: "Domingo 07",
        clase1: "Ni\xf1os peque\xf1os",
        dia2: "Domingo 21",
        clase2: "Ni\xf1os peque\xf1os",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const isaiasRomero = {
        name: "Isaias Romero",
        dia1: "Domingo 07",
        clase1: "J\xf3venes",
        dia2: "Domingo 21",
        clase2: "J\xf3venes",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const jessicaTenorio = {
        name: "Jessica Tenorio",
        dia1: "Domingo 14",
        clase1: "Ni\xf1os grandes",
        dia2: "Mi\xe9rcoles 31",
        clase2: "Ni\xf1os",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const karlaSerrano = {
        name: "Karla Serrano",
        dia1: "Domingo 07",
        clase1: "Dominical ni\xf1os",
        dia2: "Domingo 28",
        clase2: "Ni\xf1os grandes",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const marlenZamora = {
        name: "Marlen Zamora",
        dia1: "Mi\xe9rcoles 10",
        clase1: "J\xf3venes",
        dia2: "Domingo 14",
        clase2: "Dominical ni\xf1os",
        dia3: "Mi\xe9rcoles 24",
        clase3: "J\xf3venes",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const margaritaEscobedo = {
        name: "Margarita Escobedo",
        dia1: "Mi\xe9rcoles 10",
        clase1: "Ni\xf1os",
        dia2: "Domingo 21",
        clase2: "Dominical ni\xf1os",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const noryMontiel = {
        name: "Nory Montiel",
        dia1: "Domingo 28",
        clase1: "Ni\xf1os peque\xf1os",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const pastoraDina = {
        name: "Pastora Dina",
        dia1: "Domingo 28",
        clase1: "Dominical general",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const pastorIsaac = {
        name: "Pastor Isaac",
        dia1: "Domingo 14",
        clase1: "Dominical general",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const saraiGalarza = {
        name: "Sara\xed Galarza",
        dia1: "Viernes 05",
        clase1: "Ni\xf1os",
        dia2: "Viernes 26",
        clase2: "Ni\xf1os",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const tereOlivas = {
        name: "Tere Olivas",
        dia1: "Domingo 07",
        clase1: "Ni\xf1os grandes",
        dia2: "Mi\xe9rcoles 24",
        clase2: "Ni\xf1os",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const veliaAcevedo = {
        name: "Velia Acevedo",
        dia1: "Mes libre",
        clase1: "\uD83C\uDF89",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const veronicaCazares = {
        name: "Ver\xf3nica Cazares",
        dia1: "Mes libre",
        clase1: "\uD83C\uDF89",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const wendyMartinez = {
        name: "Wendy Mart\xednez",
        dia1: "Mi\xe9rcoles 17",
        clase1: "Ni\xf1os",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    const yoselinGalarza = {
        name: "Yoselin Galarza",
        dia1: "Viernes 19",
        clase1: "Ni\xf1os",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    // Nota: Este es el template vacio para agregar a los nuevos maestros.
    const vacioXd = {
        name: "",
        dia1: "",
        clase1: "",
        dia2: "",
        clase2: "",
        dia3: "",
        clase3: "",
        dia4: "",
        clase4: "",
        dia5: "",
        clase5: ""
    };
    // Nota: Es necesario agregar a esta lista los nuevos maestros para la respuesta al componente (El nombre de cada propiedad de este objeto es el que se manda a llamar desde los componentes que estan por fuera)
    res.status(200).json({
        AnitaMinchaca: anitaMinchaca,
        CarolinaMacias: carolinaMacias,
        DavidSolorzano: davidSolorzano,
        DoraCervantes: doraCervantes,
        ElusaiCazares: elusaiCazares,
        EmmanuelAguilar: emmanuelAguilar,
        FlorFernandez: florFernandez,
        FranciscoSerrano: franciscoSerrano,
        HortensiaSigala: hortensiaSigala,
        IsaiasRomero: isaiasRomero,
        JessicaTenorio: jessicaTenorio,
        KarlaSerrano: karlaSerrano,
        MarlenZamora: marlenZamora,
        MargaritaEscobedo: margaritaEscobedo,
        NoryMontiel: noryMontiel,
        PastoraDina: pastoraDina,
        PastorIsaac: pastorIsaac,
        SaraiGalarza: saraiGalarza,
        TereOlivas: tereOlivas,
        VeliaAcevedo: veliaAcevedo,
        VeronicaCazares: veronicaCazares,
        WendyMartinez: wendyMartinez,
        YoselinGalarza: yoselinGalarza
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6620));
module.exports = __webpack_exports__;

})();