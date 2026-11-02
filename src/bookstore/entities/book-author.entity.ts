import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Book } from './book.entity.js';
import { Author } from './author.entity.js';

@Entity('book_authors')
export class BookAuthor {
  @PrimaryColumn({ type: 'uuid' })
  book_id: string;

  @PrimaryColumn({ type: 'uuid' })
  author_id: string;

  @ManyToOne(() => Book, (book) => book.bookAuthors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => Author, (author) => author.bookAuthors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'author_id' })
  author: Author;
}
