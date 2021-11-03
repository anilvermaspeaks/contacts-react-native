import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CONTACT_LIST, SETTINGS, CONTACT_DETAILS, CREATE_CONTACT } from '../constants/routeNames'

import Contacts from '../screens/Contacts';
// import SettingsScreen from '../screens/SettingsScreen';

import CreateContact from '../screens/CreateContact'


import ContactDetails from '../screens/ContactDetails';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={CONTACT_LIST}>
            <Stack.Screen name={CONTACT_LIST} component={Contacts} />
            <Stack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
            <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
            {/* <Stack.Screen name={SETTINGS} component={SettingsScreen} /> */}
        </Stack.Navigator>
    );
}




export default HomeNavigator;