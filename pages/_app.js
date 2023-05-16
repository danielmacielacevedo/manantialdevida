import "daniel/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { UserProvider } from "./UserProvider";
import MenuMobile from "./components/MenuMobileGlobal";
import Header from "./components/Header";
import BackSidebar from "./components/BackSidebar";
import SidebarContent from "./components/SidebarContent";

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

        <div className=" theme PageGlobalContainer">
          <BackSidebar />
          <SidebarContent />
          {/* {user && user.email &&
          <div className="SidebarSectionContent">
            <MenuMembers />
          </div>
          } */}
          <div className="PrincipalSectionContent">
            <div className="PageContainer">
              <div className="PageContent PageContentIntern">
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
