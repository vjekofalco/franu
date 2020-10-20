import React, { useState } from 'react'
import styled from 'styled-components'

import { HeadlineSecondary, Text } from '../../text'
import { SeparationLineDefault } from '../../separation-line'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../../../common/constants'

import Gallery from '../../../images/icons/gallery/gallery.svg?sprite'

const HomePageGalleryWrapper = styled.div`
  height: 500px;
  display: flex;
  margin: 0 auto;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH + 2 * baseUnit}px;
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
  border: ${baseUnit}px solid white;
  position: relative;
  
  ${({ small }) => small && `flex-basis: 50%;`}
`

const HomePageGalleryItemContent = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: rgba(242, 242, 242, 0);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  ${({ active }) => active && `
      visibility: visible;
      transition: background-color 300ms;
      background-color: rgba(242, 242, 242, 0.6);
  `}
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
        <HeadlineSecondary center marginBottom={1}>No ideas</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text center marginBottom={3}>Find inspiration in our previous projects and contact us.</Text>
        <HomePageGalleryWrapper>
        <HomePageGalleryHalf>
            <HomePageGalleryItem item={images[0]} />
        </HomePageGalleryHalf>
        <HomePageGalleryHalf>
            {images.slice(1, images.length)
                .map(i => (<HomePageGalleryItem small item={i} />))}
        </HomePageGalleryHalf>
    </HomePageGalleryWrapper>
    </div>)
}
