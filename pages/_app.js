import 'daniel/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from './UserProvider';
import MenuMobile from './components/MenuMobileGlobal';

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
        <MenuMobile />
        <Component {...pageProps} />
      </UserProvider>
      <style></style>
    </>
  );
}

export default MyApp;


// import 'daniel/styles/globals.css';
// import NextNProgress from 'nextjs-progressbar';
// import { UserProvider } from './UserProvider';
// import MenuMobile from './components/MenuMobileGlobal';
// import MenuMembers from './components/MenuMembersGlobal';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <UserProvider>
//         <NextNProgress
//           className="my-progress-bar"
//           color="#2d2d2d"
//           startPosition={0.3}
//           stopDelayMs={200}
//           height={85}
//           showOnShallow={true}
//         />
//         <MenuMobile />
//         <div className='GlobalAppContainer'>
//           <MenuMembers />
//           <Component {...pageProps} />
//         </div>
//       </UserProvider>
//       <style jsx>{`
//         .GlobalAppContainer
//         {
//           display: flex;
//         }
//       `}</style>
//     </>
//   );
// }

// export default MyApp;
