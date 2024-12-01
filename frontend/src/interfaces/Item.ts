import Organization from './Organization';

export default interface Item {
    id: string;
    name: string;
    description: string;
    amount?: number;
    available?: boolean;
    image?: string;
    organization?: Organization;
}
