import styled from 'styled-components'

import { grayscale2 } from "../../styles/colors";

export const HeadlineJumbo = styled.h1`
  font-size: 3rem;
  color: ${({ color }) => color || grayscale2};
`
