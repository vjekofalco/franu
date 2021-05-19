import Head from 'next/head'
import { useRouter } from 'next/router'

import blogPosts from '../../content/blog/blog-posts.json'
import { BlogIntro } from '../../components/pages/blog/intro'
import { SubTitle } from '../../components/pages/blog/subTitle'
import { BlogSection } from '../../components/pages/blog/section'
import { BlogHeadline } from '../../components/pages/blog/headline'
import { BlogPostWrapper } from '../../components/pages/blog/common'
import { FacebookOGMeta } from '../../components/facebook/facebookOGMeta'
import { FacebookShareButton } from '../../components/facebook/facebookShareButton'
import { MainWrapper, Sidebar, MainImageWrapper } from '../../components/pages/blog/common'
import { FacebookShareButtonScript } from '../../components/facebook/facebookShareButtonScript'

export default () => {
    const env = process.env.NODE_ENV
    const router = useRouter()
    const { posts } = blogPosts
    const { postId } = router.query

    const blogPost = posts.filter(bp => bp.id === postId)[0]
    const sidebarBlogPosts = posts.filter(bp => bp.id !== postId)
    const oGUrl = `${env === 'development' ? 'http://localhost:3000' : 'https://franu.de'}${router.asPath}`

    const { seo, title, intro, sections, image, subTitle, date } = blogPost

    return <>
        <Head>
            {seo?.title && <title>{seo.title}</title>}
            {seo?.description && <meta name="description" content={seo.description} />}
            {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
        </Head>
        <FacebookOGMeta title={title} type='article' image={image.url} description={seo.description} url={oGUrl}/>
        <FacebookShareButtonScript/>
        <BlogPostWrapper>
            <MainWrapper>
                {title && <BlogHeadline title={title}/>}
                <SubTitle subTitle={subTitle} date={date}/>
                <FacebookShareButton url={oGUrl}/>
                {image && image.url && <MainImageWrapper>
                    <img src={image.url} alt={image.alt}/>
                </MainImageWrapper>}
                <BlogIntro intros={intro}/>
                {sections && sections.length > 0 && sections.map(s => (<BlogSection section={s}/>))}
            </MainWrapper>
            <Sidebar>

            </Sidebar>
        </BlogPostWrapper>
    </>
}
