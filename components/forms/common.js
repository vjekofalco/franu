import React from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

import { Text } from '../text'
import { baseUnit } from '../../common/constants'
import { StyledInput } from '../form-elements/input'
import { StyledSelect } from '../form-elements/select'
import { ErrorText } from '../form-elements/error-text'
import { StyledTextarea } from '../form-elements/textarea'

export const FormFieldsWrapper = styled.div`
  display: flex;
`

const FormInputWrapper = styled.div`
  flex: 1;
  margin-top: ${baseUnit / 2}px;
  
  ${({ split, only }) => split && only && `
    max-width: calc(50% - ${baseUnit}px);
  `}
  
  ${({ wide }) => wide && `
    min-width: calc(65% - ${baseUnit / 2}px);
  `}
  
  ${({ narrow }) => narrow && `
    min-width: calc(35% - ${baseUnit / 2}px);
  `}
  
  ${({ split, only }) => split && !only && `
    &:last-child {
        margin-left: ${baseUnit}px;
    }
  `}
`

const FormErrorWrapper = styled.div`
  min-height: ${1.5 * baseUnit}px;
`

export const FormInputField = (props) => {
    const [field, meta] = useField(props)
    const error = meta.touched && meta.error

    return (
        <FormInputWrapper {...props}>
            <FormErrorWrapper>
                {props.hint && <Text small marginTop={1.5}>{props.hint}</Text>}
                {error ? (
                    <ErrorText>{meta.error}</ErrorText>
                ) : null}
            </FormErrorWrapper>
            {props.type === 'text' && <StyledInput {...field} {...props} error={error} />}
            {props.type === 'textarea' && <StyledTextarea {...field} {...props} error={error} />}
            {props.type === 'select' && <StyledSelect options={props.options} {...field} {...props} error={error} />}
        </FormInputWrapper>
    )
}
