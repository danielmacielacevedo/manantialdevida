import Head from 'next/head'
import HeaderMembers from '../../components/HeaderMembers'
import BackHeader from '../../components/BackHeader'
import BackSidebar from '../../components/BackSidebar'
import MenuMobile from 'daniel/pages/components/MenuMobile';
import BackMenuMobile from 'daniel/pages/components/BackMenuMobile';
import MenuMembers from '../../components/MenuMembers'
import MaestrosFiltro from 'daniel/pages/components/Filtrar/FilterMaestros/MaestrosFiltro'


export default function CalendarioMaestros() {

  const mesTitle = 'ABRIL';
  const mes = 'Abril';

  return (
    <div className='theme'>
      <Head>
        <title>Calendario Abril | Manantial</title>
        <meta name="description" content="Calendario de clases para los maestros de Manantial de Vida." />
        <meta property="og:title" content="Calendario Abril | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/miembros" />
        <meta property="og:image" content="/assets/icon_manantial.png" />
        <link rel="apple-touch-icon" href="/assets/icon_manantial.png"></link>
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
          {/* <p>Selecciona tu nombre para ver tu calendario.</p> */}
        </div>
        <div className='PageContent'>
          <div className='MainCalendario'>
            <article className="CalendarArticle">
                        <div className="TableContainer">

                          <MaestrosFiltro mes={mes} />

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