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
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pembeli } from '../entities/pembeli.entity.js';
import { User } from '../entities/user.entity.js';
let PembeliService = class PembeliService {
    pembeliRepository;
    userRepository;
    constructor(pembeliRepository, userRepository) {
        this.pembeliRepository = pembeliRepository;
        this.userRepository = userRepository;
    }
    async create(createPembeliDto) {
        const user = this.userRepository.create({
            name: createPembeliDto.name,
            email: createPembeliDto.email,
            password: createPembeliDto.password,
            isActive: true,
        });
        const savedUser = await this.userRepository.save(user);
        const pembeli = this.pembeliRepository.create({
            nomorInduk: createPembeliDto.nomorInduk,
            namaLengkap: createPembeliDto.namaLengkap,
            alamat: createPembeliDto.alamat,
            nomorHp: createPembeliDto.nomorHp,
            saldo: createPembeliDto.saldo,
            user: savedUser,
            userId: savedUser.id,
        });
        return this.pembeliRepository.save(pembeli);
    }
    findAll() {
        return this.pembeliRepository.find({ relations: { user: true } });
    }
    findOne(id) {
        return this.pembeliRepository.findOne({ where: { id }, relations: { user: true } });
    }
    async update(id, updatePembeliDto) {
        const pembeli = await this.pembeliRepository.findOne({ where: { id } });
        if (!pembeli)
            return null;
        Object.assign(pembeli, updatePembeliDto);
        if (updatePembeliDto.email || updatePembeliDto.name || updatePembeliDto.password) {
            const user = await this.userRepository.findOne({ where: { id: pembeli.userId } });
            if (user) {
                if (updatePembeliDto.email)
                    user.email = updatePembeliDto.email;
                if (updatePembeliDto.name)
                    user.name = updatePembeliDto.name;
                if (updatePembeliDto.password)
                    user.password = updatePembeliDto.password;
                await this.userRepository.save(user);
            }
        }
        return this.pembeliRepository.save(pembeli);
    }
    async remove(id) {
        const result = await this.pembeliRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }
};
PembeliService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Pembeli)),
    __param(1, InjectRepository(User)),
    __metadata("design:paramtypes", [Repository,
        Repository])
], PembeliService);
export { PembeliService };
//# sourceMappingURL=pembeli.service.js.map