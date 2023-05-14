import { useEffect, useState } from "react";
import Link from "next/link";
import cache from "../../../cache";
import TimeAgo from "../TimeAgoFull";

export default function PredicaCard(props) {
  const [cardVideo, setCardVideo] = useState(null);

  useEffect(() => {
    async function fetchPredicaDetails() {
      const cacheKey = `predicaDetails-${props.nombre}-${props.indice}`;
      const cachedData = cache.get(cacheKey);

      if (cachedData) {
        setCardVideo(cachedData);
      } else {
        const res = await fetch("/api/detallesVideos");
        const data = await res.json();
        const cardVideoData = data[props.nombre][props.indice];
        cache.set(cacheKey, cardVideoData);
        setCardVideo(cardVideoData);
      }
    }
    fetchPredicaDetails();
  }, [props.nombre, props.indice]);

  return (
    <>
      {cardVideo && (
        <div className="LinkContainer">
          <Link
            href={encodeURI(
              cardVideo.profileURL.replace("?", "/") + cardVideo.url
            )}
          >
            <div className="PredicadorContainer">
              <div className="ImageContainer">
                <img src={cardVideo.image} alt={cardVideo.title} />
              </div>
              <div className="PredicadorData">
                <h3>{cardVideo.title}</h3>
                <div className="InfoReproductor">
                  <div className="ProfilePicture">
                    <img src={cardVideo.picture} alt={cardVideo.autor} />
                  </div>
                  <div className="DetailsInfoReproductor">
                    <h4>{cardVideo.autor}</h4>
                  </div>
                </div>
                <TimeAgo
                  dia={cardVideo.dia}
                  mes={cardVideo.mes}
                  año={cardVideo.año}
                  hora={cardVideo.hora}
                />
              </div>
            </div>
          </Link>
        </div>
      )}
      <style jsx>{`
        .LinkContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          border-radius: 20px;
        }
        .PredicadorContainer {
          display: flex;
          width: 100%;
          height: auto;
        }
        .ImageContainer {
          display: flex;
          width: 100%;
          height: 160px;
          justify-content: center;
          align-items: center;
        }
        .ImageContainer img {
          display: flex;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          justify-self: center;
          align-self: center;
          border-radius: 20px 0 0 20px;
        }
        .PredicadorData {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          border-radius: 0 20px 20px 0;
          padding: 20px;
          gap: 10px;
          font-size: 12px;
          background-color: var(--light-grey);
          color: var(--primary-color);
        }
        .PredicadorData h3 {
          font-size: 18px;
        }
        .PredicadorData span {
          font-size: 10px;
          color: var(--secondary-color);
        }
        .InfoReproductor {
          display: flex;
          width: 100;
          height: auto;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .ProfilePicture {
          display: flex;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--primary-color);
        }
        .ProfilePicture img {
          width: 20px;
          height: 20px;
          object-fit: cover;
          border-radius: 50%;
        }
        .DetailsInfoReproductor {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: center;
        }
        .DetailsInfoReproductor h4 {
          font-size: 12px;
        }
        @media only screen and (max-width: 860px) {
          .LinkContainer {
            max-width: none;
          }
          .DetailsInfoReproductor h4 {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}
