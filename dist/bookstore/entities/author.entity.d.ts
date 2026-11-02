import { BookAuthor } from './book-author.entity.js';
export declare class Author {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bookAuthors: BookAuthor[];
}
