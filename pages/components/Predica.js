import React, { useState, useEffect } from "react";
import BackHeader from "./BackHeader";
import Footer from "./Footer";
import Reproductor from "./Reproductor/Reproductor";
import NewsBar from "./NewsBar";
import DynamicHead from "./DynamicHead";
import Ad from "./Ad";
import UltimasPredicas from "./Reproductor/UltimasPredicas";

export default function Predica(props) {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 340) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="Top" className="Site theme">
      <DynamicHead nombre={props.nombre} indice={props.indice} />
      <BackHeader />
      <div className={`MainContainer ${scrollDown ? "scroll-down" : ""}`}>
        <div className="PrimarySection">
          <Reproductor nombre={props.nombre} indice={props.indice} />
        </div>
        <div className="SecondarySection">
          <Ad />
          <h3>Prédicas recientes</h3>
          <UltimasPredicas />
        </div>
      </div>
      <NewsBar />
      <Footer />
      <style jsx>{`
        .Site
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          align-items: center;
          background-color: var(--primary-color);
          padding-top: 20px;
        }
        .MainContainer
        {
          display: flex;
          width: 100%;
          height: auto;
          gap: 20px;
          padding: 0 20px;
          {/* gap: 5%;
          padding: 0 5%; */}
          justify-self
        }
        .MainContainer.scroll-down
        {
          flex-direction: column;
          max-width: 600px;
          gap: 20px;
          padding: 0;
        }
        .PrimarySection
        {
          display: flex;
          flex: 2;
          width: 100%,
          height: auto;
        }
        .SecondarySection
        {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: auto;
          gap: 20px;
        }
        @media only screen and (max-width: 1024px)
        {
          .MainContainer
          {
            flex-direction: column;
            gap: 20px
          }
        }
        @media only screen and (max-width: 860px)
        {
          .Site
          {
            padding: 0;
          }
          .MainContainer
          {
            flex-direction: column;
            padding: 0;
            gap: 20px
          }
          .MainContainer.scroll-down
          {
            max-width: none;
            padding: 0;
          }
          .SecondarySection
          {
            padding: 0 20px
          }
        }
      `}</style>
    </div>
  );
}
