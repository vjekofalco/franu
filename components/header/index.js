import styled from 'styled-components'
import { useRouter } from "next/router"

import { HeaderLink } from "./header-link";
import { PAGE_CONTENT_NARROW_WIDTH, baseUnit } from "../../common/constants"

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

    return (<HeaderWrapper absolute={isHomePage}>
        <HeaderWrapperInner>
            <HeaderLinksWrapper>
                <HeaderLink href={'/'} text="Home"/>
                <HeaderLink href={'/about'} text="About"/>
            </HeaderLinksWrapper>
            <HeaderLogoArea>
                <img src={'images/logos/franu-text-black-and-white.svg'} alt="Franu black and white logo"/>
            </HeaderLogoArea>
            <HeaderLinksWrapper>
                <HeaderLink href={'/about'} text="About"/>
                <HeaderLink href={'/about'} text="About"/>
            </HeaderLinksWrapper>
        </HeaderWrapperInner>
    </HeaderWrapper>)
}
