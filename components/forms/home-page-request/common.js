import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { brown, brownscale2, grayscale3, grayscale4, primaryHover, primaryColor } from '../../../styles/colors'

export const FormSelectWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
  cursor: pointer;
  text-align: center;
  margin-top: ${2 * baseUnit}px;
`

export const FormIconWrapper = styled.div`
  display: flex;
  align-content: center;
  min-width: 100%;
  margin-top: ${baseUnit}px;
  border: 1px solid ${grayscale3};
  
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
    border: 2px solid ${brownscale2};    
    > svg {
        fill: ${brown};
        color: ${brown};
    }
  `}
`
export const FromIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
