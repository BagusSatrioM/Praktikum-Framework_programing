import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetaniController } from './petani.controller.js';
import { PetaniService } from './petani.service.js';
import { Petani } from '../entities/petani.entity.js';
import { User } from '../entities/user.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Petani, User])],
  controllers: [PetaniController],
  providers: [PetaniService],
  exports: [PetaniService],
})
export class PetaniModule {}
