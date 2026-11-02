import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pembeli } from '../entities/pembeli.entity.js';
import { CreatePembeliDto } from './dtos/create-pembeli.dto.js';
import { UpdatePembeliDto } from './dtos/update-pembeli.dto.js';
import { User } from '../entities/user.entity.js';

@Injectable()
export class PembeliService {
  constructor(
    @InjectRepository(Pembeli)
    private readonly pembeliRepository: Repository<Pembeli>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPembeliDto: CreatePembeliDto) {
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

  findOne(id: string) {
    return this.pembeliRepository.findOne({ where: { id }, relations: { user: true } });
  }

  async update(id: string, updatePembeliDto: UpdatePembeliDto) {
    const pembeli = await this.pembeliRepository.findOne({ where: { id } });
    if (!pembeli) return null;

    Object.assign(pembeli, updatePembeliDto);

    if (updatePembeliDto.email || updatePembeliDto.name || updatePembeliDto.password) {
      const user = await this.userRepository.findOne({ where: { id: pembeli.userId } });
      if (user) {
        if (updatePembeliDto.email) user.email = updatePembeliDto.email;
        if (updatePembeliDto.name) user.name = updatePembeliDto.name;
        if (updatePembeliDto.password) user.password = updatePembeliDto.password;
        await this.userRepository.save(user);
      }
    }

    return this.pembeliRepository.save(pembeli);
  }

  async remove(id: string) {
    const result = await this.pembeliRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
