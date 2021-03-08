import styled from 'styled-components'

import { dark } from '../../../styles/colors'
import { baseUnit } from '../../../common/constants'

export const StyledLabel = styled.label`
    font-size: 0.75rem;
    margin-left: ${baseUnit}px;
    color: ${({ color }) => color || dark};
`
