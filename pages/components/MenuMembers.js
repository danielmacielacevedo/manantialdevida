import Link from "next/link";
import SmallNovedad from "./SmallNovedad";

export default function Post(props) {

    // const autor = props.autor;
    // const mensaje = props.mensaje;
    // const link = props.link;
    // const titleLink = props.titleLink;
    // const picture = props.picture;

    return (
        <>

            <div className="MenuGlobalContainer">
                <h1>Menu</h1>
                <Link href="/miembros">
                    <div className="ItemMenuContainer InicioDesktop">
                        <div className="PostProfilePicture">
                            <img src="/assets/home-icon-active.png" alt="Home Icon" />
                        </div> 
                        <p>Inicio</p>
                    </div>
                </Link>
                <Link href="/">
                    <div className="ItemMenuContainer ">
                        <div className="PostProfilePicture">
                            <img src="/assets/icons/world-icon.png" alt="World Icon" />
                        </div> 
                        <p>Ir a somosmanantial.org</p>
                    </div>
                </Link>
                Calendarios
                <Link href="/miembros/calendario-maestros">
                    <div className="ItemMenuContainer">
                        <div className="PostProfilePicture">
                            <img src="/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                        </div> 
                        <p>Maestros</p>
                    </div>
                </Link>
                <Link href="/miembros/calendario-sociedades">
                    <div className="ItemMenuContainer">
                        <div className="PostProfilePicture">
                            <img src="/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                        </div> 
                        <p>Sociedades</p>
                        <SmallNovedad />
                    </div>
                </Link>
                <div href="/miembros/calendario-maestros">
                    <div className="ItemMenuContainer">
                        <div className="PostProfilePicture">
                            <img src="/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                        </div> 
                        <p>Ministerios <br/> <span>Próximamente</span> </p>
                    </div>
                </div>
                Guias
                <Link href="/miembros/tutoriales/como-ser-ujier">
                    <div className="ItemMenuContainer">
                        <div className="PostProfilePicture">
                            <img src="/assets/icons/ujier-icon.png" alt="Ujier Icon" />
                        </div> 
                        <p>Como ser ujier</p>
                    </div>
                </Link>
                Recursos
                <Link href="/miembros/recursos/logotipo">
                    <div className="ItemMenuContainer">
                        <div className="PostProfilePicture">
                            <img src="/assets/icons/image-icon.png" alt="Image Icon" />
                        </div> 
                        <p>Descargar logotipos</p>
                    </div>
                </Link>
            </div>
            <style jsx>{`
                .MenuGlobalContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    {/* padding: 20px; */}
                    gap: 20px;
                    color: var(--secondary-color);
                }
                .MenuGlobalContainer h1
                {
                    display: none;
                }
                .ItemMenuContainer
                {
                    display: flex;
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    padding: 10px 20px;
                    gap: 20px;
                    align-items: center;
                    background-color: var(--light-grey);
                    transition: 0.6s;
                }
                .ItemMenuContainer:hover
                {
                    background-color: var(--mid-grey);
                }
                .ItemMenuContainer span
                {
                    padding: 2px 10px;
                    border-radius: 4px;
                    font-size: 10px;
                    background-color: var(--primary-color);
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
                @media only screen and (max-width: 860px)
                {
                    .MenuGlobalContainer h1
                    {
                        display: flex;
                        margin-bottom: -20px;
                    }
                    .InicioDesktop
                    {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}