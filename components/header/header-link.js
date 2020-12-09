import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { getLinkCommon } from '../common/styled-link'
import { decWithMargins } from '../../styles/style-helpers'

const HeaderLinkStyled = styled.a`
  ${({active, block}) => getLinkCommon(active, block)}
  
  ${(props) => decWithMargins(props)}
`

export const HeaderLinkLike = styled.p`
  display: inline-block;
  ${({active, block}) => getLinkCommon(active, block)}
  
  ${(props) => decWithMargins(props)}
`

export const HeaderLink = (props) => {
    const { href, text } = props
    const router = useRouter()
    const isLinksRoute = router.pathname === href

    return(<Link href={href} passHref>
        <HeaderLinkStyled active={isLinksRoute} {...props}>{text}</HeaderLinkStyled>
    </Link>)
}



