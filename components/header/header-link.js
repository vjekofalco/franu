import Link from 'next/link'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import {baseUnit} from '../../common/constants'
import { dark, grayscale2 } from '../../styles/colors'

const HeaderLinkStyled = styled.a`
  color: ${({ active }) => active ? grayscale2 : dark};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  
  &:not(:first-child){
    margin-left: ${2 * baseUnit}px;
  }
  
  &:hover {
    color: ${grayscale2};
  }
  
  ${({ active }) => active && `border-bottom: 1px solid ${grayscale2};`}
`

export const HeaderLink = ({ href, text }) => {
    const router = useRouter()
    const isLinksRoute = router.pathname === href

    return(<Link href={href} passHref>
        <HeaderLinkStyled active={isLinksRoute}>{text}</HeaderLinkStyled>
    </Link>)}
