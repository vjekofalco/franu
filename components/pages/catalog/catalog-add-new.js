import React from 'react'
import styled from 'styled-components'

import { HeadlineTernarry, Text } from '../../text'
import { baseUnit } from '../../../common/constants'
import { brown, white } from '../../../styles/colors'
import { NewCatalogItemForm } from '../../forms/new-catalog-item'

const AddNewWrapper = styled.div`
  background-color: ${white};
  padding: ${2 * baseUnit}px;
  box-shadow: rgba(79,79,79,1) 0px 2px 5px 0px;
`

export const CatalogAddNew = () => {
    return (<AddNewWrapper>
        <HeadlineTernarry color={brown}>Dodaj novi artikal</HeadlineTernarry>
        <Text marginTop={1}>Unijeti sva obavezna polja.</Text>
        <NewCatalogItemForm/>
    </AddNewWrapper>)
}
