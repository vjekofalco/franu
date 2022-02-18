import React from "react"
import { useField } from "formik"
import styled from "styled-components"

import { Text } from "../common/text"
import { baseUnit } from "../../common/constants"
import { StyledInput } from "../common/form-elements/input"
import { StyledSelect } from "../common/form-elements/select"
import { ErrorText } from "../common/form-elements/error-text"
import { StyledTextarea } from "../common/form-elements/textarea"
import { CheckBoxIntegrated } from "../common/form-elements/checkbox"
import { StyledRange } from "../common/form-elements/range"

export const FormFieldsWrapper = styled.div`
  display: flex;
`

const FormInputWrapper = styled.div`
  flex: 1;
  margin-top: ${baseUnit / 2}px;

  ${({ split, only }) =>
    split &&
    only &&
    `
    max-width: calc(50% - ${baseUnit}px);
  `}

  ${({ wide }) =>
    wide &&
    `
    min-width: calc(65% - ${baseUnit / 2}px);
  `}
  
  ${({ narrow }) =>
    narrow &&
    `
    min-width: calc(35% - ${baseUnit / 2}px);
  `}
  
  ${({ split, only }) =>
    split &&
    !only &&
    `
    &:last-child {
        margin-left: ${baseUnit}px;
    }
  `}
`

const FormErrorWrapper = styled.div`
  min-height: ${1.5 * baseUnit}px;
`

const RangeValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${baseUnit}px;
`

export const FormInputField = (props) => {
  const [field, meta] = useField(props)
  const { placeholder, label, unit, prefix } = props
  const error = meta.error
  const touched = meta.touched

  return (
    <FormInputWrapper {...props}>
      <FormErrorWrapper>
        {props.hint && (
          <Text small marginTop={1.5}>
            {props.hint}
          </Text>
        )}
        {error && touched ? <ErrorText>{meta.error}</ErrorText> : null}
      </FormErrorWrapper>
      {(props.type === "text" || props.type == "number") && (
        <StyledInput
          type={props.type}
          {...field}
          error={error && touched}
          placeholder={placeholder}
        />
      )}
      {props.type === "range" && (
        <>
          <StyledRange
            type={props.type}
            {...field}
            {...props}
            placeholder={placeholder}
          />
          <RangeValueWrapper>
            <span>
              {field.value
                ? `${prefix ? `${prefix} ` : ""}${field.value} ${unit}`
                : ""}
            </span>
            <span>
              {prefix || ""} {props.max} {unit}
            </span>
          </RangeValueWrapper>
        </>
      )}
      {props.type === "textarea" && (
        <StyledTextarea
          {...field}
          error={error && touched}
          placeholder={placeholder}
        />
      )}
      {props.type === "select" && (
        <StyledSelect
          {...props.options}
          {...field}
          error={error}
          placeholder={placeholder}
        />
      )}
      {props.type === "checkbox" && (
        <CheckBoxIntegrated {...field} error={error && touched} label={label} />
      )}
    </FormInputWrapper>
  )
}
