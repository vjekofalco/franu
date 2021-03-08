import React from 'react'
import styled from 'styled-components'

import { Text } from '../common/text'
import { danger } from '../../styles/colors'
import { baseUnit } from '../../common/constants'

import WarningIcon from '../../images/icons/common/alert.svg?sprite'

const WarningWrapper = styled.div`
  display: flex;
  border-radius: 2px;
  align-items: center;
  align-content: center;
`

export const WarningMessage = ({ message }) => (<WarningWrapper>
    <WarningIcon width={18} fill={danger}/>
    <Text marginLeft={1} small>{message}</Text>
</WarningWrapper>)
