import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { getLinkCommon } from '../common/styled-link'

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



