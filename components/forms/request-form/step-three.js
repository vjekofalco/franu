import React from 'react'

import {Text} from '../../common/text'
import {grayscale4} from '../../../styles/colors'
import {CheckBoxDesign} from '../../common/form-elements/checkbox'
import {FormIconWrapper, FormSelectWrapper, FromIconsWrapper} from './common'
import { availableAppliances, appliancesIcons } from '../../../common/appliances'

export const StepThree = ({ onSelect, selected, f }) => {
    return(<FromIconsWrapper>{availableAppliances.map(a => {
        const isSelected = selected.indexOf(a.id) >= 0

        return(<FormSelectWrapper selected={isSelected} key={a.id} onClick={() => onSelect(a.id)}>
            <CheckBoxDesign checked={isSelected}/>
            <Text marginTop={0.5} color={grayscale4}>{f(a.translationKey)}</Text>
            <FormIconWrapper selected={isSelected}>
                {appliancesIcons(a.id)}
        </FormIconWrapper>
        </FormSelectWrapper>)})}
    </FromIconsWrapper>)
}
