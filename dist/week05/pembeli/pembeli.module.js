var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PembeliController } from './pembeli.controller.js';
import { PembeliService } from './pembeli.service.js';
import { Pembeli } from '../entities/pembeli.entity.js';
import { User } from '../entities/user.entity.js';
let PembeliModule = class PembeliModule {
};
PembeliModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([Pembeli, User])],
        controllers: [PembeliController],
        providers: [PembeliService],
        exports: [PembeliService],
    })
], PembeliModule);
export { PembeliModule };
//# sourceMappingURL=pembeli.module.js.map