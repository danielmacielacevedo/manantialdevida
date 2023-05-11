import Link from "next/link";
import Image from "next/image";

export default function MenuMobile() {
    return (
        <>
            <div className="BottomMenuContainer">
                <Link className="BottomMenuButton" href="/miembros">
                    <Image width={24} height={24} src="/assets/home-icon.png" alt="Home Icon" />
                    <p>Inicio</p>
                </Link>

                {/* <Link className="BottomMenuButton" href="/Miembros">
                    <img className="BottomManantialIcon" src="/assets/light_logo_manantial.png" />
                </Link> */}

                <Link className="BottomMenuButton" href="/miembros/menu">
                    <Image width={24} height={24} src="/assets/menu-icon.png" alt="Menu Icon" />
                    <p>Menú</p>
                </Link>
            </div>
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
                    width: 40px;
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