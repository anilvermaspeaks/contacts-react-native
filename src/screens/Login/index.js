import React, { useState, useContext } from 'react';
import { Input, Button, Text, Divider } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-elements';
import { Formik } from 'formik'


import Container from '../../components/shared/container';
import styles, { inputWrapper } from './styles';
import loginValidationSchema from './schema'
import { REGISTER } from '../../constants/routeNames'
import loginUser from '../../context/actions/auth/loginUser';
import { AppContext } from '../../context/provider';

const Login = ({ navigation }) => {
    const { theme } = useTheme();
    const { authDispatch, authState: { error, loading }, } = useContext(AppContext);

    const navigateToRegister = () => {
        navigation.navigate(REGISTER)
    }


    return (<Container>
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
                loginUser(values)(authDispatch);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
                <>
                    <Text h4>Login</Text>
                    {!!error && <Text style={{ color: theme.colors.danger }}>{error}</Text>}
                    <Divider style={{ backgroundColor: theme.colors.grey5, marginTop: 10 }} />
                    <View style={styles.box}>
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
                            <Button disabled={!isValid}
                                onPress={handleSubmit}
                                title="Login"
                                loading={loading}
                            /></View>
                        <View style={styles.box}><Text> I'm a new user.
                            <TouchableOpacity onPress={navigateToRegister}
                            ><Text style={[styles.link, { fontWeight: 'bold', color: theme.colors.secondary }]}>Sign Up</Text>
                            </TouchableOpacity></Text></View>

                    </View></>
            )}
        </Formik>
    </Container>)
}

export default Login;