var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../entities/user.entity.js';
import { Produk } from './produk.entity.js';
let Tawaran = class Tawaran {
    id;
    jumlahTawaran;
    isMenang;
    createdAt;
    pembeli;
    pembeliId;
    produk;
    produkId;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Tawaran.prototype, "id", void 0);
__decorate([
    Column({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Tawaran.prototype, "jumlahTawaran", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], Tawaran.prototype, "isMenang", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Tawaran.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => User, { nullable: false }),
    JoinColumn({ name: 'pembeliId' }),
    __metadata("design:type", User)
], Tawaran.prototype, "pembeli", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Tawaran.prototype, "pembeliId", void 0);
__decorate([
    ManyToOne(() => Produk, { nullable: false }),
    JoinColumn({ name: 'produkId' }),
    __metadata("design:type", Produk)
], Tawaran.prototype, "produk", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Tawaran.prototype, "produkId", void 0);
Tawaran = __decorate([
    Entity({ name: 'tawarans' })
], Tawaran);
export { Tawaran };
//# sourceMappingURL=tawaran.entity.js.map