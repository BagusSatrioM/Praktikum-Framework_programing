// book.entity.ts
// Entity = representasi data struktur buku di memory
// BUKAN database entity (belum ada TypeORM sampai week 5)
// Ini cuma interface + class untuk type safety

export class Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  createdAt: Date;

  constructor(partial: Partial<Book>) {
    Object.assign(this, partial);
  }
}
