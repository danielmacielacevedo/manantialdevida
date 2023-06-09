export default function predicadores(req, res) {
  const carolinaMacias = {
    name: "Carolina Macias",
    image: "/assets/escritores/carolina-macias.png",
    url: "/@carolinamacias",
  };

  const marlenZamora = {
    name: "Marlen Zamora",
    image: "/assets/escritores/marlen-zamora.png",
    url: "/@marlenzamora",
  };

  res.status(200).json({
    CarolinaMacias: carolinaMacias,
    MarlenZamora: marlenZamora,
  });
}
