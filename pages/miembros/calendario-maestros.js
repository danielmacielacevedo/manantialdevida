import Head from 'next/head'
import Header from '../components/Header'
import BackHeader from '../components/BackHeader'
import Footer from '../components/Footer'
import MaestroDetails from '../components/maestros/MaestroDetalles';

export default function CalendarioMaestros() {

  const mes = 'Abril';

  return (
    <div className='theme'>
      <Head>
        <title>Calendario Abril | Manantial</title>
        <meta name="description" content="Porque contigo está el manantial de la vida; En tu luz veremos la luz." />
        <meta property="og:title" content="Calendario Abril | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <BackHeader />
      <div className='PageContainer'>
        <div className='CalendarTitle'>
          <h2>Calendario {mes}</h2>
          <p>Selecciona tu nombre para ver tu calendario.</p>

        </div>
        <div className='PageContent'>
          <div className='MainCalendario'>
            <article className="CalendarArticle">
                        <div className="TableContainer">

                          <div>A</div>

                            <MaestroDetails nombre="AnitaMinchaca" />

                          <div>C</div>

                            <MaestroDetails nombre="CarolinaMacias" />

                          <div>D</div>

                            <MaestroDetails nombre="DavidSolorzano" />
                            <MaestroDetails nombre="DoraCervantes" />

                          <div>E</div>

                            <MaestroDetails nombre="ElusaiCazares" />

                          <div>F</div>

                            <MaestroDetails nombre="FlorFernandez" />
                            <MaestroDetails nombre="FranciscoSerrano" />

                          <div>I</div>

                            <MaestroDetails nombre="IsaiasRomero" />

                          <div>J</div>

                            <MaestroDetails nombre="JessicaTenorio" />

                          <div>K</div>

                            <MaestroDetails nombre="KarlaSerrano" />

                          <div>M</div>

                            <MaestroDetails nombre="MarlenZamora" />
                            <MaestroDetails nombre="Margarita" />

                          <div>N</div>

                            <MaestroDetails nombre="NoryMontiel" />

                          <div>P</div>

                            <MaestroDetails nombre="PastoraDina" />
                            <MaestroDetails nombre="PastorIsaac" />

                          <div>S</div>

                            <MaestroDetails nombre="SaraiGalarza" />

                          <div>T</div>

                            <MaestroDetails nombre="TereOlivas" />

                          <div>V</div>

                            <MaestroDetails nombre="VeliaAcevedo" />
                            <MaestroDetails nombre="VeronicaCazares" />

                          <div>W</div>

                            <MaestroDetails nombre="WendyMartinez" />

                          <div>Y</div>

                            <MaestroDetails nombre="YoselinGalarza" />

                        </div>
                    </article>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
            .CalendarTitle
            {
              display: flex;
              flex-direction: column;
              text-align: center;
              gap: 10px;
            }
            .CalendarTitle p
            {
              font-size: 12px;
            }
            .MainCalendario
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 700px;
                height: auto;
            }
            .TableContainer
            {
              display: flex;
              flex-direction: column;
              gap: 20px;
              color: var(--secondary-color)
            }

            @media only screen and (max-width: 860px)
            {
              .MainContainer
              {
                max-width: 500px;
              }
            }
        `}</style>
    </div>
  )
}