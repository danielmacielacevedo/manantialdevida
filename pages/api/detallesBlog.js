// import Blog from "../components/Blog";
const cache = require("../../cache");

export default function detallesBlog(req, res) {
  const cacheKey = "detallesBlog";

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log("Data from cache");
    return res.status(200).json(cachedData);
  }

  const carolinaMacias = [
    {
      title: "Alumbra mi camino",
      autor: "Carolina Macias",
      picture: "/assets/escritores/carolina-macias.png",
      date: "02 JUNIO 2023",
      dia: "02",
      mes: "06",
      año: "2023",
      hora: "08",
      minuto: "00",
      desc: "",
      image: "/assets/escritores/carolina-macias/alumbra-mi-camino.jpg",
      imageHD: "/assets/escritores/carolina-macias/alumbra-mi-camino-share.jpg",
      url: "/alumbra-mi-camino",
      profileURL: "/@carolinamacias",
    },

    {
      title: "Vuelve a intentarlo",
      autor: "Carolina Macias",
      picture: "/assets/escritores/carolina-macias.png",
      date: "16 JUNIO 2023",
      dia: "16",
      mes: "06",
      año: "2023",
      hora: "08",
      minuto: "00",
      desc: "",
      image: "/assets/escritores/carolina-macias/vuelve-a-intentarlo.jpg",
      imageHD: "/assets/escritores/carolina-macias/vuelve-a-intentarlo-HD.jpg",
      url: "/vuelve-a-intentarlo",
      profileURL: "/@carolinamacias",
    },

    {
      title: "Si Tú quieres",
      autor: "Carolina Macias",
      picture: "/assets/escritores/carolina-macias.png",
      date: "07 JULIO 2023",
      dia: "07",
      mes: "07",
      año: "2023",
      hora: "08",
      minuto: "00",
      desc: "",
      image: "/assets/escritores/carolina-macias/si-TU-quieres.jpg",
      imageHD: "/assets/escritores/carolina-macias/si-TU-quieres-HD.jpg",
      url: "/si-TU-quieres",
      profileURL: "/@carolinamacias",
    },
  ];

  const marlenZamora = [
    {
      title: "El Señor está a mi lado",
      autor: "Marlen Zamora",
      picture: "/assets/escritores/marlen-zamora.png",
      date: "09 JUNIO 2023",
      dia: "09",
      mes: "06",
      año: "2023",
      hora: "08",
      minuto: "00",
      desc: "",
      image: "/assets/escritores/marlen-zamora/el-SENOR-esta-a-mi-lado.jpg",
      imageHD:
        "/assets/escritores/marlen-zamora/el-SENOR-esta-a-mi-lado-HD.jpg",
      url: "/el-SENOR-esta-a-mi-lado",
      profileURL: "/@marlenzamora",
    },

    {
      title: "Mi buen pastor",
      autor: "Marlen Zamora",
      picture: "/assets/escritores/marlen-zamora.png",
      date: "30 JUNIO 2023",
      dia: "30",
      mes: "06",
      año: "2023",
      hora: "08",
      minuto: "00",
      desc: "",
      image: "/assets/escritores/marlen-zamora/mi-buen-pastor.jpg",
      imageHD: "/assets/escritores/marlen-zamora/mi-buen-pastor-HD.jpg",
      url: "/mi-buen-pastor",
      profileURL: "/@marlenzamora",
    },

    {
      title: "Mi proveedor",
      autor: "Marlen Zamora",
      picture: "/assets/escritores/marlen-zamora.png",
      date: "14 JULIO 2023",
      dia: "14",
      mes: "07",
      año: "2023",
      hora: "08",
      minuto: "00",
      desc: "Una de las mayores preocupaciones diarias puede ser la provisión para...",
      image: "/assets/escritores/marlen-zamora/mi-proveedor.jpg",
      imageHD: "/assets/escritores/marlen-zamora/mi-proveedor-HD.jpg",
      url: "/mi-proveedor",
      profileURL: "/@marlenzamora",
    },
  ];

  const data = {
    CarolinaMacias: carolinaMacias,
    MarlenZamora: marlenZamora,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
