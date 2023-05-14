import { useEffect, useState } from "react";
import Link from "next/link";
import cache from "../../../cache";

export default function PredicadorCard(props) {
  const [predicador, setPredicador] = useState([]);

  useEffect(() => {
    async function fetchPredicador() {
      let data;
      if (cache.has(props.nombre)) {
        data = cache.get(props.nombre);
        if (JSON.stringify(data[props.nombre]) !== JSON.stringify(predicador)) {
          setPredicador(data[props.nombre]);
        }
      } else {
        const res = await fetch("/api/predicadores");
        data = await res.json();
        cache.set(props.nombre, data);
        setPredicador(data[props.nombre]); // Obtener los datos del predicador
      }
    }
    fetchPredicador();
  }, [props.nombre, predicador]);

  return (
    <>
      {predicador && (
        <div className="LinkContainer">
          <Link href={encodeURI(predicador.url)}>
            <div className="PredicadorContainer">
              <div className="ImageContainer">
                <img src={predicador.image} alt={predicador.name}></img>
              </div>
              <div className="PredicadorData">
                <h3>{predicador.name}</h3>
                {/* <Link href={encodeURI(predicador.url)}>Ver predicas</Link> */}
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
          height: 100px;
          background-color: var(--grey);
          justify-content: center;
          align-items: center;
        }
        .ImageContainer img {
          display: flex;
          width: 150px;
          height: 100px;
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
          height: 60px;
          justify-content: center;
          align-items: center;
          text-align: center;
          // padding: 20px;
          font-size: 12px;
          background-color: var(--light-grey);
          color: var(--primary-color);
          border-radius: 10px;
        }
        .PredicadorData h3 {
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
