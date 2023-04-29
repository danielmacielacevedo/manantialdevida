import 'daniel/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {

  return (
  
    <>
      <NextNProgress className="my-progress-bar" color="#2d2d2d" startPosition={0.3} stopDelayMs={200} height={85} showOnShallow={true} />
      <Component {...pageProps} />
    </>
    
    )

}
