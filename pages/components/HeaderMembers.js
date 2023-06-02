import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import Link from "next/link";
import NotifyIcon from "../../public/assets/icons/animated-icons/NotifyIcon.json";

export default function HeaderMembers() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [animationKey, setAnimationKey] = useState(0); // Agregamos una clave de animación para reiniciarla
  const router = useRouter();

  const handleIconClick = (iconName) => {
    setIsPlaying(true);
    setActiveIcon(iconName);
    setAnimationKey((prevKey) => prevKey + 1); // Actualizamos la clave de animación al hacer clic
  };

  useEffect(() => {
    // Detener la animación cuando el componente se desmonte
    return () => {
      setIsPlaying(false);
      setActiveIcon(null);
    };
  }, []);

  const animationRefs = {
    notify: useRef(null),
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
      <nav className="NavContainer">
        <div className="NavFull NavFullMembers">
          <img
            src="/assets/light_logo_manantial.png"
            alt="Logo Manantial de Vida"
            className={router.pathname === "/" ? "LogoOpacity" : ""}
          />
          <Link href="/notify">
            <div
              onClick={() => handleIconClick("notify")}
              className="ItemMenuContainer"
            >
              <div className="PostProfilePicture">
                <div
                  className={`IconContainer ${
                    activeIcon === "notify" ? "active" : ""
                  }`}
                >
                  <Lottie
                    options={{
                      animationData: NotifyIcon,
                      loop: false,
                      autoplay: false,
                    }}
                    isStopped={activeIcon !== "notify" || !isPlaying}
                    width={34}
                    height={34}
                    isClickToPauseDisabled
                    ref={animationRefs.notify}
                    key={animationKey} // Usamos la clave de animación para reiniciarla
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
