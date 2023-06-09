// import { useEffect, useState } from "react";
// import Link from "next/link";
// import TimeAgo from "../TimeAgoFull";

export default function ReproductorBlog(props) {
  // const [video, setVideo] = useState([]);

  // useEffect(() => {
  //   async function fetchVideo() {
  //     const res = await fetch("/api/detallesVideos");
  //     const data = await res.json();
  //     setVideo(data[props.nombre][props.indice]);
  //   }
  //   fetchVideo();
  // }, [props.nombre, props.indice]);

  return (
    <>
      <div className="ReproductorContainer">
        <div className="Reproductor">
          <iframe
            src={`https://www.youtube.com/embed/${props.embed}?autohide=1&showinfo=0&rel=0&color=white&cc_load_policy=3`}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
        {/* <div className="InfoReproductorContainer">
          <h2>{video.title}</h2>
          <div className="InfoReproductor">
            <Link href={encodeURI(video.profileURL)}>
              <div className="InfoReproductor">
                <div className="ProfilePicture">
                  <img src={video.picture} />
                </div>
                <div className="DetailsInfoReproductor">
                  <h4>{video.autor}</h4>
                  <i></i>
                </div>
              </div>
            </Link>
          </div>
          <article className="DescriptionContainer">
            <div>
              <TimeAgo
                dia={video.dia}
                mes={video.mes}
                año={video.año}
                hora={video.hora}
              />
              <p>
                <span>{video.desc}</span>
              </p>
            </div>
          </article>
        </div> */}
      </div>
      <style jsx>{`
        .ReproductorContainer {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 700px;
          height: auto;
          gap: 20px;
        }
        .Reproductor {
          padding-bottom: 56.25%;
          padding-top: 0px;
          height: 0;
          overflow: hidden;
          border-radius: 20px;
          background-color: var(--light-grey);
           {
            /* position: relative; */
          }
        }
        .Reproductor iframe {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
        .InfoReproductorContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
        }
        .InfoReproductor {
          display: flex;
          width: 100;
          height: auto;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .ProfilePicture {
          position: relative;
          display: flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--light-grey);
        }
        .ProfilePicture img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 50%;
        }
        .DetailsInfoReproductor {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: center;
        }
        .DetailsInfoReproductor i {
          position: absolute;
          right: -26px;
          width: 20px;
          height: 20px;
          background-image: url("/assets/verify.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .DescriptionContainer {
          display: flex;
          width: 100%;
          height: auto;
          padding: 20px;
          background-color: var(--light-grey);
          border-radius: 20px;
        }
        .DescriptionContainer div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .DescriptionContainer p {
          font-size: 12px;
          font-weight: 700;
        }
        .DescriptionContainer span {
          font-weight: 400;
          color: grey;
        }
        @media only screen and (max-width: 860px) {
          .Reproductor {
            z-index: 9999;
            width: inherit;
            background-color: transparent;
             {
              /* border-radius: 0; */
            }
             {
              /* position: fixed; */
            }
          }
           {
            /* .Reproductor iframe {
            border-radius: 0;
          } */
          }
          .ReproductorContainer {
            max-width: 90%;
          }
          .InfoReproductorContainer {
            padding: 62vw 20px 0;
          }
        }
      `}</style>
    </>
  );
}
