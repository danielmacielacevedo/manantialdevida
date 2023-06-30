import Head from "next/head";
import Blog from "../components/Blog";
import BlogVideo from "../components/BlogVideo";
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
    <Blog key={0} nombre="MarlenZamora" indice="1" />,
    <BlogVideo key={34} nombre="MarlenZamora" indice="1" />,
    <div key={1}>
      <h3>Salmo 23:1</h3>
      <p>Jehová es mi pastor; nada me faltará.</p>
    </div>,
    <div key={2}>
      <h3>Salmo 23:2</h3>
      <p>
        En lugares de delicados pastos me hará descansar; Junto a aguas de
        reposo me pastoreará.
      </p>
    </div>,
    <div key={3}>
      <h3>Salmo 23:3</h3>
      <p>
        Confortará mi alma; Me guiará por sendas de justicia por amor de su
        nombre.
      </p>
    </div>,
    <div key={4}>
      <h3>Salmo 23:4</h3>
      <p>
        Aunque ande en valle de sombra de muerte, No temeré mal alguno, porque
        tú estarás conmigo; Tu vara y tu cayado me infundirán aliento.
      </p>
    </div>,
    <div key={5}>
      <h3>Salmo 23:5</h3>
      <p>
        Aderezas mesa delante de mí en presencia de mis angustiadores; Unges mi
        cabeza con aceite; mi copa está rebosando.
      </p>
    </div>,
    <div key={6}>
      <h3>Salmo 23:6</h3>
      <p>
        Ciertamente el bien y la misericordia me seguirán todos los días de mi
        vida, Y en la casa de Jehová moraré por largos días.
      </p>
    </div>,
    <p key={7}>
      El Rey David quien fue pastor de ovejas en su juventud escribió este salmo
      tan conocido
    </p>,
    <p key={8}>
      el entendía bien el cuidado y la protección que requerían las ovejas y
      entendía la importancia de su trabajo
    </p>,
    <p key={9}>
      además comprendía que las ovejas dependían completamente de su pastor.
    </p>,
    <p key={10}>
      En este salmo el Rey David reconoció a Dios como su pastor pues había
      conocido su bondad, su protección, su fidelidad...
    </p>,
    <p key={11}>y la necesidad continua de Dios en su vida.</p>,
    <p key={12}>Algunas veces vivimos pensando que todo depende de nosotros</p>,
    <p key={13}>
      pensamos que el temor que nos abruma es más grande que nuestro Salvador
    </p>,
    <p key={14}>aprendemos a depender totalmente de nuestro buen pastor.</p>,
    <div key={15}>
      <h3>En Juan 10:1 Jesús afirmaría:</h3>
      <p>«Yo soy el buen pastor, el buen pastor su vida da por las ovejas»</p>
    </div>,
    <p key={16}>El buen Pastor sacrificó Su vida por nosotros, Sus ovejas.</p>,
    <p key={17}>Es algo asombroso y hermoso como nuestro buen Pastor...</p>,
    <p key={18}>
      nos amó tanto que no solo cuida de nosotros si no que entregó su vida
    </p>,
    <p key={19}>ahora gracias a Él nosotros nos gozamos en su salvación.</p>,
    <p key={20}>
      David puso su fe en el buen Pastor y al mencionar Nada nos faltará.
    </p>,
    <p key={21}>
      No significa que Él nos de todo lo que queramos, sino que el creyente
      encuentra todo lo que necesita en Cristo.
    </p>,
    <p key={22}>
      Hay un contentamiento en saber que Dios camina con nosotros. Aún cuando
      andemos «en valle de sombra de muerte»
    </p>,
    <p key={23}>
      El no nos dejará. Nos guardará, nos cubrirá y nos protegerá.
    </p>,
    <p key={24}>
      No temeremos por que sabemos quien está con nosotros Cristo es nuestra
      fuerza aun cuando nos sentimos débiles
    </p>,
    <p key={25}>Él usa esos momentos para que confiemos mas en Él</p>,
    <p key={26}>
      En vez de enfocarnos en lo que nos rodea, enfoquémonos en Jesús que camina
      con nosotros
    </p>,
    <p key={27}>
      Él dio Su vida para que disfrutáramos Su salvación, protección y provisión
    </p>,
    <h2 key={28}>El es todo lo que necesitas</h2>,
    <p key={29}>
      cuando quiera llegar el temor o llegues a sentir que estas en el valle de
      sombra de muerte
    </p>,
    <p key={30}>recuerda las hermosas palabras de nuestro salvador:</p>,
    <div key={31}>
      <h3>S. Juan 10:27-28</h3>
      <p>
        «Mis ovejas oyen mi voz, y yo las conozco, y me siguen, y yo les doy
        vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano»
      </p>
    </div>,
    <p key={32}>Confiemos sabiendo que estamos en su mano</p>,
    <p key={33}>y nadie ni nada nos arrebatará de Él.</p>,
    <BlogShare key={35} nombre="MarlenZamora" indice="1" />,
  ];

  return (
    <>
      <Head>
        <title>Mi buen pastor | Marlen Zamora</title>
        <meta
          name="description"
          content="El Rey David quien fue pastor de ovejas en su juventud escribió..."
        />
        <meta property="og:title" content="Mi buen pastor | Marlen Zamora" />
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
