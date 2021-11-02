import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import AuthNavigator from './AuthNavigator'

import DrawerNavigator from './DrawerNavigator'

import { AppContext } from '../context/provider'
import colors from '../assests/theme/colors'

const theme = {
    colors: colors,
    Button: {
        titleStyle: {
            color: 'red',
        },
    },
};

const AppContainer = () => {
    const { authState: { isLoggedIn } } = useContext(AppContext);

    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
            </ThemeProvider>
        </NavigationContainer>
    );
}




export default AppContainer;