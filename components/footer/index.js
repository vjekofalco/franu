import Link from 'next/link'
import styled from 'styled-components'

import { grayscale6 } from '../../styles/colors'
import { getLinkCommon } from '../common/styled-link'
import { ImageOptimizedSvg } from '../image/image-optimized'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../common/constants'

const FooterWrapper = styled.div`
  background-color: ${grayscale6};
  padding: ${2 * baseUnit}px ${baseUnit}px;
`

const FooterContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding-left: ${3 * baseUnit}px;
  padding-right: ${3 * baseUnit}px;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH}px;
`

const FooterLogoArea = styled.div`
  display: flex;
  max-width: ${3 * baseUnit}px;
`

const FooterLinkStyled = styled.a`
  ${({active}) => getLinkCommon(active)}
`

const FooterLinksWrapper = styled.div`
  display: flex;
  padding-left: ${3 * baseUnit}px;
`

const FooterInternalLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`

const FooterSocialLinks = styled.div`
  display: flex;
  
  &:not(:first-child) {
    div {
      margin-left: ${2 * baseUnit}px;  
    }
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

