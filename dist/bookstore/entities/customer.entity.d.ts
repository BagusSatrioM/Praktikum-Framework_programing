import { CustomerAddress } from './customer-address.entity.js';
import { Order } from './order.entity.js';
export declare class Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    addresses: CustomerAddress[];
    orders: Order[];
}
