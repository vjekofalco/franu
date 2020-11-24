import styled from 'styled-components'
import React, { useState } from 'react'

import { Text } from '../../common/text'
import { ButtonSecondary } from '../../common/buttons'
import { catalogCategories } from '../../../common/catalog-categories'
import { grayscale7, grayscale6, grayscale5, brown } from '../../../styles/colors'
import { baseUnit, CATALOG_VIEW_ADD_NEW, CATALOG_VIEW_SHOW_ALL } from '../../../common/constants'

const CatalogSidebarWrapper = styled.div`
  min-width: 20%;
  padding-top: ${2 * baseUnit}px;
  margin-right: ${4  * baseUnit}px;
`

const CatalogSidebarList = styled.ul`
  list-style: none;
`

const CatalogSidebarListItemWrapper = styled.li`
  cursor: pointer;
  border-bottom: 1px solid ${grayscale5};
  background-color: ${({ active, hover }) => active ? grayscale6 : `${hover ? grayscale7 : 'inherit'}`};
  padding: ${baseUnit / 2}px ${baseUnit}px ${baseUnit / 2}px ${baseUnit / 2}px;
`

const CatalogSidebarListItem = ({ item, active, setActive }) => {
    const [ hover, setHover ] = useState(false)

    return (<CatalogSidebarListItemWrapper hover={hover}
        active={item.id === active}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setActive(item.id)}>{item.label}</CatalogSidebarListItemWrapper>)
}

export const CatalogSidebar = ({ setView, setCategory }) => {
    const [ active, setActive ] = useState('')

    const handleItemSelection = (key) => {
     setActive(key)
     setCategory(key)
     setView(CATALOG_VIEW_SHOW_ALL)
    }

    const onButtonClick = () => {
        setView(CATALOG_VIEW_ADD_NEW)
        setActive('')
    }

    return (
        <CatalogSidebarWrapper>
            <Text color={brown} weight={600} marginBottom={1} size={1.25}>Uređaji</Text>
            <CatalogSidebarList>
                {catalogCategories.map(c => (<CatalogSidebarListItem key={c.id}
                                                          item={c}
                                                          active={active}
                                                          setActive={(key) => handleItemSelection(key)}/>))}
            </CatalogSidebarList>
            <ButtonSecondary stretch
                             marginTop={2}
                             onClick={() => onButtonClick()}>
                Dodaj u katalog <span style={{fontWeight: 600}}>+</span>
            </ButtonSecondary>
        </CatalogSidebarWrapper>
    )
}
