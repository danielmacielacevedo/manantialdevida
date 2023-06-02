import Link from "next/link";
import { useEffect, useState } from "react";
import TimeAgo from "./TimeAgo";
import Lottie from "react-lottie";
import BlogIcon from "../../public/assets/icons/animated-icons/BlogIcon.json";

export default function CoverBlog(props) {
  const [loading, setLoading] = useState(true);
  const [coverInfoBlog, setCoverInfoBlog] = useState(null);

  useEffect(() => {
    async function fetchCoverDetails() {
      const res = await fetch("/api/detallesBlog");
      const data = await res.json();
      setCoverInfoBlog(data[props.nombre][props.blog]);
      setTimeout(() => {
        setLoading(false);
      }, 0); // Establece un retraso de 2 segundos antes de mostrar los datos
    }
    fetchCoverDetails();
  }, [props.nombre, props.blog]);

  if (loading) {
    return (
      <div className="LoadingContainer">
        <div className="LoadingBackground">
          <div className="LoadingSpinnerContainer">
            <div className="Spinner"></div>
            <img
              className="SpinnerImage"
              src="/assets/favicon_manantial.png"
              alt="Spinner"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="CoverPredicaContainer">
        <div className="CoverBackground">
          <div id="ImageCoverPredica">
            <img src={coverInfoBlog.image} />
          </div>
        </div>
        <div className="CoverSectionsContainer">
          <section className="LeftSection">
            <Lottie
              options={{
                animationData: BlogIcon,
                loop: false,
                autoplay: true,
              }}
              width={34}
              height={34}
              isClickToPauseDisabled
            />
            <Link href={`${coverInfoBlog.profileURL}${coverInfoBlog.url}`}>
              <h1>{coverInfoBlog.title}</h1>
            </Link>
            {/* <img id="BlogImage" src={coverInfoBlog.image} /> */}
            <div className="ButtonsCoverPredica">
              <div className="InfoReproductor">
                <div className="DetailsInfoReproductor">
                  <TimeAgo
                    dia={coverInfoBlog.dia}
                    mes={coverInfoBlog.mes}
                    año={coverInfoBlog.año}
                    hora={coverInfoBlog.hora}
                  />
                </div>
                <Link href={encodeURI(coverInfoBlog.profileURL)}>
                  <div className="ProfilePicture">
                    <img src={coverInfoBlog.picture} />
                    <i></i>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>{`
        .CoverPredicaContainer {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .CoverPredicaContainer span {
          padding: 10px 20px;
          border-radius: 10px;
          background-color: var(--dark-transparent);
          color: var(--secondary-color);
        }
        .CoverPredicaContainer h1 {
          font-size: 60px;
          text-align: center;
        }
        .CoverPredicaContainer h5 {
          font-size: 22px;
        }
        .CoverBackground {
          position: absolute;
          display: flex;
          width: 100%;
        }
        .CoverSectionsContainer {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          text-align: left;
          border-radius: 10px;
          backdrop-filter: blur(100px);
        }
        .LeftSection {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 20px;
          height: 56vh;
        }
        #BlogImage {
          display: flex;
          width: auto;
          height: 20vh;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
        .ButtonsCoverPredica {
          display: flex;
          width: 100%;
          height: fit-content;
          gap: 20px;
          justify-content: flex-start;
          align-items: left;
        }
        #ImageCoverPredica {
          z-index: -1;
          top: 0px;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }
        #ImageCoverPredica img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          overflow: hidden;
        }
        .InfoReproductor {
          display: flex;
          width: 100%;
          height: auto;
          justify-content: space-between;
          align-items: end;
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
        }
        .DetailsInfoReproductor p {
          font-size: 10px;
        }
        .ProfilePicture i {
          position: absolute;
          right: -4px;
          bottom: -4px;
          width: 24px;
          height: 24px;
          background-image: url("/assets/verify.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        @media only screen and (max-width: 1024px) {
          .RightSection {
            display: none;
          }
          .LeftSection {
            justify-content: space-between;
          }
        }
        @media only screen and (max-width: 860px) {
          .RightSection {
            display: none;
          }
          .CoverPredicaContainer h1 {
            font-size: 50px;
          }
          .CoverPredicaContainer h5 {
            font-size: 22px;
          }
          .ButtonsCoverPredica {
            flex-direction: column;
            gap: 30px;
          }
        }
        @media only screen and (max-width: 380px) {
          .CoverPredicaContainer h1 {
            font-size: 40px;
          }
          .CoverPredicaContainer h5 {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
