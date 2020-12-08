import Link from 'next/link'
import styled from 'styled-components'

import {dark, grayscale2, grayscale6} from '../../styles/colors'
import { ImageOptimizedSvg } from '../image/image-optimized'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../common/constants'
import { mediaBreakpointDown, mediaBreakpointUp } from '../../styles/breakpoionts'

const FooterWrapper = styled.div`
  background-color: ${grayscale6};
  padding: ${2 * baseUnit}px ${baseUnit}px;
`

const FooterContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH}px;
  
  @media ${mediaBreakpointUp.m} {
    align-items: center;
  }
`

const FooterLogoArea = styled.div`
  display: flex;
  max-width: ${3 * baseUnit}px;
  min-width: ${3 * baseUnit}px;
`

const FooterLinkStyled = styled.a`
   cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  
  &:not(:first-child){
    margin-left: ${2 * baseUnit}px;
    
    @media ${mediaBreakpointDown.s} {
      margin-left: 0px;
      margin-top: ${baseUnit}px;
    }
  }
  
  color: ${dark};
  
  &:hover {
    color: ${grayscale2};
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;
  padding-left: ${3 * baseUnit}px;
  
  @media ${mediaBreakpointDown.s} {
    flex-direction: column;
  }
`

const FooterInternalLinksWrapper = styled.div`
  display: flex;
  
  @media ${mediaBreakpointUp.m} {
    align-items: center;
  }
`

const FooterSocialLinks = styled.div`
  display: flex;
  
  &:not(:first-child) {
    div {
      @media ${mediaBreakpointUp.m} {
        margin-left: ${2 * baseUnit}px;
      }
      
      @media ${mediaBreakpointDown.s} {
        margin-top: ${baseUnit}px;
      }  
    }
  }
  
  @media ${mediaBreakpointDown.s} {
    flex-direction: column;
  }
`

const FooterSocialLink = styled.div`
  background-size: cover;
  width: ${2 * baseUnit}px;
  background-position: center;
  height: ${2 * baseUnit}px;
  background-repeat: no-repeat;
  
  ${({ image }) => image && `background-image: url(${require(`../../images/social/${image}.svg`)});`}
`

export const Footer = () => (
    <FooterWrapper>
        <FooterContentWrapper>
            <FooterInternalLinksWrapper>
                <FooterLogoArea>
                    <Link href="/">
                        <a>
                            <ImageOptimizedSvg relativeUrl={'logos/franu-black-and-white.svg'} alt="Franu kuchen black and white logo"/>
                        </a>
                    </Link>
                </FooterLogoArea>
                <FooterLinksWrapper>
                    <Link href="/terms-and-conditions#impresum">
                        <FooterLinkStyled>
                            Impressum
                        </FooterLinkStyled>
                    </Link>
                    <Link href="/terms-and-conditions#privacy-policy">
                        <FooterLinkStyled>
                            Privacy
                        </FooterLinkStyled>
                    </Link>
                    <Link href="/terms-and-conditions#terms-and-conditions">
                        <FooterLinkStyled>
                            Terms and conditions
                        </FooterLinkStyled>
                    </Link>
                </FooterLinksWrapper>
            </FooterInternalLinksWrapper>
            <FooterSocialLinks>
                <Link href="/">
                    <a>
                        <FooterSocialLink image="facebook"/>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <FooterSocialLink image="email"/>
                    </a>
                </Link>
            </FooterSocialLinks>
        </FooterContentWrapper>
    </FooterWrapper>
)

