import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { ButtonPrimary } from '../../common/buttons'
import { baseUnit } from '../../../common/constants'
import { grayscale3, brown } from '../../../styles/colors'
import { ImageOptimized } from '../../image/image-optimized'
import { JumbotronWrapper, JumbotronContent } from '../../jumbotron'
import { HeadlineJumbo, HeadlineTernarry, Text } from '../../common/text'
import { mediaBreakpointDown, mediaBreakpointUp } from '../../../styles/breakpoionts'

const HomePageJumbotronImageWrapper = styled.div`
  flex: 1;
  margin-left: ${2 * baseUnit}px;
  animation: 1s ease-out 0s 1 slideInFromRight;
  
  @media ${mediaBreakpointDown.m} {
     display: none;
  } 
  
  @keyframes slideInFromRight {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
  }
`

const HomePageJumbotronImageWrapperInner = styled.div`
  padding: ${baseUnit}px;
  background-color: white;
  box-shadow: rgba(79,79,79,1) 0px 2px 5px 0px;
`

const HomePageJumbotronText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  
  @media ${mediaBreakpointDown.m} {
     text-align: center;
  } 
  
  @media ${mediaBreakpointUp.l} {
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
  }
`

export const HomePageJumbotron = ({ f }) => {
    const [ live, setLive ] = useState(false)

    useEffect(() => {
        if( typeof window !== "undefined") setLive(true)
    })

    const scrollToView = (id) => {
        const elem = document.getElementById(id)
        elem.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

    return (<JumbotronWrapper paddingBottom={4} paddingTop={12} image={'home-page/background.jpg'}>
        <JumbotronContent>
            <HomePageJumbotronText live={live}>
                <HeadlineJumbo color={brown}>{f('jumbotron.title')}</HeadlineJumbo>
                <HeadlineTernarry color={grayscale3} marginTop={2}>{f('jumbotron.subTitle')}</HeadlineTernarry>
                <div>
                    <ButtonPrimary big marginTop={3} marginBottom={1} onClick={() => scrollToView('contact-us-form')}>{f('jumbotron.cta')}</ButtonPrimary>
                    <Text weight={600} onClick={() => scrollToView('find-inspiration')} style={{cursor: 'pointer', textDecoration: 'underline'}}>{f('jumbotron.link')}</Text>
                </div>
            </HomePageJumbotronText>
            <HomePageJumbotronImageWrapper live={live}>
                <HomePageJumbotronImageWrapperInner>
                    <ImageOptimized relativeUrl='home-page/jumbotron-image.jpg' alt={'Kitchens photo'}/>
                </HomePageJumbotronImageWrapperInner>
            </HomePageJumbotronImageWrapper>
        </JumbotronContent>
    </JumbotronWrapper>)
}
