import Head from "next/head";
import Blog from "../components/Blog";
import { useState, useContext } from "react";
import { UserContext } from "../UserProvider";
import Footer from "../components/Footer";
import BackHeader from "../components/BackHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function IndividualBlog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useContext(UserContext);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      // Compartir en dispositivos móviles
      navigator
        .share({
          // title: "Título del blog",
          // text: "Echa un vistazo a este blog interesante",
          url: window.location.href,
        })
        .then(() => {
          toast.success("Enlace compartido");
        })
        .catch((error) => {
          toast.error("Error al compartir");
          console.error("Error al compartir:", error);
        });
    } else {
      // Copiar enlace al portapapeles en ordenadores
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          toast.success("Enlace copiado al portapapeles");
        })
        .catch((error) => {
          toast.error("Error al copiar enlace");
          console.error("Error al copiar enlace:", error);
        });
    }
  };

  const slides = [
    <Blog key={0} nombre="CarolinaMacias" indice="0" />,
    <div key={1}>
      <h3>Salmos 119:105</h3>
      <p>Lámpara es a mis pies tu palabra, Y lumbrera a mi camino.</p>
    </div>,
    <h2 key={2}>¿Alguna vez has caminado por un lugar oscuro?</h2>,
    <p key={3}>
      En tal lugar resulta complicado dar pasos firmes y por ello, tropezar,
      caer, herirse o perder el rumbo son consecuencias de ello.
    </p>,
    <p key={4}>
      La dificultad que se enfrenta en esa situación, suele ser la misma que al
      andar por este mundo lleno de oscuridad.
    </p>,
    <p key={5}>
      Juan 12:35 menciona que el que anda en oscuridad no sabe a dónde va. Sin
      embargo, el versículo base muestra la solución.
    </p>,
    <p key={6}>
      La Palabra de Dios es una lámpara, una lámpara que alumbra el camino de
      todos aquellos que se disponen a hacer Su voluntad, caminando en la
      dirección que Él ha determinado.
    </p>,
    <p key={7}>
      Haz de Su Palabra tu mayor refugio y pide continuamente a Dios que alumbre
      tu camino...
    </p>,
    <p key={8}>
      Ya que es la única solución para permanecer firmes y en dirección a Su
      propósito.
    </p>,
    <Blog key={9} nombre="CarolinaMacias" indice="0" />,
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
                className={`Slide Slide${index + 1} ${
                  currentSlide === index ? "active" : ""
                } ${currentSlide > index ? "previous" : ""}`}
                style={{ display: currentSlide === index ? "flex" : "none" }}
              >
                <div
                  className={`BlogContentItem ${
                    currentSlide === index ? "fadeInOut" : ""
                  }`}
                >
                  {slide}
                </div>
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
                        <button onClick={handleShare}>Compartir</button>
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss={false}
        toastClassName="custom-toast"
      />
      <style jsx>{`
        .BlogContentContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0 20px;
           {
            /* height: fit-content; */
          }
        }
        .BlogContentSliderCards {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 66vh;
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
          font-size: 4vh;
          align-items: center;
          justify-content: space-between;
          border-radius: 10px;
          gap: 20px;
          text-align: center;
          background: red;
        }
        .BlogContentItem {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        .SlideButtons {
          display: flex;
          width: 100%;
          gap: 20px;
        }
        .Slide {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .Slide.active {
          opacity: 1;
          z-index: 1;
        }

        .Slide.previous {
          opacity: 0;
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
          background-color: var(--light-grey);
          color: var(--secondary-color);
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
        .custom-toast {
          z-index: 999999999;
        }

        .fadeInOut {
          animation: fadeInOut 2s ease-in-out;
        }
      `}</style>
    </>
  );
}
