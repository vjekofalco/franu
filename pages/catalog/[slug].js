import React from 'react'
import styled from 'styled-components'

import { white } from '../../styles/colors'
import { Section } from '../../components/common/section'
import { getCatalogItemData } from '../../services/catalog'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from '../../common/constants'
import { CatalogItemGallery } from '../../components/pages/catalog-item/catalog-item-gallery'
import { CatalogItemMainData } from '../../components/pages/catalog-item/catalog-item-main-data'
import { CatalogItemDescription } from '../../components/pages/catalog-item/catalog-item-description'
import { CatalogItemTechnicalData } from '../../components/pages/catalog-item/catalog-item-technical-data'

const CatalogItemSection = styled(Section)`
  margin-left: auto;
  margin-right: auto;
  background-color: ${white};
  padding-top: ${2 * baseUnit}px;
  margin-bottom: ${3 * baseUnit}px;
  padding-bottom: ${2 * baseUnit}px;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH}px;
  box-shadow: rgba(79,79,79,1) 0px 0px 5px 0px;
`

const CatalogItemMain = styled.div`
  display: flex;
`

const CatalogItem = ({ data }) => {
    return (<CatalogItemSection>
        <CatalogItemMain>
            <CatalogItemGallery images={data.images.list}/>
            <CatalogItemMainData data={data}/>
        </CatalogItemMain>
        <CatalogItemDescription description={data.description}/>
        <CatalogItemTechnicalData data={data.functionalities?.list}/>
    </CatalogItemSection>)
}

export async function getServerSideProps({ query }) {
    const { slug } = query
    let data

    try {
        data = await getCatalogItemData(slug)
    } catch (e) {
        console.log(e)
    }

    return {
        props: {
            data
        }
    }
}

export default CatalogItem
