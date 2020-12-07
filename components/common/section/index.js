import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { mediaBreakpointDown } from '../../../styles/breakpoionts'

export const Section = styled.section`
  margin-top: ${10 * baseUnit}px;
  padding-left: ${3 * baseUnit}px;
  padding-right: ${3 * baseUnit}px;
  
  @media ${mediaBreakpointDown.s} {
    overflow: hidden;
    margin-top: ${7 * baseUnit}px;
    padding-left: ${baseUnit}px;
    padding-right: ${baseUnit}px;
  }
`
