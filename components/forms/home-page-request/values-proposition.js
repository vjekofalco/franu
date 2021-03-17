import styled from 'styled-components'

import { brown } from '../../../styles/colors'
import { baseUnit } from '../../../common/constants'
import { Text, HeadlineTernarry } from '../../common/text'
import { mediaBreakpointDown } from '../../../styles/breakpoionts'

import Mail from '../../../images/social/email.svg?sprite'
import Money from '../../../images/icons/common/money.svg?sprite'
import Medal from '../../../images/icons/common/medal.svg?sprite'
import Phone from '../../../images/icons/common/phone-call.svg?sprite'
import DeliveryTruck from '../../../images/icons/common/delivery-truck.svg?sprite'
import Design from '../../../images/icons/progress-bar/interior-design.svg?sprite'
import Link from "next/link";

const PropositionWrapper = styled.div`
  max-width: 80%;
  margin-left:  auto;
  margin-right:  auto;
  padding-top: ${2 * baseUnit}px;
        
  ${({ absolute }) => absolute && `
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  `}      
  
  @media ${mediaBreakpointDown.m} {
    margin-left: 0;
    max-width: 100%;
    
    &:first-child {
      margin-top: ${2 * baseUnit}px;
    }
  }
`

const PropositionHeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${baseUnit}px;
        
  > svg {
    width: 40px;
    fill: ${brown};
    color: ${brown};
  }
`

const ContactOptionsWrapper = styled.div`
  svg {
    width: 20px;
    fill: ${brown};
    color: ${brown};
  }
        
  a {
    display: flex;
    align-items: center;
          
    &:not(:first-child) {
      margin-top: ${1.5 * baseUnit}px;
    } 
  }

  @media ${mediaBreakpointDown.m} {
    display: none;
  }
`

export const ValuesProposition = ({ f }) => (
    <>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <Design/>
                        <HeadlineTernarry marginLeft={1}>{f('requestForm.valueProposition.one.title')}</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>{f('requestForm.valueProposition.one.description')}</Text>
        </PropositionWrapper>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <Medal/>
                        <HeadlineTernarry marginLeft={1}>{f('requestForm.valueProposition.two.title')}</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>{f('requestForm.valueProposition.two.description')}</Text>
        </PropositionWrapper>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <DeliveryTruck/>
                        <HeadlineTernarry marginLeft={1}>{f('requestForm.valueProposition.three.title')}</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>{f('requestForm.valueProposition.three.description')}</Text>
        </PropositionWrapper>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <Money/>
                        <HeadlineTernarry marginLeft={1}>{f('requestForm.valueProposition.four.title')}</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>{f('requestForm.valueProposition.four.description')}</Text>
        </PropositionWrapper>
        <PropositionWrapper absolute>
                <ContactOptionsWrapper>
                        <Link href="tel:004915202432979" passHref>
                                <a><Phone/><Text marginLeft={2} weight={600}>0152 024 32 979</Text></a>
                        </Link>
                        <Link href="mailto:info@franu.de" passHref>
                                <a><Mail/><Text marginLeft={2} weight={600}>info@franu.de</Text></a>
                        </Link>
                </ContactOptionsWrapper>
        </PropositionWrapper>
    </>
)
