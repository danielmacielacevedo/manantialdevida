import Head from "next/head";
import Blog from "../components/Blog";
// import BlogVideo from "../components/BlogVideo";
import BlogShare from "../components/BlogShare";
import { useState } from "react";
// import { useState, useContext } from "react";
// import { UserContext } from "../UserProvider";
import Footer from "../components/Footer";
import BackHeader from "../components/BackHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import EntrarButtonBlog from "../components/EntrarButtonBlog";

export default function IndividualBlog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const { user } = useContext(UserContext);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleShare = () => {
    if (navigator.share) {
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
    <Blog key={0} nombre="MarlenZamora" indice="2" />,
    // <BlogVideo key={34} nombre="MarlenZamora" indice="1" />,
    <div key={1}>
      <h3>Mateo 6:25</h3>
      <p>
        Por tanto os digo: No os afanéis por vuestra vida, qué habéis de comer o
        qué habéis de beber; ni por vuestro cuerpo, qué habéis de vestir. ¿No es
        la vida más que el alimento, y el cuerpo más que el vestido?
      </p>
    </div>,
    <div key={1}>
      <h3>Mateo 6:26</h3>
      <p>
        Mirad las aves del cielo, que no siembran, ni siegan, ni recogen en
        graneros; y vuestro Padre celestial las alimenta. ¿No valéis vosotros
        mucho más que ellas?
      </p>
    </div>,
    <p key={2}>
      Una de las mayores preocupaciones diarias puede ser la provisión para
      nuestras necesidades
    </p>,
    <p key={2}>algunas veces normalizamos vivir con tal preocupación o afán</p>,
    <p key={2}>
      creyendo que se trata solo de nuestra capacidad para alcanzar lo que
      necesitamos o lo que creemos necesitar.
    </p>,
    <p key={2}>Pero Jesús nos enseña a descansar en la provisión de Dios</p>,
    <p key={2}>
      nos enseña la perfección con la que Dios creo la naturaleza y que no es
      sostenida por si misma
    </p>,
    <p key={2}>
      sino que se debe a la constante y generosa provisión de Dios.
    </p>,
    <p key={2}>
      Esto nos enseña a confiar que Dios tiene atención de nuestras necesidades.
    </p>,
    <h2 key={2}>El sabe que es lo necesitamos</h2>,
    <p key={2}>
      y no solo lo sabe sino que también es quien suple cada necesidad.
    </p>,
    <p key={2}>El afán no debe gobernar nuestra vida</p>,
    <p key={2}>aprendamos a descansar en las promesas de nuestro Dios</p>,
    <p key={2}>recordemos cómo Él ha seguido siendo fiel para con nosotros.</p>,
    <p key={2}>
      Dejemos de normalizar vivir con preocupación por el día de mañana
    </p>,
    <p key={2}>
      y llevemos a Dios estas preocupaciones en oración en lugar de sobre
      preocuparnos por ellas.
    </p>,
    <p key={2}>
      Vivir constantemente afanados no es una característica de una vida
      centrada en el evangelio.
    </p>,
    <div key={1}>
      <h3>Filipenses 4:19</h3>
      <p>
        Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en
        gloria en Cristo Jesús.
      </p>
    </div>,
    <p key={2}>Centremos nuestra vida en el evangelio...</p>,
    <p key={2}>
      y vivamos confiados en lo que Jesús logró para nosotros en la cruz.
    </p>,
    <BlogShare key={35} nombre="MarlenZamora" indice="2" />,
  ];

  return (
    <>
      <Head>
        <title>Mi proveedor | Marlen Zamora</title>
        <meta
          name="description"
          content="Una de las mayores preocupaciones diarias puede ser la provisión para..."
        />
        <meta property="og:title" content="Mi proveedor | Marlen Zamora" />
        <meta property="og:url" content="https://somosmamantial.org/blog" />
        <meta
          property="og:image"
          content="/assets/escritores/marlen-zamora/mi-buen-pastor-HD.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/escritores/marlen-zamora/mi-buen-pastor-HD.jpg"
        ></link>
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
        {/* {user === null && (
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
                  <EntrarButtonBlog>
                    <img id="ButtonImg" src="/assets/icons/google.png" />
                    Entrar para leer
                  </EntrarButtonBlog>
                </div>
              </div>
            ))}
          </div>
        )} */}

        {/* {user && user.email && ( */}
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
                      <button id="whiteButton" onClick={handleShare}>
                        Compartir
                      </button>
                    </>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        {/* )} */}
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
          transition: 0.6s;
        }
        button:hover {
          background-color: var(--mid-grey);
        }
        #whiteButton {
          background: var(--secondary-color);
          color: var(--light-grey);
        }
        #whiteButton:hover {
          background: var(--dark-grey);
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
