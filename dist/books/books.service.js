var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
let BooksService = class BooksService {
    books = [];
    idCounter = 1;
    create(createBookDto) {
        const book = new Book({
            id: String(this.idCounter++),
            ...createBookDto,
            createdAt: new Date(),
        });
        this.books.push(book);
        return book;
    }
    findAll() {
        return this.books;
    }
    findOne(id) {
        return this.books.find((b) => b.id === id);
    }
    update(id, updateData) {
        const book = this.findOne(id);
        if (!book)
            return undefined;
        Object.assign(book, updateData);
        return book;
    }
    remove(id) {
        const idx = this.books.findIndex((b) => b.id === id);
        if (idx < 0)
            return false;
        this.books.splice(idx, 1);
        return true;
    }
};
BooksService = __decorate([
    Injectable()
], BooksService);
export { BooksService };
//# sourceMappingURL=books.service.js.map