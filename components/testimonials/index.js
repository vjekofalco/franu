import styled from 'styled-components'

import { Testimonial } from './testimonial'

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Testimonials = ({ testimonials }) => {
    return (<TestimonialsWrapper>
        {testimonials.map((t, i) => (<Testimonial key={i} testimonial={t}/>))}
    </TestimonialsWrapper>)
}
