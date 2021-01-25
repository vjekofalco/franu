import styled from 'styled-components'

import { HeaderLinksWrapper } from './common'
import { LanguagePicker } from '../language-picker'
import { HeaderLink, HeaderLinkLike } from './header-link'
import { ImageOptimizedSvg } from '../image/image-optimized'
import { mediaBreakpointDown } from '../../styles/breakpoionts'
import {baseUnit, PAGE_CONTENT_NARROW_WIDTH} from '../../common/constants'

export const DesktopHeaderLogoArea = styled.div`
  max-width: 200px;
`

const DesktopHeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: ${baseUnit}px;
  justify-content: space-between;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
  
  @media ${mediaBreakpointDown.m} {
    display: none;
  }
`
export const DesktopHeader = ({ slideOnHomePage, f }) => {
    return (<DesktopHeaderWrapper>
        <HeaderLinksWrapper>
            <HeaderLink href={'/'} text={f('common.home')}/>
            <HeaderLink href={'/about-us'} text={f('common.aboutUs')}/>
        </HeaderLinksWrapper>
        <DesktopHeaderLogoArea>
            <ImageOptimizedSvg relativeUrl={'logos/franu-text-colored.svg'} alt="Franu kuchen logo"/>
        </DesktopHeaderLogoArea>
        <HeaderLinksWrapper>
            <LanguagePicker/>
            <HeaderLinkLike onClick={() => slideOnHomePage('how-it-works')} >{f('common.howItWorks')}</HeaderLinkLike>
            <HeaderLink href={'/about'} text="About"/>
        </HeaderLinksWrapper>
    </DesktopHeaderWrapper>)
}
