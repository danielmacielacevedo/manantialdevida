import Head from 'next/head'
import HeaderMembers from '../components/HeaderMembers'
import BackHeader from '../components/BackHeader'
import BackSidebar from '../components/BackSidebar'
import Footer from '../components/Footer'
import MenuMobile from '../components/MenuMobile'
import Link from 'next/link'
import BackMenuMobile from '../components/BackMenuMobile'
import MenuMembers from '../components/MenuMembers'


export default function CalendarioMaestros() {

  return (
    <div className='theme'>
      <Head>
        <title>Calendario Maestros 2023 | Manantial</title>
        <meta name="description" content="Calendario de clases para los maestros de Manantial de Vida." />
        <meta property="og:title" content="Calendario Maestros 2023 | Manantial" />
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
          <h3>Calendario 2023</h3>
          <span>MAESTROS</span>
          <p>Selecciona un mes.</p>
        </div>
        <div className='PageContent'>
          <div className='MainCalendario'>
            <article className="CalendarArticle">
                        <div className="GlobalCalendarContainer">

                          <Link className='MesContainer' href="/miembros/calendario-maestros/abril">
                            <div>
                              <p>Abril</p>
                            </div>
                          </Link>

                          <Link className='MesContainer' href="/miembros/calendario-maestros/mayo">
                            <div>
                              <p>Mayo</p>
                            </div>
                          </Link>


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