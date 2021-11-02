import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LOGIN, REGISTER } from '../constants/routeNames'

import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createNativeStackNavigator();



const SignUp = () => {
    return (<View><Text>Hi from COntacts SignUp</Text></View>)
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={LOGIN} component={Login} />
            <Stack.Screen name={REGISTER} component={Register} />

        </Stack.Navigator>
    );
}




export default AuthNavigator;