/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import Organization from 'interfaces/Organization';
import Item from 'interfaces/Item';
import { parseCookies } from 'nookies';
import api from './api';

export default class OrganizationService {
    static async getAllOrganizations(): Promise<Organization[]> {
        try {
            const response: AxiosResponse<Organization[]> = await api.get(
                '/organizations/'
            );
            return response.data;
        } catch (err) {
            throw new Error('Erro em buscar as organizações');
        }
    }

    static async getOrganization(data: { id: number }): Promise<Organization> {
        try {
            const response: AxiosResponse<Organization> = await api.get(
                `/organizations/${data.id}/`
            );
            return response.data;
        } catch (err) {
            throw new Error('Erro em buscar as organizações');
        }
    }

    static async getOrganizationItems(): Promise<{ items: Item[] }> {
        try {
            const cookies = parseCookies();
            const token = cookies['@trok_stok: access'];
            const response: AxiosResponse<{ items: Item[] }> = await api.get(
                `/organization/items/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (err) {
            throw new Error('Erro em buscar os items das organizações');
        }
    }
}
