import {createContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {initialState} from "../store/auth";

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    return (
        <AuthContext.Provider value={ auth }>
            {children}
        </AuthContext.Provider>
    );
};

