import Head from 'next/head'
import HeaderMembers from '../../components/HeaderMembers'
import BackHeader from '../../components/BackHeader'
import MenuMobile from '../../components/MenuMobile'
import BackMenuMobile from '../../components/BackMenuMobile'
import BackSidebar from '../../components/BackSidebar'
import MenuMembers from '../../components/MenuMembers'
import { saveAs } from 'file-saver';

export default function CalendarioMaestros() {

  const handleDownloadLogoMV1 = () => {
    const fileUrl = 'https://somosmanantial.org/assets/light_logo_manantial.png';
    const fileName = 'light_logo_manantial.png';
    saveAs(fileUrl, fileName);
  };

  return (
    <div className='theme'>
      <Head>
        <title>Logotipos | Manantial</title>
        <meta name="description" content="Aquí puedes descargar todos los logotipos de Manantial de Vida" />
        <meta property="og:title" content="Logotipos | Manantial" />
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
              <h3>Descargar</h3>
              <span>LOGOTIPOS</span>
              <p>Selecciona el logotipo que necesitas.</p>
              {/* <p>IMPORTANTE ©<br/> El color de los logotipos <strong>NO</strong> debe ser modificado a los colores ya existentes.</p> */}
            </div>
            <div className='PageContent'>
              <div className='MainCalendario'>
                <article className="CalendarArticle ResourcesContainer">

                  <p>Logotipo Manantial</p>

                  <div className="GlobalCalendarContainer">

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/light_logo_manantial.png', 'light_logo_manantial.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/light_logo_manantial320.png' alt='Logo Claro Manantial' />
                        {/* <p>Claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/dark_logo_manantial.png', 'dark_logo_manantial.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/dark_logo_manantial320.png' alt='Logo Oscuro Manantial' />
                        {/* <p>Oscuro</p> */}
                      </div>
                    </a>

                  </div>

                  <p>Logotipo Damas</p>

                  <div className="GlobalCalendarContainer">

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/color_light_logo_manantial_damas.png', 'light_logo_manantial_damas.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/color_light_logo_manantial_damas320.png' alt='Logo Claro Damas Manantial' />
                        {/* <p>Color claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/light_logo_manantial_damas.png', 'light_logo_manantial_damas.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/light_logo_manantial_damas320.png' alt='Logo Claro Damas Manantial' />
                        {/* <p>Claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/dark_logo_manantial_damas.png', 'dark_logo_manantial_damas.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/dark_logo_manantial_damas320.png' alt='Logo Oscuro Manantial' />
                        {/* <p>Oscuro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/color_dark_logo_manantial_damas.png', 'dark_logo_manantial_damas.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/color_dark_logo_manantial_damas320.png' alt='Logo Oscuro Manantial' />
                        {/* <p>Color oscuro</p> */}
                      </div>
                    </a>

                  </div>

                  <p>Logotipo Niños</p>

                  <div className="GlobalCalendarContainer">


                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/light_logo_manantial_kids.png', 'light_logo_manantial_kids.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/light_logo_manantial_kids320.png' alt='Logo Claro Kids Manantial' />
                        {/* <p>Claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/color_logo_manantial_kids.png', 'color_logo_manantial_kids.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/color_logo_manantial_kids320.png' alt='Logo Color Kids Manantial' />
                        {/* <p>Color</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/dark_logo_manantial_kids.png', 'dark_logo_manantial_kids.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/dark_logo_manantial_kids320.png' alt='Logo Oscuro Kids Manantial' />
                        {/* <p>Oscuro</p> */}
                      </div>
                    </a>

                  </div>

                  <p>Logotipo Varones</p>

                  <div className="GlobalCalendarContainer">

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/color_light_logo_manantial_varones.png', 'light_logo_manantial_varones.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/color_light_logo_manantial_varones320.png' alt='Logo Color Claro Varones Manantial' />
                        {/* <p>Color claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/light_logo_manantial_varones.png', 'light_logo_manantial_varones.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/light_logo_manantial_varones320.png' alt='Logo Claro Varones Manantial' />
                        {/* <p>Claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/dark_logo_manantial_varones.png', 'dark_logo_manantial_varones.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/dark_logo_manantial_varones320.png' alt='Logo Oscuro Varones Manantial' />
                        {/* <p>Oscuro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/color_dark_logo_manantial_varones.png', 'dark_logo_manantial_varones.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/color_dark_logo_manantial_varones320.png' alt='Logo Color Oscuro VaronesManantial' />
                        {/* <p>Color oscuro</p> */}
                      </div>
                    </a>

                  </div>

                  <p>Logotipo Jóvenes</p>

                  <div className="GlobalCalendarContainer">

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/light_logo_manantial_jovenes.png', 'light_logo_manantial_jovenes.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/light_logo_manantial_jovenes320.png' alt='Logo Claro Jóvenes Manantial' />
                        {/* <p>Claro</p> */}
                      </div>
                    </a>

                    <a className='MesContainer ButtonDownload' href="#" onClick={() => saveAs('/assets/logotipos/descargar/dark_logo_manantial_jovenes.png', 'dark_logo_manantial_jovenes.png')}>
                      <div className='LogoContainerView'>
                        <img src='/assets/logotipos/dark_logo_manantial_jovenes320.png' alt='Logo Oscuro Jóvenes Manantial' />
                        {/* <p>Oscuro</p> */}
                      </div>
                    </a>

                  </div>

              {/* <p>IMPORTANTE ©<br/> El color de los logotipos <strong>NO</strong> debe ser modificado a los colores ya existentes.</p> */}
                  

                </article>
              </div>
            </div>
      </div>
        </div>
      </div>
      <BackMenuMobile />
      <MenuMobile />
      <style jsx>{`
          .ResourcesContainer
          {
            display: flex;
            flex-direction: column;
            color: var(--secondary-color);
            gap: 20px;
          }
          .ButtonDownload
          {
            border: none;
            height: fit-content;
            padding: 20px;
          }
          .LogoContainerView
          {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px
          }
          .LogoContainerView img
          {
            width: 100%;
          }
          .LogoContainerView p
          {
            font-size: 12px;
          }
      `}</style>
    </div>
  )
}