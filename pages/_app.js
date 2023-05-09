import 'daniel/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('Service worker registered: ', registration);
          })
          .catch(error => {
            console.log('Service worker registration failed: ', error);
          });
      });
    }
  }, []);

  return (
    <>
      <NextNProgress
        className="my-progress-bar"
        color="#2d2d2d"
        startPosition={0.3}
        stopDelayMs={200}
        height={85}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;





// import 'daniel/styles/globals.css'
// import NextNProgress from 'nextjs-progressbar';

// export default function App({ Component, pageProps }) {

//   return (
  
//     <>
//       <NextNProgress className="my-progress-bar" color="#2d2d2d" startPosition={0.3} stopDelayMs={200} height={85} showOnShallow={true} />
//       <Component {...pageProps} />
//     </>
    
//     )
// }