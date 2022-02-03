import React from "react"
import styled from "styled-components"

import { Text } from "../../common/text"
import { white } from "../../../styles/colors"
import { baseUnit } from "../../../common/constants"
import { energyEfficiencyLabels } from "../../../common/energy-efficiency-labels"

const EFLWrapper = styled.div`
  max-height: 27px;
  position: relative;
  display: inline-block;
  padding: ${baseUnit / 2}px;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  
  &:after {
    content: '';
    position: absolute;
    right: -21px;
    top: 5px;
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    clear: both;
    transform: rotate(-90deg);
    ${({ backgroundColor }) =>
      backgroundColor && `border-top: 16px solid ${backgroundColor};`}
    }
}`

export const CatalogItemEnergyEfficiencyLabel = ({ id }) => {
  const { label, color } = energyEfficiencyLabels.filter((e) => e.id === id)[0]

  return (
    <EFLWrapper backgroundColor={color}>
      <Text weight={600} color={white} size={0.75}>
        {label}
      </Text>
    </EFLWrapper>
  )
}
