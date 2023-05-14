import Link from "next/link";

export default function MonthEvents() {
  return (
    <div className="MonthEventsContainer">
      {/* <h2>ANIVERSARIO</h2> */}
      <div className="ArticlesContainer">
        <article className="ArticleContainer">
          {/* <img src='https://i.pinimg.com/originals/aa/96/97/aa9697a3f7a61389675b8dc109518753.gif' /> */}
          <div>
            <h3>MIÉRCOLES</h3>
            <p>19 de Abril</p>
            <Link
              className="PrimaryButton"
              href="/@pastorisaac/nunca-te-olvides"
            >
              VER SERVICIO
            </Link>
          </div>
          <div>
            <h3>VIERNES</h3>
            <p>21 de Abril</p>
            <Link
              className="PrimaryButton"
              href="/@franciscogarcia/integra-fidelidad"
            >
              VER SERVICIO
            </Link>
          </div>
        </article>
        <article className="ArticleContainer">
          {/* <img src='https://i.pinimg.com/originals/aa/96/97/aa9697a3f7a61389675b8dc109518753.gif'/> */}
          <div>
            <h3>SABADO</h3>
            <p>22 de Abril</p>
            <Link
              className="PrimaryButton"
              href="/@juanleyva/la-palabra-que-transforma-las-generaciones"
            >
              VER SERVICIO
            </Link>
          </div>
          <div>
            <h3>DOMINGO</h3>
            <p>23 de Abril</p>
            {/* <a id='noticias' className='SecondaryButton' href='#top'>PRÓXIMAMENTE</a> */}
            <Link className="PrimaryButton" href="/@leonorruiz/marcos5">
              VER SERVICIO
            </Link>
          </div>
        </article>
      </div>
      <style jsx>{`
        .MonthEventsContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: center;
          align-items: center;
          padding: 20px 20px 0 20px;
          gap: 20px;
          background-color: var(--primary-color);
        }
        .ArticlesContainer {
          display: flex;
          width: 100%;
          height: auto;
          gap: 20px;
        }
        .ArticleContainer {
          display: flex;
          // flex-direction: column;
          flex: 1;
          width: 100%;
          height: auto;
          gap: 20px;
          align-items: center;
          color: var(--secondary-color);
        }
        .ArticleContainer img {
          width: 100%;
          height: auto;
          max-height: 180px;
          object-fit: cover;
        }
        .ArticleContainer p {
          font-size: 14px;
          font-weight: 100;
          color: var(--secondary-color);
        }
        .ArticleContainer div {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          gap: 10px;
           {
            /* padding: 20px; */
          }
           {
            /* background-color: var(--light-grey); */
          }
        }
        @media only screen and (max-width: 860px) {
          .ArticleContainer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
