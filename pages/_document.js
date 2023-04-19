import { Html, Head, Main, NextScript } from 'next/document'
import Header from './components/Header'
// import Header from 'daniel/components/Header'
// import { useRouter } from 'next/router'

export default function Document() {
  // const router = useRouter();

  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
