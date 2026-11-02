import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../entities/user.entity.js';

@Entity({ name: 'investors' })
export class Investor {
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

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  saldo: number;

  @OneToOne(() => User, (user: User) => user.id)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;
}
