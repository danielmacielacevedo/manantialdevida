import Link from "next/link";
import SmallNovedad from "./SmallNovedad";
import { useState, useContext, useEffect, useRef } from "react";
import { UserContext } from "../UserProvider";
import Lottie from "react-lottie";
import HomeIcon from "../../public/assets/icons/animated-icons/HomeIcon.json";
import BlogIcon from "../../public/assets/icons/animated-icons/BlogIcon.json";
import PredicaIcon from "../../public/assets/icons/animated-icons/PredicaIcon.json";
import ArticleIcon from "../../public/assets/icons/animated-icons/ArticleIcon.json";
import CalendarIcon from "../../public/assets/icons/animated-icons/CalendarIcon.json";
import HumanIcon from "../../public/assets/icons/animated-icons/HumanIcon.json";
import DirectionsIcon from "../../public/assets/icons/animated-icons/DirectionsIcon.json";
import FolderIcon from "../../public/assets/icons/animated-icons/FolderIcon.json";

export default function MenuMembers(props) {
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

    calendar1: useRef(null),
    calendar2: useRef(null),
    calendar3: useRef(null),
    calendar4: useRef(null),

    human: useRef(null),

    directions: useRef(null),
    
    folder: useRef(null),
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
        <div className="theme MenuGlobalContainer">
          <h1>Menu</h1>
          <div href="/">
            <div className="ItemMenuContainer">
              <div id="user_profile_picture_container" className="PostProfilePicture">
                <img
                  referrerPolicy="no-referrer"
                  id="user_profile_picture"
                  src={user.picture}
                  alt="Home Icon"
                />
              </div>
              <div className="InfoUserMenuGlobal">
                <p>{user.name}</p>
                {/* <span>{user.email}</span> */}
              </div>
            </div>
          </div>
          <Link className="InicioDesktop" href="/">
            <div onClick={() => handleIconClick("home")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                  className={`IconContainer ${activeIcon === "home" ? "active" : ""}`}
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
                </div>
              </div>
              <p>Inicio</p>
            </div>
          </Link>
          Accesos directos
          <Link href="/blog">
            <div onClick={() => handleIconClick("blog")} className="ItemMenuContainer">
              <div className="PostProfilePicture">
              <div
              className={`IconContainer ${activeIcon === "blog" ? "active" : ""}`}
            >
              <Lottie
                options={{
                  animationData: BlogIcon,
                  loop: false,
                  autoplay: false,
                }}
                isStopped={activeIcon !== "blog" || !isPlaying}
                width={24}
                height={24}
                isClickToPauseDisabled
                ref={animationRefs.blog}
              />
            </div>
              </div>
              <p>Blog</p>
            </div>
          </Link>
          <Link href="/predicas">
            <div onClick={() => handleIconClick("predicas")} className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <div
                className={`IconContainer ${activeIcon === "predicas" ? "active" : ""}`}
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
              </div>
              </div>
              <p>Prédicas</p>
            </div>
          </Link>
          <Link href="/boletin">
            <div onClick={() => handleIconClick("article")} className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <div
                  className={`IconContainer ${activeIcon === "article" ? "active" : ""}`}
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
                </div>
              </div>
              <p>Boletín</p>
            </div>
          </Link>
          <div className="PrivateContainerMenu">
            Privados
            <Link href="/miembros/calendario-maestros">
              <div onClick={() => handleIconClick("calendar1")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "calendar1" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: CalendarIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "calendar1" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.calendar1}
                    />
                  </div>
                </div>
                <p>Maestros</p>
              </div>
            </Link>
            <Link href="/miembros/calendario-sociedades">
            <div onClick={() => handleIconClick("calendar2")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "calendar2" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: CalendarIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "calendar2" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.calendar2}
                    />
                  </div>
                </div>
                <p>Sociedades</p>
              </div>
            </Link>
            <Link href="/miembros/calendario-audio">
            <div onClick={() => handleIconClick("calendar3")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "calendar3" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: CalendarIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "calendar3" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.calendar3}
                    />
                  </div>
                </div>
                <p>Audio</p>
              </div>
            </Link>
            Guias
            <Link href="/miembros/tutoriales/como-ser-ujier">
            <div onClick={() => handleIconClick("human")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "human" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: HumanIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "human" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.human}
                    />
                  </div>
                </div>
                <p>Como ser ujier</p>
              </div>
            </Link>
          </div>
          Calendarios
          <Link href="/actividades">
          <div onClick={() => handleIconClick("calendar4")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "calendar4" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: CalendarIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "calendar4" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.calendar4}
                    />
                  </div>
                </div>
              <p>Actividades</p>
              <SmallNovedad />
            </div>
          </Link>
          Como llegar
          <a
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/BJ5W33SYbQfQr8cg9?g_st=ic"
          >
          <div onClick={() => handleIconClick("directions")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "directions" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: DirectionsIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "directions" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.directions}
                    />
                  </div>
                </div>
              <p>Ver mapa</p>
            </div>
          </a>
          Recursos
          <Link href="/miembros/recursos/logotipo">
          <div onClick={() => handleIconClick("folder")} className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <div
                    className={`IconContainer ${activeIcon === "folder" ? "active" : ""}`}
                  >
                    <Lottie
                      options={{
                        animationData: FolderIcon,
                        loop: false,
                        autoplay: false,
                      }}
                      isStopped={activeIcon !== "folder" || !isPlaying}
                      width={24}
                      height={24}
                      isClickToPauseDisabled
                      ref={animationRefs.folder}
                    />
                  </div>
                </div>
              <p>Logotipos</p>
            </div>
          </Link>
        </div>
      )}
      <style jsx>{`
        .MenuGlobalContainer {
          top: 0;
          bottom: 0;
          position: fixed;
          overflow-y: scroll;
          overflow-x: hidden;
          left: 0;
          display: flex;
          flex-direction: column;
          width: fit-content;
          max-width: 400px;
          height: auto;
          border-radius: 10px;
          gap: 20px;
          color: var(--secondary-color);
          margin-top: 80px;
          padding: 0px 20px 20px 20px;
        }
        .MenuGlobalContainer::-webkit-scrollbar {
          width: 8px;
        }
        .MenuGlobalContainer::-webkit-scrollbar-thumb {
          background-color: #1d1d1d;
          border-radius: 10px;
        }
        .MenuGlobalContainer::-webkit-scrollbar-track {
          background-color: #000;
        }
        .MenuGlobalContainer h1 {
          display: none;
        }
        .PrivateContainerMenu {
          display: flex;
          flex-direction: column;
          background: var(--mid-grey);
          border-radius: 10px;
          padding: 20px;
          gap: 20px;
        }
        .ItemMenuContainer {
          display: flex;
          width: 100%;
          max-width: 260px;
          height: fit-content;
          border-radius: 10px;
          padding: 10px 20px;
          gap: 20px;
          align-items: center;
          background-color: var(--light-grey);
          transition: 0.6s;
        }
        .ItemMenuContainer:hover {
          background-color: var(--mid-grey);
        }
        .ItemMenuContainer span {
          display: flex;
          width: fit-content;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 10px;
          background-color: var(--primary-color);
        }
        .PostProfilePicture {
          position: relative;
          display: flex;
          width: 40px;
          height: 40px;
          background-color: var(--primary-color);
          border-radius: 50%;
          justify-content: center;
          align-items: center;
        }
        .PostProfilePicture img {
          width: auto;
          height: 18px;
        }
        #user_profile_picture_container
        {
          width: 40px;
          height: 40px;
        }
        #user_profile_picture {
          width: auto;
          height: 40px;
          border-radius: 50%;
        }
        .InfoUserMenuGlobal {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        @media only screen and (max-width: 1024px) {
          p {
            font-size: 10px;
          }
          .ItemMenuContainer {
            flex-direction: column;
            padding: 20px 10px;
          }
          .InfoUserMenuGlobal {
            display: none;
          }
        }
        @media only screen and (max-width: 860px) {
          p {
            font-size: 16px;
          }
          .MenuGlobalContainer {
            position: relative;
            display: flex;
            width: 100%;
            max-width: none;
            margin-top: 80px;
            padding: 0;
          }
          .MenuGlobalContainer h1 {
            display: flex;
            padding-top: 20px;
          }
          .ItemMenuContainer {
            flex-direction: row;
            max-width: none;
            padding: 10px 20px;
          }
          .InfoUserMenuGlobal {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
