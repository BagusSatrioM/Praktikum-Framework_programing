// create-book.dto.ts
// DTO = Data Transfer Object
// Mengapa class bukan interface? class-validator butuh class untuk decorator reflection

export class CreateBookDto {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
}
