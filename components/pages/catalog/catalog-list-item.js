import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Text } from '../../text'
import { white } from '../../../styles/colors'
import { baseUnit } from '../../../common/constants'
import { CatalogItemEnergyEfficiencyLabel } from './ctalog-item-energy-efficiency-label'

const CatalogListItemWrapper = styled.div`
  cursor: pointer;
  padding: ${baseUnit}px 0;
  background-color: ${white};
  padding: ${2 * baseUnit}px;
  margin-bottom: ${2 * baseUnit}px;
  box-shadow: rgba(79,79,79,1) 0px 0px 2px 0px;
  
  &:hover {
    box-shadow: rgba(79,79,79,1) 0px 0px 5px 0px;
  }
`

const CatalogListItemMainInfoWrapper = styled.div`
  display: flex;
`

const CatalogListItemImageWrapper = styled.div`
  max-width: ${13 * baseUnit}px;
  max-height: ${13 * baseUnit}px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  > img {
    max-width: 100%;
    max-height: 100%;
  }
`

const CatalogListItemMainInfoDetailsWrapper = styled.div`
  margin-left: ${2 * baseUnit}px;
`

export const CatalogListItem = ({ item }) => {
    const router = useRouter()
    const functionalities = item.functionalities?.list.slice(0,3)

    const onItemClick = () => {
        const link = `catalog/${item.slug}`
        router.push(link)
    }

    return (<CatalogListItemWrapper onClick={() => onItemClick()}>
        <CatalogListItemMainInfoWrapper>
            <CatalogListItemImageWrapper>
                <img src={item.images.list[0]}/>
            </CatalogListItemImageWrapper>
            <CatalogListItemMainInfoDetailsWrapper>
                <Text marginBottom={0.5} weight={600}>{item.name}</Text>
                <Text marginBottom={1}>{item.brand}</Text>
                {item.energyEfficiency && <CatalogItemEnergyEfficiencyLabel id={item.energyEfficiency}/>}
                <Text marginBottom={1} marginTop={1}>Preis: <span style={{ fontWeight: 600 }}>{item.price} EUR</span></Text>
                {functionalities && functionalities.length > 0 && functionalities.map(f => (
                    <Text inline marginRight={1.5}><span style={{ fontWeight: 600 }}>{f.name}:</span> {f.value}</Text>
                ))}
            </CatalogListItemMainInfoDetailsWrapper>
        </CatalogListItemMainInfoWrapper>
    </CatalogListItemWrapper>)
}
