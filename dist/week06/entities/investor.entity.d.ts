import { User } from '../entities/user.entity.js';
export declare class Investor {
    id: string;
    nomorInduk: string;
    namaLengkap: string;
    alamat: string;
    nomorHp: string;
    saldo: number;
    user: User;
    userId: string;
}
