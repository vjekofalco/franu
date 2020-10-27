import axios from 'axios'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import React, { useState } from 'react'

import { Text } from '../../text'
import { StepOne } from './step-one'
import { StepTwo } from './step-two'
import { validate } from './validation'
import { StepThree } from './step-three'
import { ButtonSpecial, ButtonSecondary } from '../../buttons'
import { baseUnit, PAGE_CONTENT_WIDE_WIDTH} from '../../../common/constants'

const HomePageFormWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: ${baseUnit}px;
  max-width: ${PAGE_CONTENT_WIDE_WIDTH + 2 * baseUnit}px;
`

const HomePageFormHalf = styled.div`
  flex: 1;
`

export const HomePageRequestForm = () => {
    const [ step, setStep ] = useState(1)
    const [ submitted, setSubmitted ] = useState(false)

    const submitForm = values => {
        console.log(values)
        axios.post('/api/request', values)
            .then(data => {
                console.log(data)
                setSubmitted(true)
            })
            .catch(err => console.log(err))
    }

    return (<HomePageFormWrapper>
        <HomePageFormHalf>Values propositions</HomePageFormHalf>
        <HomePageFormHalf>
            {submitted && <Text>Request Submitted</Text>}
            <Formik enableReinitialize initialValues={{}} onSubmit={values => submitForm(values)} validate={validate}>
                {(props) => (<Form>
                    {step === 1 && <StepOne {...props}/>}
                    {step === 2 && <StepTwo {...props}/>}
                    {step === 3 && <StepThree {...props}/>}
                    <ButtonSecondary onClick={() => setStep(step - 1)} marginTop={1}>Prev</ButtonSecondary>
                    <ButtonSpecial marginLeft={1} marginTop={1} type="submit">Send Request</ButtonSpecial>
                    <ButtonSecondary onClick={() => setStep(step + 1)} marginLeft={1} marginTop={1}>Next</ButtonSecondary>
                </Form>)}
            </Formik>
        </HomePageFormHalf>
    </HomePageFormWrapper>)
}
