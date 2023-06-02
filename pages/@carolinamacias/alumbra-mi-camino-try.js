import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserProvider";
import Footer from "../components/Footer";
import BackHeader from "../components/BackHeader";
import Blog from "../components/Blog";

export default function IndividualBlog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesData, setSlidesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  useEffect(() => {
    fetch("/api/detallesBlog")
      .then((response) => response.json())
      .then((data) => {
        setSlidesData(
          data.CarolinaMacias[0].slides.map(
            (slide) => slide.component.props.children
          )
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

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
            {slidesData.map((slide, index) => (
              <div
                id="SlideContainer"
                key={index}
                className={`Slide${index + 1} ${
                  currentSlide === index ? "active" : ""
                }`}
                style={{ display: currentSlide === index ? "flex" : "none" }}
              >
                {slide}
                <div>
                  <Blog nombre="CarolinaMacias" blog="0" />
                </div>
                <div className="SlideButtons">
                  {currentSlide !== 0 && (
                    <button onClick={handlePrevSlide}>Anterior</button>
                  )}

                  {currentSlide === 0 && (
                    <button onClick={handleNextSlide}>Empezar a leer</button>
                  )}

                  {currentSlide !== 0 &&
                  currentSlide < slidesData.length - 1 ? (
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
