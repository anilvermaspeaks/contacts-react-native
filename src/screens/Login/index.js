import React from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-elements';


import Container from '../../components/shared/container';
import envs from '../../config/env';

const Login = () => {
    const { theme } = useTheme();
    console.log(envs)
    return (<Container>
        <Input
            placeholder='INPUT WITH CUSTOM ICON'
            rightIcon={
                <Icon
                    name='user'
                    size={24}
                    color='black'
                />


            }
        />
        <Input placeholder="Password" secureTextEntry={true} rightIcon={
            <Icon
                name='password'
                size={24}
                color='black'
            />


        } />

        <Button title="Hey!" type="outline" raised={true} />

    </Container>)
}

export default Login;