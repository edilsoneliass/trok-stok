/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';
import Item from 'interfaces/Item';
import api from './api';

export default class ItemService {
    static async createItem(data: {
        name: string;
        description: string;
        quantity: number;
        category: number;
    }): Promise<{ message: string; item: Item }> {
        try {
            const cookies = parseCookies();
            const token = cookies['@trok_stok: access'];
            const response: AxiosResponse<{ message: string; item: Item }> =
                await api.post('/items/create/', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            return response.data;
        } catch (err) {
            throw new Error('Erro em registrar item');
        }
    }
}
