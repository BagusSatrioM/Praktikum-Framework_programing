import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module.js';

// AppModule = root module
// imports = all feature modules registered di sini
// Controllers = optional di root, biasanya di feature modules
// Providers = sedikit (global config, logger)

@Module({
  imports: [BooksModule],
})
export class AppModule {}
