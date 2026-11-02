import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PembeliController } from './pembeli.controller.js';
import { PembeliService } from './pembeli.service.js';
import { Pembeli } from '../entities/pembeli.entity.js';
import { User } from '../entities/user.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Pembeli, User])],
  controllers: [PembeliController],
  providers: [PembeliService],
  exports: [PembeliService],
})
export class PembeliModule {}
