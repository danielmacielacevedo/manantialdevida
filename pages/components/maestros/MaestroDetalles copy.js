import { useEffect, useState } from "react";

export default function MaestroDetails(props) {
  const [maestro, setMaestro] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    async function fetchMaestro() {
      if (props.mes) {
        const res = await fetch("/api/maestros/mayo");
        const data = await res.json();
        const teacher = data.teachers.find(
          (t) => t.name.toLowerCase() === props.nombre.toLowerCase()
        );
        if (teacher) {
          setMaestro(teacher.classes);
        }
      }
    }
    fetchMaestro();
  }, [props.mes, props.nombre]);

  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <>
      {maestro && (
        <button onClick={handleClick} className="MaestroContainer">
          <h2>{props.nombre}</h2>
          <div
            className={
              isOpen ? "TableContainerInfo open" : "TableContainerInfo"
            }
          >
            <div className="NameContainer TitleTableCalendar">
              <span>Día</span>
              <span>Clase</span>
            </div>
            {maestro.map((clase, index) => (
              <div key={index} className={`NameContainer ${clase.category}`}>
                <span>{clase.day}</span>
                <span>{clase.course}</span>
              </div>
            ))}
          </div>
        </button>
      )}
    </>
  );
}
