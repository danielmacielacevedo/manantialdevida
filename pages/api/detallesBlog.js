const cache = require("../../cache");

export default function detallesVideos(req, res) {
  const cacheKey = "detallesBlog";

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log("Data from cache");
    return res.status(200).json(cachedData);
  }

  const manantial = [
    {
      title: "Nunca",
      autor: "Manantial de Vida",
      picture: "/assets/profile-picture.png",
      date: "01 JUNIO 2023",
      dia: "01",
      mes: "06",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Guia ujieres Manantial de Vida",
      image: "/assets/blog/demo.jpg",
      url: "/",
      profileURL: "/blog",
      embed: "",
    },
  ];

  const data = {
    Manantial: manantial,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
