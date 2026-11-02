import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dtos/create-book.dto.js';

// @Injectable() = decorator metadata untuk IoC container
// Tanpa ini NestJS ga bisa inject service ke controller
// Container akan otomatis create instance & manage lifetime

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  // CRUD operations — logika bisnis tinggal di sini, bukan controller
  create(createBookDto: CreateBookDto): Book {
    const book = new Book({
      id: String(this.idCounter++),
      ...createBookDto,
      createdAt: new Date(),
    });
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: string): Book | undefined {
    return this.books.find((b) => b.id === id);
  }

  update(id: string, updateData: Partial<CreateBookDto>): Book | undefined {
    const book = this.findOne(id);
    if (!book) return undefined;
    Object.assign(book, updateData);
    return book;
  }

  remove(id: string): boolean {
    const idx = this.books.findIndex((b) => b.id === id);
    if (idx < 0) return false;
    this.books.splice(idx, 1);
    return true;
  }
}
