import styled from 'styled-components'
import React, { useState } from 'react'

import { brown } from '../../../styles/colors'
import { Section } from '../../common/section'
import { PopupGallery } from '../../popup-gallery'
import { HomePageGalleryItemContent } from './common'
import { HeadlineSecondary, Text } from '../../common/text'
import { ImageOptimized } from '../../image/image-optimized'
import { SeparationLineDefault } from '../../common/separation-line'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'
import { mediaBreakpointDown, mediaBreakpointUp } from '../../../styles/breakpoionts'

const NewArrivalsWrapper = styled(Section)`
  text-align: center;
`

const NewArriwalsGalleryWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
`

const NewArrivalsItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 20%;
  cursor: pointer;
  position: relative;
  border: ${baseUnit}px solid white;
  box-shadow: rgb(196, 204, 215) 0px 3px 4px 0px;
  
  @media ${mediaBreakpointDown.s} {
    flex-basis: 40%;
    
    &:nth-child(even) {
      margin-left: ${1.5 * baseUnit}px;
    }
    
    &:nth-child(n+3) {
      margin-top: ${2 * baseUnit}px;
    }
  }
  
  @media ${mediaBreakpointUp.m} {
      &:not(:first-child) {
        margin-left: ${1.5 * baseUnit}px;
      }
  }
`

const NewArrivalsItem = ({ item, onItemClick }) => {
    const [active, setActive] = useState(false)

    return (
        <NewArrivalsItemWrapper onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onClick={() => onItemClick()}>
            <ImageOptimized url={item.image}/>
            <HomePageGalleryItemContent active={active}>
                <Text weight={600}>{item.name}</Text>
            </HomePageGalleryItemContent>
        </NewArrivalsItemWrapper>
    )
}

export const NewArrivals = ({ f }) => {
    const [ sliderImages, setSliderImages ] = useState([])
    const [ sliderTitle, setSliderTitle ] = useState('')

    const items = [{
        name: `${f('common.kitchen')} Filip`,
        style: `${f('newArivals.highGloss')}`,
        image: 'https://franu-images.s3.eu-central-1.amazonaws.com/27.1.jpg',
        sliderImages: [
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/27.1.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/27.2.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/27.4.jpg' }
        ]
    },
    {
        name: `${f('common.kitchen')} Emanuel`,
        style: `${f('newArivals.modern')}`,
        image: 'https://franu-images.s3.eu-central-1.amazonaws.com/32.1.jpg',
        sliderImages: [
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/32.1.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/32.2.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/32.3.jpg' }
        ]},
    {
        name: `${f('common.kitchen')} Mihael`,
        style: `${f('newArivals.vintage')}`,
        image: 'https://franu-images.s3.eu-central-1.amazonaws.com/R2.1.jpg',
        sliderImages: [
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/R2.1.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/R2.2.jpg' }
        ]},
    {
        name: `${f('common.kitchen')} Dora`,
        style: `${f('newArivals.industrial')}`,
        image: 'https://franu-images.s3.eu-central-1.amazonaws.com/K1.1.jpg',
        sliderImages: [
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/K1.1.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/K1.2.jpg' },
            { url: 'https://franu-images.s3.eu-central-1.amazonaws.com/K1.3.jpg' }
        ]}
    ]
    return (<NewArrivalsWrapper>
        <HeadlineSecondary color={brown} center marginBottom={1}>{f('newArivals.title')}</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text size={1.5} center marginBottom={3}>{f('newArivals.subTitle')}</Text>
        <NewArriwalsGalleryWrapper>
            {items.map(i => (
                <NewArrivalsItem key={i.name.replace(' ', '-')} item={i} onItemClick={() => {
                    setSliderImages(i.sliderImages)
                    setSliderTitle(i.name)}}/>
            ))}
        </NewArriwalsGalleryWrapper>
        {sliderImages && sliderImages.length > 0 && <PopupGallery images={sliderImages} onClose={() => setSliderImages([])} galleryTitle={sliderTitle}/>}
        </NewArrivalsWrapper>)
}
