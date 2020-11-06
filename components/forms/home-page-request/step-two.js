import React from 'react'

import { Text } from '../../text'
import { grayscale4 } from '../../../styles/colors'
import { CheckBoxDesign } from '../../form-elements/checkbox'
import { kitchenFormIcon, kitchenForms } from '../../../common/kitchen-forms'
import { FormIconWrapper, FromIconsWrapper, FormSelectWrapper } from './common'

export const StepTwo = ({ onSelect, selected }) => {
    return(<FromIconsWrapper>{kitchenForms.map(kf => (
        <FormSelectWrapper selected={selected === kf.id} key={kf.id} onClick={() => onSelect(kf.id)}>
            <CheckBoxDesign checked={selected === kf.id}/>
            <Text marginTop={0.5} color={grayscale4}>{kf.label}</Text>
            <FormIconWrapper selected={selected === kf.id}>
                {kitchenFormIcon(kf.id)}
            </FormIconWrapper>
        </FormSelectWrapper>))}
    </FromIconsWrapper>)
}
