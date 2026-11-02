import { DataSource } from 'typeorm';
import { Tawaran } from '../entities/tawaran.entity.js';
import { Produk } from '../entities/produk.entity.js';
export declare class LelangService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    lelangProduk(produkId: string, pembeliId: string, jumlahTawaran: number): Promise<Tawaran>;
    selesaikanLelang(produkId: string): Promise<Produk>;
}
