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

        dia1: 'Domingo 30',
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

    const carolinaMacias = {
        name: 'Carolina Macias',

        dia1: 'Domingo 02',
        clase1: 'Niños grandes',

        dia2: 'Viernes 21',
        clase2: 'Niños grandes',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const davidSolorzano = {
        name: 'David Solorzano',

        dia1: 'Domingo 09',
        clase1: 'Jóvenes',

        dia2: 'Domingo 23',
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

        dia1: 'Domingo 16',
        clase1: 'Dominical niños',

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

        dia1: 'Domingo 02',
        clase1: 'Niños prequeños',

        dia2: 'Miércoles 12',
        clase2: 'Niños',

        dia3: 'Domingo 23',
        clase3: 'Niños pequeños',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const florFernandez = {
        name: 'Flor Fernández',

        dia1: 'Domingo 23',
        clase1: 'Niños grandes',

        dia2: 'Viernes 28',
        clase2: 'Niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const franciscoSerrano = {
        name: 'Francisco Serrano',

        dia1: 'Miércoles 12',
        clase1: 'Jóvenes',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const isaiasRomero = {
        name: 'Isaias Romero',

        dia1: 'Domingo 02',
        clase1: 'Jóvenes',

        dia2: 'Domingo 16',
        clase2: 'Jóvenes',

        dia3: 'Domingo 30',
        clase3: 'Jóvenes',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const jessicaTenorio = {
        name: 'Jessica Tenorio',

        dia1: 'Viernes 07',
        clase1: 'Niños pequeños',

        dia2: 'Domingo 30',
        clase2: 'Dominical niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const karlaSerrano = {
        name: 'Karla Serrano',

        dia1: 'Domingo 09',
        clase1: 'Noños pequeños',

        dia2: 'Domingo 30',
        clase2: 'Niños pequeños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const marlenZamora = {
        name: 'Marlen Zamora',

        dia1: 'Domingo 09',
        clase1: 'Dominical niños',

        dia2: 'Domingo 23',
        clase2: 'Dominical general',

        dia3: 'Miércoles 26',
        clase3: 'Jóvenes',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const margarita = {
        name: 'Margarita',

        dia1: 'Viernes 14',
        clase1: 'Niños',

        dia2: '',
        clase2: '',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    }

    const noryMontiel = {
        name: 'Nory Montiel',

        dia1: 'Miércoles 19',
        clase1: 'Niños grandes',

        dia2: 'Domingo 23',
        clase2: 'Dominical niños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    }

    const pastoraDina = {
        name: 'Pastora Dina',

        dia1: 'Domingo 16',
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

        dia1: 'Domingo 02',
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

        dia1: 'Viernes 07',
        clase1: 'Niños grandes',

        dia2: 'Miércoles 26',
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

        dia1: 'Domingo 16',
        clase1: 'Niños pequeños',

        dia2: 'Sábado 22',
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

        dia1: 'Domingo 09',
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

    const veronicaCazares = {
        name: 'Verónica Cazares',

        dia1: 'Domingo 09',
        clase1: 'Niños grandes',

        dia2: 'Miércoles 19',
        clase2: 'Niños pequeños',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const wendyMartinez = {
        name: 'Wendy Martínez',

        dia1: 'Viernes 21',
        clase1: 'Niños grandes',

        dia2: 'Dimingo 30',
        clase2: 'Niños grandes',

        dia3: '',
        clase3: '',

        dia4: '',
        clase4: '',

        dia5: '',
        clase5: '',
    };

    const yoselinGalarza = {
        name: 'Yoselin Galarza',

        dia1: 'Miércoles 05',
        clase1: 'Niños',

        dia2: 'Domingo 16',
        clase2: 'Niños grandes',

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
        FlorFernandez: florFernandez,
        FranciscoSerrano: franciscoSerrano,
        IsaiasRomero: isaiasRomero,
        JessicaTenorio: jessicaTenorio,
        KarlaSerrano: karlaSerrano,
        MarlenZamora: marlenZamora,
        Margarita: margarita,
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