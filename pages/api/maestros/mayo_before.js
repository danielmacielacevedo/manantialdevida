export default function Maestros(req, res) {

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
        name: 'Anita Minchaca',

        dia1: 'Mes libre',
        clase1: '🎉',
        category: '',

        dia2: '',
        clase2: '',
        category: '',

        dia3: '',
        clase3: '',
        category: '',

        dia4: '',
        clase4: '',
        category: '',

        dia5: '',
        clase5: '',
        category: '',
    };

    const carolinaMacias = {
        name: 'Carolina Macias',

        dia1: 'Domingo 21',
        clase1: 'Niños grandes',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const davidSolorzano = {
        name: 'David Solorzano',

        dia1: 'Domingo 14',
        clase1: 'Jóvenes',

        dia2: 'Domingo 28',
        clase2: 'Jóvenes',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const doraCervantes = {
        name: 'Dora Cervantes',

        dia1: 'Domingo 14',
        clase1: 'Niños pequeños',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const elusaiCazares = {
        name: 'Elusai Cazares',

        dia1: 'Viernes 12',
        clase1: 'Niños',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const emmanuelAguilar = {
        name: 'Emmanuel Aguilar',

        dia1: 'Domingo 07',
        clase1: 'Dominical general',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const florFernandez = {
        name: 'Flor Fernández',

        dia1: 'Miércoles 3',
        clase1: 'Niños',

        dia2: 'Domingo 21',
        clase2: 'Dominical general',

        dia3: 'Domingo 28',
        clase3: 'Dominical niños',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const franciscoSerrano = {
        name: 'Francisco Serrano',

        dia1: 'Miércoles 03',
        clase1: 'Jóvenes',

        dia2: 'Miércoles 17',
        clase2: 'Jóvenes',

        dia3: 'Miércoles 31',
        clase3: 'Jóvenes',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const hortensiaSigala = {
        name: 'Hortensia Sigala',

        dia1: 'Domingo 07',
        clase1: 'Niños pequeños',

        dia2: 'Domingo 21',
        clase2: 'Niños pequeños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const isaiasRomero = {
        name: 'Isaias Romero',

        dia1: 'Domingo 07',
        clase1: 'Jóvenes',

        dia2: 'Domingo 21',
        clase2: 'Jóvenes',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const jessicaTenorio = {
        name: 'Jessica Tenorio',

        dia1: 'Domingo 14',
        clase1: 'Niños grandes',

        dia2: 'Miércoles 31',
        clase2: 'Niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const karlaSerrano = {
        name: 'Karla Serrano',

        dia1: 'Domingo 07',
        clase1: 'Dominical niños',
        category: '',

        dia2: 'Domingo 28',
        clase2: 'Niños grandes',
        category: '',

        dia3: '',
        clase3: '',
        category: '',

        dia4: '',
        clase4: '',
        category: '',

        dia5: '',
        clase5: '',
        category: '',
    };

    const marlenZamora = {
        name: 'Marlen Zamora',

        dia1: 'Miércoles 10',
        clase1: 'Jóvenes',
        category: '',

        dia2: 'Domingo 14',
        clase2: 'Dominical niños',
        category: '',

        dia3: 'Miércoles 24',
        clase3: 'Jóvenes',
        category: '',

        dia4: '',
        clase4: '',
        category: '',

        dia5: '',
        clase5: '',
        category: '',
    };

    const margaritaEscobedo = {
        name: 'Margarita Escobedo',

        dia1: 'Miércoles 10',
        clase1: 'Niños',

        dia2: 'Domingo 21',
        clase2: 'Dominical niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    }

    const noryMontiel = {
        name: 'Nory Montiel',

        dia1: 'Domingo 28',
        clase1: 'Niños pequeños',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    }

    const pastoraDina = {
        name: 'Pastora Dina',

        dia1: 'Domingo 28',
        clase1: 'Dominical general',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const pastorIsaac = {
        name: 'Pastor Isaac',

        dia1: 'Domingo 14',
        clase1: 'Dominical general',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const saraiGalarza = {
        name: 'Saraí Galarza',

        dia1: 'Viernes 05',
        clase1: 'Niños',

        dia2: 'Viernes 26',
        clase2: 'Niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const tereOlivas = {
        name: 'Tere Olivas',

        dia1: 'Domingo 07',
        clase1: 'Niños grandes',

        dia2: 'Miércoles 24',
        clase2: 'Niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const veliaAcevedo = {
        name: 'Velia Acevedo',

        dia1: 'Mes libre',
        clase1: '🎉',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const veronicaCazares = {
        name: 'Verónica Cazares',

        dia1: 'Mes libre',
        clase1: '🎉',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const wendyMartinez = {
        name: 'Wendy Martínez',

        dia1: 'Miércoles 17',
        clase1: 'Niños',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const yoselinGalarza = {
        name: 'Yoselin Galarza',

        dia1: 'Viernes 19',
        clase1: 'Niños',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    // Nota: Este es el template vacio para agregar a los nuevos maestros.
    const vacioXd = {
        name: '',

        dia1: '',
        clase1: '',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
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
        YoselinGalarza: yoselinGalarza,
    });
}