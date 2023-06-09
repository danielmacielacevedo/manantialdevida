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
      desc: "Guia ujieres Manantial de Vida",
      image: "/assets/escritores/carolina-macias/alumbra-mi-camino.jpg",
      imageHD: "/assets/escritores/carolina-macias/alumbra-mi-camino-share.jpg",
      url: "/alumbra-mi-camino",
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
  ];

  const data = {
    CarolinaMacias: carolinaMacias,
    MarlenZamora: marlenZamora,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
