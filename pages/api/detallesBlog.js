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

    {
      title: "Pan",
      autor: "Manantial de Vida",
      picture: "/assets/profile-picture.png",
      date: "01 JUNIO 2023",
      dia: "01",
      mes: "06",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Guia ujieres Manantial de Vida",
      image: "/assets/blog/pan.jpg",
      url: "/",
      profileURL: "/blog",
      embed: "",
    },

    {
      title: "Sabiduria",
      autor: "Manantial de Vida",
      picture: "/assets/profile-picture.png",
      date: "01 JUNIO 2023",
      dia: "01",
      mes: "06",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Guia ujieres Manantial de Vida",
      image: "/assets/blog/sabiduria.jpg",
      url: "/",
      profileURL: "/blog",
      embed: "",
    },
  ];

  const carolinaMacias = [
    {
      title: "Alumbra mi camino",
      autor: "Carolina Macias",
      picture: "/assets/escritores/carolina-macias.png",
      date: "02 JUNIO 2023",
      dia: "01",
      mes: "06",
      año: "2023",
      hora: "01",
      minuto: "00",
      desc: "Guia ujieres Manantial de Vida",
      image:
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      // image: "https://images.unsplash.com/photo-1601746658195-7d426090544e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      // image: "/assets/blog/alumbra-mi-camino.jpg",
      url: "/alumbra-mi-camino",
      profileURL: "/@carolinamacias",
      embed: "",
    },
  ];

  const data = {
    Manantial: manantial,
    CarolinaMacias: carolinaMacias,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
