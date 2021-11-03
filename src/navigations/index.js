import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import AuthNavigator from './AuthNavigator'

import DrawerNavigator from './DrawerNavigator'

import { AppContext } from '../context/provider'
import colors from '../assests/theme/colors'
import { navigationRef } from './RootNavigator';

const theme = {
    colors: colors
};

const AppContainer = () => {
    const { authState: { isLoggedIn } } = useContext(AppContext);

    return (
        <NavigationContainer ref={navigationRef}>
            <ThemeProvider theme={theme}>
                {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
            </ThemeProvider>
        </NavigationContainer>
    );
}




export default AppContainer;