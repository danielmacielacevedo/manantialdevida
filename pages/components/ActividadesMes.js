import SociedadesFiltro from "daniel/pages/components/Filtrar/FilterSociedades/SociedadesFiltro";

export default function Actividades(props) {
  return (
    <div className="MonthEventsContainer">
      <h2>ACTIVIDADES MAYO</h2>
      <SociedadesFiltro mes={props.mes} />
      <style jsx>{`
        .MonthEventsContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: center;
          align-items: center;
          padding: 20px 0 0 0;
          gap: 20px;
          background-color: var(--primary-color);
        }
      `}</style>
    </div>
  );
}
