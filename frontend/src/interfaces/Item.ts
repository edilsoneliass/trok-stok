export default interface Item {
    id: number;
    name: string;
    description: string;
    quantity?: number;
    // eslint-disable-next-line camelcase
    is_available_for_trade?: boolean;
    image?: string;
    category: number;
    organization?: number;
}
