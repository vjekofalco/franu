import styled from 'styled-components'
import React, { useState } from 'react'

import { Section } from '../../common/section'
import { white, brown } from '../../../styles/colors'
import { HomePageGalleryItemContent } from './common'
import { HeadlineSecondary, Text } from '../../common/text'
import { mediaBreakpointDown } from '../../../styles/breakpoionts'
import { SeparationLineDefault } from '../../common/separation-line'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'

import Gallery from '../../../images/icons/gallery/gallery.svg?sprite'

const HomePageGallerySection = styled(Section)`
  @media ${mediaBreakpointDown.s} {
    padding: 0px;
   }
`

const HomePageGallerySectionTextWrapper = styled.div`
  @media ${mediaBreakpointDown.s} {
    padding-left: ${baseUnit}px;
    padding-right: ${baseUnit}px;
   }
`

const HomePageGalleryWrapper = styled.div`
  height: 500px;
  display: flex;
  margin: 0 auto;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
  background: ${white};
  box-shadow: rgb(196, 204, 215) 0px 3px 4px 0px;
  
   @media ${mediaBreakpointDown.s} {
    height:224px;
    overflow: auto;
   }
`

const HomePageGalleryHalf = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  
    @media ${mediaBreakpointDown.s} {
      flex-wrap: nowrap;
    }
`

const HomePageGalleryItemWrapper = styled.div`
  background-image: url(${require('../../../images/home-page/kitchen-gallery-photo.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  cursor: pointer;
  border: ${baseUnit}px solid ${white};
  position: relative;
  
  @media ${mediaBreakpointDown.s} {
    width: 200px;   
  }
  
  ${({ small }) => small && `flex-basis: 50%;
    @media ${mediaBreakpointDown.s} {
    flex-basis: auto;
    }
  `}
`

const HomePageGalleryItem = ({ item, small, f }) => {
    const [ overlayVisible, setOverlay ] = useState(false)

    return (<HomePageGalleryItemWrapper small={small}
                                        image={item.image}
                                        onMouseEnter={() => setOverlay(true)}
                                        onMouseLeave={() => setOverlay(false)}>
        <HomePageGalleryItemContent active={overlayVisible}>
            <Gallery width={30} height={30}/>
            <Text weight={600} marginTop={0.5}>{f('common.morePhotos')}</Text>
        </HomePageGalleryItemContent>
    </HomePageGalleryItemWrapper>)
}

export const HomePageGallery = ({ f }) => {
    const images = [
        {
            url: '/'
        },
        {
            url: '/'
        },
        {
            url: '/'
        },
        {
            url: '/'
        },
        {
            url: '/'
        }
    ]

    return (<HomePageGallerySection id="find-inspiration">
        <HomePageGallerySectionTextWrapper>
            <HeadlineSecondary color={brown} center marginBottom={1}>{f('gallery.title')}</HeadlineSecondary>
            <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
            <Text size={1.5} center marginBottom={3}>{f('gallery.subTitle')}</Text>
        </HomePageGallerySectionTextWrapper>
        <HomePageGalleryWrapper>
        <HomePageGalleryHalf wide>
            <HomePageGalleryItem item={images[0]} f={f}/>
        </HomePageGalleryHalf>
        <HomePageGalleryHalf>
            {images.slice(1, images.length)
                .map((image, i) => (<HomePageGalleryItem f={f} key={`${image.url}-${i}`} small item={image} />))}
        </HomePageGalleryHalf>
    </HomePageGalleryWrapper>
    </HomePageGallerySection>)
}
