import { useEffect, useState } from "react";
import Link from "next/link";
import cache from "../../../cache";
import TimeAgo from "../TimeAgoFull";

export default function BlogCard(props) {
  const [cardBlog, setCardBlog] = useState(null);

  useEffect(() => {
    async function fetchBlogDetails() {
      const cacheKey = `BlogDetails-${props.nombre}-${props.indice}`;
      const cachedData = cache.get(cacheKey);

      if (cachedData) {
        setCardBlog(cachedData);
      } else {
        const res = await fetch("/api/detallesBlog");
        const data = await res.json();
        const cardBlogData = data[props.nombre][props.indice];
        cache.set(cacheKey, cardBlogData);
        setCardBlog(cardBlogData);
      }
    }
    fetchBlogDetails();
  }, [props.nombre, props.indice]);

  return (
    <>
      {cardBlog && (
        <div className="LinkContainer">
          <Link
            href={encodeURI(
              cardBlog.profileURL.replace("?", "/") + cardBlog.url
            )}
          >
            <div className="PredicadorContainer">
              <div className="PredicadorData">
                <div className="ImageContainer">
                  <img src={cardBlog.image} alt={cardBlog.title} />
                </div>
                <h3>{cardBlog.title}</h3>
                <div className="InfoReproductor">
                  <div className="ProfilePicture">
                    <img src={cardBlog.picture} alt={cardBlog.autor} />
                  </div>
                  <div className="DetailsInfoReproductor">
                    <h4>{cardBlog.autor}</h4>
                  </div>
                </div>
                <TimeAgo
                  dia={cardBlog.dia}
                  mes={cardBlog.mes}
                  año={cardBlog.año}
                  hora={cardBlog.hora}
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
          height: 100%;
          border-radius: 20px;
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
          height: auto;
          object-fit: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          justify-self: center;
          align-self: center;
          border-radius: 10px;
        }
        .PredicadorData {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          border-radius: 10px;
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
          width: 100%;
          height: 100%;
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
          .PredicadorData {
            width: 200px;
          }
          .DetailsInfoReproductor h4 {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}
