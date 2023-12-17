import PrimarySearchAppBar from '@/components/Header/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      {/* <PrimarySearchAppBar/> */}
      <Component {...pageProps} />
    </div>
    ) 
}

