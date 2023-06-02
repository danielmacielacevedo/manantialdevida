import Link from "next/link";
import TimeAgo from "../TimeAgoFull";
import Novedad from "../Novedad";
import Alerta from "../Alerta";
import BlogNotify from "../BlogNotify";
import EntrarButton from "../EntrarButton";

export default function PostComponent(props) {
  const link = props.link;
  const fechaPublicacion = `${props.año}-${props.mes}-${props.dia}T${props.hora}:00:00.000Z`;

  const ruta = link;
  const rutaCodificada = encodeURI(ruta);
  console.log(rutaCodificada);

  return (
    <>
      <div className="PostGlobalContainer">
        <div className="PostAutorContainer">
          <div className="PostProfilePicture">
            <img src={props.picture} alt={props.autor} />
            <i></i>
          </div>
          <div>
            <h4>{props.autor}</h4>
            <TimeAgo
              dia={props.dia}
              mes={props.mes}
              año={props.año}
              hora={props.hora}
              fechaPublicacion={fechaPublicacion}
              useLocalTime={true}
            />
          </div>
        </div>
        <div className="PostMensajeContainer">
          {props.mensaje && <p>{props.mensaje}</p>}
          {props.novedad && (
            <div className="NovedadContainer">
              <Novedad content={`${props.novedad}`} />
            </div>
          )}
          {props.alerta && (
            <div className="NovedadContainer">
              <Alerta content={`${props.alerta}`} />
            </div>
          )}
          {props.blog && (
            <div className="NovedadContainer">
              <BlogNotify content={`${props.blog}`} />
            </div>
          )}
        </div>
        {props.titleLink && (
          <Link href={rutaCodificada}>
            <div className="PostLinkContainer">{props.titleLink}</div>
          </Link>
        )}
        {props.registro && (
          <EntrarButton>
            <img id="ButtonImg" src="/assets/icons/google.png" />
            Entrar
          </EntrarButton>
        )}
      </div>
      <style jsx>{`
        .PostGlobalContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          border-radius: 10px;
          background-color: var(--light-grey);
          padding: 20px;
          gap: 20px;
        }
        .PostAutorContainer {
          display: flex;
          width: 100%;
          height: auto;
          gap: 20px;
          align-items: center;
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
        .PostProfilePicture i {
          position: absolute;
          right: -4px;
          bottom: -4px;
          width: 24px;
          height: 24px;
          background-image: url("/assets/verify.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .PostMensajeContainer {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .NovedadContainer {
          color: var(--secondary-color);
        }
        .PostLinkContainer {
          display: flex;
          padding: 10px 20px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          transition: 0.6s;
          background-color: var(--mid-grey);
          color: var(--secondary-color);
        }
        .PostLinkContainer:hover {
          background-color: var(--ligth-grey);
        }
      `}</style>
    </>
  );
}
