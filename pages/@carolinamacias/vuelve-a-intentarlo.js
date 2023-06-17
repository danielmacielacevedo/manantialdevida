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
    <Blog key={0} nombre="CarolinaMacias" indice="1" />,
    <div key={1}>
      <h3>Lucas 5:4</h3>
      <p>
        Cuando terminó de hablar, dijo a Simón: Boga mar adentro, y echad
        vuestras redes para pescar.
      </p>
    </div>,
    <div key={2}>
      <h3>Lucas 5:5</h3>
      <p>
        Respondiendo Simón, le dijo: Maestro, toda la noche hemos estado
        trabajando, y nada hemos pescado; mas en tu palabra echaré la red.
      </p>
    </div>,
    <p key={3}>Cuando nosotros mismos intentamos llevar algo a cabo,</p>,
    <p key={3}>
      lo más seguro es que al final del camino obtengamos fracaso, en lugar de
      éxito;
    </p>,
    <p key={3}>
      porque las fuerzas, el ánimo, la esperanza o la paciencia se nos
      terminan...
    </p>,
    <p key={3}>
      Y esto es lo que vivieron Pedro y sus compañeros después de pasar toda una
      noche intentando pescar basados en sus habilidades como pescadores.
    </p>,
    <p key={3}>Jesús sabía lo que ellos estaban atravesando</p>,
    <p key={3}>
      pero también que lo único que ellos necesitaban era la ayuda de Dios
    </p>,
    <p key={3}>Por ello, Jesús le dió un mandamiento a Pedro:</p>,
    <h2 key={3}>Boga mar adentro, y echad vuestras redes para pescar.</h2>,
    <p key={3}>lo que provocó un cambio sorprendente en el panorama</p>,
    <p key={3}>
      porque aquel Pedro que había perdido toda la esperanza junto con sus
      compañeros
    </p>,
    <p key={3}>al comenzar a lavar sus redes le respondió a Jesús:</p>,
    <p key={3}>
      Aunque toda la noche estuvimos trabajando, y no conseguimos pescar nada,
    </p>,
    <h2 key={3}>En tu palabra echaré la red.</h2>,
    <p key={3}>
      ...y esto bastó para que Pedro y sus compañeros vieran la gloria de Dios a
      través de aquella pesca tan abundante.
    </p>,
    <h2 key={3}>¡VUELVE A INTENTARLO!</h2>,
    <p key={3}>Aunque le hayas fallado a Dios.</p>,
    <p key={3}>Aunque al orar por alguna situación no veas cambios.</p>,
    <p key={3}>Aunque hayas fracasado en tus estudios.</p>,
    <p key={3}>Aunque al clamar por un trabajo sigas sin encontrarlo.</p>,
    <h2 key={3}>¡VUELVE A INTENTARLO!</h2>,
    <p key={3}>
      Pero ahora dejando de lado tus capacidades, para que sea el poder y la
      ayuda de Dios actuando.
    </p>,
    <p key={3}>
      El fracaso de la humanidad radica en que hemos vivido erróneamente
      haciendo las cosas a nuestra manera
    </p>,
    <p key={3}>y dejando de lado la ayuda que Dios nos ofrece.</p>,
    <div key={1}>
      <h3>Proverbios 16:3</h3>
      <p>
        Deja en manos de Dios todo lo que haces, y tus proyectos se harán
        realidad.
      </p>
    </div>,
    <p key={3}>
      Esto basta para entender que si queremos ver las cosas suceder...
    </p>,
    <p key={3}>...es tiempo de comenzar a depender solamente de Él.</p>,
    <BlogShare key={9} nombre="CarolinaMacias" indice="1" />,
  ];

  return (
    <>
      <Head>
        <title>Vuelve a intentarlo | Carolina Macias</title>
        <meta
          name="description"
          content="Cuando nosotros mismos intentamos llevar algo a cabo..."
        />
        <meta
          property="og:title"
          content="Vuelve a intentarlo | Carolina Macias"
        />
        <meta property="og:url" content="https://somosmamantial.org/blog" />
        <meta
          property="og:image"
          content="/assets/escritores/carolina-macias/vuelve-a-intentarlo-HD.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/escritores/carolina-macias/vuelve-a-intentarlo-HD.jpg"
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
