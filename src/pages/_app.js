import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { StateContextProvider } from '../context/StateContext';


export default function App({ Component, pageProps }) {
  return (
<div>
<StateContextProvider>
<Navbar/>
  <Component {...pageProps} />
  </StateContextProvider>
</div>
  ) 
}
