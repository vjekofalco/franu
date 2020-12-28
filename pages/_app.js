import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import '../styles/globals.css'
import * as locales from '../content/locale'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const messages =  localeCopy[pathname]

  const { publicRuntimeConfig } = getConfig()
  console.log(publicRuntimeConfig)

  return (<IntlProvider locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}>
    <Head>
      // Global site tag (gtag.js) - Google Analytics
      {publicRuntimeConfig.GA_ENABLED && <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PVNH1XGR2H"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-PVNH1XGR2H');`}} />
      </>}
    </Head>
    <Component {...pageProps} />
  </IntlProvider>)
}

export default MyApp
