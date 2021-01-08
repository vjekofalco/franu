import styled from 'styled-components'
import Cookies from 'universal-cookie'
import React, { useState } from 'react'

import { Popup } from '../popup'
import { Text } from '../common/text'
import { cookieList } from './cookies-list'
import { brown } from '../../styles/colors'
import { ButtonBrown } from '../common/buttons'
import { baseUnit } from '../../common/constants'
import { Toggle } from '../common/form-elements/toggle'

const CookiesListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:not(:last-child) {
    margin-bottom: ${2 * baseUnit}px;
  }
`

const CookiesListItemTextWrapper = styled.div`
  padding-right: ${2 * baseUnit}px;
`

const CookieOptionCtaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${4 * baseUnit}px;
`

const CookiesListItem = ({item, f, toggle}) => {
    return (<CookiesListItemWrapper>
            <CookiesListItemTextWrapper>
                <Text weight={600} size={1.25} marginBottom={1}>{f(item.title)}</Text>
                <Text>{f(item.description)}</Text>
            </CookiesListItemTextWrapper>
            <Toggle checked={item.checked} disabled={item.disabled} onChecked={() => toggle(item)} onUnchecked={() => toggle(item)} />
        </CookiesListItemWrapper>
    )
}

export const CookiesPopup = ({ onClose, f }) => {
    const cookies = new Cookies()

    const [ cookieSettings, setCookies ] = useState(cookieList.map(c => {
        if (c.preselected || cookies.get(c.name)) {
            return { ...c, checked: true }
        }

        return c
    }))

    const setCookie = (cookie) => {
        const cookies = cookieSettings.map(c => {
            if (cookie.name === c.name) {
                return { ...c, checked: !c.checked }
            }

            return c
        })

        setCookies(cookies)
    }

    const confirmChoices = (all = false) => {
        cookieSettings.forEach((c, i) => {
            if (c.checked || all) {
                cookies.set(c.name, true)
            }

            if (i === cookieSettings.length - 1) {
                onClose()
            }
        })
    }

    return (<Popup width={53 * baseUnit} onClose={onClose} title={"Cookies Settings"}>
        {cookieSettings?.length > 0 && cookieSettings.map(cl => (<CookiesListItem key={cl.description} item={cl} f={f} toggle={cookie => setCookie(cookie)}/>))}
        <CookieOptionCtaWrapper>
            <ButtonBrown medium onClick={() => confirmChoices()}>{f('common.confirm')}</ButtonBrown>
            <Text inline
                  underline
                  marginLeft={2}
                  cursor="pointer"
                  color={brown}
                  onClick={() => confirmChoices(true)}>{f('common.cookies.acceptAll')}</Text>
        </CookieOptionCtaWrapper>
    </Popup>)
}
