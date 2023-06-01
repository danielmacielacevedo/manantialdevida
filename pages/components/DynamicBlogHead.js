import Head from "next/head";
import { useEffect, useState } from "react";

export default function DynamicHead(props) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchInfo() {
      const res = await fetch("/api/detallesBlog");
      const data = await res.json();
      setInfo(data[props.nombre][props.indice]);
    }
    fetchInfo();
  }, [props.nombre, props.indice]);

  return (
    <>
      <Head>
        {info && (
          <>
            <title>
              {info.title && info.autor && `${info.title} | ${info.autor}`}
            </title>
            <meta name="description" content={info.desc} />
            <meta
              property="og:title"
              content={`${info.title} | ${info.autor}`}
            />
            <meta property="og:url" content="https://somosmamantial.org/" />
            <meta property="og:image" content={info.image} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
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
            <script src="https://apis.google.com/js/platform.js"></script>
          </>
        )}
      </Head>
    </>
  );
}
