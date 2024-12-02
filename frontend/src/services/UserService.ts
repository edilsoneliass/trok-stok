/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { parseCookies, setCookie } from 'nookies';

import User from 'interfaces/User';
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

interface IEnterOrgRequest {
    organization: number; // id da organização
    requested_role: string;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        try {
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/login/',
                data
            );

            setCookie(undefined, '@trok_stok: access', response.data.access);
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

    static async enterOrganization(data: IEnterOrgRequest) {
        const cookies = parseCookies();
        const token = cookies['@trok_stok: access'];

        const response: AxiosResponse = await api.post(
            'membership-requests/',
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data;
    }

    static async getUser(): Promise<User> {
        const cookies = parseCookies();
        const token = cookies['@trok_stok: access'];

        const response: AxiosResponse = await api.get('user-info/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }
}
