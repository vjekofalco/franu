import React from 'react'
import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { grayscale5, white } from '../../../styles/colors'

function cellStyling ({ textLeft, single }) {
    return `
    padding: ${baseUnit}px 2px;
    
    &:last-child {
      padding-right: ${baseUnit}px;
    }
    
    &:first-child {
      padding-left: ${baseUnit}px;
    } 
    
    ${textLeft 
        ? 'text-align: left;'
        : `&:not(:last-child) {
            text-align: left;
           }
  
        ${!single && `
            &:last-child {
                text-align: right;
            }
        `}
    `}
  `
}

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`

export const TableHead = styled.thead`
  background-color: ${grayscale5};
`

export const TableHeading = styled.th`
  ${(props) => cellStyling(props)}
  
  ${({ width }) => width && `width: ${width};`}
`

export const TableCell = styled.td`
  background-color: ${white};
  border-top: 1px solid ${grayscale5};
  max-width: ${10 * baseUnit}px;
 
  
  ${({ color }) => color && `color: ${color};`}
  ${({ bold }) => bold && 'font-weight: 600;'}

  ${(props) => cellStyling(props)}
`
