import { Customer } from './customer.entity.js';
import { OrderItem } from './order-item.entity.js';
export declare class Order {
    id: string;
    customer_id: string;
    customer: Customer;
    order_number: string;
    status: string;
    total_amount: number;
    items: OrderItem[];
    createdAt: Date;
    updatedAt: Date;
}
