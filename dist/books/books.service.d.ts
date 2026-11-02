import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dtos/create-book.dto.js';
export declare class BooksService {
    private books;
    private idCounter;
    create(createBookDto: CreateBookDto): Book;
    findAll(): Book[];
    findOne(id: string): Book | undefined;
    update(id: string, updateData: Partial<CreateBookDto>): Book | undefined;
    remove(id: string): boolean;
}
