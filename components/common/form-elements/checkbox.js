import React from 'react'
import styled from 'styled-components'

import { StyledLabel } from './label'
import { baseUnit } from '../../../common/constants'
import { decWithMargins } from '../../../styles/style-helpers'
import { white, brown, brownscale2, danger } from '../../../styles/colors'

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
  
  ${({ error }) => error && `border: 1px solid ${danger};`}
  
  ${props => decWithMargins(props)}
`

export const CheckBoxIntegrated = (props) => {
  const { checked, onChange, label, name } = props

  return (<>
    <CheckBoxDesign checked={checked} {...props}>
        <input type={'checkbox'} style={{opacity: 0, cursor: "pointer", width: '100%', height: '100%'}} {...props} onChange={onChange} id={`${name}-checkbox`} />
    </CheckBoxDesign>
    {label && <StyledLabel htmlFor={`${name}-checkbox`} dangerouslySetInnerHTML={{ __html: label }}></StyledLabel>}
  </>)
}
