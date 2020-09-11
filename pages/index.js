import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Franu Küchen</title>
        <meta name="description" content="Bestellen Sie Ihre Traumküche mit nur wenigen Klicks" />
        <meta name="keywords" content="Traumküche, Küche" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className={styles.main}>
        <img src="/images/logos/franu-text-colored.svg"/>
        <h1 className={styles.title}>
          Wir sind schon bald für Sie erreichbar
        </h1>
        <p className={styles.description}>Franu, wo das Kochen beginnt</p>
      </main>
    </div>
  )
}
