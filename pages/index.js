import Head from 'next/head'

import { HomePageRequestForm } from '../components/forms/home-page-request-form'
import { NewArrivals } from '../components/pages/home-page/home-page-new-arivals'
import { HomePageGallery } from '../components/pages/home-page/home-page-gallery'
import { HomePageStepsBar } from '../components/pages/home-page/home-page-steps-bar'
import { HomePageJumbotron } from '../components/pages/home-page/home-page-jumbotron'

export default function Home() {
  return (
    <>
      <Head>
        <title>Franu Küchen</title>
        <meta name="description" content="Bestellen Sie Ihre Traumküche mit nur wenigen Klicks" />
        <meta name="keywords" content="Traumküche, Küche" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
     <HomePageJumbotron/>
     <NewArrivals/>
     <HomePageStepsBar/>
     <HomePageGallery/>
     <HomePageRequestForm/>
    </>
  )
}
