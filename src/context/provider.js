import React, { createContext, useReducer } from "react"

import authReducer from './reducers/auth';

import contactReducer from './reducers/contacts';

import authInitialState from './initialstats/auth'

import contactsInitialState from './initialstats/contacts'
import { View } from "react-native";

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, authInitialState)

    const [contactsState, contactsDispatch] = useReducer(contactReducer, contactsInitialState)

    return (<AppContext.Provider value={{
        authDispatch, contactsDispatch, authState, contactsState
    }}> {children}</AppContext.Provider>)
}


export default AppProvider;
