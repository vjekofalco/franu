import styled from 'styled-components'
import React, { useState } from 'react'

import { baseUnit } from '../../common/constants'
import { LanguagePicker } from '../language-picker'
import { MobileHeaderMenu } from './mobile-header-menu'
import { ImageOptimizedSvg } from '../image/image-optimized'
import { mediaBreakpointUp } from '../../styles/breakpoionts'

import Menu from '../../images/icons/common/menu.svg?sprite'

const MobileHeaderOuterWrapper = styled.div`
  @media ${mediaBreakpointUp.l} {
    display: none;
  }
`

const MobileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${baseUnit}px;
  justify-content: space-between;
`

const MobileHeaderLogoArea = styled.div`
  max-width: ${10 * baseUnit}px;
`

const MobileMenuArea = styled.div`
  display: flex;
  align-items: center;
`

const MenuIconWrapper = styled.div`
  margin-left: ${baseUnit * 2}px;
`

export const MobileHeader = ({ slideOnHomePage, f }) => {
    const [overlayOpened, setOverlayOpened] = useState(false)

    const closeOverlay = () => {
        setOverlayOpened(false)
    }

    return (<MobileHeaderOuterWrapper>
        <MobileHeaderWrapper>
            <MobileHeaderLogoArea>
                <ImageOptimizedSvg relativeUrl={'logos/franu-text-colored.svg'} alt="Franu kuchen logo"/>
            </MobileHeaderLogoArea>
            <MobileMenuArea>
                <LanguagePicker/>
                <MenuIconWrapper>
                    <Menu width={30} height={30} onClick={() => setOverlayOpened(!overlayOpened)}/>
                </MenuIconWrapper>
            </MobileMenuArea>
        </MobileHeaderWrapper>
        {overlayOpened && <MobileHeaderMenu slideOnHomePage={slideOnHomePage} closeOverlay={closeOverlay} f={f}/>}
    </MobileHeaderOuterWrapper>)
}
