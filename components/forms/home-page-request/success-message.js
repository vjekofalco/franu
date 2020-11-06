import React from 'react'
import styled from 'styled-components'

import { brown, brownscale3 } from '../../../styles/colors'
import {HeadlineSecondary, Text} from '../../text'
import { ImageOptimizedSvg } from '../../image/image-optimized'

import Check from '../../../images/icons/common/check.svg?sprite'

const SuccessWrapper = styled.div`
  text-align: center;
  
  svg {
    width: 150px;
    fill: ${brownscale3};
    color: ${brownscale3};
  }
`

export const SuccessMessage = () => (<SuccessWrapper>
    <Check/>
</SuccessWrapper>)
