import styled from 'styled-components'
import { useRouter } from "next/router"

import { ImageOptimizedSvg } from '../image/image-optimized'
import { HeaderLink, HeaderLinkLike } from './header-link'
import { PAGE_CONTENT_NARROW_WIDTH, baseUnit } from '../../common/constants'

const HeaderWrapper = styled.div`
  ${({absolute}) => absolute && `
    position: absolute;
    left: 0;
    right: 0;
    z-index:100;
    background-color: rgba(255, 255, 255, 0.3);
  `}
`

const HeaderWrapperInner = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: ${baseUnit}px;
  justify-content: space-between;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const HeaderLinksWrapper = styled.div`
  
`

const HeaderLogoArea = styled.div`
  max-width: 200px;
`

export const Header = () => {
    const router = useRouter()
    const isHomePage = router.pathname === '/'

    const slideOnHomePage = (id) => {
        if (!document) return

        const route = `/#${id}`

        if (!isHomePage) {
            router.push(route)
        } else {
            const elem = document.getElementById(id)
            elem.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        }
    }

    return (<HeaderWrapper absolute={isHomePage}>
        <HeaderWrapperInner>
            <HeaderLinksWrapper>
                <HeaderLink href={'/'} text="Home"/>
                <HeaderLink href={'/about'} text="About"/>
            </HeaderLinksWrapper>
            <HeaderLogoArea>
                <ImageOptimizedSvg relativeUrl={'logos/franu-text-colored.svg'} alt="Franu kuchen logo"/>
            </HeaderLogoArea>
            <HeaderLinksWrapper>
                <HeaderLinkLike onClick={() => slideOnHomePage('how-it-works')} >How it works</HeaderLinkLike>
                <HeaderLink href={'/about'} text="About"/>
            </HeaderLinksWrapper>
        </HeaderWrapperInner>
    </HeaderWrapper>)
}
