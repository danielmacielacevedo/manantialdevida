import Link from "next/link";
import TimeAgo from "../TimeAgo";

export default function Post(props) {

    const autor = props.autor;
    const mensaje = props.mensaje;
    const link = props.link;
    const titleLink = props.titleLink;
    const picture = props.picture;
    const fechaPublicacion = `${props.año}-${props.mes}-${props.dia}T${props.hora}:00:00.000Z`;

    return (
        <>
            <div className="PostGlobalContainer">
                <div className="PostAutorContainer">
                    <div className="PostProfilePicture">
                        <img src={picture} alt={autor} /><i></i>
                    </div>
                    <div>
                        <h4>{autor}</h4>
                        <TimeAgo fechaPublicacion={fechaPublicacion} useLocalTime={true} />
                    </div>
                </div>
                <div className="PostMensajeContainer">
                    <p>{mensaje}</p>
                </div>
                <Link href={link}>
                    <div className="PostLinkContainer">
                        {titleLink}
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
                .PostMensajeContainer
                {
                    font-size: 24px;
                }
                .PostLinkContainer
                {
                    display: flex;
                    padding: 20px;
                    border-radius: 4px;
                    background-color: var(--mid-grey);
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }
            `}</style>
        </>
    )
}