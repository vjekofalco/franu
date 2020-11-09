import styled from 'styled-components'
import React, { useState } from 'react'

import { Section } from '../../common/section'
import { HeadlineSecondary, Text } from '../../text'
import { HomePageGalleryItemContent } from './common'
import { grayscale4, brown } from '../../../styles/colors'
import { ImageOptimized } from '../../image/image-optimized'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'
import { SeparationLineCustom, SeparationLineDefault } from '../../separation-line'

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
  
  &:not(:first-child) {
    margin-left: ${2 * baseUnit}px;
  }
`

const NewArrivalsItem = ({ item }) => {
    const [active, setActive] = useState(false)

    return (
        <NewArrivalsItemWrapper onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <ImageOptimized relativeUrl={'home-page/kuhinja-arrival.jpg'}/>
            <HomePageGalleryItemContent active={active}>
                <Text weight={600}>{item.style}</Text>
                <SeparationLineCustom maxWidth={100} color={grayscale4} margin={0.5}/>
                <Text weight={600}>{item.name}</Text>
            </HomePageGalleryItemContent>
        </NewArrivalsItemWrapper>
    )
}

export const NewArrivals = () => {
    const items = [
        { name: 'Kitchen Filip', style: 'High Gloss'},
        { name: 'Kitchen Emanuel', style: 'Modern'},
        { name: 'Kitchen Mihael', style: 'Vintage'},
        { name: 'Kitchen Dora', style: 'Industrial'}
        ]
    return (<NewArrivalsWrapper>
        <HeadlineSecondary color={brown} center marginBottom={1}>We are bringing you latest trends and standards</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text size={1.5} center marginBottom={3}>Country, modern, high gloss or vintage, choose the design you ever wanted</Text>
        <NewArriwalsGalleryWrapper>
            {items.map(i => (
                <NewArrivalsItem key={i.name.replace(' ', '-')} item={i}/>
            ))}
        </NewArriwalsGalleryWrapper>
        </NewArrivalsWrapper>)
}
