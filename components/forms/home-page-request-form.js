import React from 'react';
import { Formik, Form, useFormik, useField } from 'formik'

import { ButtonSpecial } from '../buttons'
import { StyledInput } from '../form-elements/input'
import { ErrorText } from '../form-elements/error-text'

const RequestFormInputField = (props) => {
    const [field, meta] = useField(props)

    return (
        <>
            {meta.touched && meta.error ? (
                <ErrorText>{meta.error}</ErrorText>
            ) : null}
            <StyledInput {...field} {...props} />
        </>
    );
}

export const HomePageRequestForm = () => {
    const submitForm = values => {
        console.log(values)
    }

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 20) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 25) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
    }

    return (<Formik initialValues={initialValues} onSubmit={values => submitForm(values)} validate={validate}>
        <Form>
            <RequestFormInputField id="firstName"
                         name="firstName"
                         type="text"
                         placeholder="First Name"/>
            <RequestFormInputField id="firstName"
                         name="lastName"
                         type="text"
                         placeholder="Last Name"/>
            <RequestFormInputField id="firstName"
                         name="email"
                         type="text"
                         placeholder="E-mail"/>
            <ButtonSpecial type="submit">Send Request</ButtonSpecial>
        </Form>
    </Formik>)
}
