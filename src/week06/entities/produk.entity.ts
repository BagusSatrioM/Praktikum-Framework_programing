import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../entities/user.entity.js';

@Entity({ name: 'produks' })
export class Produk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  namaProduk: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  hargaAwal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  hargaAkhir: number;

  @Column({ type: 'date' })
  tanggalLe_lang: string;

  @Column({ type: 'time', nullable: true })
  waktuSelesai: string;

  @Column({ default: false })
  isLaku: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'petaniId' })
  petani: User;

  @Column()
  petaniId: string;
}
