import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { grayscale4, support2, white, grayscale5 } from '../../../styles/colors'

const width = 45
const height = 20
const border = 1

const transitionDuration = '0.5s'

const checkedColor = support2
const uncheckedColor = grayscale4
const checkBackgroundAnimation = keyframes`
  from {
    background-color: ${uncheckedColor};
    border-color: ${uncheckedColor};
  }
  to {
    background-color: ${checkedColor};
    border-color: ${checkedColor};
  }
`

const uncheckBackgroundAnimation = keyframes`
  from {
    background-color: ${checkedColor};
    border-color: ${checkedColor};
  }
  to {
    background-color: ${uncheckedColor};
    border-color: ${uncheckedColor};
  }
`

const ToggleWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  width: ${width}px;
  height: ${height}px;
  min-width: 45px;
  border-radius: ${height / 2}px;

  animation: ${props => props.checked ? checkBackgroundAnimation : uncheckBackgroundAnimation} ${transitionDuration} linear;
  background: ${props => props.checked ? `${props.disabled ? grayscale5 : checkedColor}` : uncheckedColor};
  border: ${border}px solid ${props => props.checked ? `${props.disabled ? grayscale5 : checkedColor}` : uncheckedColor};
  
  ${({ disabled }) => disabled && 'pointer-events: none;'}
`

const checkMarkWidth = 14
const checkMarkHeight = 18
const ToggleCheckmark = styled.div`
  display: inline-block;
  position: relative;
  left: 5px;
  width: ${checkMarkWidth}px;
  height: ${checkMarkHeight}px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${require('../../../images/icons/common/checkmark.svg')});

  opacity: ${props => props.checked ? 1 : 0};
  transition: opacity ${transitionDuration};
`

const toggleRadius = 18
const checkedPosition = 11
const uncheckedPosition = -checkMarkWidth
const ToggleToggle = styled.div`
  display: inline-block;
  position: relative;
  width: ${toggleRadius}px;
  height: ${toggleRadius}px;
  border-radius: ${toggleRadius / 2}px;
  background-color: ${white};

  left: ${props => props.checked ? checkedPosition : uncheckedPosition}px;
  transition: left ${transitionDuration};
`

export const Toggle = ({ checked, onChecked, onUnchecked, disabled }) => {
    const [ _checked, setChecked ] = useState(checked || false)

    const onCheckStateChanged = () => {
        const updatedState = !_checked
        setChecked(updatedState)
        if (updatedState) {
            onChecked?.()
        } else {
            onUnchecked?.()
        }
    }
    return (
        <ToggleWrapper disabled={disabled} checked={_checked} onClick={() => onCheckStateChanged()}>
            <ToggleCheckmark checked={_checked}/>
            <ToggleToggle checked={_checked}/>
        </ToggleWrapper>
    )
}
