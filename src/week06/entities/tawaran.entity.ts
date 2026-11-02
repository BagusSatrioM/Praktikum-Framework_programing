import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../entities/user.entity.js';
import { Produk } from './produk.entity.js';

@Entity({ name: 'tawarans' })
export class Tawaran {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  jumlahTawaran: number;

  @Column({ default: false })
  isMenang: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'pembeliId' })
  pembeli: User;

  @Column()
  pembeliId: string;

  @ManyToOne(() => Produk, { nullable: false })
  @JoinColumn({ name: 'produkId' })
  produk: Produk;

  @Column()
  produkId: string;
}
