// import Link from "next/link";
import { useRef } from "react";

export default function Header() {
  const menuButtonRef = useRef(null);
  const menuContentRef = useRef(null);

  function handleBurgerClick() {
    menuButtonRef.current.classList.toggle("Open");

    menuContentRef.current.classList.toggle("Open");
  }

  return (
    <>
      <nav className="NavContainer">
        {/* <div className="NavAvisos">
                    <p>Sitio en desarrollo.</p>
                    <a href="/info">Más info</a>
                </div> */}
        <div className="NavFull">
          <a href="#Top">
            <img src="/assets/light_logo_manantial.png" />
          </a>

          <div className="NavNavigation">
            <div className="NavSwitch">
              <div className="NavLinksContainer">
                <ul className="NavLinks">
                  <li>
                    <a href="/#Top">Inicio</a>
                  </li>
                  <li>
                    <a href="/#predicas">Prédicas</a>
                  </li>
                  <li>
                    <a href="/#info">Info</a>
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
            {/* <div className="LogInButtonContainer">
              <Link className="LogInButton" href="/miembros">Entrar</Link>
            </div> */}
          </div>
        </div>
        <div className="MenuMobileContainer">
          <div ref={menuContentRef} className="MenuMobileBackground">
            <div className="MenuMobileLinksContainer">
              <ul className="MenuMobileLinks">
                <li>
                  <a onClick={handleBurgerClick} href="/#Top">
                    Inicio
                  </a>
                </li>
                <li>
                  <a onClick={handleBurgerClick} href="/#predicas">
                    Prédicas
                  </a>
                </li>
                <li>
                  <a onClick={handleBurgerClick} href="/#info">
                    Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
