import Head from 'next/head'

import { HomePageJumbotron } from "../components/pages/home-page/home-page-jumbotron";

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
    </>
  )
}
