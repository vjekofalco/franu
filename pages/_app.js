import React from 'react'
import flatten from 'flat'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { common as englishCommon } from '../content/common/en'

import '../styles/globals.css'
import * as locales from '../content'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]

  const messages =  localeCopy[pathname] ? flatten(localeCopy[pathname]) : flatten({ common: englishCommon })

  console.log(messages)

  const { publicRuntimeConfig } = getConfig()
  console.log(publicRuntimeConfig)

  return (<IntlProvider locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </IntlProvider>)
}

export default MyApp
