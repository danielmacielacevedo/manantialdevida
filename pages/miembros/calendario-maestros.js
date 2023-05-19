import Head from "next/head";
import BackHeader from "../components/BackHeader";
import Link from "next/link";
import BackMenuMobile from "../components/BackMenuMobile";

export default function CalendarioMaestros() {
  return (
    <div className="PageContentPadding">
      <Head>
        <title>Calendario Maestros 2023 | Manantial</title>
        <meta
          name="description"
          content="Calendario de clases para los maestros de Manantial de Vida."
        />
        <meta
          property="og:title"
          content="Calendario Maestros 2023 | Manantial"
        />
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
              <h3>Calendario 2023</h3>
              <span>MAESTROS</span>
              <p>Selecciona un mes.</p>
            </div>
            <div className="PageContent PageContentFull">
              <div className="MainCalendario">
                <article className="CalendarArticle">
                  <div className="GlobalCalendarContainer">
                    <Link
                      className="MesContainer"
                      href="/miembros/calendario-maestros/abril"
                    >
                      <div>
                        <p>Abril</p>
                      </div>
                    </Link>

                    <Link
                      className="MesContainer"
                      href="/miembros/calendario-maestros/mayo"
                    >
                      <div>
                        <p>Mayo</p>
                      </div>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackMenuMobile />
    </div>
  );
}
