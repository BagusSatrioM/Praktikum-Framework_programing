var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetaniModule } from './petani/petani.module.js';
import { PembeliModule } from './pembeli/pembeli.module.js';
import { User } from './entities/user.entity.js';
import { Petani } from './entities/petani.entity.js';
import { Pembeli } from './entities/pembeli.entity.js';
let Week05Module = class Week05Module {
};
Week05Module = __decorate([
    Module({
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
], Week05Module);
export { Week05Module };
//# sourceMappingURL=week05.module.js.map