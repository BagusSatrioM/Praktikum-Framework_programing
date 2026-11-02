var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, } from 'typeorm';
import { CustomerAddress } from './customer-address.entity.js';
import { Order } from './order.entity.js';
let Customer = class Customer {
    id;
    name;
    email;
    phone;
    createdAt;
    updatedAt;
    deletedAt;
    addresses;
    orders;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    Column({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    Column({ type: 'varchar', length: 150, unique: true }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    Column({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Customer.prototype, "updatedAt", void 0);
__decorate([
    DeleteDateColumn({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "deletedAt", void 0);
__decorate([
    OneToMany(() => CustomerAddress, (addr) => addr.customer),
    __metadata("design:type", Array)
], Customer.prototype, "addresses", void 0);
__decorate([
    OneToMany(() => Order, (order) => order.customer),
    __metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
Customer = __decorate([
    Entity('customers')
], Customer);
export { Customer };
//# sourceMappingURL=customer.entity.js.map