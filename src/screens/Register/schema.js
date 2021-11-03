import * as yup from 'yup'

const registrationValidationSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.number().required().positive().integer(),
    photo: yup.string().url(),
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(5, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})

export default registrationValidationSchema;