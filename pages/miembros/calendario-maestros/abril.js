import Head from 'next/head'
import HeaderMembers from '../../components/HeaderMembers'
import BackHeader from '../../components/BackHeader'
import MaestroDetails from '../../components/maestros/MaestroDetalles';
import MenuMobile from 'daniel/pages/components/MenuMobile';
import BackMenuMobile from 'daniel/pages/components/BackMenuMobile';
import BackSidebar from '../../components/BackSidebar'
import MenuMembers from '../../components/MenuMembers'

export default function CalendarioMaestros() {

  const mesTitle = 'ABRIL';
  const mes = 'abril';

  return (
    <div className='theme'>
      <Head>
        <title>Calendario Abril | Manantial</title>
        <meta name="description" content="Calendario de clases para los maestros de Manantial de Vida." />
        <meta property="og:title" content="Calendario Abril | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <HeaderMembers />
      <BackHeader />
      <div className='PageGlobalContainer'>
        <BackSidebar />
        <div className='SidebarSectionContent'>
          <MenuMembers />  
        </div>
        <div className='PrincipalSectionContent'>
          <div className='PageContainer'>
            <div className='CalendarTitle'>
              <h3>Calendario Maestros</h3>
              <span>{mesTitle}</span>
              <p>Selecciona tu nombre para ver tu calendario.</p>
            </div>
            <div className='PageContent'>
              <div className='MainCalendario'>
                <article className="CalendarArticle">
                            <div className="TableContainer">

                              <div>A</div>

                                <MaestroDetails nombre="AnitaMinchaca" mes={mes}/>

                              <div>C</div>

                                <MaestroDetails nombre="CarolinaMacias" mes={mes}/>

                              <div>D</div>

                                <MaestroDetails nombre="DavidSolorzano" mes={mes}/>
                                <MaestroDetails nombre="DoraCervantes" mes={mes}/>

                              <div>E</div>

                                <MaestroDetails nombre="ElusaiCazares" mes={mes}/>

                              <div>F</div>

                                <MaestroDetails nombre="FlorFernandez" mes={mes}/>
                                <MaestroDetails nombre="FranciscoSerrano" mes={mes}/>

                              <div>I</div>

                                <MaestroDetails nombre="IsaiasRomero" mes={mes}/>

                              <div>J</div>

                                <MaestroDetails nombre="JessicaTenorio" mes={mes}/>

                              <div>K</div>

                                <MaestroDetails nombre="KarlaSerrano" mes={mes}/>

                              <div>M</div>

                                <MaestroDetails nombre="MarlenZamora" mes={mes}/>
                                <MaestroDetails nombre="Margarita" mes={mes}/>

                              <div>N</div>

                                <MaestroDetails nombre="NoryMontiel" mes={mes}/>

                              <div>P</div>

                                <MaestroDetails nombre="PastoraDina" mes={mes}/>
                                <MaestroDetails nombre="PastorIsaac" mes={mes}/>

                              <div>S</div>

                                <MaestroDetails nombre="SaraiGalarza" mes={mes}/>

                              <div>T</div>

                                <MaestroDetails nombre="TereOlivas" mes={mes}/>

                              <div>V</div>

                                <MaestroDetails nombre="VeliaAcevedo" mes={mes}/>
                                <MaestroDetails nombre="VeronicaCazares" mes={mes}/>

                              <div>W</div>

                                <MaestroDetails nombre="WendyMartinez" mes={mes}/>

                              <div>Y</div>

                                <MaestroDetails nombre="YoselinGalarza" mes={mes}/>

                            </div>
                        </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackMenuMobile />
      <MenuMobile />
    </div>
  )
}