import React from 'react'
import styled from 'styled-components'

import { Section } from '../../common/section'
import { brown, white } from '../../../styles/colors'
import { HeadlineSecondary, Text } from '../../common/text'
import { ImageOptimized } from '../../image/image-optimized'
import { mediaBreakpointDown } from '../../../styles/breakpoionts'
import { SeparationLineDefault } from '../../common/separation-line'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'

import Bosch from '../../../images/partners/bosch-logo.png'
import Gorenje from '../../../images/partners/gorenje-logo.png'
import Deante from '../../../images/partners/deante-logo.png'
import Blum from '../../../images/partners/blum-logo.png'

const HomePagePartnersSection = styled(Section)`
  background-color: ${white};
  padding-top: ${2 * baseUnit}px;
  padding-bottom: ${2 * baseUnit}px;
  box-shadow: 12px 12px 108px -12px rgba(79,79,79,1);
`

const HomePagePartnersWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;

  max-height: 60px;

  img {
    max-height: 100%;
  }
  
  @media ${mediaBreakpointDown.s} {
    overflow-x: auto;
    flex-wrap: nowrap;
  }
  
  > img, picture {
    width: 20%;
    
    @media ${mediaBreakpointDown.s} {
      &:not(:first-child) {
        margin-left: ${2 * baseUnit}px;
      }
      
      min-width: ${12 * baseUnit}px;
    }
  }
`

const HomePagePartnersImageWrapper = styled.div`
  display: flex;
  
`

export const HomePagePartners = ({ f }) => {
    return (<HomePagePartnersSection>
        <HeadlineSecondary color={brown} center marginBottom={1}>{f('partners.title')}</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text size={1.5} center marginBottom={3}>{f('partners.subTitle')}</Text>
        <HomePagePartnersWrapper>
            <ImageOptimized relativeUrl={'partners/bosch-logo.png'} alt={'bosch logo'}/>
            <ImageOptimized relativeUrl={'partners/blum-logo.png'} alt={'blum logo'}/>
            <ImageOptimized relativeUrl={'partners/gorenje-logo.png'} alt={'gorenje logo'}/>
            <ImageOptimized relativeUrl={'partners/deante-logo.png'} alt={'deante logo'}/>
        </HomePagePartnersWrapper>
    </HomePagePartnersSection>)
}
