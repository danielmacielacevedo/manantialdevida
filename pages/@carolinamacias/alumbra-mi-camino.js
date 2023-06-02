import Head from "next/head";
import Blog from "../components/Blog";
import { useState, useContext } from "react";
import { UserContext } from "../UserProvider";
import Footer from "../components/Footer";
import BackHeader from "../components/BackHeader";

export default function IndividualBlog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useContext(UserContext);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const slides = [
    <Blog key={0} nombre="CarolinaMacias" indice="0" />,
    <h2 key={1}>¿Alguna vez has caminado por un lugar oscuro?</h2>,
    <p key={2}>
      En tal lugar resulta complicado dar pasos firmes y por ello, tropezar,
      caer, herirse o perder el rumbo son consecuencias de ello.
    </p>,
    <p key={3}>
      La dificultad que se enfrenta en esa situación, suele ser la misma que al
      andar por este mundo lleno de oscuridad.
    </p>,
    <p key={4}>
      Juan 12:35 menciona que el que anda en oscuridad no sabe a dónde va. Sin
      embargo, el versículo base muestra la solución.
    </p>,
    <p key={5}>
      La Palabra de Dios es una lámpara, una lámpara que alumbra el camino de
      todos aquellos que se disponen a hacer Su voluntad, caminando en la
      dirección que Él ha determinado.
    </p>,
    <p key={6}>
      Haz de Su Palabra tu mayor refugio y pide continuamente a Dios que alumbre
      tu camino...
    </p>,
    <p key={7}>
      Ya que es la única solución para permanecer firmes y en dirección a Su
      propósito.
    </p>,
    <Blog key={8} nombre="CarolinaMacias" indice="0" />,
  ];

  return (
    <>
      <Head>
        <title>Alumbra mi camino | Carolina Macias</title>
        <meta
          name="description"
          content="¿Alguna vez has camino por un lugar oscuro?"
        />
        <meta
          property="og:title"
          content="Alumbra mi camino | Carolina Macias"
        />
        <meta property="og:url" content="https://somosmamantial.org/blog" />
        <meta property="og:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://apis.google.com/js/platform.js"></script>
      </Head>
      <BackHeader />

      <div className="BlogContentContainer">
        {user && user.email && (
          <div className="BlogContentSliderCards">
            {slides.map((slide, index) => (
              <div
                id="SlideContainer"
                key={index}
                className={`Slide${index + 1} ${
                  currentSlide === index ? "active" : ""
                }`}
                style={{ display: currentSlide === index ? "flex" : "none" }}
              >
                {slide}
                <div className="SlideButtons">
                  {currentSlide !== 0 && (
                    <button onClick={handlePrevSlide}>Anterior</button>
                  )}

                  {currentSlide === 0 && (
                    <button onClick={handleNextSlide}>Empezar a leer</button>
                  )}

                  {currentSlide !== 0 && currentSlide < slides.length - 1 ? (
                    <button onClick={handleNextSlide}>Siguiente</button>
                  ) : (
                    currentSlide !== 0 && (
                      <>
                        <button onClick={handleNextSlide}>Compartir</button>
                      </>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <style jsx>{`
        .BlogContentContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;
          padding: 0 20px;
        }
        .BlogContentSliderCards {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 70vh;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        #SlideContainer {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          font-size: 30px;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-radius: 10px;
          background: var(--light-grey);
          gap: 20px;
        }
        .SlideButtons {
          display: flex;
          width: 100%;
          gap: 20px;
        }
        button {
          display: flex;
          flex: 1;
          width: 100%;
          height: 60px;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
