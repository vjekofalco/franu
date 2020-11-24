import styled from 'styled-components'

import { grayscale2 } from "../../../styles/colors"
import { decWithMargins } from "../../../styles/style-helpers";

export const HeadlineJumbo = styled.h1`
  font-size: 3.25rem;
  color: ${({ color }) => color || grayscale2};
  
  ${({ center }) => center && 'text-align: center;'}
  
  ${(props) => decWithMargins(props)}
`

export const HeadlineSecondary = styled.h2`
  font-size: 2.5rem;
  color: ${({ color }) => color || grayscale2};
  
  ${({ center }) => center && 'text-align: center;'}
  
  ${(props) => decWithMargins(props)}
`

export const HeadlineTernarry = styled.h3`
  font-size: 1.75rem;
  color: ${({ color }) => color || grayscale2};
  
  ${({ center }) => center && 'text-align: center;'}
  ${props => props.align && `text-align : ${props.align};`}
  
  ${(props) => decWithMargins(props)}
`

export const Text = styled.p`
    margin: 0;
    max-width: 100%;
    
    ${props => props.size ? `font-size : ${props.size}rem;` : `${props.small ? `font-size : 0.75rem;` : 'font-size : 1rem;'}`}
    ${props => props.weight && `font-weight : ${props.weight};`}
    ${props => props.color ? `color : ${props.color};` : `color: ${grayscale2};`}
    ${props => props.inline && 'display : inline-block;'}
    ${props => props.cursor && `cursor : ${props.cursor};`}
    ${props => props.align && `text-align : ${props.align};`}
    ${props => props.underline && 'text-decoration: underline;'}
    ${props => props.center && 'text-align: center;'}
    ${props => props.uppercase && 'text-transform: uppercase;'}
    
    ${props => props.hoverColor && `
      &:hover {
        color: ${props.hoverColor};
      }
    `}
    
    ${props => decWithMargins(props)}
`
