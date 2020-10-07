import Link from 'next/link'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { ButtonPrimary } from '../../buttons'
import {grayscale3} from '../../../styles/colors'
import { ImageOptimized } from '../../image/image-optimized'
import { HeadlineJumbo, HeadlineSeccondary } from '../../text'
import {baseUnit, PAGE_CONTENT_NARROW_WIDTH} from '../../../common/constants'

const HomePageJumbotronWrapper = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  
  ${({ image }) => image && `&:after {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url('/images/home-page/background.jpg');
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
  padding: ${baseUnit}px;
  background-color: white;
  box-shadow: -2px 2px 23px 1px rgba(79,79,79,1);
  
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

const HomePageJubotronContent = styled.div`
  z-index: 100;
  display: flex;
  max-height: 70vh;
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

    return (<HomePageJumbotronWrapper image={'/images/home-page/background.jpg'}>
        <HomePageJubotronContent>
            <HomePageJumbotronText live={live}>
                <HeadlineJumbo>Franu, wo das Kochen beginnt</HeadlineJumbo>
                <HeadlineSeccondary color={grayscale3} marginTop={2}>Finden Sie Ihre Traumküche mit nur wenigen Klicks</HeadlineSeccondary>
                <div>
                    <ButtonPrimary big marginTop={3} marginBottom={1}>Bestellen Sie jetzt Ihre Küche</ButtonPrimary>
                    <Link href={'/examples'}>
                        <a style={{textDecoration: 'underline', weight: 600, display: 'block'}}>Oder Inspiration finden</a>
                    </Link>
                </div>
            </HomePageJumbotronText>
            <HomePageJumbotronImageWrapper live={live}>
                <ImageOptimized relativeUrl='home-page/jumbotron-image.jpg' alt={'Kitchens photo'}/>
            </HomePageJumbotronImageWrapper>
        </HomePageJubotronContent>
    </HomePageJumbotronWrapper>)
}
