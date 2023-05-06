import { useState, useEffect } from 'react';

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
      <div className='ArticleListContainer'>
        {isLoading ? (
          <div className="LoadingSpinnerContainer">
            <div className='Spinner'></div>
            <img className="SpinnerImage" src="/assets/favicon_manantial.png" />
          </div>
        ) : articles && articles.length > 0 ? articles.map(article => (
          <div className='MaestroContainer article-container' key={article.id}>
            <h2>{article.title}</h2>
            <div className='MaestroClasses'>
              {article.classes.map(clase => (
                <div className='TableContainerInfo.open' key={clase.date}>
                  {/* {clase.category !== 'Libre' && (
                    <div className='NameContainer TitleTableCalendar'>
                      <span>Día</span>
                      <span>Clase</span>
                    </div>
                  )} */}
                  <div className='NameContainer'>
                    <span>{clase.date}</span>
                    <span>{clase.class}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )) : (
          <p className='TextAlignCenter'>Este calendario aún no está disponible.</p>
        )}
      </div>
      <style jsx>{`
              .ArticleListContainer
              {
                display: flex;
                flex-direction: column;
                gap: 20px;
              }
              .MaestroContainer
              {
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
                .MaestroContainer:hover
                {
                    background-color: var(--mid-grey);
                }
              .MaestroContainer h2
              {
                  {/* color: var(--manantial-color); */}
                  color: var(--secondary-color);
              }
              .MaestroClasses
              {
                display: flex;
                flex-direction: column;
                gap: 20px
              }
              .TableContainerInfo
              {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  padding: 20px 0 0 0;
                  gap: 20px;
              }
              .NameContainer
              {
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
              .TitleTableCalendar
              {
                  font-size: 14px;
                  font-weight: 100;
              }
              .NameContainer span:nth-child(1)
              {
                  width: 50%;
              }
              .NameContainer span:nth-child(2)
              {
                  display: flex;
                  width: 50%;
              }
              .TableContainerInfo
              {
                  display: none;
              }
              .TableContainerInfo.open
              {
                  display: flex;
              }
          `}</style>
    </>
  );
}
