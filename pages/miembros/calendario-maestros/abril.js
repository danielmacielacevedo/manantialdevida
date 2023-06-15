import Head from "next/head";
import BackHeader from "../../components/BackHeader";
import BackMenuMobile from "daniel/pages/components/BackMenuMobile";
import MaestrosFiltro from "daniel/pages/components/Filtrar/FilterMaestros/MaestrosFiltro";
import withAuth from "daniel/utils/withAuth";
import esAdministrador from "daniel/pages/api/Administradores";
import { useContext } from "react";
import { UserContext } from "daniel/pages/UserProvider";
import Link from "next/link";

function CalendarioMaestros() {
  const mesTitle = "ABRIL";
  const mes = "Abril";

  const { user } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Calendario Abril | Manantial</title>
        <meta
          name="description"
          content="Calendario de clases para los maestros de Manantial de Vida."
        />
        <meta property="og:title" content="Calendario Abril | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/miembros" />
        <meta property="og:image" content="/assets/icon_manantial.png" />
        <link rel="apple-touch-icon" href="/assets/icon_manantial.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <BackHeader />
      <div className="PageGlobalContainer">
        <div className="PrincipalSectionContent">
          <div className="PageContainer">
            <div className="CalendarTitle">
              <h1>Hola {user.name.split(" ")[0]}</h1>
              {esAdministrador(user.id) && <p>aquí está el calendario de</p>}
              {!esAdministrador(user.id) && <p>este es tu calendario de</p>}
              <div className="CalendarTitleButtons">
                <div href="/">
                  <span className="CalendarLeft">
                    <i></i>
                  </span>
                </div>
                <span>{mesTitle}</span>
                <Link href="/miembros/calendario-maestros/mayo">
                  <span id="on" className="CalendarRight">
                    <i></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="PageContent">
              <div className="MainCalendario">
                <article className="CalendarArticle">
                  <div className="TableContainer">
                    <MaestrosFiltro mes={mes} />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackMenuMobile />
    </>
  );
}

export default withAuth(CalendarioMaestros);
