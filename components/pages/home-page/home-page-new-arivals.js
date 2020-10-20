import styled from 'styled-components'
import React, { useState } from 'react'

import { grayscale4 } from '../../../styles/colors'
import { HeadlineSecondary, Text } from '../../text'
import { HomePageGalleryItemContent } from './common'
import { ImageOptimized } from '../../image/image-optimized'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'
import { SeparationLineCustom, SeparationLineDefault } from '../../separation-line'

const NewArrivalsWrapper = styled.div`
  text-align: center;
  padding: ${2 * baseUnit}px;
  background-color: white;
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
        { name: 'Kitchen Dora', style: 'Industrial'},
        { name: 'Kitchen Nera', style: 'Farmhouse'},
        ]
    return (<NewArrivalsWrapper>
        <HeadlineSecondary center marginBottom={1}>Collection 2021</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text center marginBottom={3}>We are bringing you latest trends and standards</Text>
        <NewArriwalsGalleryWrapper>
            {items.map(i => (
                <NewArrivalsItem key={i.name.replace(' ', '-')} item={i}/>
            ))}
        </NewArriwalsGalleryWrapper>
        </NewArrivalsWrapper>)
}
