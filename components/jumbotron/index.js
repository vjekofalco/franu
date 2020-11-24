import styled from 'styled-components'

import { decWithPadding } from '../../styles/style-helpers'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../../common/constants'

export const JumbotronWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  
  ${({ noShadow }) =>  !noShadow && 'box-shadow: 0px -30px 60px 0px rgba(79,79,79,1);'}
  
  ${({ image }) => image && `&:after {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background-image: url(${require(`../../images/${image}`)});
      background-repeat: no-repeat;
      background-position: center;
      -ms-background-size: cover;
      -o-background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
  }`}
  
  ${props => decWithPadding(props)}
`

export const JumbotronContent = styled.div`
  z-index: 100;
  display: flex;
  max-height: 70vh;
  padding: ${baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH + 200}px;
  
  ${({columns}) => columns && `flex-direction: column;
    align-items: center;
  `}
`
