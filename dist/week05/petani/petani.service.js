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
import { Petani } from '../entities/petani.entity.js';
import { User } from '../entities/user.entity.js';
let PetaniService = class PetaniService {
    petaniRepository;
    userRepository;
    constructor(petaniRepository, userRepository) {
        this.petaniRepository = petaniRepository;
        this.userRepository = userRepository;
    }
    async create(createPetaniDto) {
        const user = this.userRepository.create({
            name: createPetaniDto.name,
            email: createPetaniDto.email,
            password: createPetaniDto.password,
            isActive: true,
        });
        const savedUser = await this.userRepository.save(user);
        const petani = this.petaniRepository.create({
            nomorInduk: createPetaniDto.nomorInduk,
            namaLengkap: createPetaniDto.namaLengkap,
            alamat: createPetaniDto.alamat,
            nomorHp: createPetaniDto.nomorHp,
            saldo: createPetaniDto.saldo,
            tanggalLahir: createPetaniDto.tanggalLahir,
            user: savedUser,
            userId: savedUser.id,
        });
        return this.petaniRepository.save(petani);
    }
    findAll() {
        return this.petaniRepository.find({ relations: { user: true } });
    }
    findOne(id) {
        return this.petaniRepository.findOne({ where: { id }, relations: { user: true } });
    }
    async update(id, updatePetaniDto) {
        const petani = await this.petaniRepository.findOne({ where: { id } });
        if (!petani)
            return null;
        Object.assign(petani, updatePetaniDto);
        if (updatePetaniDto.email || updatePetaniDto.name || updatePetaniDto.password) {
            const user = await this.userRepository.findOne({ where: { id: petani.userId } });
            if (user) {
                if (updatePetaniDto.email)
                    user.email = updatePetaniDto.email;
                if (updatePetaniDto.name)
                    user.name = updatePetaniDto.name;
                if (updatePetaniDto.password)
                    user.password = updatePetaniDto.password;
                await this.userRepository.save(user);
            }
        }
        return this.petaniRepository.save(petani);
    }
    async remove(id) {
        const result = await this.petaniRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }
};
PetaniService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Petani)),
    __param(1, InjectRepository(User)),
    __metadata("design:paramtypes", [Repository,
        Repository])
], PetaniService);
export { PetaniService };
//# sourceMappingURL=petani.service.js.map