import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'],
weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
variable: '--Font',
})

export default function App({ Component, pageProps }) {
  return(
    <>
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
      
    </>
  )
  
  
}
