import axios from 'axios'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import React, { useState } from 'react'

import { StepOne } from './step-one'
import { StepTwo } from './step-two'
import { validate } from './validation'
import { StepThree } from './step-three'
import { ButtonBrown } from '../../buttons'
import { SuccessMessage } from './success-message'
import { Text, HeadlineSecondary } from '../../text'
import { ValuesProposition } from './values-proposition'
import { brown, white, grayscale2 } from '../../../styles/colors'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH} from '../../../common/constants'

import Prev from '../../../images/icons/common/prev-arrow.svg?sprite'
import Next from '../../../images/icons/common/next-arrow.svg?sprite'

const HomePageFormSection = styled.div`
  padding: ${3 * baseUnit}px;
  background: linear-gradient(150deg, rgb(226, 202, 182) 0%, rgb(242, 242, 242) 90%);
`

const HomePageFormValuesWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
`

const HomePageFormHalf = styled.div`
  flex: 1;
`

const HomePageFormWrapper = styled.div`
  background-color: ${white};
  padding: ${2 * baseUnit}px;
  position: relative;
  box-shadow: rgb(196, 204, 215) 0px 3px 4px 0px;
`

const HomePageFormInputsWrapper = styled.div`
  min-height: 400px;
  max-height: 400px;
  overflow-y: scroll;
  margin-top: ${2 * baseUnit}px;
  
  ${({ success }) => success && `
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
  
  ${({ hide }) => hide && 'visibility: hidden;'}
  ${({ disabled }) => disabled && `
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
  
  ${({ disabled }) => disabled && `
    pointer-events: none;
    opacity: 0.7;
  `}
`

const SendButton = styled(ButtonBrown)`
    background-repeat: no-repeat;
    background-size: ${1.5 * baseUnit}px;
    padding-right: ${4.5 * baseUnit}px;
    background-position: right ${baseUnit}px center;
    background-image: url(${require('../../../images/icons/common/paper-plane.svg')});
`

export const HomePageRequestForm = () => {
    const STEPS_NUMBER = 3
    const INITIAL_STEP = 1

    const [ step, setStep ] = useState(INITIAL_STEP)
    const [ appliances, setAppliances ] = useState([])
    const [ submitted, setSubmitted ] = useState(false)
    const [ kitchenShape, setKitchenShape ] = useState('')

    const changeStep = s => {
        if (s >= INITIAL_STEP && s <= STEPS_NUMBER) {
            setStep(s)
        }
    }

    const submitForm = values => {
        const data = {
            ...values,
            kitchenShape,
            appliances
        }
        console.log(values)
        axios.post('/api/request', data)
            .then(data => {
                console.log(data)
                setSubmitted(true)
            })
            .catch(err => console.log(err))
    }

    const selectKitchenShape = (shape) => {
        if ( shape === kitchenShape ) {
            setKitchenShape('')
        } else {
            setKitchenShape(shape)
        }
    }

    const selectAppliance = (appliance) => {
        const applianceIndex = appliances.indexOf(appliance)

        if (applianceIndex >= 0) {
            setAppliances([
                ...appliances.slice(0, applianceIndex),
                ...appliances.slice(applianceIndex + 1)
            ])
        } else {
            setAppliances([ ...appliances, appliance ])
        }
    }

    return (<HomePageFormSection>
                <HomePageFormValuesWrapper>
                <HomePageFormHalf>
                    <ValuesProposition/>
                </HomePageFormHalf>
                <HomePageFormHalf>
                    <HomePageFormWrapper>
                        <><HeadlineSecondary color={brown} marginBottom={2}>Order your dream kitchen now</HeadlineSecondary>
                        <Text>Out team will contact you soon and arrange a meeting with you and our design consultants.</Text>
                        <Formik enableReinitialize initialValues={{}} onSubmit={values => submitForm(values)} validate={validate}>
                            {(props) => (<Form>
                                <HomePageFormInputsWrapper success={submitted}>
                                    {
                                        submitted
                                            ? <SuccessMessage/>
                                            : <>
                                                {step === 1 && <StepOne {...props}/>}
                                                {step === 2 && <StepTwo selected={kitchenShape} {...props} onSelect={s => selectKitchenShape(s)}/>}
                                                {step === 3 && <StepThree selected={appliances} {...props} onSelect={a => selectAppliance(a)}/>}
                                            </>
                                    }
                                </HomePageFormInputsWrapper>
                                <ButtonsWrapper disabled={submitted}>
                                    <StepsControll disabled={step === 1} onClick={() => changeStep(step - 1)}>
                                        <Prev/>
                                        <Text marginLeft={0.5}>Prev</Text>
                                    </StepsControll>
                                    <SendButton disabled={submitted} medium marginLeft={1} marginRight={1} type="submit">Send Request</SendButton>
                                    <StepsControll disabled={step === STEPS_NUMBER} onClick={() => changeStep(step + 1)}>
                                        <Text marginRight={0.5}>Next</Text>
                                        <Next/>
                                    </StepsControll>
                                </ButtonsWrapper>
                            </Form>)}
                        </Formik></>
                    </HomePageFormWrapper>
                </HomePageFormHalf>
            </HomePageFormValuesWrapper>
    </HomePageFormSection>)
}