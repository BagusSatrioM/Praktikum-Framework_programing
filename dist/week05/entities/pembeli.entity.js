var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity.js';
let Pembeli = class Pembeli {
    id;
    nomorInduk;
    namaLengkap;
    alamat;
    nomorHp;
    saldo;
    user;
    userId;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Pembeli.prototype, "id", void 0);
__decorate([
    Column({ length: 50, unique: true }),
    __metadata("design:type", String)
], Pembeli.prototype, "nomorInduk", void 0);
__decorate([
    Column({ length: 100 }),
    __metadata("design:type", String)
], Pembeli.prototype, "namaLengkap", void 0);
__decorate([
    Column({ length: 255 }),
    __metadata("design:type", String)
], Pembeli.prototype, "alamat", void 0);
__decorate([
    Column({ length: 15 }),
    __metadata("design:type", String)
], Pembeli.prototype, "nomorHp", void 0);
__decorate([
    Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pembeli.prototype, "saldo", void 0);
__decorate([
    OneToOne(() => User, (user) => user.id),
    JoinColumn({ name: 'userId' }),
    __metadata("design:type", User)
], Pembeli.prototype, "user", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pembeli.prototype, "userId", void 0);
Pembeli = __decorate([
    Entity({ name: 'pembelis' })
], Pembeli);
export { Pembeli };
//# sourceMappingURL=pembeli.entity.js.map