import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './bookstore/entities/index.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_bookstore',
      entities: Object.values(entities),
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
