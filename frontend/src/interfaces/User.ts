export default interface User {
    id: number;
    // eslint-disable-next-line camelcase
    full_name: string;
    email: string;
    organization?: number;
    role?: string;
}
