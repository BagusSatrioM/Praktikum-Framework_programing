import { Book } from './book.entity.js';
import { Author } from './author.entity.js';
export declare class BookAuthor {
    book_id: string;
    author_id: string;
    book: Book;
    author: Author;
}
