import styled from 'styled-components'

import { mediaBreakpointDown } from '../../../styles/breakpoionts'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../../../common/constants'

export const BlogPostWrapper = styled.section`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  padding: ${3 * baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
  
  @media ${mediaBreakpointDown.s} {
    overflow: hidden;
    padding: ${baseUnit}px;
  }
`

export const MainWrapper = styled.div`
  float: left;
  max-width: 70%;
`
export const Sidebar = styled.div`
  float: left;
  max-width: 30%;
`

export const MainImageWrapper = styled.div`
  max-width: 90%;
  margin: ${baseUnit}px auto 0 auto;
`
