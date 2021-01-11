import React from 'react'
import styled from 'styled-components'

import { baseUnit } from '../../common/constants'
import { white, grayscale4 } from '../../styles/colors'

const BubbleContainer = styled.div`
  position: absolute;
  top: ${6 * baseUnit}px;
  z-index: 101;
  
  ${({ position }) => {
    if (position) {
        return position === 'left' ? 'right: 0;' : 'left: 0;'
    }
}}
`

const BubbleContainerWrapper = styled.div`
  position: relative;

  background-color: ${white};
  border-radius: 4px;
  box-shadow: 0 2px 5px ${grayscale4};
  
  ${({ width }) => width && `width: ${width}px;`}
  
  &:before{
    content: "";
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    background: ${white};
    transform: rotate(45deg) translateX(-53%);
    border-bottom:inherit;
    border-right:inherit;
    
    ${({ position }) => {
    if (position) {
        return position === 'left' ? 'right: 0;' : 'left: 0;'
    } else {
        return 'left: 47%;'
    }
}}
  }
`

export const TooltipBubble = ({ show, children, position, width }) => {
    if (show) {
        return (
            <BubbleContainer position={position}>
                <BubbleContainerWrapper width={width} position={position}>
                    {children}
                </BubbleContainerWrapper>
            </BubbleContainer>
        )
    }

    return null
}
