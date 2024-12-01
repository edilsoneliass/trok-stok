import Organization from './Organization';

export default interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    organizations: Organization[];
    type: string;
    image: string;
}
