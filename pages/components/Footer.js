import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../UserProvider';
import BackMenuMobile from './BackMenuMobile';

export default function Footer() {
    const { user } = useContext(UserContext)

    return (
        <>
            {user === null && 
                <div className='FooterContainer'>
                    <div className='FooterContent'>
                        <div className='FooterImage'>
                            <img src='/assets/light_logo_manantial.png'/>
                        </div>
                        <div className='FooterLinksContainer'>
                            <h3>Navegación</h3>
                            <ul className='FooterLinks'>
                                <li><a href="#Top">Volver arriba</a></li>
                                <li><Link href="/">Inicio</Link></li>
                                <li><Link href="/predicas">Prédicas</Link></li>
                                <li><Link href="/info">Info</Link></li>
                            </ul>
                        </div>
                        <div className='FooterLinksContainer'>
                            <h3>Como llegar</h3>
                            <ul className='FooterLinks'>
                                <li><a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/BJ5W33SYbQfQr8cg9?g_st=ic'>Toma de Zacatecas #335 <br/> Victoria de Durango, Durango, México. <br/> CP 34230</a></li>
                            </ul>
                        </div>
                        <div className='FooterLinksContainer'>
                            <h3>Social</h3>
                            <ul className='FooterLinks'>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/somosmanantial/"> Instagram</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/somosmanantial.org/"> Facebook</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@somosmanantial"> TikTok</a></li>
                            </ul>
                        </div>
                        <div className='FooterLinksContainer'>
                            <h3>Legal</h3>
                            <ul className='FooterLinks'>
                                <li><Link href="/legal/privacidad">Política de privacidad</Link></li>
                            </ul>
                        </div>
                    </div>
                    <p>Manantial de Vida © 2023</p>
                </div>
            }
            {user && user.email &&
                <BackMenuMobile />
            }
            <style jsx>{`
                .FooterContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 400px;
                    margin-top: 20px;
                    padding: 40px;
                    gap: 50px;
                    background-color: #000;
                    color: #fff;
                }
                .FooterContent
                {
                    display: flex;
                    justify-content: space-around;
                    gap: 20px;
                }
                .FooterContainer p
                {
                    color: var(--light-grey);
                    text-align: center
                }
                .FooterImage
                {
                    display: flex;
                    // flex: 1;
                }
                .FooterImage img
                {
                    width: auto;
                    height: 50px;
                }
                .FooterLinksContainer
                {
                    display: flex;
                    flex-direction: column;
                    // flex: 1;
                    gap: 40px;
                    color: var(--primary-color)
                }
                .FooterLinksContainer h3
                {
                    color: #fff;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                }
                .FooterLinks
                {
                    display: flex;
                    flex-direction: column;
                    list-style: none;
                    color: #fff;
                    gap: 20px;
                    font-family: 'Roboto', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                }

                @media only screen and (max-width: 860px)
                {
                    .FooterContainer
                    {
                        padding: 40px 20px;
                        height: auto;
                    }
                    .FooterContent
                    {
                        flex-direction: column;
                        gap: 40px;
                    }
                }
            `}</style>
        </>
    )
}