import { User } from '../entities/user.entity.js';
export declare class Produk {
    id: string;
    namaProduk: string;
    hargaAwal: number;
    hargaAkhir: number;
    tanggalLe_lang: string;
    waktuSelesai: string;
    isLaku: boolean;
    createdAt: Date;
    petani: User;
    petaniId: string;
}
