import styled from 'styled-components'

import { grayscale5 } from '../../styles/colors'
import { baseUnit } from '../../common/constants'
import { decWithMargins } from '../../styles/style-helpers'

const SeparationLine = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  margin-top: ${2 * baseUnit}px;
  margin-bottom: ${2 * baseUnit}px;
  
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ center }) => center && 'margin: 0 auto;'}
  
  ${(props) => decWithMargins(props)}
`

export const SeparationLineDefault = styled(SeparationLine)`
  color: ${grayscale5};
  background-color: ${grayscale5}; 
`

export const SeparationLineCustom = styled(SeparationLine)`
  color: ${({color}) => color};
  background-color: ${({color}) => color}; 
`
