import Link from "next/link";
import { useState, useContext, useEffect, useRef } from "react";
import { UserContext } from "../UserProvider";
import Lottie from "react-lottie";
import HomeIcon from "../../public/assets/icons/animated-icons/HomeIcon.json";
// import BlogIcon from "../../public/assets/icons/animated-icons/BlogIcon.json";
import PredicaIcon from "../../public/assets/icons/animated-icons/PredicaIcon.json";
import ArticleIcon from "../../public/assets/icons/animated-icons/ArticleIcon.json";
import NewsIcon from "../../public/assets/icons/animated-icons/NewsIcon.json";

export default function MenuMobile() {
  const { user } = useContext(UserContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [iconColor, setIconColor] = useState("#515151");

  const handleIconClick = (iconName) => {
    setIsPlaying(true);
    setActiveIcon(iconName);
    setIconColor("#fff"); // Cambiar el color al hacer clic
  };

  useEffect(() => {
    // Detener la animación cuando el componente se desmonte
    return () => {
      setIsPlaying(false);
      setActiveIcon(null);
      setIconColor("#515151"); // Restaurar el color por defecto
    };
  }, []);

  const animationRefs = {
    home: useRef(null),
    blog: useRef(null),
    predicas: useRef(null),
    article: useRef(null),
    news: useRef(null),
  };

  useEffect(() => {
    Object.keys(animationRefs).forEach((key) => {
      const ref = animationRefs[key];
      if (isPlaying && activeIcon === key && ref.current) {
        ref.current.play();
      } else if ((!isPlaying || activeIcon !== key) && ref.current) {
        ref.current.stop();
      }
    });
  }, [isPlaying, activeIcon]);

  return (
    <>
      {user && user.email && (
        <div className="BottomMenuContainer">
          <Link className="BottomMenuButton" href="/">
            <div
              className={`IconContainer ${activeIcon === "home" ? "active" : ""}`}
              onClick={() => handleIconClick("home")}
            >
              <Lottie
                options={{
                  animationData: HomeIcon,
                  loop: false,
                  autoplay: false,
                }}
                isStopped={activeIcon !== "home" || !isPlaying}
                width={24}
                height={24}
                isClickToPauseDisabled
                ref={animationRefs.home}
              />
              <p>Inicio</p>
            </div>
          </Link>

          <Link className="BottomMenuButton" href="/blog">
            <div
              className={`IconContainer ${activeIcon === "article" ? "active" : ""}`}
              onClick={() => handleIconClick("article")}
            >
              <Lottie
                options={{
                  animationData: ArticleIcon,
                  loop: false,
                  autoplay: false,
                }}
                isStopped={activeIcon !== "article" || !isPlaying}
                width={24}
                height={24}
                isClickToPauseDisabled
                ref={animationRefs.article}
              />
              <p>Blog</p>
            </div>
          </Link>
  
          <Link className="BottomMenuButton" href="/predicas">
            <div
              className={`IconContainer ${activeIcon === "predicas" ? "active" : ""}`}
              onClick={() => handleIconClick("predicas")}
            >
              <Lottie
                options={{
                  animationData: PredicaIcon,
                  loop: false,
                  autoplay: false,
                }}
                isStopped={activeIcon !== "predicas" || !isPlaying}
                width={24}
                height={24}
                isClickToPauseDisabled
                ref={animationRefs.predicas}
              />
              <p>Prédicas</p>
            </div>
          </Link>

          <Link className="BottomMenuButton" href="/boletin">
            <div
              className={`IconContainer ${activeIcon === "news" ? "active" : ""}`}
              onClick={() => handleIconClick("news")}
            >
              <Lottie
                options={{
                  animationData: NewsIcon,
                  loop: false,
                  autoplay: false,
                }}
                isStopped={activeIcon !== "news" || !isPlaying}
                width={24}
                height={24}
                isClickToPauseDisabled
                ref={animationRefs.news}
              />
              <p>Boletín</p>
            </div>
          </Link>
  
          <Link className="BottomMenuButton" href="/miembros/menu">
            <div
              className={`IconContainer ${activeIcon === "menu" ? "active" : ""}`}
              onClick={() => handleIconClick("menu")}
            >
              <img
                className="ProfilePicture"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
                src={user.picture}
                alt="Menu Icon"
              />
            </div>
            <p>Menú</p>
          </Link>
        </div>
      )}
      <style jsx>{`
        .BottomMenuContainer {
          position: fixed;
          bottom: 0;
          display: none;
          width: 100%;
          height: 80px;
          justify-content: space-around;
          align-items: center;
          background-color: #000000b1;
          backdrop-filter: blur(10px);
          {
            /* border-top: 0.5px solid var(--light-grey); */
          }
        }
        .BottomMenuContainer img {
          width: 24px;
          height: 24px;
        }
        .ProfilePicture {
          border-radius: 50%;
          border: solid 2px var(--primary-color);
        }
        .IconContainer.active {
          fill: #fff;
        }
        .IconContainer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          fill: #515151;
        }
        @media only screen and (max-width: 860px) {
          .BottomMenuContainer {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}

