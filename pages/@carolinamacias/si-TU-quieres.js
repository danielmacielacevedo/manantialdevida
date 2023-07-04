import Head from "next/head";
import Blog from "../components/Blog";
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
    <Blog key={0} nombre="CarolinaMacias" indice="2" />,
    <div key={1}>
      <h3>Mateo 8:2</h3>
      <p>
        Y he aquí vino un leproso y se postró ante él, diciendo: Señor, si
        quieres, puedes limpiarme.
      </p>
    </div>,
    <div key={1}>
      <h3>Mateo 8:3</h3>
      <p>
        Jesús extendió la mano y le tocó, diciendo: Quiero; sé limpio. Y al
        instante su lepra desapareció.
      </p>
    </div>,
    <h2 key={3}>¿Voluntad de Dios?</h2>,
    <p key={3}>Disponer nuestra vida para hacerla es algo complicado</p>,
    <p key={3}>porque la mayoría de veces está no encaja con la nuestra.</p>,
    <p key={3}>
      La Biblia nos habla de un leproso que por encima de su voluntad prefirió
      la de Dios al venir delante de Jesús...
    </p>,
    <p key={3}>
      postrarse ante Él y decirle: Señor, SI TÚ QUIERES, puedes limpiarme.
    </p>,
    <p key={3}>
      La expresión SI TÍ QUIERES demuestra que a pesar de que esté hombre quería
      recibir sanidad para dejar de ser impuro y vivir una vida normal
    </p>,
    <p key={3}>prefirió que se hiciera lo que Dios quería</p>,
    <p key={3}>
      y eso le permitió recibir la sanidad cuando Jesús le tocó diciendo:
      quiero, sé limpio.
    </p>,
    <p key={3}>
      Además, la actitud de este hombre al venir delante de Jesús creyendo en
      que algo podía hacer por él y postrarse como una señal de rendición
    </p>,
    <p key={3}>
      nos da a entender que para recibir algo de parte de Dios, y no exactamente
      aquello que anhelamos, es necesario tener fe y humildad.
    </p>,
    <p key={3}>
      Menos mal lo que esté hombre quería era lo mismo que quería Jesús, pero...
    </p>,
    <p key={3}>¿Qué hay cuando esto no ocurre así?</p>,
    <p key={3}>
      Muchos optan por volverse a Dios con reclamos y condiciones llenos de
      soberbia.
    </p>,
    <p key={3}>Ya que no han aprendido a caminar en la voluntad del Padre.</p>,
    <p key={3}>
      Sin embargo, pretender que recibiremos todo lo que anhelamos nos priva de
      la buena, agradable y perfecta voluntad de Dios
    </p>,
    <p key={3}>
      y por ello, muy probablemente nunca experimentaremos su mano poderosa.
    </p>,
    <p key={3}>
      ¿Por qué no tomas hoy la decisión de acudir delante de Dios con un corazón
      sincero...
    </p>,
    <h2 key={3}>Un corazón que le exprese tus anhelos...</h2>,
    <p key={3}>
      pero que el principal de ellos sea que todo se haga solamente si en sus
      planes está determinado?
    </p>,
    <p key={3}>Recuerda que...</p>,
    <p key={3}>Él siempre tiene algo mucho mejor que darnos</p>,
    <h2 key={3}>planes de bien y no de mal</h2>,
    <p key={3}>para que tengamos un futuro lleno de esperanza.</p>,
    <BlogShare key={9} nombre="CarolinaMacias" indice="2" />,
  ];

  return (
    <>
      <Head>
        <title>Si Tú quieres | Carolina Macias</title>
        <meta
          name="description"
          content="Disponer nuestra vida para hacer..."
        />
        <meta property="og:title" content="Si Tú quieres | Carolina Macias" />
        <meta property="og:url" content="https://somosmamantial.org/blog" />
        <meta
          property="og:image"
          content="/assets/escritores/carolina-macias/si-TU-quieres-HD.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/escritores/carolina-macias/si-TU-quieres-HD.jpg"
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
