var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, } from 'typeorm';
import { Book } from './book.entity.js';
let Publisher = class Publisher {
    id;
    name;
    createdAt;
    updatedAt;
    books;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Publisher.prototype, "id", void 0);
__decorate([
    Column({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Publisher.prototype, "name", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Publisher.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Publisher.prototype, "updatedAt", void 0);
__decorate([
    OneToMany(() => Book, (book) => book.publisher),
    __metadata("design:type", Array)
], Publisher.prototype, "books", void 0);
Publisher = __decorate([
    Entity('publishers')
], Publisher);
export { Publisher };
//# sourceMappingURL=publisher.entity.js.map