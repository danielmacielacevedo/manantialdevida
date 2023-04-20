import Head from 'next/head'
import Header from '../components/Header'
import BackHeader from '../components/BackHeader'
import Footer from '../components/Footer'

export default function Predicador() {

  const predicador = 'Calendario Abril';

  return (
    <div className='theme'>
      <Head>
        <title>Calendario Abril | Manantial</title>
        <meta name="description" content="Porque contigo está el manantial de la vida; En tu luz veremos la luz." />
        <meta property="og:title" content="Calendario Abril | Manantial" />
        <meta property="og:url" content="https://somos.mamantial.org/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <BackHeader />
      <div className='PageContainer'>
        <div className='calendar-title'>
          <h2>Calendario Abril</h2>
        </div>
        <div className='PageContent'>
        <div className="LinkContainer">
          <a target="_blank" rel="noreferrer" href='https://danielmacielacevedo.github.io/somosmanantialWeb/miembros/calendario-maestros'>
            <div className="PredicadorContainer">
              <div className="ImageContainer">
                <img src='https://images.unsplash.com/photo-1669658500479-a18092b391d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80' alt='Calendario Maestros' />
              </div>
              <div className="PredicadorData">
                <h3>Calendario Abril <br/> <span>Mira el calendario en la web anterior dando click aquí.</span> </h3>
              </div>
            </div>
          </a>
        </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
            .LinkContainer
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 300px;
                height: auto;
            }
            .PredicadorContainer
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
            }
            .ImageContainer
            {
                display: flex;
                width: 100%;
                height: 100%;
                // background-color: var(--light-grey);
                justify-content: center;
                align-items: center;
            }
            .ImageContainer img
            {
                display: flex;
                width: 100%;
                height: 100%;
                background-position: top center;
                background-repeat: no-repeat;
                background-size: center;
                justify-self: center;
                align-self: center;
            }
            .PredicadorData
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 60px;
                justify-content: center;
                align-items: center;
                text-align: center;
                // padding: 20px;
                font-size: 12px;
                background-color: var(--light-grey);
                color: var(--primary-color);
            }
            .PredicadorData span
            {
              font-size: 10px;
            }

            @media only screen and (max-width: 860px)
            {
              .LinkContainer
              {
                max-width: 500px;
              }
            }
        `}</style>
    </div>
  )
}