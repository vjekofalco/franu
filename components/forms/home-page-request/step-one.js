import React from 'react'

import { FormInputField, FormFieldsWrapper } from '../common'

export const StepOne = (props) => (<>
    <FormFieldsWrapper>
        <FormInputField name="firstName"
                               type="text"
                               split
                               placeholder="First Name:"
                               {...props}/>
        <FormInputField name="lastName"
                               type="text"
                               split
                               placeholder="Last Name:"
                               {...props}/>
    </FormFieldsWrapper>
    <FormFieldsWrapper>
        <FormInputField name="email"
                               type="text"
                               split
                               placeholder="E-mail:"
                               {...props}/>
        <FormInputField name="phoneNumber"
                               type="text"
                               split
                               placeholder="Phone:"
                               {...props}/>
    </FormFieldsWrapper>
    <FormFieldsWrapper>
        <FormInputField name="address"
                               type="text"
                               split
                               wide
                               placeholder="Address:"
                               {...props}/>
        <FormInputField name="number"
                               type="text"
                               split
                               narrow
                               placeholder="Number:"
                               {...props}/>
    </FormFieldsWrapper>
    <FormFieldsWrapper>
        <FormInputField name="zip"
                               type="text"
                               split
                               narrow
                               placeholder="ZIP:"
                               {...props}/>
        <FormInputField name="city"
                               type="text"
                               split
                               wide
                               placeholder="City:"
                               {...props}/>
    </FormFieldsWrapper>
    <FormInputField name="message"
                           type="textarea"
                           placeholder="Message:"
                           {...props}/>
</>)
