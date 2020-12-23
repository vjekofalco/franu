import styled from 'styled-components'
import React, { useState } from 'react'

import { Section } from '../../common/section'
import { HomePageGalleryItemContent } from './common'
import { grayscale4, brown } from '../../../styles/colors'
import { HeadlineSecondary, Text } from '../../common/text'
import { ImageOptimized } from '../../image/image-optimized'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../../common/constants'
import { mediaBreakpointDown, mediaBreakpointUp } from '../../../styles/breakpoionts'
import { SeparationLineCustom, SeparationLineDefault } from '../../common/separation-line'

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
      margin-left: ${2 * baseUnit}px;
    }
    
    &:nth-child(n+3) {
      margin-top: ${2 * baseUnit}px;
    }
  }
  
  @media ${mediaBreakpointUp.m} {
      &:not(:first-child) {
        margin-left: ${2 * baseUnit}px;
      }
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

export const NewArrivals = ({ f }) => {
    const items = [
        { name: `${f('common.kitchen')} Filip`, style: `${f('newArivals.highGloss')}` },
        { name: `${f('common.kitchen')} Emanuel`, style: `${f('newArivals.modern')}`},
        { name: `${f('common.kitchen')} Mihael`, style: `${f('newArivals.vintage')}`},
        { name: `${f('common.kitchen')} Dora`, style: `${f('newArivals.industrial')}`}
        ]
    return (<NewArrivalsWrapper>
        <HeadlineSecondary color={brown} center marginBottom={1}>{f('newArivals.title')}</HeadlineSecondary>
        <SeparationLineDefault center maxWidth={350} marginBottom={1}/>
        <Text size={1.5} center marginBottom={3}>{f('newArivals.subTitle')}</Text>
        <NewArriwalsGalleryWrapper>
            {items.map(i => (
                <NewArrivalsItem key={i.name.replace(' ', '-')} item={i}/>
            ))}
        </NewArriwalsGalleryWrapper>
        </NewArrivalsWrapper>)
}
