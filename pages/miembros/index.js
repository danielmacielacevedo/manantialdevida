import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Miembros | Manantial</title>
        <meta name="description" content="Porque contigo está el manantial de la vida; En tu luz veremos la luz." />
        <meta property="og:title" content="Miembros | Manantial" />
        <meta property="og:url" content="https://somos.mamantial.org/" />
        {/* <meta property="og:image" content="../assets/predicadores/pastor-isaac/el-vive.jpg" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main>
        <Link href='./'>Salir</Link>
      </main>

    </>
  )
}