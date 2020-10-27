import React from 'react'

import { FormIconWrapper, FromIconsWrapper } from './common'
import { availableAppliances, appliancesIcons } from '../../../common/appliances'

export const StepThree = ({ onSelect, selected }) => {
    return(<FromIconsWrapper>{availableAppliances.map(a => (
        <FormIconWrapper selected={selected.indexOf(a.id) >= 0} key={a.id} onClick={() => onSelect(a.id)}>
            {appliancesIcons(a.id)}
        </FormIconWrapper>))}
    </FromIconsWrapper>)
}
