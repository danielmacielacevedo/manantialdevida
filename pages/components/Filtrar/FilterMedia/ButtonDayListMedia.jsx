import { useState, useEffect } from "react";

export default function ButtonDayList({ articles, filterDay }) {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");

  // Obtener los días únicos de los artículos
  const getUniqueDays = () => {
    const uniqueDays = [];
    articles.forEach((article) => {
      article.classes.forEach((clase) => {
        if (clase.dia && !uniqueDays.includes(clase.dia)) {
          uniqueDays.push(clase.dia);
        }
      });
    });
    return uniqueDays;
  };

  // Actualizar los días únicos al montar el componente o al cambiar los artículos
  useEffect(() => {
    const uniqueDays = getUniqueDays();
    setDays(uniqueDays.sort()); // Ordenar los días alfabéticamente
  }, [articles]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    filterDay(day);
  };

  return (
    <>
      <h4>Filtrar por día:</h4>
      <div className="ButtonDays">
        {days && days.length > 0 ? (
            days.map((day) => (
              <button
                type="button"
                className={`ButtonDayListContainer btn-day ${
                  selectedDay === day ? "active" : ""
                }`}
                onClick={() => handleDayClick(day)}
                key={day}
              >
                {day}
              </button>
            ))
        ) : (
          <p></p>
        )}
      </div>
      <style jsx>{`
        .ButtonDays {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          width: 100%;
          gap: 20px;
        }
        .ButtonDayListContainer {
          display: flex;
          width: 100%;
          max-width: 100%;
          padding: 10px;
          cursor: pointer;
          border: none;
          border-radius: 10px;
          justify-content: center;
          font-size: 12px;
          color: var(--secondary-color);
          transition: 0.6s;
          background: var(--light-grey);
        }
        .ButtonDayListContainer:hover {
          background: var(--secondary-color);
          color: var(--primary-color);
        }
        @media only screen and (max-width: 860px)
        {
          .ButtonDays
          {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </>
  );
}





