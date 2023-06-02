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

  const data = {
    CarolinaMacias: carolinaMacias,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
