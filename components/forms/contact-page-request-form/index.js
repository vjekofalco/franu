import axios from "axios"
import React, { useState } from "react"
import { Formik, Form } from "formik"
import styled from "styled-components"

import { brown } from "../../../styles/colors"
import { baseUnit } from "../../../common/constants"
import { StepOne } from "../request-form/step-one"
import { StepTwo } from "../request-form/step-two"
import { StepThree } from "../request-form/step-three"
import { validate } from "../request-form/validation"
import { ButtonBrown } from "../../common/buttons"
import { TermsAndConditions } from "../request-form/terms-and-conditions"
import { HeadlineTernarry, HeadlineSecondary, Text } from "../../common/text"
import { mediaBreakpointUp } from "../../../styles/breakpoionts"
import { SeparationLineDefault } from "../../../components/common/separation-line"

import Next from "../../../images/icons/common/next-arrow.svg?sprite"

const SendButton = styled(ButtonBrown)`
  margin-top: ${2 * baseUnit}px;
  min-width: 100%;

  @media ${mediaBreakpointUp.m} {
    min-width: ${25 * baseUnit}px;
  }
`

const DropdownWrapper = styled.div`
  margin-top: ${2 * baseUnit}px;
`

const DropdownWrapperHeadline = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  > svg {
    width: ${2 * baseUnit}px;
    height: ${2 * baseUnit}px;
  }
`

const DropdownContent = styled.div`
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: ${({ selected }) => (selected ? "3000px" : "0px")};
`

export const ContactPageRequestForm = (props) => {
  const { f } = props
  const [appliances, setAppliances] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [kitchenFormSelection, setKitchenFormSelection] = useState(false)
  const [kitchenAppliancesSelection, setKitchenAppliancesSelection] =
    useState(false)
  const [kitchenShape, setKitchenShape] = useState("")

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    number: "",
    zip: "",
    city: "",
    message: "",
    kitchenShape: "",
    appliances: [],
    termsAndConditions: false,
    budget: "",
  }

  const submitForm = (values) => {
    const data = {
      ...values,
      kitchenShape,
      appliances,
    }
    console.log(values)
    axios
      .post("/api/request", data)
      .then((data) => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  const selectKitchenShape = (shape) => {
    if (shape === kitchenShape) {
      setKitchenShape("")
    } else {
      setKitchenShape(shape)
    }
  }

  const selectAppliance = (appliance) => {
    const applianceIndex = appliances.indexOf(appliance)

    if (applianceIndex >= 0) {
      setAppliances([
        ...appliances.slice(0, applianceIndex),
        ...appliances.slice(applianceIndex + 1),
      ])
    } else {
      setAppliances([...appliances, appliance])
    }
  }

  return (
    <>
      <HeadlineSecondary center color={brown} marginBottom={2} marginTop={2}>
        {f("common.requestForm.title")}
      </HeadlineSecondary>
      <Text size={1.2} center marginBottom={2}>
        {f("common.requestForm.subTitle")}
      </Text>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => submitForm(values)}
        validate={validate}
      >
        {(props) => (
          <Form>
            <StepOne f={f} />
            <SeparationLineDefault />
            <DropdownWrapper>
              <DropdownWrapperHeadline
                onClick={() => setKitchenFormSelection(!kitchenFormSelection)}
              >
                <HeadlineTernarry color={brown}>
                  {f("common.chooseKitchenForm")}
                </HeadlineTernarry>
                <Next />
              </DropdownWrapperHeadline>
              <DropdownContent selected={kitchenFormSelection}>
                <StepTwo
                  f={f}
                  selected={kitchenShape}
                  {...props}
                  onSelect={(s) => selectKitchenShape(s)}
                />
              </DropdownContent>
            </DropdownWrapper>
            <SeparationLineDefault />
            <DropdownWrapper>
              <DropdownWrapperHeadline
                onClick={() =>
                  setKitchenAppliancesSelection(!kitchenAppliancesSelection)
                }
              >
                <HeadlineTernarry color={brown}>
                  {f("common.chooseAppliances")}
                </HeadlineTernarry>
                <Next />
              </DropdownWrapperHeadline>
              <DropdownContent selected={kitchenAppliancesSelection}>
                <StepThree
                  f={f}
                  selected={appliances}
                  {...props}
                  onSelect={(a) => selectAppliance(a)}
                />
              </DropdownContent>
            </DropdownWrapper>
            <SeparationLineDefault marginBottom={0.7} />
            <TermsAndConditions {...props} f={f} />
            <SendButton disabled={submitted} big type="submit">
              {f("common.send")}
            </SendButton>
          </Form>
        )}
      </Formik>
    </>
  )
}
