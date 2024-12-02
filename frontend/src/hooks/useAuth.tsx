import { destroyCookie } from 'nookies';
import React, { useContext, useState, createContext } from 'react';

import api from 'services/api';

import UserService from 'services/UserService';

import User from '../interfaces/User';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    access: string;
    refresh: string;
}

interface AuthContextData {
    user: User;
    login: (data: ILoginRequest) => Promise<ILoginResponse>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user] = useState({} as User);

    const login = async (data: ILoginRequest): Promise<ILoginResponse> => {
        try {
            const response = await UserService.login(data);

            api.defaults.headers.common = {
                Authorization: `Bearer ${response.access}`
            };

            // setUser(response.user);
            return response;
        } catch (error) {
            throw new Error('erro no login');
        }
    };

    const logout = () => {
        destroyCookie(undefined, '@trok_stok:token');
        destroyCookie(undefined, '@trok_stok:useId');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default () => useContext(AuthContext);
