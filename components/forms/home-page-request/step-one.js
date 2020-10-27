import React from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { StyledInput } from '../../form-elements/input'
import { ErrorText } from '../../form-elements/error-text'
import { StyledTextarea } from '../../form-elements/textarea'

const HomePageFormInputWrapper = styled.div`
  margin-top: ${baseUnit / 2}px;
`

const HomePageFormErrorWrapper = styled.div`
  min-height: ${1.5 * baseUnit}px;
`

const RequestFormInputField = (props) => {
    const [field, meta] = useField(props)
    const error = meta.touched && meta.error

    return (
        <HomePageFormInputWrapper>
            <HomePageFormErrorWrapper>
                {error ? (
                    <ErrorText>{meta.error}</ErrorText>
                ) : null}
            </HomePageFormErrorWrapper>
            {props.type === 'text' && <StyledInput {...field} {...props} error={error} />}
            {props.type === 'textarea' && <StyledTextarea {...field} {...props} error={error} />}
        </HomePageFormInputWrapper>
    )
}

export const StepOne = (props) => (<>
    <RequestFormInputField name="firstName"
                           type="text"
                           placeholder="First Name:"
                           {...props}/>
    <RequestFormInputField name="lastName"
                           type="text"
                           placeholder="Last Name:"
                           {...props}/>
    <RequestFormInputField name="email"
                           type="text"
                           placeholder="E-mail:"
                           {...props}/>
    <RequestFormInputField name="phoneNumber"
                           type="text"
                           placeholder="Phone:"
                           {...props}/>
    <RequestFormInputField name="message"
                           type="textarea"
                           placeholder="Message:"
                           {...props}/>
</>)
