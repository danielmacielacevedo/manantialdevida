import { useState, useEffect } from "react";
import ArticleList from "./ArticleListSociedades";
import ButtonList from "./ButtonListSociedades";

export default function MaestrosFiltro(props) {
  const [originalArticles, setOriginalArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const fetchData = async () => {
    if (props.mes) {
      const response = await fetch(encodeURI(`/api/sociedades/${props.mes}`));
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
      const filteredArticles = originalArticles
        .map((article) => ({
          ...article,
          classes: article.classes.filter(
            (clase) => clase.category === category
          ),
        }))
        .filter((article) => article.classes.length > 0);
      setFilteredArticles(filteredArticles);
    }
  };

  const categories = ["Todos", "Damas", "Niños", "Jóvenes", "Varones"];

  return (
    <>
      <div className="MaestrosFiltroContainer">
        <ButtonList categories={categories} filterCategory={filterCategory} />
        <ArticleList articles={filteredArticles} />
      </div>
      <style jsx>{`
        .MaestrosFiltroContainer {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 20px;
          gap: 20px;
        }
      `}</style>
    </>
  );
}
