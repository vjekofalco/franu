import Head from 'next/head'
import { useIntl } from 'react-intl'

import { NewArrivals } from '../components/pages/home-page/home-page-new-arivals'
import { HomePageGallery } from '../components/pages/home-page/home-page-gallery'
import { HomePagePartners } from '../components/pages/home-page/home-page-partners'
import { HomePageStepsBar } from '../components/pages/home-page/home-page-steps-bar'
import { HomePageJumbotron } from '../components/pages/home-page/home-page-jumbotron'
import { HomePageRequestFormSection } from '../components/pages/home-page/home-page-request-form-section'

export default function Home() {
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })

    return (
        <>
            <Head>
                <title>{f('seo.title')}</title>
                <meta name="description" content={f('seo.description')} />
                <meta name="keywords" content="Einbauküche, Küchenstudio, Küchen nach Maß" />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <HomePageJumbotron f={f}/>
            <NewArrivals f={f}/>
            <HomePageStepsBar f={f}/>
            <HomePagePartners f={f}/>
            <HomePageGallery f={f}/>
            <HomePageRequestFormSection f={f}/>
        </>
    )
}

