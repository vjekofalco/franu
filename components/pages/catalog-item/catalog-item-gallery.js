import styled from 'styled-components'
import React, { useState } from 'react'

import { Text } from '../../text'
import { baseUnit } from '../../../common/constants'
import { grayscale2, grayscale5, grayscale3 } from '../../../styles/colors'

const ImagesWrapper = styled.div`
  max-width: 40%;
`

const MainImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`

const ThumbnailsWrapper = styled.div`
  display: flex;
  margin-top: ${baseUnit}px;
  justify-content: space-between;
`

const ThumbnailWrapper = styled.div`
  display: flex;
  max-width: 20%;
  cursor: pointer;
  align-items: center;
  align-content: center;
  padding: ${baseUnit / 5}px;
  
  ${({ active }) => `border: 1px solid ${active ? grayscale2 : grayscale5};
      ${!active && `
        &:hover {
            border: 1px solid ${grayscale3};
        }
      `}
  `} 
`

const CatalogItemGalleryThumbnails = ({ images, activeImage, onThumbnailClick }) => {
    return (<ThumbnailsWrapper>
        {images.map(i => (<ThumbnailWrapper key={i}
                                            active={activeImage === i}
                                            onClick={() => onThumbnailClick(i)}>
            <img src={i}/>
        </ThumbnailWrapper>))}
    </ThumbnailsWrapper>)
}

export const CatalogItemGallery = ({ images }) => {
    if (!images || images.length <= 0) {
        return (<ImagesWrapper>
            <Text>No images found for this item</Text>
        </ImagesWrapper>)
    }

    const [activeImage, setActiveImage] = useState(images[0])

    return (
        <ImagesWrapper>
            <MainImage src={activeImage} />
            {images.length > 1 && <CatalogItemGalleryThumbnails images={images}
                                                                activeImage={activeImage}
                                                                onThumbnailClick={(i) => setActiveImage(i)}/>}
        </ImagesWrapper>
    )
}
