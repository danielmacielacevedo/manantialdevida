import Link from "next/link";
import { useEffect, useState } from "react";
import TimeAgoFull from "./TimeAgoFull";

export default function CoverPredica(props) {

    const [coverInfo, setCoverInfo] = useState([]);

    useEffect(() => {
        async function fecthCoverDetails() {
            const res = await fetch('/api/detallesVideos')
            const data = await res.json();
            setCoverInfo(data[props.nombre][props.indice])
        }
        fecthCoverDetails();
    }, [props.nombre, props.indice])

    return (
      <>
        <div id="ImageCoverPredica" >
            <img src={coverInfo.image} />
        </div>
        <div className="CoverPredicaContainer">
          <section className="LeftSection">
            <h5>Última predicación</h5>
            <Link href={`${coverInfo.profileURL}/${coverInfo.url}`}><h1>{coverInfo.title}</h1></Link>
            <div className="ButtonsCoverPredica">
              <Link href={encodeURI(coverInfo.profileURL)}>
                  <div className="InfoReproductor">
                      <div className="ProfilePicture">
                          <img src={coverInfo.picture} />
                          <i></i>
                      </div>
                      <div className="DetailsInfoReproductor">
                          <h4>{coverInfo.autor}</h4>
                          <TimeAgoFull dia="07" mes="05" año="2023" hora="13" />
                      </div>
                  </div>
              </Link>
              <Link className="ContentButton" href={`${coverInfo.profileURL}/${coverInfo.url}`}>VER AHORA</Link>
            </div>
          </section>
          <section className="RightSection">
            <Link href={`${coverInfo.profileURL}/${coverInfo.url}`}><img src={coverInfo.image} /></Link>
          </section>
        </div>
        <style jsx>{`
          .CoverPredicaContainer {
            position: relative;
            z-index: 2;
            display: flex;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(20px);
            justify-content: center;
            align-items: center;
            padding: 20px;
            gap: 100px;
            text-align: left;
          }
          .CoverPredicaContainer span
          {
            padding: 10px 20px;
            border-radius: 10px;
            background-color: var(--dark-transparent);
            color: var(--secondary-color);
          }
          .CoverPredicaContainer h1
          {
            font-size: 70px;
          }
          .LeftSection
          {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .RightSection img
          {
            border-radius: 10px;
          }
          .ButtonsCoverPredica
          {
            display: flex;
            width: 100%;
            height: auto;
            gap: 20px;
            justify-content: flex-start;
            align-items: left;
          }
          #ImageCoverPredica {
            position: absolute;
            z-index: 1;
            top: 80px;
            width: 100%;
            height: 410px;
            overflow: hidden;
          }
          #ImageCoverPredica img
          {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
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
              position: relative;
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
              position: relative;
              display: flex;
              flex-direction: column;
              width: 100%;
              height: auto;
          }
          .DetailsInfoReproductor p
          {
            font-size: 10px;
          }
          .ProfilePicture i
          {
            position: absolute;
            right: -4px;
            bottom: -4px;
            width: 24px;
            height: 24px;
            background-image: url('/assets/verify.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }
          @media only screen and (max-width: 860px)
          {
            .RightSection
            {
              display: none;
            }
            #ImageCoverPredica {
                height: 410px;
            }
            .CoverPredicaContainer h1
            {
                font-size: 50px;
            }
            .InfoReproductor
            {
              {/* flex-direction: column; */}
            }
            .ButtonsCoverPredica
            {
              flex-direction: column;
              gap: 30px
            }
          }
        `}</style>
      </>
    );
  }
  