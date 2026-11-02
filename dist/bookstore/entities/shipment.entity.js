var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Order } from './order.entity.js';
let Shipment = class Shipment {
    id;
    order_id;
    order;
    courier;
    tracking_number;
    status;
    shipped_at;
    delivered_at;
    createdAt;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Shipment.prototype, "id", void 0);
__decorate([
    Column({ type: 'uuid', unique: true }),
    __metadata("design:type", String)
], Shipment.prototype, "order_id", void 0);
__decorate([
    ManyToOne(() => Order, { onDelete: 'CASCADE' }),
    JoinColumn({ name: 'order_id' }),
    __metadata("design:type", Order)
], Shipment.prototype, "order", void 0);
__decorate([
    Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Shipment.prototype, "courier", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Shipment.prototype, "tracking_number", void 0);
__decorate([
    Column({ type: 'varchar', length: 30, default: 'pending' }),
    __metadata("design:type", String)
], Shipment.prototype, "status", void 0);
__decorate([
    Column({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Shipment.prototype, "shipped_at", void 0);
__decorate([
    Column({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Shipment.prototype, "delivered_at", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Shipment.prototype, "createdAt", void 0);
Shipment = __decorate([
    Entity('shipments')
], Shipment);
export { Shipment };
//# sourceMappingURL=shipment.entity.js.map