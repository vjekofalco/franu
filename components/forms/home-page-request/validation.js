export const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length > 25) {
        errors.lastName = 'Must be 25 characters or less'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!values.phoneNumber) {
        errors.phoneNumber = 'Required'
    } else if (!/^(?=.*[0-9])[- +()0-9]+$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number'
    }

    return errors;
}
