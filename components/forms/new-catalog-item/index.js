import axios from 'axios'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Formik, Form, FieldArray} from 'formik'

import { Text } from '../../common/text'
import { validate } from './validation'
import { ButtonBrown, ButtonSecondary } from '../../common/buttons'
import { FormInputField, FormFieldsWrapper } from '../common'
import { SeparationLineDefault } from '../../common/separation-line'
import { support1, brown, grayscale5 } from '../../../styles/colors'
import { catalogCategories } from '../../../common/catalog-categories'
import { energyEfficiencyLabels } from '../../../common/energy-efficiency-labels'
import {
    baseUnit,
    ENERGY_EFFICIENCY_A,
    ENERGY_EFFICIENCY_B,
    ENERGY_EFFICIENCY_C,
    ENERGY_EFFICIENCY_D,
    ENERGY_EFFICIENCY_A_PLUS,
    ENERGY_EFFICIENCY_A_PLUS2,
    ENERGY_EFFICIENCY_A_PLUS3
} from '../../../common/constants'

const SubmitWrapper = styled.div`
  text-align: center;
  margin-top: ${3 * baseUnit}px;
  padding-top: ${2 * baseUnit}px;
  border-top: 1px solid ${grayscale5};
  
  > button {
    min-width: 350px;
  }
`

export const NewCatalogItemForm = () => {
    const initFunctionality = { name: '', value: '' }

    const [ itemName, setItemName ] = useState('')
    const [ submitted, setSubmitted ] = useState(false)

    const categoriesSelectOptions = catalogCategories.map(cc => ({ ...cc, value: cc.id }))
    const energyEfficiencySelectOptions = energyEfficiencyLabels.map(e => ({ ...e, value: e.id }))

    const submitForm = values => {
        console.log(values)
        axios.post('/api/catalog', values)
            .then(data => {
                console.log(data)
                setSubmitted(true)
                setItemName(values.name)
            })
            .catch(err => console.log(err))
    }

    const initialValues = {
        category: '',
        name: '',
        source: '',
        brand: '',
        price: '',
        images: '',
        description: '',
        functionalities: [{ ...initFunctionality }]
    }

    return (<>
        {submitted && <Text marginTop={1} color={support1}>Artikal <span style={{fontWeight: 600}}>{itemName}</span> je uspjesno dodan.</Text>}
        <Formik enableReinitialize initialValues={initialValues} onSubmit={values => submitForm(values)} validate={validate}>
        {(props) => (<Form>
            <FormFieldsWrapper>
                <FormInputField name="category"
                                type="select"
                                split
                                default="Izaberi Kategoriju *"
                                options={categoriesSelectOptions}
                                {...props}/>
                <FormInputField name="brand"
                                type="text"
                                split
                                placeholder="Marka artikla *"
                                {...props}/>
            </FormFieldsWrapper>
            <FormFieldsWrapper>
                <FormInputField name="name"
                                type="text"
                                split
                                hint="Puni naziv artikla uzet iz izvora"
                                placeholder="Naziv artikla *"
                                {...props}/>
                <FormInputField name="source"
                                type="text"
                                split
                                hint="Odakle su uzeti podatci o artiklu. Npr. web stranica ili katalog"
                                placeholder="Izvor*"
                                {...props}/>
            </FormFieldsWrapper>
            <FormFieldsWrapper>
                <FormInputField name="price"
                                type="text"
                                split
                                hint="Cijena je cijeli ili decimalni broj sa maksimalno 2 decimalna mjesta"
                                placeholder="Cijena u EUR *"
                                {...props}/>
                <FormInputField name="images"
                                type="text"
                                split
                                hint="Link fotografije, odvojiti zarezom ako se unosi vise fotografija"
                                placeholder="Fotografije *"
                                {...props}/>
            </FormFieldsWrapper>
            <FormFieldsWrapper>
                <FormInputField name="distributor"
                                type="text"
                                split
                                hint="Od koga se artikal nabavlja. Npr. Saturn ili sl."
                                placeholder="Distributer / Dobavljac *"
                                {...props}/>
                <FormInputField name="description"
                            type="textarea"
                            split
                            hint="Uzeti opis sa stranice dobavljaca, kataloga ili sl."
                            placeholder="Opis artikla *"
                            {...props}/>
            </FormFieldsWrapper>
            <FormFieldsWrapper>
                <FormInputField name="energyEfficiency"
                                type="select"
                                split
                                only
                                default="Energetska ucinkovitost"
                                options={energyEfficiencySelectOptions}
                                {...props}/>
            </FormFieldsWrapper>
            <SeparationLineDefault marginTop={4} marginBottom={3}/>
            <Text size={1.5} marginBottom={0.5} color={brown} weight={600}>Dodatne funkcionalnosti</Text>
            <Text><span style={{fontWeight: 600}}>Primjer: </span> Bestecksystem - Besteckkorb</Text>
            <FieldArray name="functionalities"
                render={arrayHelpers => (<div>
                    {props.values.functionalities.map((f, i) => (
                        <FormFieldsWrapper>
                            <FormInputField name={`functionalities.${i}.name`}
                                            type="text"
                                            split
                                            placeholder="Naziv funkcionalnosti"
                                            {...props}/>
                            <FormInputField name={`functionalities.${i}.value`}
                                            type="text"
                                            split
                                            placeholder="Opis funkcionalnosti"
                                            {...props}/>
                        </FormFieldsWrapper>
                    ))}
                    <ButtonSecondary type="button" marginTop={2} onClick={() => arrayHelpers.push({ ...initFunctionality })}>Dodaj funkcionalnost +</ButtonSecondary>
                </div>)}
            />
            <SubmitWrapper>
                <ButtonBrown medium type="submit">Unesi artikal</ButtonBrown>
            </SubmitWrapper>
        </Form>)}
    </Formik></>)
}
