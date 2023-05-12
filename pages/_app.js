import 'daniel/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from './UserProvider';
import { useRouter } from 'next/router';
import MenuMobile from './components/MenuMobileGlobal';
import MenuMembers from './components/MenuMembersGlobal';
import Header from './components/Header';
import BackSidebar from './components/BackSidebar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <NextNProgress
          className="my-progress-bar"
          color="#2d2d2d"
          startPosition={0.3}
          stopDelayMs={200}
          height={85}
          showOnShallow={true}
        />
        <Header />

        <div className=' theme PageGlobalContainer'>
          <BackSidebar />
          <div className='SidebarSectionContent'>
            <MenuMembers />  
          </div>
          <div className='PrincipalSectionContent'>
            <div className='PageContainer'>
              <div className='PageContent PageContentIntern'>
                <Component {...pageProps} />  
              </div>
            </div>
          </div>
        </div>
        <MenuMobile />
      </UserProvider>
    </>
  );
}

export default MyApp;
