import Link from "next/link";
import PredicadorImage from "./Predicadores/PredicadorImage";
// import EscritorImage from "./Escritores/EscritorImage";

export default function PredicasBar() {
  return (
    <>
      <div className="PredicasBarContainer">
        {/* <h2>PRÉDICAS</h2> */}
        <div className="PredicasBar">
          <div className="PredicadoresContainer">
            <PredicadorImage nombre="PastorIsaac" />
            <PredicadorImage nombre="PastoraDina" />
          </div>
          <div className="PredicadoresContainer">
            <PredicadorImage nombre="VeliaAcevedo" />
            <PredicadorImage nombre="FranciscoSerrano" />
          </div>
        </div>
        <Link className="FullButton" href="/predicas">
          <span className="Text">Ver prédicas</span>
        </Link>
        <div className="PredicasBar">
          <div className="PredicadoresContainer">
            <PredicadorImage nombre="KarlaCervantes" />
            <PredicadorImage nombre="WillyMartinez" />
          </div>
          <div className="PredicadoresContainer">
            <PredicadorImage nombre="FranciscoGarcia" />
            <PredicadorImage nombre="LeonorRuiz" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .PredicasBarContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          padding: 20px 20px 0 20px;
          gap: 20px;
          justify-content: center;
          align-items: center;
          background-color: var(--primary-color);
        }
        .PredicasBar {
          display: flex;
          width: 100%;
          height: auto;
          gap: 20px;
        }
        .PredicadoresContainer {
          display: flex;
          width: 100%;
          height: auto;
          gap: 20px;
        }
        .Text {
          font-size: 16px;
          font-weight: 700;
        }
        @media only screen and (max-width: 860px) {
          .PredicasBar {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
