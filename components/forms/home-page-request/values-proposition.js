import styled from 'styled-components'

import { brown } from '../../../styles/colors'
import { baseUnit } from '../../../common/constants'
import { Text, HeadlineTernarry } from '../../common/text'
import { mediaBreakpointDown } from '../../../styles/breakpoionts'

import Money from '../../../images/icons/common/money.svg?sprite'
import Medal from '../../../images/icons/common/medal.svg?sprite'
import DeliveryTruck from '../../../images/icons/common/delivery-truck.svg?sprite'
import Design from '../../../images/icons/progress-bar/interior-design.svg?sprite'

const PropositionWrapper = styled.div`
  max-width: 80%;
  margin-left:  auto;
  margin-right:  auto;
  padding-top: ${2 * baseUnit}px;
  
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

export const ValuesProposition = () => (
    <>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <Design/>
                        <HeadlineTernarry marginLeft={1}>Unique design</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>There is no where kitchen like yours. Every kitchen we built is custom measured with unique design.</Text>
        </PropositionWrapper>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <Medal/>
                        <HeadlineTernarry marginLeft={1}>Top quality</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>Our kitchens are made of top materials and build to serve you for a long time.</Text>
        </PropositionWrapper>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <DeliveryTruck/>
                        <HeadlineTernarry marginLeft={1}>Fast delivery</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>In just few weeks your kitchen is assembled and ready to use.</Text>
        </PropositionWrapper>
        <PropositionWrapper>
                <PropositionHeadlineWrapper>
                        <Money/>
                        <HeadlineTernarry marginLeft={1}>Fair prices</HeadlineTernarry>
                </PropositionHeadlineWrapper>
                <Text>With every project we are giving our best to give you more for your money.</Text>
        </PropositionWrapper>
    </>
)
