import styled from 'styled-components'

import { grayscale2 } from "../../styles/colors"
import { decWithMargins } from "../../styles/style-helpers";

export const HeadlineJumbo = styled.h1`
  font-size: 3rem;
  color: ${({ color }) => color || grayscale2};
  
  ${({ center }) => center && 'text-align: center;'}
  
  ${(props) => decWithMargins(props)}
`

export const HeadlineSeccondary = styled.h2`
  font-size: 1.5rem;
  color: ${({ color }) => color || grayscale2};
  
  ${({ center }) => center && 'text-align: center;'}
  
  ${(props) => decWithMargins(props)}
`

export const HeadlineTernarry = styled.h3`
  font-size: 1.25rem;
  color: ${({ color }) => color || grayscale2};
  
  ${({ center }) => center && 'text-align: center;'}
  
  ${(props) => decWithMargins(props)}
`
