import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetaniModule } from './petani/petani.module.js';
import { PembeliModule } from './pembeli/pembeli.module.js';
import { User } from './entities/user.entity.js';
import { Petani } from './entities/petani.entity.js';
import { Pembeli } from './entities/pembeli.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'lelang_panen',
      entities: [User, Petani, Pembeli],
      synchronize: true,
      logging: false,
    }),
    PetaniModule,
    PembeliModule,
  ],
})
export class Week05Module {}
