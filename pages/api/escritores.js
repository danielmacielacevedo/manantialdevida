export default function predicadores(req, res) {
  const carolinaMacias = {
    name: "Carolina Macias",
    image: "/assets/escritores/carolina-macias.png",
    url: "/@carolinamacias",
  };

  res.status(200).json({
    CarolinaMacias: carolinaMacias,
  });
}
