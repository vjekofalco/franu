import styled from 'styled-components'

import { baseUnit } from '../../common/constants'
import { white, grayscale5, grayscale4, danger  } from '../../styles/colors'

export const StyledInput = styled.input`
    background-color: ${({ bgColor }) => bgColor || white};
    border: 1px solid ${({ borderColor }) =>  borderColor || grayscale4};
    outline: none;
    line-height: inherit;
    padding: 0 ${baseUnit / 2}px;
    width: 100%;
    height: ${3 * baseUnit}px;
    
    &::placeholder {
        color: ${grayscale5};
    }
    
    &:disabled {
      color:${grayscale5};
    }
        
    ${props => props.error && `
    border: 1px solid ${danger}; 
    outline-color: ${danger};`}
    
    ${props => props.hidden && 'display: none;'}
`

