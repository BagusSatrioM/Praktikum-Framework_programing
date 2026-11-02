var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LelangModule } from './lelang/lelang.module.js';
import { User } from './entities/user.entity.js';
import { Petani } from './entities/petani.entity.js';
import { Pembeli } from './entities/pembeli.entity.js';
import { Produk } from './entities/produk.entity.js';
import { Tawaran } from './entities/tawaran.entity.js';
import { Investor } from './entities/investor.entity.js';
let Week06Module = class Week06Module {
};
Week06Module = __decorate([
    Module({
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
], Week06Module);
export { Week06Module };
//# sourceMappingURL=week06.module.js.map