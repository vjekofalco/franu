import styled from 'styled-components'
import React, { useState } from 'react'

import { HeadlineSecondary, Text } from '../../text'
import { HomePageGalleryItemContent } from './common'
import { backgroundColor } from '../../../styles/colors'
import { SeparationLineDefault } from '../../separation-line'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'

import Gallery from '../../../images/icons/gallery/gallery.svg?sprite'

const HomePageGalleryWrapper = styled.div`
  height: 500px;
  display: flex;
  margin: 0 auto;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
`

const HomePageGalleryHalf = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`

const HomePageGalleryItemWrapper = styled.div`
  background-image: url(${require('../../../images/home-page/kitchen-gallery-photo.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  cursor: pointer;
  border: ${baseUnit}px solid ${backgroundColor};
  position: relative;
  
  ${({ small }) => small && `flex-basis: 50%;`}
`

const HomePageGalleryItem = ({ item, small }) => {
    const [ overlayVisible, setOverlay ] = useState(false)

    return (<HomePageGalleryItemWrapper small={small}
                                        image={item.image}
                                        onMouseEnter={() => setOverlay(true)}
                                        onMouseLeave={() => setOverlay(false)}>
        <HomePageGalleryItemContent active={overlayVisible}>
            <Gallery width={30} height={30}/>
            <Text weight={600} marginTop={0.5}>More photos</Text>
        </HomePageGalleryItemContent>
    </HomePageGalleryItemWrapper>)
}

export const HomePageGallery = () => {
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

    return (<div id="find-inspiration">
        <HomePageGalleryWrapper>
        <HomePageGalleryHalf>
            <HomePageGalleryItem item={images[0]} />
        </HomePageGalleryHalf>
        <HomePageGalleryHalf>
            {images.slice(1, images.length)
                .map((image, i) => (<HomePageGalleryItem key={`${image.url}-${i}`} small item={image} />))}
        </HomePageGalleryHalf>
    </HomePageGalleryWrapper>
    </div>)
}
