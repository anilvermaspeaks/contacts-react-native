import React, { useState, useContext } from 'react';
import { Input, Button, Text, Divider } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-elements';
import { Formik } from 'formik'


import Container from '../../components/shared/container';
import styles, { inputWrapper } from './styles';
import registrationValidationSchema from './schema'
import { LOGIN } from '../../constants/routeNames'
import registerUser from '../../context/actions/auth/registerUser';
import { AppContext } from '../../context/provider';


const RegisterUser = ({ navigation }) => {
    const { theme } = useTheme();
    const { authDispatch, authState: { error, loading }, } = useContext(AppContext);


    const navigateToLogin = () => {
        navigation.navigate(LOGIN)
    }

    return (<Container>
        <Formik
            validationSchema={registrationValidationSchema}
            initialValues={{ email: '', password: '', name: '', phone: '', photo: '' }}
            onSubmit={values => registerUser(values)(authDispatch, navigation)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
                <>
                    <Text h4>Register</Text>
                    {!!error && <Text style={{ color: theme.colors.danger }}>{error}</Text>}
                    <Divider style={{ backgroundColor: theme.colors.grey5, marginTop: 10 }} />
                    <View style={styles.box}>
                        <View style={styles.formControl}>
                            <Input name="name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                label={
                                    <Text h6>Name</Text>} inputContainerStyle={inputWrapper} style={styles.input} placeholder="Enter name" />
                            {errors.name && touched.name &&
                                <Text style={{ paddingHorizontal: 10, color: theme.colors.danger }}>{errors.name}</Text>
                            }
                        </View>
                        <View style={styles.formControl}>
                            <Input name="email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                label={
                                    <Text h6>Email</Text>} inputContainerStyle={inputWrapper} style={styles.input} placeholder="Enter email" />
                            {errors.email && touched.email &&
                                <Text style={{ paddingHorizontal: 10, color: theme.colors.danger }}>{errors.email}</Text>
                            }
                        </View>
                        <View style={styles.formControl}>
                            <Input
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                name="password" secureTextEntry label={
                                    <Text h6>Password</Text>} inputContainerStyle={inputWrapper} style={styles.input} placeholder="Enter password" />
                            {errors.password && touched.password &&
                                <Text style={{ paddingHorizontal: 10, color: theme.colors.danger }}>{errors.password}</Text>
                            }</View>

                        <View style={styles.formControl}>
                            <Input name="phone"
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                label={
                                    <Text h6>Phone</Text>} inputContainerStyle={inputWrapper} style={styles.input} placeholder="Enter phone" />
                            {errors.phone && touched.phone &&
                                <Text style={{ paddingHorizontal: 10, color: theme.colors.danger }}>{errors.phone}</Text>
                            }
                        </View>
                        <View style={styles.formControl}>
                            <Input name="photo"
                                onChangeText={handleChange('photo')}
                                onBlur={handleBlur('photo')}
                                value={values.photo}
                                label={
                                    <Text h6>Photo URL</Text>} inputContainerStyle={inputWrapper} style={styles.input} placeholder="Enter photo url" />
                            {errors.photo && touched.photo &&
                                <Text style={{ paddingHorizontal: 10, color: theme.colors.danger }}>{errors.photo}</Text>
                            }
                        </View>
                        <View style={styles.formControl}>
                            <Button disabled={!isValid}
                                onPress={handleSubmit}
                                title="Register"
                                loading={loading}
                            /></View>
                        <View style={styles.box}><Text>Want to
                            <TouchableOpacity onPress={navigateToLogin}
                            ><Text style={[styles.link, { fontWeight: 'bold', color: theme.colors.secondary }]}>Login</Text>
                            </TouchableOpacity></Text></View>

                    </View></>
            )}
        </Formik>
    </Container>)
}

export default RegisterUser;