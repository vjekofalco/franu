import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { decWithMargins } from '../../../styles/style-helpers'
import { white, brown, brownscale2 } from '../../../styles/colors'

export const CheckBoxDesign = styled.div`
  cursor: pointer;
  border-radius: 2px;
  vertical-align: top;
  display: inline-block;
  background-color: ${white};
  width: ${1.5 * baseUnit}px;
  height: ${1.5 * baseUnit}px;
  min-width: ${1.5 * baseUnit}px;
  border: 1px solid ${brown};
  
  ${({ checked }) => checked && `
    background-size: contain;
    background-repeat: no-repeat;
    background-color: ${brownscale2};
    background-image: url(${require('../../../images/icons/common/checkmark.svg')});
  `}
  
  ${props => decWithMargins(props)}
`
