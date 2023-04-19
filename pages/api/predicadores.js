export default function predicadores(req, res) {

  const pastorIsaac = {
    name: 'Pastor Isaac Delgado',
    image: '/assets/predicadores/pastor-isaac.png',
    url: '/@pastorisaac',
  };

  const pastoraDina = {
    name: 'Pastora Dina Campos',
    image: '/assets/predicadores/pastora-dina.png',
    url: '/@pastoradina',
  };

  const adrielRamos = {
    name: 'Adriel Ramos',
    image: '/assets/predicadores/adriel-ramos.png',
    url: '/@adrielramos',
  };

  const anitaMinchaca = {
    name: 'Anita Minchaca',
    image: '/assets/predicadores/anita-minchaca.png',
    url: '/@anitaminchaca',
  };

  const emmanuelAguilar = {
    name: 'Emmanuel Aguilar',
    image: '/assets/predicadores/fam-aguilar-fernandez.png',
    url: '/@emmanuelaguilar',
  };

  const famAguilarFernandez = {
    name: 'Fam Aguilar Fernández',
    image: '/assets/predicadores/fam-aguilar-fernandez.png',
    url: '/@famaguilarfernandez',
  };

  const florFernandez = {
    name: 'Flor Fernández',
    image: '/assets/predicadores/fam-aguilar-fernandez.png',
    url: '/@florfernandez',
  };

  const franciscoGarcia = {
    name: 'Francisco García',
    image: '/assets/predicadores/francisco-garcia.png',
    url: '/@franciscogarcia',
  };

  const franciscoSerrano = {
    name: 'Francisco Serrano',
    image: '/assets/predicadores/francisco-serrano.png',
    url: '/@franciscoserrano',
  };

  const juanPabloRodriguez = {
    name: 'Juan Pablo Rodríguez',
    image: '/assets/predicadores/juan-pablo-rodriguez.png',
    url: '/@juanpablorodriguez'
  };

  const karlaCervantes = {
    name: 'Karla Cervantes',
    image: '/assets/predicadores/karla-cervantes.png',
    url: '/@karlacervantes',
  };

  const luisRios = {
    name: 'Luis Rios',
    image: '/assets/predicadores/luis-rios.png',
    url: '/@luisrios',
  };

  const magdielPastrana = {
    name: 'Magdiel Pastrana',
    image: '/assets/predicadores/magdiel-pastrana.png',
    url: '/@magdielpastrana',
  };

  const obedGarcia = {
    name: 'Obed García',
    image: '/assets/predicadores/obed-garcia.png',
    url: '/@obedgarcia',
  };

  const omarMorales = {
    name: 'Omar Morales',
    image: '/assets/predicadores/omar-morales.png',
    url: '/@omarmorales',
  };

  const oswaldoAli = {
    name: 'Oswaldo Ali',
    image: '/assets/predicadores/oswaldo-ali.png',
    url: '/@oswaldoali',
  };

  const veliaAcevedo = {
    name: 'Velia Acevedo',
    image: '/assets/predicadores/velia-acevedo.png',
    url: '/@veliaacevedo',
  };

  const willyMartinez = {
    name: 'Willy Martínez',
    image: '/assets/predicadores/willy-martinez.png',
    url: '/@willymartinez',
  };

  const yolandaPerez = {
    name: 'Yolanda Pérez',
    image: '/assets/predicadores/yolanda-perez.png',
    url: '/@yolandaperez'
  }

  res.status(200).json({
    PastorIsaac: pastorIsaac,
    PastoraDina: pastoraDina,
    AdrielRamos: adrielRamos,
    AnitaMinchaca: anitaMinchaca,
    EmmanuelAguilar: emmanuelAguilar,
    FamAguilarFernandez: famAguilarFernandez,
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
  })
}