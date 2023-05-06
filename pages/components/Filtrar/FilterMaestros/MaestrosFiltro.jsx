import { useState, useEffect } from 'react';
import ArticleList from './ArticleListMaestros';
import ButtonList from './ButtonListMaestros';
import Novedad from '../../Novedad';

export default function MaestrosFiltro(props) {
  const [originalArticles, setOriginalArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const fetchData = async () => {
    if (props.mes) {
		const response = await fetch(encodeURI(`/api/maestros/${props.mes}`));
		const data = await response.json();
		setOriginalArticles(data);
		setFilteredArticles(data);	
	}
  };

  // Realizar la solicitud fetch cuando se monta el componente
  useEffect(() => {
    fetchData();
  }, [props.mes]);

  const filterCategory = (category) => {
    if (category === "Todos") {
      setFilteredArticles(originalArticles);
    } else {
      const filteredArticles = originalArticles.map((article) => ({
        ...article,
        classes: article.classes.filter(
          (clase) => clase.category === category
        ),
      })).filter((article) => article.classes.length > 0);
      setFilteredArticles(filteredArticles);
    }
  };

  const categories = ['Todos', 'Niños', 'Jóvenes', 'Adultos'];

  return (
    <>
      <div className="MaestrosFiltroContainer">
        <Novedad content="Ya puedes filtrar el calendario por clases." />
        <ButtonList categories={categories} filterCategory={filterCategory} />
        <ArticleList articles={filteredArticles} />
      </div>
      <style jsx>{`
        .MaestrosFiltroContainer
        {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      `}</style>
    </>
  );
}