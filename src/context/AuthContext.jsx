/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            username: 'usuario',
        });
    }

    const logout = () => {
        setUser(null);
    }

    const isAuthenticated = () => {
        return user !== null;
    }

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
    }

    return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}