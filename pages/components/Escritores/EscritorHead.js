import Head from "next/head";
import { useEffect, useState } from "react";

export default function PredicadorHead(props) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchInfo() {
      const res = await fetch("/api/escritores");
      const data = await res.json();
      setInfo(data[props.nombre]);
    }
    fetchInfo();
  }, [props.nombre]);

  return (
    <>
      <Head>
        {info && (
          <>
            <title>{info.name && `${info.name} | Manantial`}</title>
            <meta
              name="description"
              content={`Encuentra aquí algunas de las prédicas de ${info.name} en Manantial de Vida.`}
            />
            <meta property="og:title" content={`${info.name} | Manantial`} />
            <meta property="og:url" content="https://somos.mamantial.org/" />
            <meta property="og:image" content={info.picture} />
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
          </>
        )}
      </Head>
    </>
  );
}
