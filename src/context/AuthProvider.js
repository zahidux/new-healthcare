import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContaxt = createContext();

const AuthProvider = (props) => {
    const allContext = useFirebase();
    return (
        <AuthContaxt.Provider value={allContext}>
            {props.children}
        </AuthContaxt.Provider>
    );
};

export default AuthProvider;