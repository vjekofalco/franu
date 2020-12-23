import React from 'react'

import { FormInputField, FormFieldsWrapper } from '../common'

export const StepOne = (props) => (<>
    <FormFieldsWrapper>
        <FormInputField name="firstName"
                               type="text"
                               split
                               placeholder={`${props.f('common.firstName')}:`}
                               {...props}/>
        <FormInputField name="lastName"
                               type="text"
                               split
                               placeholder={`${props.f('common.lastName')}:`}
                               {...props}/>
    </FormFieldsWrapper>
    <FormFieldsWrapper>
        <FormInputField name="email"
                               type="text"
                               split
                               placeholder={`${props.f('common.eMail')}:`}
                               {...props}/>
        <FormInputField name="phoneNumber"
                               type="text"
                               split
                               placeholder={`${props.f('common.phone')}:`}
                               {...props}/>
    </FormFieldsWrapper>
    <FormFieldsWrapper>
        <FormInputField name="address"
                               type="text"
                               split
                               wide
                               placeholder={`${props.f('common.address')}:`}
                               {...props}/>
        <FormInputField name="number"
                               type="text"
                               split
                               narrow
                               placeholder={`${props.f('common.number')}:`}
                               {...props}/>
    </FormFieldsWrapper>
    <FormFieldsWrapper>
        <FormInputField name="zip"
                               type="text"
                               split
                               narrow
                               placeholder={`${props.f('common.zip')}:`}
                               {...props}/>
        <FormInputField name="city"
                               type="text"
                               split
                               wide
                               placeholder={`${props.f('common.city')}:`}
                               {...props}/>
    </FormFieldsWrapper>
    <FormInputField name="message"
                           type="textarea"
                           placeholder={`${props.f('common.message')}:`}
                           {...props}/>
</>)
