var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Book } from './book.entity.js';
import { Author } from './author.entity.js';
let BookAuthor = class BookAuthor {
    book_id;
    author_id;
    book;
    author;
};
__decorate([
    PrimaryColumn({ type: 'uuid' }),
    __metadata("design:type", String)
], BookAuthor.prototype, "book_id", void 0);
__decorate([
    PrimaryColumn({ type: 'uuid' }),
    __metadata("design:type", String)
], BookAuthor.prototype, "author_id", void 0);
__decorate([
    ManyToOne(() => Book, (book) => book.bookAuthors, { onDelete: 'CASCADE' }),
    JoinColumn({ name: 'book_id' }),
    __metadata("design:type", Book)
], BookAuthor.prototype, "book", void 0);
__decorate([
    ManyToOne(() => Author, (author) => author.bookAuthors, { onDelete: 'CASCADE' }),
    JoinColumn({ name: 'author_id' }),
    __metadata("design:type", Author)
], BookAuthor.prototype, "author", void 0);
BookAuthor = __decorate([
    Entity('book_authors')
], BookAuthor);
export { BookAuthor };
//# sourceMappingURL=book-author.entity.js.map