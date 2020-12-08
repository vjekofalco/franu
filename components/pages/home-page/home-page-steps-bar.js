import React from 'react'
import styled from 'styled-components'

import { Text } from '../../common/text'
import { HeadlineSecondary } from '../../common/text'
import { Section } from '../../common/section'
import { SeparationLineDefault } from '../../common/separation-line'
import {baseUnit, PAGE_CONTENT_NARROW_WIDTH} from '../../../common/constants'
import { grayscale2, grayscale3, grayscale7, brown } from '../../../styles/colors'

import Kitchen from '../../../images/icons/progress-bar/kitchen.svg?sprite'
import DesignIcon from '../../../images/icons/progress-bar/interior-design.svg?sprite'
import DeliveryCart from '../../../images/icons/progress-bar/delivery-cart.svg?sprite'
import MeasuringTape from '../../../images/icons/progress-bar/measuring-tape.svg?sprite'

const HomePageStepsBarContainer = styled(Section)`
  counter-reset: step;
`

const HomePageStepsBarStep = styled.li`
  width: 25%;
  list-style: none;
  position: relative;
  display: inline-block;
  
  &:before {
      content: counter(step);
      counter-increment: step;
      width: 40px;
      height: 40px;
      line-height : 40px;
      border: 2.5px solid ${grayscale2};
      background-color: ${grayscale7};
      border-radius: 100%;
      display: block;
      text-align: center;
      font-weight: 600;
  }
  
   &:nth-child(2):before {
    margin-left: 25%;
   } 
   
   &:nth-child(3):before {
    margin-left: 50%;
   }
  
  &:last-child:before {
    margin-left: calc(100% - 44px);
  }
  
  &:after {
      content: "";
      position: absolute;
      width: 145%;
      height: 2px;
      background-color: ${grayscale3};
      top: 20px;
      left: -50%;
      z-index : -1;
  }
  
  &:nth-child(2):after {
    left: -95%;
  }
  
  &:first-child:after {
    content: none;
  }
`

const HomePageStepsBarList = styled.ul`
  flex: 1;
`

const HomePageStepsBarIconWrapper = styled.div`
  flex: 1;
  width: ${3 * baseUnit}px;
`

const HomePageStepsBarWrapper = styled.div`
  min-height: 290px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const HomePageStepsBarStepDescriptionWrapper = styled.div`
  float: left;
  max-width: 150px;
  position: absolute;
  display: inline-block;
  
  ${({even}) => even ? `padding-top: ${1.5 * baseUnit}px;` 
    : `bottom: 100%; 
    padding-bottom: ${1.5 * baseUnit}px;`}
  
  ${({index}) => index === 1 && `
    margin-left: 25%;
  `}
  
  ${({index}) => index === 2 && `
    margin-left: 50%;
  `} 
  
  ${({last}) => last && `right: 0;
    text-align: right;
  `}
`

const HomePageStepTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${baseUnit / 2}px;
  
  > p {
    flex: 2;
  }
`

const HomePageStepsBarStepDescription = ({ step, even, index, last }) => (
    <HomePageStepsBarStepDescriptionWrapper even={even} index={index} last={last}>
        <HomePageStepTitleWrapper>
            <HomePageStepsBarIconWrapper>
                {step.image()}
            </HomePageStepsBarIconWrapper>
            <Text marginLeft={1} inline weight={600}>{step.title}</Text>
        </HomePageStepTitleWrapper>
        <Text small>{step.description}</Text>
    </HomePageStepsBarStepDescriptionWrapper>
)

export const HomePageStepsBar = () => {
    const steps = [
        {
            title: 'Designer Consultation',
            description: 'Express your wishes and get value feedback from our kitchen designers',
            image: () => (<DesignIcon/>)
        },
        {
            title: 'Measuring',
            description: 'Together with our team, take your kitchen measures important for a perfect fit',
            image: () => (<MeasuringTape/>)
        },
        {
            title: 'Production',
            description: 'Relax while your kitchen is built and check progress status at any time.',
            image: () => (<Kitchen/>)
        },
        {
            title: 'Delivery & Assembly',
            description: 'Your kitchen is delivered on time and assembled from our team',
            image: () => (<DeliveryCart/>)
        }
    ]

    const isStepEven = (index) => {
        return (index + 1) % 2 === 0
    }

    return (
        <HomePageStepsBarContainer id="how-it-works">
            <HeadlineSecondary color={brown} center marginBottom={1}>How it works</HeadlineSecondary>
            <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
            <Text size={1.5} center marginBottom={3}>Cooking has never been easier. Get your dream kitchen in no time.</Text>
            <HomePageStepsBarWrapper>
                <HomePageStepsBarList>
                    {steps.map((s, i) => (
                        <HomePageStepsBarStep key={s.title.replace(' ', '-')}>
                            <HomePageStepsBarStepDescription last={i === steps.length - 1} index={i} step={s} even={isStepEven(i)} />
                        </HomePageStepsBarStep>
                    ))}
                </HomePageStepsBarList>
            </HomePageStepsBarWrapper>
        </HomePageStepsBarContainer>
    )
}
