import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LelangController } from './lelang.controller.js';
import { LelangService } from '../services/lelang.service.js';
import { Tawaran } from '../entities/tawaran.entity.js';
import { Produk } from '../entities/produk.entity.js';
import { Pembeli } from '../entities/pembeli.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Tawaran, Produk, Pembeli])],
  controllers: [LelangController],
  providers: [LelangService],
  exports: [LelangService],
})
export class LelangModule {}
