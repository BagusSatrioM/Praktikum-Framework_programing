import { User } from '../entities/user.entity.js';
import { Produk } from './produk.entity.js';
export declare class Petani {
    id: string;
    nomorInduk: string;
    namaLengkap: string;
    alamat: string;
    nomorHp: string;
    saldo: number;
    tanggalLahir: string;
    user: User;
    userId: string;
    produks: Produk[];
}
