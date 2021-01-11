import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'

import { Text } from '../common/text'
import { languages } from '../../locales'
import { white, dark } from '../../styles/colors'
import { baseUnit } from '../../common/constants'
import { TooltipBubble } from '../tooltip-bubble'
import { ImageOptimizedSvg } from '../image/image-optimized'

const CurrentLanguage = styled(Text)`
  color: ${dark};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  align-items: center;
  ${({ inline }) => inline ? 'display: inline-flex;' : 'display: flex;'}
  
  &:after {
      content: " ";
      width: 24px;
      height: 24px;
      cursor: pointer;
      margin-left: ${baseUnit/2}px;
      display: inline-block;
      background-image: url(${require('../../images/icons/common/globe.svg')});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
  }
`

const LanguagePickerList = styled.ul`
  margin: 0;
  overflow: hidden;
  border-radius: 4px;
  padding: ${baseUnit}px 0;
  background-color: ${white};
`

const LanguagePickerListItem = styled.li`
  list-style: none;
`

const LanguagePickerLink = styled.a`
  display: block;
  padding: 0 ${baseUnit}px;
  
  margin-top: ${baseUnit/2}px;
  
  img {
    width: 30px;
  }
`

const LanguagePickerWrapper = styled.div`
  display: inline-block;
`

export const LanguagePicker = () => {
    const router = useRouter()
    const languagePickerRef = useRef(null)
    const [ bubbleOpened, toggleBubble ] = useState(false)

    useEffect(() => {
        if (document) {
            document.addEventListener('mousedown', handleClickOutside, false)
        }

        return () => {
            if (document) {
                document.removeEventListener('mousedown', handleClickOutside, false)
            }
        }
    }, [])

    const currentPath = router.asPath
    const currentLanguage = router.locale

    const handleClickOutside = (event) => {
        if (languagePickerRef && !languagePickerRef.current.contains(event.target)) {
            toggleBubble(false)
        }
    }

    return (<LanguagePickerWrapper ref={languagePickerRef}>
        <CurrentLanguage inline onClick={() => toggleBubble(!bubbleOpened)}>{currentLanguage.toUpperCase()}</CurrentLanguage>
        <TooltipBubble show={bubbleOpened}>
            <LanguagePickerList>
                {languages?.map((l, i) => (<LanguagePickerListItem key={`${l}-${i}`}>
                    <Link href={currentPath} locale={l} passHref>
                        <LanguagePickerLink onClick={() => toggleBubble(false)}>
                            <ImageOptimizedSvg relativeUrl={`flags/${l}.svg`}/>
                        </LanguagePickerLink>
                    </Link>
                </LanguagePickerListItem>))}
            </LanguagePickerList>
        </TooltipBubble>
    </LanguagePickerWrapper>)
}
