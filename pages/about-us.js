import { AboutUsJumbotron } from '../components/pages/about-us/about-us-jumbotron'
import { AboutUsCtaBanner } from '../components/pages/about-us/about-us-cta-banner'
import { AboutUsIntroduction } from '../components/pages/about-us/about-us-introduction'
import { AboutUsTestimonials } from '../components/pages/about-us/about-us-testimonials'

export default () => {
    return (<>
        <AboutUsJumbotron/>
        <AboutUsIntroduction/>
        <AboutUsCtaBanner/>
        <AboutUsTestimonials/>
    </>)
}
