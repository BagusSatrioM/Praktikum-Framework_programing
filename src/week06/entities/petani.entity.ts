import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../entities/user.entity.js';
import { Produk } from './produk.entity.js';

@Entity({ name: 'petanis' })
export class Petani {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, unique: true })
  nomorInduk: string;

  @Column({ length: 100 })
  namaLengkap: string;

  @Column({ length: 255 })
  alamat: string;

  @Column({ length: 15 })
  nomorHp: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  saldo: number;

  @Column({ type: 'date', nullable: true })
  tanggalLahir: string;

  @OneToOne(() => User, (user: User) => user.id)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;

  @OneToMany(() => Produk, (produk) => produk.petani)
  produks: Produk[];
}
