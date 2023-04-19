export default function detallesVideos(req, res) {
  const pastorIsaac = [
    {
      title: 'Él Vive',
      autor: 'Pastor Isaac Delgado',
      picture: '/assets/predicadores/pastor-isaac.png',
      date: '09 ABRIL 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/pastor-isaac/el-vive.jpg',
      url: '/el-vive',
      profileURL: '/@pastorisaac',
      embed: 'YOCJ-BZ5fvA',
    },
  ];

  const pastoraDina = [
    {
      title: 'Hossana',
      autor: 'Pastora Dina Campos',
      picture: '/assets/predicadores/pastora-dina.png',
      date: '02 ABRIL 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/pastora-dina/hossana.jpg',
      url: '/hossana',
      profileURL: '/@pastoradina',
      embed: 'Xf769btY9aw',
    },
  ];

  const adrielRamos = [
    {
      title: '¿Cuánto dependes de Dios?',
      autor: 'Adriel Ramos',
      picture: '/assets/predicadores/adriel-ramos.png',
      date: '31 OCTUBRE 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/adriel-ramos/cuanto-dependes-de-Dios.jpg',
      url: '/cuanto-dependes-de-DIOS',
      profileURL: '/@adrielramos',
      embed: 'AJ8SAXWCeOs',
    },
  ];

  const anitaMinchaca = [
    {
      title: 'Amor incomparable',
      autor: 'Anita Minchaca',
      picture: '/assets/predicadores/anita-minchaca.png',
      date: '28 OCTUBRE 2022',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/anita-minchaca/amor-incomparable.jpg',
      url: '/amor-incomparable',
      profileURL: '/@anitaminchaca',
      embed: '1RTGfSivYJs',
    },
  ];

  const emmanuelAguilar = [
    {
      title: 'Tú decides',
      autor: 'Emmanuel Aguilar',
      picture: '/assets/predicadores/emmanuel-aguilar.png',
      date: '20 ENERO 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/emmanuel-aguilar/tu-decides.jpg',
      url: '/tu-decides',
      profileURL: '/@emmanuelaguilar',
      embed: 'tPN6kRgjl9A',
    },
  ];

  const florFernandez = [
    {
      title: 'Metamorfosis del alma',
      autor: 'Flor Fernández',
      picture: '/assets/predicadores/flor-fernandez.png',
      date: '23 ENERO 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/flor-fernandez/metamorfosis-del-alma.jpg',
      url: '/metamorfosis-del-alma',
      profileURL: '/@florfernandez',
      embed: 'c7Ok6yvFALA',
    },
  ];

  const franciscoGarcia = [
    {
      title: 'Conectados 2021',
      autor: 'Francisco Garcia',
      picture: '/assets/predicadores/francisco-garcia.png',
      date: '06 DICIEMBRE 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/francisco-garcia/conectados2021.jpg',
      url: '/conectados2021',
      profileURL: '/@franciscogarcia',
      embed: 'L5pPfoxTYhk',
    },
  ];

  const franciscoSerrano = [
    {
      title: 'Crucifixión',
      autor: 'Francisco Serrano',
      picture: '/assets/predicadores/francisco-serrano.png',
      date: '07 ABRIL 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/francisco-serrano/crucifixion.jpg',
      url: '/crucifixion',
      profileURL: '/@franciscoserrano',
      embed: 'GpjFkvmX9yk',
    },
  ];

  const juanPabloRodriguez = [
    {
      title: '[YOUTH] Conectados a la fuente',
      autor: 'Juan Pablo Rodríguez',
      picture: '/assets/predicadores/juan-pablo-rodriguez.png',
      date: '07 AGOSTO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/juan-pablo-rodriguez/conectados-a-la-fuente.jpg',
      url: '/conectados-a-la-fuente',
      profileURL: '/@juanpablorodriguez',
      embed: 'ssT6VNPYMuk',
    },

    {
      title: 'Derribando para ganar',
      autor: 'Juan Pablo Rodríguez',
      picture: '/assets/predicadores/juan-pablo-rodriguez.png',
      date: '26 MARZO 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/juan-pablo-rodriguez/derribando-para-ganar.jpg',
      url: '/derribando-para-ganar',
      profileURL: '/@juanpablorodriguez',
      embed: 'nem8shsfciE',
    },
  ];

  const karlaCervantes = [
    {
      title: 'Familias Bendecidas',
      autor: 'Karla Cervantes',
      picture: '/assets/predicadores/karla-cervantes.png',
      date: '06 DICIEMBRE 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/karla-cervantes/familias-bendecidas.jpg',
      url: '/familias-bendecidas',
      profileURL: '/@karlacervantes',
      embed: 'Oq-gy_YcQZs',
    },
  ];

  const luisRios = [
    {
      title: 'La reflexión',
      autor: 'Luis Rios',
      picture: '/assets/predicadores/luis-rios.png',
      date: '06 NOVIEMBRE 2022',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/luis-rios/la-reflexion.jpg',
      url: '/la-reflexion',
      profileURL: '/@luisrios',
      embed: 'gOhyHwN2tCU',
    },
  ];

  const magdielPastrana = [
    {
      title: 'Devoción a Dios',
      autor: 'Magdiel Pastrana',
      picture: '/assets/predicadores/magdiel-pastrana.png',
      date: '14 FEBRERO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/magdiel-pastrana/devocion-a-DIOS.jpg',
      url: '/devocion-a-DIOS',
      profileURL: '/@magdielpastrana',
      embed: 'S5EBfykxVOc',
    },

    {
      title: 'El Poder de la Fe',
      autor: 'Magdiel Pastrana',
      picture: '/assets/predicadores/magdiel-pastrana.png',
      date: '14 FEBRERO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/magdiel-pastrana/el-poder-de-la-fe.jpg',
      url: '/el-poder-de-la-fe',
      profileURL: '/@magdielpastrana',
      embed: 'V5QIeW5793M',
    },
  ];

  const obedGarcia = [
    {
      title: 'Preparados para la gloria postrera',
      autor: 'Obed García',
      picture: '/assets/predicadores/obed-garcia.png',
      date: '26 JUNIO 2022',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/obed-garcia/preparados-para-la-gloria-postrera.jpg',
      url: '/preparados-para-la-gloria-postrera',
      profileURL: '/@obedgarcia',
      embed: 'HG0NGChqitI',
    },
  ];

  const omarMorales = [
    {
      title: 'Qué hacer al cruzar la tempestad',
      autor: 'Omar Morales',
      picture: '/assets/predicadores/omar-morales.png',
      date: '17 MARZO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/omar-morales/que-hacer-al-cruzar-la-tempestad.jpg',
      url: '/que-hacer-al-cruzar-la-tempestad',
      profileURL: '/@omarmorales',
      embed: 'W_L5zoL6-tw',
    },
  ];

  const oswaldoAli = [
    {
      title: 'Nuestra Esperanza',
      autor: 'Oswaldo Ali',
      picture: '/assets/predicadores/oswaldo-ali.png',
      date: '25 JULIO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/oswaldo-ali/nuestra-esperanza.jpg',
      url: '/nuestra-esperanza',
      profileURL: '/@oswaldoali',
      embed: 'FlJUUXHdpz8',
    },

    {
      title: 'Dios busca adoradores',
      autor: 'Oswaldo Ali',
      picture: '/assets/predicadores/oswaldo-ali.png',
      date: '01 AGOSTO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/oswaldo-ali/DIOS-busca-adoradores.jpg',
      url: '/DIOS-busca-adoradores',
      profileURL: '/@oswaldoali',
      embed: 'hBz5cVs5BN4',
    },

    {
      title: 'Mateo 26:6-13',
      autor: 'Oswaldo Ali',
      picture: '/assets/predicadores/oswaldo-ali.png',
      date: '16 DICIEMBRE 2022',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/oswaldo-ali/mateo26.jpg',
      url: '/mateo26',
      profileURL: '/@oswaldoali',
      embed: 'UTJUFI82Ci0',
    },
  ];

  const veliaAcevedo = [
    {
      title: 'Getsemaní',
      autor: 'Velia Acevedo',
      picture: '/assets/predicadores/velia-acevedo.png',
      date: '05 ABRIL 2023',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/velia-acevedo/getsemani.jpg',
      url: '/getsemani',
      profileURL: '/@veliaacevedo',
      embed: '4Id_ZH0aRIM',
    },
  ];

  const willyMartinez = [
    {
      title: 'Pentecostés 2021',
      autor: 'Willy Martínez',
      picture: '/assets/predicadores/willy-martinez.png',
      date: '26 MAYO 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/willy-martinez/pentecostes2021.jpg',
      url: '/Pentecostes2021',
      profileURL: '/@willymartinez',
      embed: '9uvCbOuMa8g',
    },
  ];

  const yolandaPerez = [
    {
      title: '¿Porqué buscáis entre los muertos al que vive?',
      autor: 'Yolanda Pérez',
      picture: '/assets/predicadores/yolanda-perez.png',
      date: '04 ABRIL 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/yolanda-perez/porque-buscais-entre-los-muertos-al-que-vive.jpg',
      url: '/porque-buscais-entre-los-muertos-al-que-vive',
      profileURL: '/@yolandaperez',
      embed: 'YAYKrd7H6WU',
    },

    {
      title: 'Un encuentro con El Resucitado',
      autor: 'Yolanda Pérez',
      picture: '/assets/predicadores/yolanda-perez.png',
      date: '04 ABRIL 2021',
      desc: 'Predicación Manantial de Vida',
      image: '/assets/predicadores/yolanda-perez/un-encuentro-con-el-resicitado.jpg',
      url: '/un-encuentro-con-el-resicitado',
      profileURL: '/@yolandaperez',
      embed: '5QpUVnCLeuc',
    },
  ];

  res.status(200).json({
    PastorIsaac: pastorIsaac,
    PastoraDina: pastoraDina,
    AdrielRamos: adrielRamos,
    AnitaMinchaca: anitaMinchaca,
    EmmanuelAguilar: emmanuelAguilar,
    FlorFernandez: florFernandez,
    FranciscoGarcia: franciscoGarcia,
    FranciscoSerrano: franciscoSerrano,
    JuanPabloRodriguez: juanPabloRodriguez,
    KarlaCervantes: karlaCervantes,
    LuisRios: luisRios,
    MagdielPastrana: magdielPastrana,
    ObedGarcia: obedGarcia,
    OmarMorales: omarMorales,
    OswaldoAli: oswaldoAli,
    VeliaAcevedo: veliaAcevedo,
    WillyMartinez: willyMartinez,
    YolandaPerez: yolandaPerez,
  });
}
