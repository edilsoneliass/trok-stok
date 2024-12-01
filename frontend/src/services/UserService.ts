/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { setCookie } from 'nookies';

import api from './api';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    access: string;
    refresh: string;
}

interface IRegisterRequest {
    email: string;
    full_name: string;
    password: string;
    confirm_password: string;
}

interface IRegisterResponse {
    email: string;
    full_name: string;
    password: string;
    confirm_password: string;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        try {
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/login',
                data
            );

            setCookie(undefined, '@trok_stok: access', response.data.refresh);
            setCookie(undefined, '@trok_stok: refresh', response.data.refresh);
            return response.data;
        } catch (err) {
            throw new Error('erro no login');
        }
    }

    static async register(data: IRegisterRequest): Promise<IRegisterResponse> {
        const response: AxiosResponse<IRegisterResponse> = await api.post(
            'register/',
            data
        );

        return response.data;
    }
}
