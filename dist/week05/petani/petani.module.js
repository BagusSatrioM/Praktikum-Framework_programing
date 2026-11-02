var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetaniController } from './petani.controller.js';
import { PetaniService } from './petani.service.js';
import { Petani } from '../entities/petani.entity.js';
import { User } from '../entities/user.entity.js';
let PetaniModule = class PetaniModule {
};
PetaniModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([Petani, User])],
        controllers: [PetaniController],
        providers: [PetaniService],
        exports: [PetaniService],
    })
], PetaniModule);
export { PetaniModule };
//# sourceMappingURL=petani.module.js.map