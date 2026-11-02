import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LelangModule } from './lelang/lelang.module.js';
import { User } from './entities/user.entity.js';
import { Petani } from './entities/petani.entity.js';
import { Pembeli } from './entities/pembeli.entity.js';
import { Produk } from './entities/produk.entity.js';
import { Tawaran } from './entities/tawaran.entity.js';
import { Investor } from './entities/investor.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'lelang_panen',
      entities: [User, Petani, Pembeli, Produk, Tawaran, Investor],
      synchronize: false,
      logging: false,
      migrations: [__dirname + '/migrations/*.js'],
    }),
    LelangModule,
  ],
})
export class Week06Module {}
