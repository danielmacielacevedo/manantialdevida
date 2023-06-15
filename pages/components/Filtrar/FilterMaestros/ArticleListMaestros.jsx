import { useState, useEffect, useContext } from "react";
import esAdministrador from "daniel/pages/api/Administradores";
import { UserContext } from "daniel/pages/UserProvider";

export default function ArticleList({ articles, selectedDay, mes }) {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  console.log('Valor de props.mes:', mes);

  
  async function fetchArticles() {
    try {
      const response = await fetch(`/api/maestros/${mes}`);
      const data = await response.json();
      
      // Buscar el objeto con el ID específico
      const id = user.id;
      const desiredArticle = data.find(article => article.id === id);
  
      // Verificar si se encontró el objeto
      if (desiredArticle) {
        console.log('Objeto encontrado:', desiredArticle);
  
        // Verificar si el estado ya contiene el objeto deseado
        if (!userData || userData.id !== desiredArticle.id) {
          setUserData(desiredArticle);
        }
      } else {
        console.log('No se encontró el objeto con el ID especificado');
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  }
  
  // Llamar a fetchArticles solo cuando userData esté vacío
  useEffect(() => {
    if (!userData.length) {
      fetchArticles();
    }
  }, [userData]);
  
  

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
            <img
              className="SpinnerImage"
              src="/assets/favicon_manantial.png"
              alt="Spinner"
            />
          </div>
        ) : esAdministrador(user.id) && articles && articles.length > 0 ? (
          articles.map((article) => (
            <div
              className="MaestroContainer article-container"
              key={article.id}
            >
              {esAdministrador(user.id) && <h2>{article.title}</h2>}
              <div className="MaestroClasses">
                {article.classes
                  .filter((clase) => !selectedDay || clase.dia === selectedDay)
                  .map((clase) => (
                    <div className="TableContainerInfo" key={clase.date}>
                      <div className="NameContainer">
                        <span>
                          {clase.date} {clase.dia}
                        </span>
                        <span>{clase.class}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))
          ) : !esAdministrador(user.id) && articles && articles.length > 0 ? (
            <>
              {userData.classes ? (
                <div className="MaestroContainer article-container">
                  <div className="MaestroClasses">
                    {userData.classes.map((clase, index) => (
                      <div className="TableContainerInfo" key={index}>
                        <div className="NameContainer">
                          <span>
                            {clase.date} {clase.dia}
                          </span>
                          <span>{clase.class}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="TextAlignCenter">
                  No hay datos para ti en este mes.
                </p>
              )}
            </>
          ) : (
            <p className="TextAlignCenter">
              Este calendario aún no está disponible.
            </p>
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
          gap: 20px;
        }
        .NameContainer {
          display: flex;
          padding: 20px;
          border-radius: 10px;
          gap: 20px;
          font-size: 16px;
          font-weight: 400;
          background-color: var(--primary-color);
          justify-content: center;
          align-items: center;
        }
        .NameContainer span:nth-child(1) {
          width: 50%;
        }
        .NameContainer span:nth-child(2) {
          display: flex;
          width: 50%;
        }
      `}</style>
    </>
  );
}
