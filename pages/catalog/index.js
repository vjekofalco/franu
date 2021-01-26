import axios from 'axios'
import styled from 'styled-components'
import { getSession } from 'next-auth/client'
import React, {useEffect, useState} from 'react'

import { Text } from '../../components/common/text'
import { Section } from '../../components/common/section'
import { CatalogAddNew } from '../../components/pages/catalog/catalog-add-new'
import { CatalogSidebar } from '../../components/pages/catalog/catalog-sidebar'
import { CatalogListItem } from '../../components/pages/catalog/catalog-list-item'
import {
    baseUnit,
    PAGE_CONTENT_WIDE_WIDTH,
    CATALOG_VIEW_SHOW_ALL,
    CATALOG_VIEW_ADD_NEW,
    CATALOG_ITEMS_API
} from '../../common/constants'


const CatalogSection = styled(Section)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${3 * baseUnit}px;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH}px;
`

const CatalogMainWrapper = styled.div`
  min-width: 75%;
  min-height: 500px;
`

const Catalog = () => {
    const [ currentView, setCurrentView ] = useState(CATALOG_VIEW_SHOW_ALL)
    const [ items, setItems ] = useState([])
    const [ filteredItems, setFilteredItemsItems ] = useState([])

    useEffect( () => {
        axios.get(CATALOG_ITEMS_API)
            .then(data => {
                setItems(data.data)
                setFilteredItemsItems(data.data)
            })
            .catch(e => console.log(e))
    }, [])

    const filterByCategory = (category) => {
        const fi = items.filter(i => i.category === category)
        setFilteredItemsItems(fi)
    }

    return (<CatalogSection>
        <CatalogSidebar setView={(view) => setCurrentView(view)} setCategory={(category) => filterByCategory(category)}/>
        <CatalogMainWrapper>
            {currentView === CATALOG_VIEW_SHOW_ALL && <>
            {
                (filteredItems && filteredItems.length > 0)
                    ? filteredItems.map(i => <CatalogListItem item={i}/>)
                    : <Text>Trenutno nema unesenih artikala</Text>
            }
            </>}
            {currentView === CATALOG_VIEW_ADD_NEW && <CatalogAddNew/>}
        </CatalogMainWrapper>
    </CatalogSection>)
}

export default Catalog

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (!session) {
        ctx.res.writeHead(302, { Location: '/' })
        ctx.res.end()
        return {}
    }

    return {
        props: {
            user: session.user,
        },
    }
}
