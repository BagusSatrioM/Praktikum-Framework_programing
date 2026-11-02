import { Book } from './book.entity.js';
export declare class Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    books: Book[];
}
