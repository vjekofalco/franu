import styled from 'styled-components'

import { mediaBreakpointDown } from '../../styles/breakpoionts'

import { Testimonial } from './testimonial'

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media ${mediaBreakpointDown.s} {
    overflow-x: auto;
  }
`

export const Testimonials = ({ testimonials }) => {
    return (<TestimonialsWrapper>
        {testimonials.map((t, i) => (<Testimonial key={i} testimonial={t}/>))}
    </TestimonialsWrapper>)
}
