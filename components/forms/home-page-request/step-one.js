import React from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

import { baseUnit } from '../../../common/constants'
import { StyledInput } from '../../form-elements/input'
import { ErrorText } from '../../form-elements/error-text'
import { StyledTextarea } from '../../form-elements/textarea'

const HomePageFormInputWrapper = styled.div`
  flex: 1;
  margin-top: ${baseUnit / 2}px;
  
  ${({ wide }) => wide && `
    min-width: calc(65% - ${baseUnit / 2}px);
  `}
  
  ${({ narrow }) => narrow && `
    min-width: calc(35% - ${baseUnit / 2}px);
  `}
  
  ${({ split }) => split && `
    &:last-child {
        margin-left: ${baseUnit}px;
    }
  `}
`

const HomePageFormErrorWrapper = styled.div`
  min-height: ${1.5 * baseUnit}px;
`

const HomePageFieldsWrapper = styled.div`
  display: flex;
`

const RequestFormInputField = (props) => {
    const [field, meta] = useField(props)
    const error = meta.touched && meta.error

    return (
        <HomePageFormInputWrapper {...props}>
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
    <HomePageFieldsWrapper>
        <RequestFormInputField name="firstName"
                               type="text"
                               split
                               placeholder="First Name:"
                               {...props}/>
        <RequestFormInputField name="lastName"
                               type="text"
                               split
                               placeholder="Last Name:"
                               {...props}/>
    </HomePageFieldsWrapper>
    <HomePageFieldsWrapper>
        <RequestFormInputField name="email"
                               type="text"
                               split
                               placeholder="E-mail:"
                               {...props}/>
        <RequestFormInputField name="phoneNumber"
                               type="text"
                               split
                               placeholder="Phone:"
                               {...props}/>
    </HomePageFieldsWrapper>
    <HomePageFieldsWrapper>
        <RequestFormInputField name="address"
                               type="text"
                               split
                               wide
                               placeholder="Address:"
                               {...props}/>
        <RequestFormInputField name="number"
                               type="text"
                               split
                               narrow
                               placeholder="Number:"
                               {...props}/>
    </HomePageFieldsWrapper>
    <HomePageFieldsWrapper>
        <RequestFormInputField name="zip"
                               type="text"
                               split
                               narrow
                               placeholder="ZIP:"
                               {...props}/>
        <RequestFormInputField name="city"
                               type="text"
                               split
                               wide
                               placeholder="City:"
                               {...props}/>
    </HomePageFieldsWrapper>
    <RequestFormInputField name="message"
                           type="textarea"
                           placeholder="Message:"
                           {...props}/>
</>)
