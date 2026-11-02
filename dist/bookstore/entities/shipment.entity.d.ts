import { Order } from './order.entity.js';
export declare class Shipment {
    id: string;
    order_id: string;
    order: Order;
    courier: string;
    tracking_number: string;
    status: string;
    shipped_at: Date;
    delivered_at: Date;
    createdAt: Date;
}
