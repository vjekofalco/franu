import styled from 'styled-components'
import React, { useEffect } from 'react'

import { HeaderLink, HeaderLinkLike } from './header-link'
import {baseUnit} from "../../common/constants";

const MobileHeaderMenuWrapper = styled.div`
  position: relative;
`

const MobileHeaderOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  overflow-y: scroll;
  position: absolute;
  height: calc(100vh - 65px);
  background-color: rgb(224,224,224, 0.8);
`

const MobileHeaderLinkWrapper = styled.div`
  text-align: right;
  padding: ${2 * baseUnit}px ${baseUnit}px 0px ${baseUnit}px
`

export const MobileHeaderMenu = ({slideOnHomePage, closeOverlay}) => {
    useEffect(() => {
        document.body.classList.add('body-noscroll')

        return () => document.body.classList.remove('body-noscroll')
    }, [])

    return (<MobileHeaderMenuWrapper>
        <MobileHeaderOverlay>
            <MobileHeaderLinkWrapper>
                <HeaderLink onClick={() => closeOverlay()} block href={'/'} text="Home"/>
            </MobileHeaderLinkWrapper>
            <MobileHeaderLinkWrapper>
                <HeaderLink onClick={() => closeOverlay()} block href={'/about-us'} text="About us"/>
            </MobileHeaderLinkWrapper>
            <MobileHeaderLinkWrapper>
                <HeaderLinkLike block onClick={() => {
                    closeOverlay()
                    slideOnHomePage('how-it-works')}} >How it works</HeaderLinkLike>
            </MobileHeaderLinkWrapper>
            <MobileHeaderLinkWrapper>
                <HeaderLink onClick={() => closeOverlay()} block href={'/about'} text="About"/>
            </MobileHeaderLinkWrapper>
        </MobileHeaderOverlay>
    </MobileHeaderMenuWrapper>)
}
