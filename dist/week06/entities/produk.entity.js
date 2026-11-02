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
let Produk = class Produk {
    id;
    namaProduk;
    hargaAwal;
    hargaAkhir;
    tanggalLe_lang;
    waktuSelesai;
    isLaku;
    createdAt;
    petani;
    petaniId;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Produk.prototype, "id", void 0);
__decorate([
    Column({ length: 100 }),
    __metadata("design:type", String)
], Produk.prototype, "namaProduk", void 0);
__decorate([
    Column({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Produk.prototype, "hargaAwal", void 0);
__decorate([
    Column({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Produk.prototype, "hargaAkhir", void 0);
__decorate([
    Column({ type: 'date' }),
    __metadata("design:type", String)
], Produk.prototype, "tanggalLe_lang", void 0);
__decorate([
    Column({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], Produk.prototype, "waktuSelesai", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], Produk.prototype, "isLaku", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Produk.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => User, { nullable: false }),
    JoinColumn({ name: 'petaniId' }),
    __metadata("design:type", User)
], Produk.prototype, "petani", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produk.prototype, "petaniId", void 0);
Produk = __decorate([
    Entity({ name: 'produks' })
], Produk);
export { Produk };
//# sourceMappingURL=produk.entity.js.map