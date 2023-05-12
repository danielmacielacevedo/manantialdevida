import Link from "next/link";
import Image from "next/image";
import { useContext } from 'react';
import { UserContext } from '../UserProvider';


export default function MenuMobile() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user && user.email && 
            <div className="BottomMenuContainer">
                <Link className="BottomMenuButton" href="/">
                    <img width={24} height={24} src="/assets/icons/home-icon.png" alt="Home Icon" />
                    <p>Inicio</p>
                </Link>

                <Link className="BottomMenuButton" href="/blog">
                    <img width={24} height={24} src="/assets/icons/blog-icon.png" alt="Home Icon" />
                    <p>Blog</p>
                </Link>

                <Link className="BottomMenuButton" href="/predicas">
                    <img width={24} height={24} src="/assets/icons/new-predicas-icon.png" alt="Home Icon" />
                    <p>Prédicas</p>
                </Link>

                {/* <Link className="BottomMenuButton" href="/boletin">
                    <img width={24} height={24} src="/assets/icons/news-icon.png" alt="Home Icon" />
                    <p>Boletín</p>
                </Link> */}

                <Link className="BottomMenuButton" href="/miembros/menu">
                    <img className="ProfilePicture" referrerPolicy="no-referrer" width={24} height={24} src={user.picture} alt="Menu Icon" />
                    <p>Menú</p>
                </Link>
            </div>
            }
            <style jsx>{`

                .BottomMenuContainer
                {
                    position: fixed;
                    bottom: 0;
                    display: none;
                    width: 100%;
                    height: 80px;
                    justify-content: space-around;
                    align-items: center;
                    background-color: #000000b1;
                    backdrop-filter: blur(10px);
                    {/* border-top: 0.5px solid var(--light-grey); */}
                }
                .BottomMenuContainer img
                {
                    width: 24px;
                    height: 24px;
                }
                .ProfilePicture
                {
                    border-radius: 50%;
                    border: solid 2px var(--mid-grey);
                }
                @media only screen and (max-width: 860px)
                {
                    .BottomMenuContainer
                    {
                        display: flex;
                    }
                }

            `}</style>
        </>
    )
}