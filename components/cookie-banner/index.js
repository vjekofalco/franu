import Head from 'next/head'
import getConfig from 'next/config'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import React, { useState, useEffect } from 'react'

import { Text } from '../common/text'
import { cookieList } from './cookies-list'
import { CookiesPopup } from './cookies-popup'
import { ButtonBrown } from '../common/buttons'
import { white, brownscale2 } from '../../styles/colors'
import { SeparationLineDefault } from '../common/separation-line'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH, COOKIE_CONSENT, COOKIE_STATISTICS_CONSENT } from '../../common/constants'

const CookieBannerWrapper = styled.div`
  position: fixed;
  background-color: ${white};
  padding: ${2 * baseUnit}px;
  z-index: 100;
  bottom: 0;
  box-shadow: rgba(79,79,79,1) 0px 1px 6px 0px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const CookieBannerContentWrapper = styled.div`
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
  margin: 0 auto;
`

export function renderableScripts (cookies) {
    const { publicRuntimeConfig } = getConfig()

    let gaOptOut, gaScript, gaSettings
    const adsTracking = (cookies.get(COOKIE_STATISTICS_CONSENT) === undefined)

    if (publicRuntimeConfig.GA_ENABLED) {
        gaOptOut = <script dangerouslySetInnerHTML={{__html:`window['ga-disable-${publicRuntimeConfig.GA_TRACKING_ID}'] = ${adsTracking};`}} />
        gaScript = <script async src="https://www.googletagmanager.com/gtag/js?id=G-PVNH1XGR2H"></script>
        gaSettings = <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', '${publicRuntimeConfig.GA_TRACKING_ID}');
          gtag('config', '${publicRuntimeConfig.GA_TRACKING_ID}', { 'anonymize_ip': true });`}} />
    }

    return {
        gaOptOut,
        gaScript,
        gaSettings
    }
}

export const CookieBanner = ({ cookies }) => {
    const c = new Cookies(cookies)
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })

    const consentCookie = {
        consentGiven: c.get(COOKIE_CONSENT)
    }

    const [ popupOpened, togglePopup ] = useState(false)
    const [ allowedCookies, setAllowedCookies ] = useState(consentCookie)

    useEffect(() => {
        setAllowedCookies(consentCookie)
    }, [ popupOpened ])

    const acceptAll = () => {
        cookieList.forEach((cookie, i) => {
            c.set(cookie.name, true)

            if (i === cookieList.length - 1) {
                // gtmPageViewEvent(Router.asPath)
                setAllowedCookies({
                    consentGiven: c.get(COOKIE_CONSENT)
                })
            }
        })
    }

    const closeCookiesSettingsPopup = () => {
       togglePopup(false)
    }

    const scripts = renderableScripts(c)
    return (<div>
        <Head>
            {scripts.gaOptOut}
            {scripts.gaScript}
            {scripts.gaSettings}
        </Head>
        {!allowedCookies.consentGiven && <>
            {popupOpened
                ? <CookiesPopup onClose={() => closeCookiesSettingsPopup()} f={f}/>
                : <CookieBannerWrapper>
                    <CookieBannerContentWrapper>
                        <Text size={2} weight={600}>{f('common.cookies.cookiesTitle').toUpperCase()}</Text>
                        <SeparationLineDefault/>
                        <Text marginBottom={3} dangerouslySetInnerHTML={{ __html: f('common.cookies.disclaimer') }}></Text>
                        <ButtonBrown medium onClick={() => acceptAll()}>{f('common.cookies.acceptAll')}</ButtonBrown>
                        <Text onClick={() => togglePopup(true)} cursor="pointer" color={brownscale2} underline inline marginLeft={2}>{f('common.cookies.cookieSettings')}</Text>
                    </CookieBannerContentWrapper>
                  </CookieBannerWrapper>}
        </>}
    </div>)
}
