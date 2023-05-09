import Link from "next/link";
import TimeAgo from "../TimeAgo";
import Novedad from "../Novedad";

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
                        <img src={props.picture} alt={props.autor} /><i></i>
                    </div>
                    <div>
                        <h4>{props.autor}</h4>
                        <TimeAgo dia={props.dia} mes={props.mes} año={props.año} hora={props.hora} fechaPublicacion={fechaPublicacion} useLocalTime={true} />
                    </div>
                </div>
                <div className="PostMensajeContainer">
                    <p>{props.mensaje}</p>
                    {props.novedad && (
                        <div className="NovedadContainer">
                            <Novedad content={`${props.novedad}`} />
                        </div>
                    )}
                </div>
                <Link href={rutaCodificada}>
                    <div className="PostLinkContainer">
                        {props.titleLink}
                    </div>    
                </Link>
            </div>
            <style jsx>{`
                .PostGlobalContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    background-color: var(--light-grey);
                    padding: 20px;
                    gap: 20px;
                }
                .PostAutorContainer
                {
                    display: flex;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                    align-items: center;
                }
                .PostProfilePicture
                {
                    position: relative;
                    display: flex;
                    width: 40px;
                    height: 40px;
                    background-color: var(--primary-color);
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;
                }
                .PostProfilePicture img
                {
                    width: auto;
                    height: 18px;
                }
                .PostProfilePicture i
                {
                    position: absolute;
                    right: -4px;
                    bottom: -4px;
                    width: 24px;
                    height: 24px;
                    background-image: url('/assets/verify.png');
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                {/* .PostMensajeContainer
                {
                    font-size: 17px;
                } */}
                .NovedadContainer
                {
                    color: var(--secondary-color);
                }
                .PostLinkContainer
                {
                    display: flex;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color: var(--mid-grey);
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: 0.6s;
                }
                .PostLinkContainer:hover
                {
                    background-color: var(--dark-grey);
                }
            `}</style>
        </>
    )
}