import React from 'react'
import flatten from 'flat'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import '../styles/globals.css'
import * as locales from '../content'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { CookieBanner } from '../components/cookie-banner'
import { common as englishCommon } from '../content/common/en'

function FranuApp({ Component, pageProps, cookies }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]

  const messages =  localeCopy[pathname] ? flatten(localeCopy[pathname]) : flatten({ common: englishCommon })

  return (<IntlProvider locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <CookieBanner cookies={cookies}/>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </IntlProvider>)
}

FranuApp.getInitialProps = async (ctx) => {
  const { req } = ctx
  const cookies = req && req.headers.cookie

  return {
    cookies
  }
}

export default FranuApp
