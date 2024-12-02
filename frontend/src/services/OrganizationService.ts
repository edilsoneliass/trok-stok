/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import Organization from 'interfaces/Organization';
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
}
