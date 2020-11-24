import React from 'react'
import styled from 'styled-components'

import { ButtonSecondary } from '../../common/buttons'
import { HeadlineTernarry, Text } from '../../common/text'
import { baseUnit } from '../../../common/constants'
import { brown, primaryColor, brownscale2 } from '../../../styles/colors'
import { CatalogItemEnergyEfficiencyLabel } from '../catalog/ctalog-item-energy-efficiency-label'

const CatalogItemMainDataWrapper = styled.div`
  flex: 1;
  position: relative;
  padding-left: ${3 * baseUnit}px;
`

const CatalogMainDetailsWrapper = styled.div`
  text-align: right;
`

const HighlightLabel = styled.span`
  font-weight: 600;
`

const AdminActionsWrapper = styled.div`
  text-align: right;
  margin-top: ${2 * baseUnit}px;
`

export const CatalogItemMainData = ({ data }) => {
    return (
        <CatalogItemMainDataWrapper>
            <HeadlineTernarry align="right" color={brown} marginBottom={1}>{data.name}</HeadlineTernarry>
            <CatalogMainDetailsWrapper>
                {data.energyEfficiency && <CatalogItemEnergyEfficiencyLabel id={data.energyEfficiency}/>}
                <Text marginTop={2} size={2} weight={600} color={primaryColor} marginBottom={2}>€ {data.price}.00</Text>
                <Text underline cursor="pointer" inline>Beschreibung</Text>
                <Text underline cursor="pointer" inline marginLeft={2}>Technische Daten</Text>
                <Text size={0.80} marginTop={0.5} marginTop={2}><HighlightLabel>Artikelnummer: </HighlightLabel> {data.slug}</Text>
            </CatalogMainDetailsWrapper>
            <AdminActionsWrapper>
                <a href={data.source} target="_blank">
                    <Text underline color={brownscale2} inline weight={600}>Lieferant</Text>
                </a>
                <ButtonSecondary marginLeft={2}>zur Bestellung hinzufügen</ButtonSecondary>
            </AdminActionsWrapper>
        </CatalogItemMainDataWrapper>
    )
}
