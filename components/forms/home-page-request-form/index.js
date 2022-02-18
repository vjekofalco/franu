import axios from "axios"
import Link from "next/link"
import { Formik, Form } from "formik"
import styled from "styled-components"
import React, { useState } from "react"

import { StepOne } from "../request-form/step-one"
import { StepTwo } from "../request-form/step-two"
import { validate } from "../request-form/validation"
import { StepThree } from "../request-form/step-three"
import { ButtonBrown } from "../../common/buttons"
import { Section } from "../../common/section"
import { SuccessMessage } from "../request-form/success-message"
import { Text, HeadlineSecondary } from "../../common/text"
import { ValuesProposition } from "../request-form/values-proposition"
import { brown, white, grayscale2 } from "../../../styles/colors"
import {
  mediaBreakpointDown,
  mediaBreakpointUp,
} from "../../../styles/breakpoionts"
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH } from "../../../common/constants"

import Mail from "../../../images/social/email.svg?sprite"
import Prev from "../../../images/icons/common/prev-arrow.svg?sprite"
import Next from "../../../images/icons/common/next-arrow.svg?sprite"
import Phone from "../../../images/icons/common/phone-call.svg?sprite"
import { TermsAndConditions } from "../request-form/terms-and-conditions"

const HomePageFormSection = styled(Section)`
  background: linear-gradient(
    150deg,
    rgb(226, 202, 182) 0%,
    rgb(242, 242, 242) 90%
  );
  box-shadow: 0px 30px 60px 0px rgba(79, 79, 79, 1);
`

const HomePageFormValuesWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: ${3 * baseUnit}px;
  padding-bottom: ${3 * baseUnit}px;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;

  @media ${mediaBreakpointDown.m} {
    flex-direction: column-reverse;
  }
`

const HomePageFormHalf = styled.div`
  position: relative;
  flex: 1;
`

const HomePageFormWrapper = styled.div`
  background-color: ${white};
  padding: ${2 * baseUnit}px;
  position: relative;
  box-shadow: rgb(196, 204, 215) 0px 3px 4px 0px;

  @media ${mediaBreakpointDown.s} {
    padding-left: ${baseUnit}px;
    padding-right: ${baseUnit}px;
  }
`

const HomePageFormInputsWrapper = styled.div`
  min-height: 490px;
  max-height: 490px;
  overflow-y: scroll;
  margin-top: ${baseUnit}px;

  ${({ success }) =>
    success &&
    `
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;    
  `}
`

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: ${2 * baseUnit}px;
  justify-content: space-between;

  ${({ hide }) => hide && "visibility: hidden;"}
  ${({ disabled }) =>
    disabled &&
    `
        pointer-events: none;
        opacity: 0.8;
  `}
`

const StepsControll = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > svg {
    width: ${2 * baseUnit}px;
    fill: ${brown};
    color: ${brown};
  }

  &:hover {
    > p {
      color: ${grayscale2};
    }
  }

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: 0.7;
  `}
`

const MobileContactOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 20px;
    fill: ${brown};
    color: ${brown};
  }

  a {
    display: flex;
    align-items: center;
    margin-top: ${2 * baseUnit}px;

    &:not(:first-child) {
      margin-left: ${2 * baseUnit}px;
    }
  }

  @media ${mediaBreakpointUp.l} {
    display: none;
  }
`

const SendButton = styled(ButtonBrown)`
  background-repeat: no-repeat;
  background-size: ${1.5 * baseUnit}px;
  padding-right: ${4.5 * baseUnit}px;
  background-position: right ${baseUnit}px center;
  background-image: url(${require("../../../images/icons/common/paper-plane.svg")});
`

export const HomePageRequestForm = ({ f }) => {
  const STEPS_NUMBER = 3
  const INITIAL_STEP = 1

  const [step, setStep] = useState(INITIAL_STEP)
  const [appliances, setAppliances] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [kitchenShape, setKitchenShape] = useState("")

  const changeStep = (s) => {
    if (s >= INITIAL_STEP && s <= STEPS_NUMBER) {
      setStep(s)
    }
  }

  const submitForm = (values) => {
    setSubmitting(true)
    const data = {
      ...values,
      kitchenShape,
      appliances,
    }
    axios
      .post("/api/request", data)
      .then((data) => {
        setSubmitting(false)
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
  }

  return (
    <HomePageFormSection>
      <MobileContactOptionsWrapper>
        <Link href="tel:004915202432979" passHref>
          <a>
            <Phone />
            <Text marginLeft={1} weight={600}>
              0152 024 32 979
            </Text>
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a>
            <Mail />
            <Text marginLeft={1} weight={600}>
              info@franu.de
            </Text>
          </a>
        </Link>
      </MobileContactOptionsWrapper>
      <HomePageFormValuesWrapper>
        <HomePageFormHalf>
          <ValuesProposition f={f} />
        </HomePageFormHalf>
        <HomePageFormHalf>
          <HomePageFormWrapper id="contact-us-form">
            <>
              <HeadlineSecondary color={brown} marginBottom={2}>
                {f("common.requestForm.title")}
              </HeadlineSecondary>
              <Text>{f("common.requestForm.subTitle")}</Text>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={(values) => submitForm(values)}
                validate={validate}
              >
                {(props) => (
                  <Form>
                    <HomePageFormInputsWrapper success={submitted}>
                      {submitted ? (
                        <SuccessMessage />
                      ) : (
                        <>
                          {step === 1 && (
                            <>
                              <StepOne {...props} f={f} />
                              <TermsAndConditions {...props} f={f} />
                            </>
                          )}
                          {step === 2 && (
                            <StepTwo
                              f={f}
                              selected={kitchenShape}
                              {...props}
                              onSelect={(s) => selectKitchenShape(s)}
                            />
                          )}
                          {step === 3 && (
                            <StepThree
                              f={f}
                              selected={appliances}
                              {...props}
                              onSelect={(a) => selectAppliance(a)}
                            />
                          )}
                        </>
                      )}
                    </HomePageFormInputsWrapper>
                    <ButtonsWrapper disabled={submitted}>
                      <StepsControll
                        disabled={step === 1}
                        onClick={() => changeStep(step - 1)}
                      >
                        <Prev />
                        <Text marginLeft={0.5}>{f("common.prev")}</Text>
                      </StepsControll>
                      <SendButton
                        disabled={submitting}
                        medium
                        marginLeft={1}
                        marginRight={1}
                        type="submit"
                      >
                        {f("common.send")}
                      </SendButton>
                      <StepsControll
                        disabled={step === STEPS_NUMBER}
                        onClick={() => changeStep(step + 1)}
                      >
                        <Text marginRight={0.5}>{f("common.next")}</Text>
                        <Next />
                      </StepsControll>
                    </ButtonsWrapper>
                  </Form>
                )}
              </Formik>
            </>
          </HomePageFormWrapper>
        </HomePageFormHalf>
      </HomePageFormValuesWrapper>
    </HomePageFormSection>
  )
}
