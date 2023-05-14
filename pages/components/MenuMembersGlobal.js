import Link from "next/link";
import SmallNovedad from "./SmallNovedad";
import { useContext } from "react";
import { UserContext } from "../UserProvider";

export default function MenuMembers(props) {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && user.email && (
        <div className="theme MenuGlobalContainer">
          <h1>Menu</h1>
          <div href="/">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img
                  id="user_profile_picture"
                  src={user.picture}
                  alt="Home Icon"
                />
              </div>
              <div className="InfoUserMenuGlobal">
                <p>{user.name}</p>
                <span>{user.email}</span>
              </div>
            </div>
          </div>
          <Link className="InicioDesktop" href="/">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img src="/assets/icons/home-icon.png" alt="Home Icon" />
              </div>
              <p>Inicio</p>
            </div>
          </Link>
          Accesos directos
          <Link href="/blog">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img src="/assets/icons/blog-icon.png" alt="Home Icon" />
              </div>
              <p>Blog</p>
            </div>
          </Link>
          <Link href="/predicas">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img
                  src="/assets/icons/new-predicas-icon.png"
                  alt="Home Icon"
                />
              </div>
              <p>Prédicas</p>
            </div>
          </Link>
          <Link href="/boletin">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img src="/assets/icons/news-icon.png" alt="Home Icon" />
              </div>
              <p>Boletín</p>
            </div>
          </Link>
          <div className="PrivateContainerMenu">
            Privados
            <Link href="/miembros/calendario-maestros">
              <div className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <img
                    src="/assets/icons/calendar-icon.png"
                    alt="Calendar Icon"
                  />
                </div>
                <p>Maestros</p>
              </div>
            </Link>
            <Link href="/miembros/calendario-sociedades">
              <div className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <img
                    src="/assets/icons/calendar-icon.png"
                    alt="Calendar Icon"
                  />
                </div>
                <p>Sociedades</p>
              </div>
            </Link>
            Guias
            <Link href="/miembros/tutoriales/como-ser-ujier">
              <div className="ItemMenuContainer">
                <div className="PostProfilePicture">
                  <img src="/assets/icons/ujier-icon.png" alt="Ujier Icon" />
                </div>
                <p>Como ser ujier</p>
              </div>
            </Link>
          </div>
          Calendarios
          <Link href="/actividades">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img
                  src="/assets/icons/calendar-icon.png"
                  alt="Calendar Icon"
                />
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
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img src="/assets/icons/map-icon-active.png" alt="Image Icon" />
              </div>
              <p>Ver mapa</p>
            </div>
          </a>
          Recursos
          <Link href="/miembros/recursos/logotipo">
            <div className="ItemMenuContainer">
              <div className="PostProfilePicture">
                <img src="/assets/icons/image-icon.png" alt="Image Icon" />
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
          padding: 20px;
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
          height: auto;
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
