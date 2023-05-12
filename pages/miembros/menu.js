import Head from 'next/head'
import HeaderMembers from '../components/HeaderMembers'
import BackHeader from '../components/BackHeader'
import MenuMobileMenu from '../components/MenuMobileMenu'
import BackMenuMobile from '../components/BackMenuMobile'
import MenuMembersGlobal from '../components/MenuMembersGlobal'

export default function Miembros() {

  return (
    <div className='PageContentPadding'>
      <Head>
        <title>Panel Miembros | Manantial</title>
        <meta name="description" content="Panel para Miembros de Manantial de Vida." />
        <meta property="og:title" content="Panel miembros | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      {/* <HeaderMembers /> */}
      {/* <BackHeader /> */}
      <div className='PageContainer'>
        <div className='PageContent PageContentIntern'>
          <MenuMembersGlobal />
        </div>
      </div>
      <BackMenuMobile />
      {/* <MenuMobileMenu /> */}
    </div>
  )
}