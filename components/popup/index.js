import styled from 'styled-components'
import React, { useEffect } from 'react'

import { baseUnit } from '../../common/constants'
import { HeadlineTernarry } from '../common/text'
import { white, grayscale5 } from '../../styles/colors'

const PopupOverlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgb(79, 79, 79, 0.5);
    z-index: 1000;
    position: fixed;
    padding: ${baseUnit}px ${baseUnit / 2}px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const PopupBody = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-color: ${white};
    padding: ${1.5 * baseUnit}px;
    box-shadow: rgba(79,79,79,1) 0px 1px 6px 0px;
    width: ${props => props.width ? props.width + 'px' : '100%'};
    max-width: 1200px;
    max-height: 95vh;
`
const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${baseUnit}px;
  border-bottom: 1px solid ${grayscale5};
`

const PopupContent = styled.div`
  padding-top: ${baseUnit}px;
`

const PopupCloseIcon = styled.span`
  width: 18px;
  height: 18px;
  cursor: pointer;
  background-image: url(${require('../../images/icons/common/cancel.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Popup = ({ width, title, children, onClose }) => {
    useEffect(() => {
        document?.body.classList.add('body-noscroll')

        return () => {
            document?.body.classList.remove('body-noscroll')
        }
    }, [])

    return (
        <PopupOverlay>
            <PopupBody width={width}>
                <PopupHeader>
                    <HeadlineTernarry>{title && title}</HeadlineTernarry>
                    <PopupCloseIcon onClick={() => onClose()}/>
                </PopupHeader>
                <PopupContent>
                    {children}
                </PopupContent>
            </PopupBody>
        </PopupOverlay>
    )
}
