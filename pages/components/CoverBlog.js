import Link from "next/link";
import { useEffect, useState } from "react";
import TimeAgoFull from "./TimeAgoFull";

export default function CoverBlog(props) {
  // const [loading, setLoading] = useState(true);
  const [coverInfoBlog, setCoverInfoBlog] = useState(null);

  useEffect(() => {
    async function fetchCoverDetails() {
      const res = await fetch("/api/detallesBlog");
      const data = await res.json();
      setCoverInfoBlog(data[props.nombre][props.blog]);
      setTimeout(() => {
        // setLoading(false);
      }, 500); // Establece un retraso de 2 segundos antes de mostrar los datos
    }
    fetchCoverDetails();
  }, [props.nombre, props.blog]);

  // if (loading) {
  //   return (
  //     <div className="LoadingContainer">
  //       <div className="LoadingBackground">
  //         <div className="LoadingSpinnerContainer">
  //           <div className="Spinner"></div>
  //           <img
  //             className="SpinnerImage"
  //             src="/assets/favicon_manantial.png"
  //             alt="Spinner"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

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
            <h5>ÚLTIMO BLOG</h5>
            {/* <h5>Último blog</h5> */}
            <Link href={`${coverInfoBlog.profileURL}${coverInfoBlog.url}`}>
              <h1>{coverInfoBlog.title}</h1>
            </Link>
            <div className="ButtonsCoverPredica">
              <Link href={encodeURI(coverInfoBlog.profileURL)}>
                <div className="InfoReproductor">
                  <div className="ProfilePicture">
                    <img src={coverInfoBlog.picture} />
                    <i></i>
                  </div>
                  <div className="DetailsInfoReproductor">
                    <h4>{coverInfoBlog.autor}</h4>
                    <TimeAgoFull
                      dia={coverInfoBlog.dia}
                      mes={coverInfoBlog.mes}
                      año={coverInfoBlog.año}
                      hora={coverInfoBlog.hora}
                    />
                  </div>
                </div>
              </Link>
              <Link
                className="ContentButton"
                href={`${coverInfoBlog.profileURL}${coverInfoBlog.url}`}
              >
                LEER AHORA
              </Link>
            </div>
          </section>
          <section className="RightSection">
            <Link href={`${coverInfoBlog.profileURL}${coverInfoBlog.url}`}>
              <img src={coverInfoBlog.image} />
            </Link>
          </section>
        </div>
      </div>
      <style jsx>{`
        .CoverPredicaContainer {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .CoverPredicaContainer span {
          padding: 10px 20px;
          border-radius: 10px;
          background-color: var(--dark-transparent);
          color: var(--secondary-color);
        }
        .CoverPredicaContainer h1 {
          font-size: 70px;
        }
        .CoverPredicaContainer h5 {
          font-size: 22px;
        }
        .CoverBackground {
          position: absolute;
          display: flex;
          width: 100%;
          height: fit-content;
          padding: 20px;
        }
        .CoverSectionsContainer {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          height: 450px;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          text-align: left;
          border-radius: 10px;
          overflow: hidden;
          backdrop-filter: blur(100px);
        }
        .LeftSection {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 20px;
        }
        .RightSection {
          display: flex;
          width: 90%;
          height: 100%;
          padding: 20px;
          justify-content: end;
          align-items: center;
        }
        .RightSection img {
          width: 100%;
          max-height: 400px;
          border-radius: 10px;
          overflow: hidden;
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
          height: 450px;
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
            height: 100%;
            justify-content: space-between;
          }
        }
        @media only screen and (max-width: 860px) {
          .RightSection {
            display: none;
          }
          #ImageCoverPredica {
            height: 450px;
          }
          .CoverPredicaContainer h1 {
            font-size: 60px;
          }
          .CoverPredicaContainer h5 {
            font-size: 22px;
          }
          .InfoReproductor {
             {
              /* flex-direction: column; */
            }
          }
          .ButtonsCoverPredica {
            flex-direction: column;
            gap: 30px;
          }
        }
        @media only screen and (max-width: 380px) {
          .CoverPredicaContainer h1 {
            font-size: 50px;
          }
          .CoverPredicaContainer h5 {
            font-size: 16px;
          }
          .CoverSectionsContainer,
          #ImageCoverPredica {
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
