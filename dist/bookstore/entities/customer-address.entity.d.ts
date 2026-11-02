import { Customer } from './customer.entity.js';
export declare class CustomerAddress {
    id: string;
    customer_id: string;
    customer: Customer;
    recipient_name: string;
    phone: string;
    address: string;
    city: string;
    postal_code: string;
    createdAt: Date;
    updatedAt: Date;
}
