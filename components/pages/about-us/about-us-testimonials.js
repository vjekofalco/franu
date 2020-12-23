import styled from 'styled-components'

import { brown } from '../../../styles/colors'
import { Section } from '../../common/section'
import { Testimonials } from '../../testimonials'
import { HeadlineSecondary, Text } from '../../common/text'
import {baseUnit, PAGE_CONTENT_NARROW_WIDTH} from '../../../common/constants'

const AboutUsTestimonialsSection = styled(Section)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${9 * baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const AboutUsTestimonialsTitleWrapper = styled.div`
  text-align: center;
`

const testimonials = [
    {
        description: 'Neki tekst sto cemo napisat ko da je Tonka rekla',
        name: 'Antonija Medic',
        city: 'Munich'
    },
    {
        description: 'Neki tekst sto je ko fol netko drugi rekao',
        name: 'Angelique Kerber',
        city: 'Munich'
    }
]

export const AboutUsTestimonials = ({ f }) => (
    <AboutUsTestimonialsSection>
        <AboutUsTestimonialsTitleWrapper>
            <HeadlineSecondary color={brown} marginBottom={2}>{f('customers.title')}</HeadlineSecondary>
            <Text size={1.2} marginBottom={3}>{f('customers.subTitle')}</Text>
        </AboutUsTestimonialsTitleWrapper>
        <Testimonials testimonials={testimonials} f={f}/>
    </AboutUsTestimonialsSection>
)
