import { useState, useEffect } from "react";

export default function ArticleList({ articles }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="ArticleListContainer">
        {isLoading ? (
          <div className="LoadingSpinnerContainer">
            <div className="Spinner"></div>
            <img className="SpinnerImage" src="/assets/favicon_manantial.png" />
          </div>
        ) : articles && articles.length > 0 ? (
          articles.map((article) => (
            <div
              className="MaestroContainer article-container"
              key={article.id}
            >
              <h2>{article.title}</h2>
              <div className="MaestroClasses">
                {article.classes.map((clase) => (
                  <div className="TableContainerInfo.open" key={clase.date}>
                    <div className="NameContainer">
                      <h4>{clase.titulo}</h4>
                      <div className="NameContainerDetails">
                        <p>
                          Día <span>{clase.dia}</span>
                        </p>
                        <p>
                          Hora <span>{clase.hora}</span>
                        </p>
                        <p>
                          Lugar <span>{clase.lugar}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="TextAlignCenter">No hay nada que mostrar.</p>
        )}
      </div>
      <style jsx>{`
        .ArticleListContainer {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .MaestroContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 20px;
          cursor: pointer;
          border: none;
          text-align: left;
          border-radius: 10px;
          gap: 20px;
          background: var(--light-grey);
          color: var(--secondary-color);
          transition: 0.6s;
        }
        .MaestroContainer:hover {
          background-color: var(--mid-grey);
        }
        .MaestroContainer h2 {
           {
            /* color: var(--manantial-color); */
          }
          color: var(--secondary-color);
        }
        .MaestroClasses {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .TableContainerInfo {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 20px 0 0 0;
          gap: 20px;
        }
        .NameContainer {
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 10px;
          gap: 20px;
          font-size: 16px;
          font-weight: 100;
          background-color: var(--primary-color);
        }
        .NameContainer span {
          font-weight: 400;
        }
        .NameContainerDetails {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .TitleTableCalendar {
          font-size: 14px;
          font-weight: 100;
        }
        .TableContainerInfo {
          display: none;
        }
        .TableContainerInfo.open {
          display: flex;
        }
      `}</style>
    </>
  );
}
