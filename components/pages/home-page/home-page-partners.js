import React from 'react'
import styled from 'styled-components'

import { Section } from '../../common/section'
import { HeadlineSecondary, Text } from '../../common/text'
import { brown, white } from '../../../styles/colors'
import { SeparationLineDefault } from '../../common/separation-line'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'

import Bosch from '../../../images/partners/bosch-logo.svg?sprite'
import Eeger from '../../../images/partners/eeger-logo.svg?sprite'
import Saturn from '../../../images/partners/saturn-logo.svg?sprite'
import MediaMarkt from '../../../images/partners/media-markt-logo.svg?sprite'

const HomePagePartnersSection = styled(Section)`
  background-color: ${white};
  padding-top: ${2 * baseUnit}px;
  padding-bottom: ${2 * baseUnit}px;
  box-shadow: 12px 12px 108px -12px rgba(79,79,79,1);
`

const HomePagePartnersWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
  
  > svg {
    width: 20%;
  }
`

export const HomePagePartners = () => {
    return (<HomePagePartnersSection>
        <HeadlineSecondary color={brown} center marginBottom={1}>Our trusted partners</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text size={1.5} center marginBottom={3}>Our partners are trusted brands and well known retailers</Text>
        <HomePagePartnersWrapper>
            <Bosch/>
            <MediaMarkt/>
            <Saturn/>
            <Eeger/>
        </HomePagePartnersWrapper>
    </HomePagePartnersSection>)
}
