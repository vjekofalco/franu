import styled from 'styled-components'

import { dark } from '../../../styles/colors';

export const StyledLabel = styled.label`
    font-size: 0.75rem;
    color: ${({ color }) => color || dark};
    font-weight: ${({ weight }) => weight || 600};
`
