import Link from "next/link";
import { useRef } from "react";
import EntrarButton from "./EntrarButton";

export default function HeaderGeneral() {
  const menuButtonRef = useRef(null);
  const menuContentRef = useRef(null);

  function handleBurgerClick() {
    menuButtonRef.current.classList.toggle("Open");
    // localStorage.setItem('menuOpen', menuButtonRef.current.classList.contains('Open'))

    menuContentRef.current.classList.toggle("Open");
    // localStorage.setItem('menuOpen', menuContentRef.current.classList.contains('Open'))
  }

  return (
    <>
      <nav className="theme NavContainer">
        {/* <div className="NavAvisos">
                    <p>Sitio en desarrollo.</p>
                    <a href="/noticias">Más info</a>
                </div> */}
        <div className="NavFull">
          <Link href="/">
            <img
              src="/assets/light_logo_manantial.png"
              alt="Logo Manantial de Vida"
            />
          </Link>

          <div className="NavNavigation">
            <div className="NavSwitch">
              <div className="NavLinksContainer">
                <ul className="NavLinks">
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/predicas">Prédicas</Link>
                  </li>
                  <li>
                    <Link href="/info">Info</Link>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleBurgerClick}
                ref={menuButtonRef}
                className="MenuButton"
              >
                <div className="MenuButtonBurger"></div>
              </button>
            </div>
            <div className="LogInButtonContainer">
              <EntrarButton buttonURL="/entrar">
                <img id="ButtonImg" src="/assets/icons/google.png" />
                Entrar
              </EntrarButton>
            </div>
          </div>
        </div>
        <div className="MenuMobileContainer">
          <div ref={menuContentRef} className="MenuMobileBackground">
            <div className="MenuMobileLinksContainer">
              <ul className="MenuMobileLinks">
                <li>
                  <Link onClick={handleBurgerClick} href="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link onClick={handleBurgerClick} href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link onClick={handleBurgerClick} href="/predicas">
                    Prédicas
                  </Link>
                </li>
                <li>
                  <Link onClick={handleBurgerClick} href="/info">
                    Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
