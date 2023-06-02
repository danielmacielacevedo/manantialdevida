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
      dia: "01",
      mes: "06",
      año: "2023",
      hora: "01",
      minuto: "00",
      desc: "Guia ujieres Manantial de Vida",
      image:
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      url: "/alumbra-mi-camino",
      profileURL: "/@carolinamacias",
      slides: [
        {
          component: (
            <h2 key={1}>¿Alguna vez has caminado por un lugar oscuro?</h2>
          ),
        },
        {
          component: (
            <p key={2}>
              En tal lugar resulta complicado dar pasos firmes y por ello,
              tropezar, caer, herirse o perder el rumbo son consecuencias de
              ello.
            </p>
          ),
        },
        {
          component: (
            <p key={3}>
              La dificultad que se enfrenta en esa situación, suele ser la misma
              que al andar por este mundo lleno de oscuridad.
            </p>
          ),
        },
        {
          component: (
            <p key={4}>
              Juan 12:35 menciona que el que anda en oscuridad no sabe a dónde
              va. Sin embargo, el versículo base muestra la solución.
            </p>
          ),
        },
        {
          component: (
            <p key={5}>
              La Palabra de Dios es una lámpara, una lámpara que alumbra el
              camino de todos aquellos que se disponen a hacer Su voluntad,
              caminando en la dirección que Él ha determinado.
            </p>
          ),
        },
        {
          component: (
            <p key={6}>
              Haz de Su Palabra tu mayor refugio y pide continuamente a Dios que
              alumbre tu camino...
            </p>
          ),
        },
        {
          component: (
            <p key={7}>
              Ya que es la única solución para permanecer firmes y en dirección
              a Su propósito.
            </p>
          ),
        },
      ],
    },
  ];

  const data = {
    CarolinaMacias: carolinaMacias,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
