import styled from 'styled-components'

import { Text } from '../common/text'
import { baseUnit } from '../../common/constants'
import { grayscale4, white } from '../../styles/colors'
import { mediaBreakpointDown } from '../../styles/breakpoionts'

const TestimonialWrapper = styled.div`
  width: 48%;
  
  @media ${mediaBreakpointDown.s} {
    min-width: 85%;
    
    &:not(:first-child) {
      margin-left: ${2 * baseUnit}px;
    }
  }
`

const TestimonialTextWrapper = styled.div`
  position: relative;
  border-radius: 2px;
  background: ${white};
  padding: ${2 * baseUnit}px;
  box-shadow: rgb(196, 204, 215) 0px 3px 4px 0px;
  
  &:after {
    left:50%;
    content:'';
    width:18px;
    height:18px;
    bottom: -18px;
    position:absolute;
    background-color:${white};
    transform:translate(-50%,-50%) rotate(45deg);
    box-shadow: rgb(196, 204, 215)  3px 3px 3px 0px;
  }
`

const TestimonialAvatarWrapper = styled.div`
  display: flex;
  margin-top: ${2 * baseUnit}px;
  padding-left: ${baseUnit}px;
  padding-right: ${baseUnit}px;
  align-items: center;
`

const TestimonialAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid ${grayscale4};
  margin-right: ${2 * baseUnit}px;
  background-image: url(${require('../../images/about-us/testimonial-avatar.png')});
  background-repeat: no-repeat;
  background-position: center;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
`

const TestimonialUserDataWrapper = styled.div``

export const Testimonial = ({ testimonial }) => {
    return (<TestimonialWrapper>
        <TestimonialTextWrapper>
            <Text>{testimonial.description}</Text>
        </TestimonialTextWrapper>
        <TestimonialAvatarWrapper>
                <TestimonialAvatar/>
                <TestimonialUserDataWrapper>
                    <Text weight={600} marginBottom={0.5}>{testimonial.name}</Text>
                    <Text>{testimonial.city}</Text>
                </TestimonialUserDataWrapper>
        </TestimonialAvatarWrapper>
    </TestimonialWrapper>)
}
