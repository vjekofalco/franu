import React from 'react'
import flatten from 'flat'
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

  return (<IntlProvider locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
  </IntlProvider>)
}

export default MyApp
