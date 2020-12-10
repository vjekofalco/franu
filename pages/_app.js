import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import '../styles/globals.css'
import * as locales from '../content/locale'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const messages =  localeCopy[pathname]

  return (<IntlProvider locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}>
    <Component {...pageProps} />
  </IntlProvider>)
}

export default MyApp
