import Footer from '@/Components/molucules/Footer'
import store from '@/Components/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }) {
  return (
   <Provider store={store}>
  <Component {...pageProps} />
  <Footer />
  </Provider>
  )
}
