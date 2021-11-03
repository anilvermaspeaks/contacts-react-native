import React, { createContext, useReducer } from 'react';
import authInitialState from './initialstats/auth';
import contactsInitialState from './initialstats/contacts';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(
        contacts,
        contactsInitialState,
    );

    return (
        <AppContext.Provider
            value={{ authState, contactsState, authDispatch, contactsDispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;