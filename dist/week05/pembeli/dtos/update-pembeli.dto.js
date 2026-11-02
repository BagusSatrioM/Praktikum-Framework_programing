var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsEmail, IsOptional, MinLength, IsNumber } from 'class-validator';
export class UpdatePembeliDto {
    nomorInduk;
    namaLengkap;
    alamat;
    nomorHp;
    saldo;
    name;
    email;
    password;
}
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "nomorInduk", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "namaLengkap", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "alamat", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "nomorHp", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number)
], UpdatePembeliDto.prototype, "saldo", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "name", void 0);
__decorate([
    IsEmail(),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "email", void 0);
__decorate([
    IsString(),
    MinLength(6),
    IsOptional(),
    __metadata("design:type", String)
], UpdatePembeliDto.prototype, "password", void 0);
//# sourceMappingURL=update-pembeli.dto.js.map