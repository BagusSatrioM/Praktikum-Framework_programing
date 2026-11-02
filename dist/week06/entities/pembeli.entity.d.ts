import { User } from '../entities/user.entity.js';
import { Tawaran } from './tawaran.entity.js';
export declare class Pembeli {
    id: string;
    nomorInduk: string;
    namaLengkap: string;
    alamat: string;
    nomorHp: string;
    saldo: number;
    user: User;
    userId: string;
    tawarans: Tawaran[];
}
