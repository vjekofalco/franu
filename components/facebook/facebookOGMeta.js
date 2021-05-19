import Head from 'next/head'

export const FacebookOGMeta = ({ url, type, title, description, image }) => {
    if (!url || !type || !title) {
        return null
    }

    return (<Head>
        <meta property="og:url" content={url}/>
        <meta property="og:type" content={type}/>
        <meta property="og:title" content={title}/>
        <meta name="og:site_name" content="Franu Küchen"/>
        {image && <meta property="og:image" content={image}/>}
        {description && <meta property="og:description" content={description}/>}
    </Head>)
}
