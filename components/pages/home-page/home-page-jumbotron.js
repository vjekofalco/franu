import Link from 'next/link'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { ButtonPrimary } from '../../buttons'
import { grayscale3, brown } from '../../../styles/colors'
import { ImageOptimized } from '../../image/image-optimized'
import {HeadlineJumbo, HeadlineSecondary, HeadlineTernarry, Text} from '../../text'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../../../common/constants'

const HomePageJumbotronWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 140px;
  padding-bottom: 48px;
  justify-content: center;
  box-shadow: 0px -30px 60px 0px rgba(79,79,79,1);
  
  ${({ image }) => image && `&:after {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url(${require('../../../images/home-page/background.jpg')});
  background-repeat: no-repeat;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  }`}
`

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

const HomePageJubotronContent = styled.div`
  z-index: 100;
  display: flex;
  max-height: 70vh;
  padding: ${baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH + 200}px;
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

    return (<HomePageJumbotronWrapper image={'/images/home-page/background.jpg'}>
        <HomePageJubotronContent>
            <HomePageJumbotronText live={live}>
                <HeadlineJumbo color={brown}>Franu, wo das Kochen beginnt</HeadlineJumbo>
                <HeadlineTernarry color={grayscale3} marginTop={2}>Finden Sie Ihre Traumküche mit nur wenigen Klicks</HeadlineTernarry>
                <div>
                    <ButtonPrimary big marginTop={3} marginBottom={1} onClick={() => scrollToView('contact-us-form')}>Bestellen Sie jetzt Ihre Küche</ButtonPrimary>
                    <Text onClick={() => scrollToView('find-inspiration')} style={{cursor: 'pointer', textDecoration: 'underline', weight: 600}}>Oder Inspiration finden</Text>
                </div>
            </HomePageJumbotronText>
            <HomePageJumbotronImageWrapper live={live}>
                <HomePageJumbotronImageWrapperInner>
                    <ImageOptimized relativeUrl='home-page/jumbotron-image.jpg' alt={'Kitchens photo'}/>
                </HomePageJumbotronImageWrapperInner>
            </HomePageJumbotronImageWrapper>
        </HomePageJubotronContent>
    </HomePageJumbotronWrapper>)
}
