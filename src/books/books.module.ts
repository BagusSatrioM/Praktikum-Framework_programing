import { Module } from '@nestjs/common';
import { BooksController } from './books.controller.js';
import { BooksService } from './books.service.js';

// Module = organizational unit
// imports = dependencies dari module lain
// controllers = HTTP handlers
// providers = DI-managed classes (@Injectable)
// exports = public API (apa yang bisa diinject modul lain)

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
