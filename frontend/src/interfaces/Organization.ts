import Item from './Item';

export default interface Organization {
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    itens: Item[];
}
