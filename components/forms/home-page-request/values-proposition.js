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
    </>
)
