var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn, } from 'typeorm';
import { Customer } from './customer.entity.js';
import { OrderItem } from './order-item.entity.js';
let Order = class Order {
    id;
    customer_id;
    customer;
    order_number;
    status;
    total_amount;
    items;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    Column({ type: 'uuid' }),
    __metadata("design:type", String)
], Order.prototype, "customer_id", void 0);
__decorate([
    ManyToOne(() => Customer, (customer) => customer.orders, { onDelete: 'CASCADE' }),
    JoinColumn({ name: 'customer_id' }),
    __metadata("design:type", Customer)
], Order.prototype, "customer", void 0);
__decorate([
    Column({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], Order.prototype, "order_number", void 0);
__decorate([
    Column({ type: 'varchar', length: 30, default: 'pending' }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    Column({ type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "total_amount", void 0);
__decorate([
    OneToMany(() => OrderItem, (item) => item.order),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
Order = __decorate([
    Entity('orders')
], Order);
export { Order };
//# sourceMappingURL=order.entity.js.map