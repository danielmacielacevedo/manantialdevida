import Head from "next/head";
import BackHeader from "../../components/BackHeader";
import Link from "next/link";
import BackMenuMobile from "../../components/BackMenuMobile";
import withAuth from "daniel/utils/withAuth";

function CalendarioAudio() {
  return (
    <div className="PageContentPadding">
      <Head>
        <title>Calendario Audio 2023 | Manantial</title>
        <meta
          name="description"
          content="Calendario para el equipo de audio en Manantial de Vida."
        />
        <meta property="og:title" content="Calendario Audio 2023 | Manantial" />
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
              <span>AUDIO</span>
              <p>Selecciona un mes.</p>
            </div>
            <div className="PageContent PageContentFull">
              <div className="MainCalendario">
                <article className="CalendarArticle">
                  <div className="GlobalCalendarContainer">
                    <Link className="MesContainer" href="/miembros/audio/julio">
                      <div>
                        <p>Julio</p>
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

export default withAuth(CalendarioAudio);
