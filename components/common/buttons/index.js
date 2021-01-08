import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { decWithMargins, decWithPadding } from '../../../styles/style-helpers'
import { brownscale3, brownscale2, white, buttonSpecialBorder, support2, support2Hover, primaryColor, primaryHover, support1Hover, support1 } from '../../../styles/colors'

const BaseButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  transition: background-color 0.15s;
  padding: ${baseUnit / 2}px ${baseUnit}px;
  
  ${({stretch}) => stretch && `
    width: 100%;
  `}
  
  ${({disabled}) => disabled && `
    opacity: 0.7;
    pointer-events: none;
  `}
  
  ${({big}) => big && `
      padding: ${baseUnit * 1.5}px ${baseUnit * 2}px;
      font-size: 1.25rem;
  `}   

  ${({medium}) => medium && `
      padding: ${baseUnit}px ${baseUnit * 1.5}px;
      font-size: 1.25rem;
  `} 
  
  ${props => decWithMargins(props)}
  ${props => decWithPadding(props)}
`

export const ButtonSpecial = styled(BaseButton)`
  color: ${white};
  border: 1px solid ${buttonSpecialBorder};
  background-color: ${support2};
  
  &:hover {
    background-color: ${support2Hover};
  }
`
export const ButtonPrimary = styled(BaseButton)`
  color: ${white};
  border: 1px solid ${primaryHover};
  background-color: ${primaryColor};
  
  &:hover {
    background-color: ${primaryHover};
  }
`

export const ButtonSecondary = styled(BaseButton)`
  color: ${white};
  border: 1px solid ${support1};
  background-color: ${support1};
  
  &:hover {
    background-color: ${support1Hover};
  } 
`

export const ButtonBrown = styled(BaseButton)`
  color: ${white};
  border: 1px solid ${brownscale2};
  background-color: ${brownscale2};
  
  &:hover {
    background-color: ${brownscale3};
  } 
`
