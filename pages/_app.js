import React from 'react'
import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Header } from "../components/header";

function MyApp({ Component, pageProps }) {
  return (<>
    <Header/>
    <Component {...pageProps} />
    </>)
}

export default MyApp
