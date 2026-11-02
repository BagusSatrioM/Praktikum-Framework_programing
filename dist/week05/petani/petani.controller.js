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
import { PetaniService } from './petani.service.js';
import { CreatePetaniDto } from './dtos/create-petani.dto.js';
import { UpdatePetaniDto } from './dtos/update-petani.dto.js';
let PetaniController = class PetaniController {
    petaniService;
    constructor(petaniService) {
        this.petaniService = petaniService;
    }
    create(createPetaniDto) {
        return this.petaniService.create(createPetaniDto);
    }
    findAll() {
        return this.petaniService.findAll();
    }
    findOne(id) {
        return this.petaniService.findOne(id);
    }
    update(id, updatePetaniDto) {
        return this.petaniService.update(id, updatePetaniDto);
    }
    remove(id) {
        return this.petaniService.remove(id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePetaniDto]),
    __metadata("design:returntype", void 0)
], PetaniController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetaniController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetaniController.prototype, "findOne", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdatePetaniDto]),
    __metadata("design:returntype", void 0)
], PetaniController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetaniController.prototype, "remove", null);
PetaniController = __decorate([
    Controller('petani'),
    __metadata("design:paramtypes", [PetaniService])
], PetaniController);
export { PetaniController };
//# sourceMappingURL=petani.controller.js.map