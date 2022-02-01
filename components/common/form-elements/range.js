import styled from "styled-components"

import { baseUnit } from "../../../common/constants"
import {
  grayscale6,
  grayscale5,
  grayscale4,
  danger,
} from "../../../styles/colors"

export const StyledRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: ${1.5 * baseUnit}px;
  background: ${grayscale6};

  &&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${1 * baseUnit}px;
    height: ${3 * baseUnit}px;
    background: ${grayscale4};
    cursor: pointer;
  }

  &&::-moz-range-thumb {
    width: ${2 * baseUnit}px;
    height: ${2 * baseUnit}px;
    background: ${grayscale6};
    cursor: pointer;
  }

  ${(props) => props.hidden && "display: none;"}
`
