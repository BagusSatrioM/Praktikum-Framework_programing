import { User } from '../entities/user.entity.js';
import { Produk } from './produk.entity.js';
export declare class Tawaran {
    id: string;
    jumlahTawaran: number;
    isMenang: boolean;
    createdAt: Date;
    pembeli: User;
    pembeliId: string;
    produk: Produk;
    produkId: string;
}
