import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dtos/create-book.dto.js';

// @Controller('books') = prefix semua route dengan /books
// Jadi GET /books di sini = GET /books/books (gabung dengan app prefix)
// Caranya: routing ke /api/books (lihat app.module)

@Controller('books')
export class BooksController {
  // Constructor injection — container otomatis inject BooksService
  // private readonly = immutable, type-safe, best practice
  constructor(private readonly booksService: BooksService) {}

  // POST /books
  // @Body() extract JSON payload menjadi DTO
  // @HttpCode(201) override default 200 jadi 201 Created
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  // GET /books — return semua buku
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  // GET /books/:id
  // @Param('id') = extract path parameter (id dari URL)
  // PENTING: route params SELALU string dari URL
  // Kalau butuh number, parse manual atau pake pipe (week 03)
  @Get(':id')
  findOne(@Param('id') id: string) {
    const book = this.booksService.findOne(id);
    if (!book) {
      return { error: 'Book not found' };
    }
    return book;
  }

  // PUT /books/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<CreateBookDto>) {
    const book = this.booksService.update(id, updateData);
    if (!book) {
      return { error: 'Book not found' };
    }
    return book;
  }

  // DELETE /books/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.booksService.remove(id);
    if (!deleted) {
      return { error: 'Book not found' };
    }
    return { message: 'Book deleted' };
  }
}
