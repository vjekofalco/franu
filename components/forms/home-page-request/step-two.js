import React from 'react'

import { FormIconWrapper, FromIconsWrapper } from './common'
import { kitchenFormIcon, kitchenForms } from '../../../common/kitchen-forms'

export const StepTwo = ({ onSelect, selected }) => {
    return(<FromIconsWrapper>{kitchenForms.map(kf => (
                <FormIconWrapper selected={selected === kf.id} key={kf.id} onClick={() => onSelect(kf.id)}>
                    {kitchenFormIcon(kf.id)}
                </FormIconWrapper>))}
    </FromIconsWrapper>)
}
