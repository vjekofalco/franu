import styled from 'styled-components'
import React, { useState } from 'react'

import { Section } from '../../common/section'
import { HeadlineSecondary, Text } from '../../common/text'
import { white, brown } from '../../../styles/colors'
import { HomePageGalleryItemContent } from './common'
import { SeparationLineDefault } from '../../common/separation-line'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'

import Gallery from '../../../images/icons/gallery/gallery.svg?sprite'

const HomePageGalleryWrapper = styled.div`
  height: 500px;
  display: flex;
  margin: 0 auto;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
  background: ${white};
  box-shadow: rgb(196, 204, 215) 0px 3px 4px 0px;
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
  border: ${baseUnit}px solid ${white};
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

    return (<Section id="find-inspiration">
        <HeadlineSecondary color={brown} center marginBottom={1}>Find inspiration in our previous projects and contact us</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text size={1.5} center marginBottom={3}>We let our work speak for us, happy customer is what makes difference</Text>
        <HomePageGalleryWrapper>
        <HomePageGalleryHalf>
            <HomePageGalleryItem item={images[0]} />
        </HomePageGalleryHalf>
        <HomePageGalleryHalf>
            {images.slice(1, images.length)
                .map((image, i) => (<HomePageGalleryItem key={`${image.url}-${i}`} small item={image} />))}
        </HomePageGalleryHalf>
    </HomePageGalleryWrapper>
    </Section>)
}
