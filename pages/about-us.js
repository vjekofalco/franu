import { useIntl } from 'react-intl'

import { AboutUsJumbotron } from '../components/pages/about-us/about-us-jumbotron'
import { AboutUsCtaBanner } from '../components/pages/about-us/about-us-cta-banner'
import { AboutUsIntroduction } from '../components/pages/about-us/about-us-introduction'
import { AboutUsTestimonials } from '../components/pages/about-us/about-us-testimonials'

export default () => {
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })

    return (<>
        <AboutUsJumbotron f={f}/>
        <AboutUsIntroduction f={f}/>
        <AboutUsCtaBanner f={f}/>
        <AboutUsTestimonials f={f}/>
    </>)
}

