import AsyncStorage from '@react-native-async-storage/async-storage';

import { appAuth, fireBaseLogin } from "../../../../firebase";

import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
// import axiosInstance from '../../../helpers/axiosInstance';

const loginUser = ({ email, password }) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    });

    fireBaseLogin(appAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            // AsyncStorage.setItem('token', res.data.token);
            // AsyncStorage.setItem('user', JSON.stringify(res.data.user));
            const user = userCredential.user;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user,
            });
            // ...
        })
        .catch((error) => {

            dispatch({
                type: LOGIN_FAIL,
                payload: error.message,
            });
        });
};


export default loginUser;