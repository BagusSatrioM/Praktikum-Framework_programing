import { Order } from './order.entity.js';
export declare class Payment {
    id: string;
    order_id: string;
    order: Order;
    payment_method: string;
    amount: number;
    status: string;
    paid_at: Date;
    createdAt: Date;
}
