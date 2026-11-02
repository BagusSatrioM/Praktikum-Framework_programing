var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Customer } from './customer.entity.js';
let CustomerAddress = class CustomerAddress {
    id;
    customer_id;
    customer;
    recipient_name;
    phone;
    address;
    city;
    postal_code;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], CustomerAddress.prototype, "id", void 0);
__decorate([
    Column({ type: 'uuid' }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "customer_id", void 0);
__decorate([
    ManyToOne(() => Customer, (customer) => customer.addresses, { onDelete: 'CASCADE' }),
    JoinColumn({ name: 'customer_id' }),
    __metadata("design:type", Customer)
], CustomerAddress.prototype, "customer", void 0);
__decorate([
    Column({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "recipient_name", void 0);
__decorate([
    Column({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "phone", void 0);
__decorate([
    Column({ type: 'text' }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "address", void 0);
__decorate([
    Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "city", void 0);
__decorate([
    Column({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "postal_code", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], CustomerAddress.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CustomerAddress.prototype, "updatedAt", void 0);
CustomerAddress = __decorate([
    Entity('customer_addresses')
], CustomerAddress);
export { CustomerAddress };
//# sourceMappingURL=customer-address.entity.js.map