import styled from 'styled-components'

import { brown } from '../../../styles/colors'
import { Section } from '../../common/section'
import { Testimonials } from '../../testimonials'
import { HeadlineSecondary, Text } from '../../common/text'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../../../common/constants'

const AboutUsTestimonialsSection = styled(Section)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${9 * baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const AboutUsTestimonialsTitleWrapper = styled.div`
  text-align: center;
`

export const AboutUsTestimonials = ({ f }) => {
    const getTestimonials = () => {
        return [
            {
                description: f('customers.testimonials.first'),
                name: 'Antonija Medic',
                city: f('common.munich')
            },
            {
                description: f('customers.testimonials.second'),
                name: 'Angelique Kerber',
                city: f('common.munich')
            }
        ]
    }
    return(<AboutUsTestimonialsSection>
        <AboutUsTestimonialsTitleWrapper>
            <HeadlineSecondary color={brown} marginBottom={2}>{f('customers.title')}</HeadlineSecondary>
            <Text size={1.2} marginBottom={3}>{f('customers.subTitle')}</Text>
        </AboutUsTestimonialsTitleWrapper>
        <Testimonials testimonials={getTestimonials()}/>
    </AboutUsTestimonialsSection>)
}
