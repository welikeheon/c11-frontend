import { AppWrapper } from '../context/state'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

