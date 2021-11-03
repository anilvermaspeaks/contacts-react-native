import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../../../constants/routeNames'
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { appAuth } from "../../../../firebase";

import {
    REGISTER_FAIL,
    LOGIN_LOADING,
    REGISTER_SUCCESS,
} from '../../../constants/actionTypes';

const registerUser = ({ name, photo, email, password, phone }) => (dispatch, navigation) => {
    dispatch({
        type: LOGIN_LOADING,
    });
    createUserWithEmailAndPassword(appAuth, email, password)
        .then((createdUser) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            navigation.navigate(LOGIN)
        })
        .catch((error) => {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.message,
            });
        });
};


export default registerUser;