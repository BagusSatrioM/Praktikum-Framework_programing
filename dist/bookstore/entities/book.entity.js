var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, } from 'typeorm';
import { Category } from './category.entity.js';
import { Publisher } from './publisher.entity.js';
import { BookAuthor } from './book-author.entity.js';
import { OrderItem } from './order-item.entity.js';
let Book = class Book {
    id;
    title;
    isbn;
    publishedYear;
    isAvailable;
    price;
    stock;
    category_id;
    category;
    publisher_id;
    publisher;
    bookAuthors;
    orderItems;
    createdAt;
    updatedAt;
    deletedAt;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    Column({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    Column({ type: 'varchar', length: 45, unique: true }),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    Column({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "publishedYear", void 0);
__decorate([
    Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Book.prototype, "isAvailable", void 0);
__decorate([
    Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    Column({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "stock", void 0);
__decorate([
    Column({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "category_id", void 0);
__decorate([
    ManyToOne(() => Category, (category) => category.books, { nullable: true }),
    JoinColumn({ name: 'category_id' }),
    __metadata("design:type", Category)
], Book.prototype, "category", void 0);
__decorate([
    Column({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "publisher_id", void 0);
__decorate([
    ManyToOne(() => Publisher, (publisher) => publisher.books, { nullable: true }),
    JoinColumn({ name: 'publisher_id' }),
    __metadata("design:type", Publisher)
], Book.prototype, "publisher", void 0);
__decorate([
    OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.book),
    __metadata("design:type", Array)
], Book.prototype, "bookAuthors", void 0);
__decorate([
    OneToMany(() => OrderItem, (orderItem) => orderItem.book),
    __metadata("design:type", Array)
], Book.prototype, "orderItems", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Book.prototype, "updatedAt", void 0);
__decorate([
    DeleteDateColumn({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], Book.prototype, "deletedAt", void 0);
Book = __decorate([
    Entity('books')
], Book);
export { Book };
//# sourceMappingURL=book.entity.js.map