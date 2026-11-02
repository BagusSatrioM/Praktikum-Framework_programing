var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsEmail, IsNotEmpty, MinLength, IsNumber } from 'class-validator';
export class CreatePetaniDto {
    nomorInduk;
    namaLengkap;
    alamat;
    nomorHp;
    saldo;
    tanggalLahir;
    name;
    email;
    password;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "nomorInduk", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "namaLengkap", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "alamat", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "nomorHp", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], CreatePetaniDto.prototype, "saldo", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "tanggalLahir", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "name", void 0);
__decorate([
    IsEmail(),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "email", void 0);
__decorate([
    IsString(),
    MinLength(6),
    __metadata("design:type", String)
], CreatePetaniDto.prototype, "password", void 0);
//# sourceMappingURL=create-petani.dto.js.map