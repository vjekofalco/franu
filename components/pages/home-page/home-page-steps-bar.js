import React from 'react'
import styled from 'styled-components'

import { HeadlineTernarry } from '../../text'
import {baseUnit} from '../../../common/constants'

const HomePageStepsBarContainer = styled.div`
  margin-top: ${3 * baseUnit}px;
`

const HomePageStepsBarStep = styled.li`
  list-style: none;
  display: inline-block;
  width: 25vw;
  position: relative;
  text-align: center;
  
  &:before {
      content: '';
      width: 30px;
      height: 30px;
      line-height : 30px;
      border: 1px solid #ddd;
      border-radius: 100%;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      background-color: #fff;
  }
  
  &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #ddd;
      top: 15px;
      left: -50%;
      z-index : -1;
  }
  
  &:first-child:after {
    content: none;
  }
`

export const HomePageStepsBar = () => (
    <HomePageStepsBarContainer id="how-it-works">
        <HeadlineTernarry center marginBottom={2}>How it works</HeadlineTernarry>
        <ul>
            <HomePageStepsBarStep>Step 1</HomePageStepsBarStep>
            <HomePageStepsBarStep>Step 2</HomePageStepsBarStep>
            <HomePageStepsBarStep>Step 3</HomePageStepsBarStep>
            <HomePageStepsBarStep>Step 4</HomePageStepsBarStep>
        </ul>
    </HomePageStepsBarContainer>
)
