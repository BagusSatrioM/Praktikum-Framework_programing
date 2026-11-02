export declare class Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    createdAt: Date;
    constructor(partial: Partial<Book>);
}
