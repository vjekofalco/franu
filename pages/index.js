// TODO: switch to production ready home page when it is ready
import Head from 'next/head'
import { useIntl } from 'react-intl'
import styles from '../styles/Home.module.css'
import { ImageOptimizedSvg } from '../components/image/image-optimized'

export default function Home() {
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })

    return (
        <div className={styles.container}>
            <Head>
                <title>Franu Küchen</title>
                <meta name="description" content="Bestellen Sie Ihre Traumküche mit nur wenigen Klicks" />
                <meta name="keywords" content="Traumküche, Küche" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <div className={styles.main}>
                <ImageOptimizedSvg relativeUrl={'logos/franu-text-colored.svg'} alt="Franu, einbauküche studio logo"/>
                <h1 className={styles.title} style={{marginTop: '24px'}}>
                    {f('seo.title')}
                </h1>
                <p className={styles.description}>{f('temp.title')}</p>
            </div>
        </div>
    )
}
