import { BooksService } from './books.service.js';
import { CreateBookDto } from './dtos/create-book.dto.js';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): import("./entities/book.entity.js").Book;
    findAll(): import("./entities/book.entity.js").Book[];
    findOne(id: string): import("./entities/book.entity.js").Book | {
        error: string;
    };
    update(id: string, updateData: Partial<CreateBookDto>): import("./entities/book.entity.js").Book | {
        error: string;
    };
    remove(id: string): {
        error: string;
        message?: undefined;
    } | {
        message: string;
        error?: undefined;
    };
}
