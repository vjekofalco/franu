import React from 'react'
import flatten from 'flat'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { Provider } from 'next-auth/client'

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

  return (<Provider session={pageProps.session}>
      <IntlProvider locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <CookieBanner cookies={cookies}/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </IntlProvider>
  </Provider>)
}

FranuApp.getInitialProps = async ({ Component, ctx }) => {
  const { req } = ctx
  let pageProps = {}

  const cookies = req && req.headers.cookie

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
    cookies
  }
}

export default FranuApp
