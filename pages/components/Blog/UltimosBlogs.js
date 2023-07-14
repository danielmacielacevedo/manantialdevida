import BlogCard from "./BlogCardDetails";

export default function UltimosBlogs() {
  return (
    <>
      <div className="UltimosBlogsContainer" dir="ltr">
        {/* <h2>TODOS LOS BLOGS</h2> */}
        <div className="UltimosBlogsContent">
          <article className="UltimosBlogsArticle">
            <BlogCard nombre="MarlenZamora" indice="2" />
          </article>

          <article className="UltimosBlogsArticle">
            <BlogCard nombre="CarolinaMacias" indice="2" />
          </article>

          <article className="UltimosBlogsArticle">
            <BlogCard nombre="MarlenZamora" indice="1" />
          </article>

          <article className="UltimosBlogsArticle">
            <BlogCard nombre="CarolinaMacias" indice="1" />
          </article>

          <article className="UltimosBlogsArticle">
            <BlogCard nombre="MarlenZamora" indice="0" />
          </article>

          <article className="UltimosBlogsArticle">
            <BlogCard nombre="CarolinaMacias" indice="0" />
          </article>
        </div>
      </div>
      <style jsx>{`
        .UltimosBlogsContainer
        {
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          gap: 20px;
          text-align: center;

        }
        .UltimosBlogsContent {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          height: auto;
          padding: 0 20px;
          gap: 20px;
        }
        .UltimosBlogsArticle
        {
          {/* width: 100%; */}
          height: 100%;
        }

        @media only screen and (max-width: 860px) {
          .UltimosBlogsContent {
            display: flex;
            overflow-x: scroll;
          }
      `}</style>
    </>
  );
}
