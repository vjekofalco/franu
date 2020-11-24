import React from 'react'
import styled from 'styled-components'

import { Text } from '../../common/text'
import { brown } from '../../../styles/colors'
import {baseUnit} from "../../../common/constants"
import { grayscale7, grayscale6, grayscale5 } from '../../../styles/colors'

const TechnicalDataWrapper = styled.div`
  display: flex;
  padding: ${1.5 * baseUnit}px;
  background-color: ${grayscale7};
  border-top: 1px solid ${grayscale5};
  
  p {
    flex: 1;
  }
`

const TechnicalDataRow = ({ data }) => (<TechnicalDataWrapper>
    <Text inline weight={600}>{data.name}:</Text>
    <Text inline marginLeft={5}>{data.value}</Text>
</TechnicalDataWrapper>)

export const CatalogItemTechnicalData = ({ data }) => {
    if(!data || data.length <= 0) {
        return null
    }

    return (<>
            <Text marginTop={5} size={1.5} color={brown} marginBottom={2}>Technische Daten:</Text>
            {data.map((d) => (<TechnicalDataRow data={d} />))}
        </>)
}
