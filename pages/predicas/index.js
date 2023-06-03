import Head from "next/head";
import Predicas from "../components/Predicas";
import Footer from "../components/Footer";
import BackHeader from "../components/BackHeader";
import Cover from "../components/Cover";
import CoverPredica from "../components/CoverPredica";

export default function Home() {
  return (
    <div className="theme">
      <Head>
        <title>Prédicas | Manantial</title>
        <meta
          name="description"
          content="Porque contigo está el manantial de la vida; En tu luz veremos la luz."
        />
        <meta property="og:title" content="Prédicas | Manantial" />
        <meta property="og:url" content="https://somos.mamantial.org/" />
        {/* <meta property="og:image" content="../assets/predicadores/pastor-isaac/el-vive.jpg" /> */}
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
      <Cover>
        <CoverPredica nombre="PastorIsaac" indice="6" />
      </Cover>
      <Predicas />
      <Footer />
    </div>
  );
}
