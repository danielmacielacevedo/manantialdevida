import { useEffect, useState } from 'react';
import Link from 'next/link';
import cache from "../../../cache";

export default function PredicaCard(props) {
  const [cardVideo, setCardVideo] = useState(null);

  useEffect(() => {
    async function fetchPredicaDetails() {
      const cacheKey = `predicaDetails-${props.nombre}-${props.indice}`;
      const cachedData = cache.get(cacheKey);

      if (cachedData) {
        setCardVideo(cachedData);
      } else {
        const res = await fetch('/api/detallesVideos');
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
          <Link href={encodeURI(cardVideo.profileURL.replace('?', '/') + cardVideo.url)}>
            <div className="PredicadorContainer">
              <div className="ImageContainer">
                <img src={cardVideo.image} alt={cardVideo.title} />
              </div>
              <div className="PredicadorData">
                <h3>{cardVideo.title} <br/> <span>{cardVideo.date}</span> </h3>
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
          max-width: 300px;
          height: auto;
        }
        .PredicadorContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
        }
        .ImageContainer {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        .ImageContainer img {
          display: flex;
          width: 100%;
          height: 100%;
          background-position: top center;
          background-repeat: no-repeat;
          background-size: center;
          justify-self: center;
          align-self: center;
          border-radius: 10px 10px 0 0;
        }
        .PredicadorData {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 60px;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 12px;
          background-color: var(--light-grey);
          color: var(--primary-color);
          border-radius: 0 0 10px 10px;
        }
        .PredicadorData span {
          font-size: 10px;
        }
        @media only screen and (max-width: 860px) {
          .LinkContainer {
            max-width: 500px;
          }
        }
      `}</style>
    </>
  );
}






