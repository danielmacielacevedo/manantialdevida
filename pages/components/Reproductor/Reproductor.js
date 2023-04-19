import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Reproductor(props) {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        async function fetchVideo() {
            const res = await fetch('/api/detallesVideos');
            const data = await res.json();
            setVideo(data[props.nombre][props.indice]);
        }
        fetchVideo();
    }, [props.nombre, props.indice])

    return (
        <>
            <div className="ReproductorContainer">
                <div className="Reproductor">
                    <iframe src={`https://www.youtube.com/embed/${video.embed}?autohide=1&showinfo=0&rel=0&color=white&cc_load_policy=3`} frameborder="0" allowfullscreen="true"></iframe>
                </div>
                <div className="InfoReproductorContainer">
                    <h2>{video.title}</h2>
                    {/* <Link href={encodeURI(video.profileURL)}> */}
                        <div className="InfoReproductor">
                            <Link href={encodeURI(video.profileURL)}>
                                <div className="InfoReproductor">
                                    <div className="ProfilePicture">
                                        <img src={video.picture} />
                                    </div>
                                    <div className="DetailsInfoReproductor">
                                        <h4>{video.autor}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    {/* </Link> */}
                    <article className="DescriptionContainer">
                        <div>
                            <p>{` ${video.date} \u2022 ${video.desc} `}</p>
                        </div>
                    </article>
                </div>
            </div>
            <style jsx>{`
                .ReproductorContainer
                {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                }
                .Reproductor
                {
                    position: relative;
                    padding-bottom: 56.25%;
                    padding-top: 0px;
                    height: 0;
                    overflow: hidden;
                    border-radius: 20px;
                    background-color: var(--light-grey);
                }
                .Reproductor iframe
                {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                }
                .InfoReproductorContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 20px;
                }
                .InfoReproductor
                {
                    display: flex;
                    width: 100;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                }
                .ProfilePicture
                {
                    display: flex;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: var(--light-grey);
                }
                .ProfilePicture img
                {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .DetailsInfoReproductor
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    justify-content: center;
                }
                .DescriptionContainer
                {
                    display: flex;
                    width: 100%;
                    height: auto;
                    padding: 20px;
                    background-color: var(--light-grey);
                    border-radius: 20px;
                }
                @media only screen and (max-width: 860px)
                {
                    .Reproductor
                    {
                        position: fixed;
                        z-index: 9999;
                        width: inherit;
                        border-radius: 0;
                        background-color: transparent;
                    }
                    .Reproductor iframe
                    {
                        border-radius: 0;
                    }
                    .InfoReproductorContainer
                    {
                        padding: 58vw 20px 0;
                    }
                }
            `}</style>
        </>
    )
}