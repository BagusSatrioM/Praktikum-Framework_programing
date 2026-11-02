import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Petani } from '../entities/petani.entity.js';
import { CreatePetaniDto } from './dtos/create-petani.dto.js';
import { UpdatePetaniDto } from './dtos/update-petani.dto.js';
import { User } from '../entities/user.entity.js';

@Injectable()
export class PetaniService {
  constructor(
    @InjectRepository(Petani)
    private readonly petaniRepository: Repository<Petani>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPetaniDto: CreatePetaniDto) {
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

  findOne(id: string) {
    return this.petaniRepository.findOne({ where: { id }, relations: { user: true } });
  }

  async update(id: string, updatePetaniDto: UpdatePetaniDto) {
    const petani = await this.petaniRepository.findOne({ where: { id } });
    if (!petani) return null;

    Object.assign(petani, updatePetaniDto);

    if (updatePetaniDto.email || updatePetaniDto.name || updatePetaniDto.password) {
      const user = await this.userRepository.findOne({ where: { id: petani.userId } });
      if (user) {
        if (updatePetaniDto.email) user.email = updatePetaniDto.email;
        if (updatePetaniDto.name) user.name = updatePetaniDto.name;
        if (updatePetaniDto.password) user.password = updatePetaniDto.password;
        await this.userRepository.save(user);
      }
    }

    return this.petaniRepository.save(petani);
  }

  async remove(id: string) {
    const result = await this.petaniRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
