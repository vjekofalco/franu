import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { Text } from '../common/text'
import { ButtonPrimary } from '../common/buttons'
import { SeparationLineDefault } from '../common/separation-line'
import { white, grayscale7, primaryColor } from '../../styles/colors'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../../common/constants'

const CookieBannerWrapper = styled.div`
  position: fixed;
  background-color: ${white};
  padding: ${2 * baseUnit}px;
  z-index: 100;
  bottom: ${baseUnit}px;
  box-shadow: 0px 2px 5px ${grayscale7};
  border-radius: 4px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const CookieBannerContentWrapper = styled.div`
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
  margin: 0 auto;
`

export const CookieBanner = () => {
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })

    const openCookieSettings = () => {
        console.log('OPEN BANNER')
    }

    return (<CookieBannerWrapper>
        <CookieBannerContentWrapper>
            <Text size={2} weight={600}>{f('common.cookies.cookiesTitle').toUpperCase()}</Text>
            <SeparationLineDefault/>
            <Text marginBottom={3} dangerouslySetInnerHTML={{ __html: f('common.cookies.disclaimer') }}></Text>
            <ButtonPrimary medium onClick={() => acceptAll()}>{f('common.cookies.acceptAll')}</ButtonPrimary>
            <Text onClick={() => openCookieSettings()} cursor="pointer" color={primaryColor} underline inline marginLeft={2}>{f('common.cookies.cookieSettings')}</Text>
        </CookieBannerContentWrapper>
    </CookieBannerWrapper>)
}
