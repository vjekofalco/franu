import React from 'react'
import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { grayscale4, white, danger, grayscale5 } from '../../../styles/colors'

const Select = styled.select`
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    height: 34px;
    padding-left: ${baseUnit}px;
    background: transparent;
    
    ${props => props.pristine && `color: ${grayscale5};`}
`

const SelectWrapper = styled.div`
    outline-color: none;
    line-height: inherit;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: right ${baseUnit}px center;
    background-color: ${({ bgColor }) => bgColor || white};
    border: 1px solid ${({ borderColor }) =>  borderColor || grayscale4};
    background-image: url(${require('../../../images/icons/common/down-arrow.svg')});
    
    &::placeholder {
        color: ${grayscale5};
    }
    
    &:disabled {
      color:${grayscale5}
    }
          
    ${props => props.error && `
        border: 1px solid ${danger};
        outline-color: ${danger};`}
`
export const StyledSelect = (props) => {
    const { options } = props

    return (<SelectWrapper>
        <Select {...props}>
            {props.default && <option defaultValue={''}>{props.default}</option>}
            {options.map(o => {
                return(<option key={o.value} value={o.value}>{o.label}</option>)
            })}
        </Select>
    </SelectWrapper>)
}
