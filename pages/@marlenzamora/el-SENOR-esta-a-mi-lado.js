import Head from "next/head";
import Blog from "../components/Blog";
import BlogShare from "../components/BlogShare";
import { useState } from "react";
import Footer from "../components/Footer";
import BackHeader from "../components/BackHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function IndividualBlog() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <Blog key={0} nombre="MarlenZamora" indice="0" />,
    <div key={1}>
      <h3>2 Corintios 11:25</h3>
      <p>
        Tres veces he sido azotado con varas; una vez apedreado; tres veces he
        padecido naufragio; una noche y un día he estado como náufrago en alta
        mar;
      </p>
    </div>,
    <div key={2}>
      <h3>2 Corintios 11:26</h3>
      <p>
        en caminos muchas veces; en peligros de ríos, peligros de ladrones,
        peligros de los de mi nación, peligros de los gentiles, peligros en la
        ciudad, peligros en el desierto, peligros en el mar, peligros entre
        falsos hermanos;
      </p>
    </div>,
    <div key={3}>
      <h3>2 Corintios 11:27</h3>
      <p>
        en trabajo y fatiga, en muchos desvelos, en hambre y sed, en muchos
        ayunos, en frío y en desnudez;
      </p>
    </div>,
    <div key={4}>
      <h3>2 Corintios 11:28</h3>
      <p>
        y además de otras cosas, lo que sobre mí se agolpa cada día, la
        preocupación por todas las iglesias.
      </p>
    </div>,
    <h2 key={5}>
      Ser un seguidor comprometido de Jesús no te exime del sufrimiento y del
      dolor...
    </h2>,
    <p key={6}>
      ...pero la gloriosa esperanza es que aun en el dolor, en la perdida, en la
      enfermedad, encontramos alivio en los brazos de un Padre que nos ama.
    </p>,
    <p key={7}>Y sabemos esto, pero lo olvidamos.</p>,
    <p key={8}>
      Y en medio del desánimo pensamos “¿Por qué esto me pasó a mí? Estaba
      tratando de obedecer a Dios.
    </p>,
    <p key={9}>Lo amo. Lo sigo. ¡Por que Dios dejó que pasara esto!”.</p>,
    <p key={10}>Recuerda que nosotros no vemos el panorama completo</p>,
    <p key={11}>
      No sabes cómo Dios está obrando y moviendo las piezas para cumplir Su
      eterno propósito en tu vida.
    </p>,
    <p key={12}>
      Puede que tus circunstancias actuales que son tan desesperantes, sean
      exactamente lo que Dios está utilizando para traer victoria a tu vida...
    </p>,
    <p key={13}>...solo confía en su perfecta y agradable voluntad.</p>,
    <p key={14}>
      Pablo sabía de dónde venían sus fuerzas, el entendió que no estaba solo
      aún cuando todos lo abandonaron.
    </p>,

    <div key={15}>
      <h3>2 Timoteo 4:16</h3>
      <p>
        En mi primera defensa ninguno estuvo a mi lado, sino que todos me
        desampararon; no les sea tomado en cuenta.
      </p>
    </div>,
    <div key={16}>
      <h3>2 Timoteo 4:17</h3>
      <p>
        Pero el Señor estuvo a mi lado, y me dio fuerzas, para que por mí fuese
        cumplida la predicación, y que todos los gentiles oyesen. Así fui
        librado de la boca del león.
      </p>
    </div>,
    <div key={17}>
      <h3>2 Timoteo 4:18</h3>
      <p>
        Y el Señor me librará de toda obra mala, y me preservará para su reino
        celestial. A él sea gloria por los siglos de los siglos. Amén.
      </p>
    </div>,

    <p key={18}>
      El Señor nos librará de todo ataque maligno, necesitas recordar esto
      cuando sientes que no puedes más...
    </p>,
    <p key={19}>
      cuando te sientes abandonado o incluso cuando realmente todos te han
      desamparado como al apóstol Pablo.
    </p>,
    <p key={20}>Sigamos confiando y así también nosotros poder declarar:</p>,
    <div key={21}>
      <h3>2 Timoteo 4:17</h3>
      <h2>Pero el Señor estuvo a mi lado y me dio fuerzas...</h2>
    </div>,
    <p key={22}>Dios está a tu lado. Él te dará ánimo.</p>,
    <p key={23}>Él te dará las fuerzas incluso para resistir la prueba.</p>,
    <p key={24}>Todo es con un propósito...</p>,
    <p key={25}>y el propósito lo encontramos siempre a los pies de Cristo.</p>,

    <BlogShare key={9} nombre="MarlenZamora" indice="0" />,
  ];

  return (
    <>
      <Head>
        <title>El Señor está a mi lado | Marlen Zamora</title>
        <meta
          name="description"
          content="Ser un seguidor comprometido de Jesús no te exime del sufrimiento y del dolor, pero..."
        />
        <meta
          property="og:title"
          content="El Señor está a mi lado | Marlen Zamora"
        />
        <meta property="og:url" content="https://somosmamantial.org/blog" />
        <meta
          property="og:image"
          content="/assets/escritores/marlen-zamora/el-SENOR-esta-a-mi-lado-HD.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/escritores/marlen-zamora/el-SENOR-esta-a-mi-lado-HD.jpg"
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
