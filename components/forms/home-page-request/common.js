import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { grayscale3, grayscale4, primaryHover, primaryColor } from '../../../styles/colors'

export const FormIconWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
  cursor: pointer;
  border: 1px solid ${grayscale3};
  margin-bottom: ${baseUnit}px;
  
  > svg {
    min-width: 100%;
  }
  
  &:hover {
    border: 1px solid ${grayscale4};
    
    > svg {
      fill: ${grayscale4};
      color: ${grayscale4};
    }
  }
  
  ${({ selected }) => selected && `
    border: 1px solid ${primaryHover};
    
    > svg {
        fill: ${primaryColor};
        color: ${primaryColor};
    }
  `}
`
export const FromIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
