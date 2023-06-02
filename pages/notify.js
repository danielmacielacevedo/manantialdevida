import Head from "next/head";
import BackHeader from "./components/BackHeader";
import BackMenuMobile from "./components/BackMenuMobile";
import AllNotify from "./components/Notify/AllNotify";

export default function Miembros() {
  return (
    <>
      <Head>
        <title>Notificaciones | Manantial</title>
        <meta
          name="description"
          content="Panel para Miembros de Manantial de Vida."
        />
        <meta property="og:title" content="Panel miembros | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/miembros" />
        <meta property="og:image" content="/assets/iconApp.jpg" />
        <link rel="apple-touch-icon" href="/assets/iconApp.jpg"></link>
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
            <div className="PageContent PageContentIntern">
              <AllNotify />
            </div>
          </div>
        </div>
      </div>
      <BackMenuMobile />
    </>
  );
}
