import { Order } from './order.entity.js';
import { Book } from './book.entity.js';
export declare class OrderItem {
    id: string;
    order_id: string;
    order: Order;
    book_id: string;
    book: Book;
    quantity: number;
    price: number;
    subtotal: number;
}
