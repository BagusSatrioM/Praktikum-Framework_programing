import { Category } from './category.entity.js';
import { Publisher } from './publisher.entity.js';
import { BookAuthor } from './book-author.entity.js';
import { OrderItem } from './order-item.entity.js';
export declare class Book {
    id: string;
    title: string;
    isbn: string;
    publishedYear: number;
    isAvailable: boolean;
    price: number;
    stock: number;
    category_id: string;
    category: Category;
    publisher_id: string;
    publisher: Publisher;
    bookAuthors: BookAuthor[];
    orderItems: OrderItem[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
