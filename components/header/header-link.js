import Link from 'next/link'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import {baseUnit} from '../../common/constants'
import { dark, grayscale2 } from '../../styles/colors'

const getLinkCommon = (active) => `
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  
  &:not(:first-child){
    margin-left: ${2 * baseUnit}px;
  }
  
  color: ${active ? grayscale2 : dark};
  
  &:hover {
    color: ${grayscale2};
  }
  
  ${active && `border-bottom: 1px solid ${grayscale2};`}
`

const HeaderLinkStyled = styled.a`
  ${({active}) => getLinkCommon(active)}
`

export const HeaderLinkLike = styled.p`
  display: inline-block;
  ${({active}) => getLinkCommon(active)}
`

export const HeaderLink = ({ href, text, onClick }) => {
    const router = useRouter()
    const isLinksRoute = router.pathname === href

    return(<Link href={href} passHref>
        <HeaderLinkStyled active={isLinksRoute}>{text}</HeaderLinkStyled>
    </Link>)
}



