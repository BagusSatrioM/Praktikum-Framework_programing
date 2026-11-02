var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PembeliService } from './pembeli.service.js';
import { CreatePembeliDto } from './dtos/create-pembeli.dto.js';
import { UpdatePembeliDto } from './dtos/update-pembeli.dto.js';
let PembeliController = class PembeliController {
    pembeliService;
    constructor(pembeliService) {
        this.pembeliService = pembeliService;
    }
    create(createPembeliDto) {
        return this.pembeliService.create(createPembeliDto);
    }
    findAll() {
        return this.pembeliService.findAll();
    }
    findOne(id) {
        return this.pembeliService.findOne(id);
    }
    update(id, updatePembeliDto) {
        return this.pembeliService.update(id, updatePembeliDto);
    }
    remove(id) {
        return this.pembeliService.remove(id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePembeliDto]),
    __metadata("design:returntype", void 0)
], PembeliController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PembeliController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PembeliController.prototype, "findOne", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdatePembeliDto]),
    __metadata("design:returntype", void 0)
], PembeliController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PembeliController.prototype, "remove", null);
PembeliController = __decorate([
    Controller('pembeli'),
    __metadata("design:paramtypes", [PembeliService])
], PembeliController);
export { PembeliController };
//# sourceMappingURL=pembeli.controller.js.map