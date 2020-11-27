import { baseUnit } from '../../../common/constants'
import { dark, grayscale2 } from '../../../styles/colors'

export const getLinkCommon = (active) => `
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  
  &:not(:first-child){
    margin-left: ${2 * baseUnit}px;
  }
  
  color: ${active ? grayscale2 : dark};
  
  &:hover {
    color: ${grayscale2};
  }
  
  ${active && `border-bottom: 1px solid ${grayscale2};`}
`
