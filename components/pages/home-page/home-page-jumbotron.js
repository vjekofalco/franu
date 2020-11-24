import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { ButtonPrimary } from '../../common/buttons'
import { baseUnit } from '../../../common/constants'
import { grayscale3, brown } from '../../../styles/colors'
import { ImageOptimized } from '../../image/image-optimized'
import { HeadlineJumbo, HeadlineTernarry, Text } from '../../common/text'
import { JumbotronWrapper, JumbotronContent } from '../../jumbotron'

const HomePageJumbotronImageWrapper = styled.div`
  flex: 1;
  animation: 1s ease-out 0s 1 slideInFromRight;
  
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
  margin-right: ${2 * baseUnit}px;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  
  @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
  }
`

export const HomePageJumbotron = () => {
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
                <HeadlineJumbo color={brown}>Franu, wo das Kochen beginnt</HeadlineJumbo>
                <HeadlineTernarry color={grayscale3} marginTop={2}>Finden Sie Ihre Traumküche mit nur wenigen Klicks</HeadlineTernarry>
                <div>
                    <ButtonPrimary big marginTop={3} marginBottom={1} onClick={() => scrollToView('contact-us-form')}>Bestellen Sie jetzt Ihre Küche</ButtonPrimary>
                    <Text weight={600} onClick={() => scrollToView('find-inspiration')} style={{cursor: 'pointer', textDecoration: 'underline'}}>Oder Inspiration finden</Text>
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
