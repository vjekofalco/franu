import Link from 'next/link'
import styled from 'styled-components'

import { dark, grayscale2 } from "../../styles/colors"

const HeaderLinkStyled = styled.a`
  color: ${dark};
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  
  &:hover {
    color: ${grayscale2};
  }
`

export const HeaderLink = ({ href, text }) => (<Link href={href} passHref>
    <HeaderLinkStyled>{text}</HeaderLinkStyled>
</Link>)
