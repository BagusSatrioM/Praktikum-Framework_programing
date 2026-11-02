import { LelangService } from '../services/lelang.service.js';
export declare class LelangController {
    private readonly lelangService;
    constructor(lelangService: LelangService);
    tawar(produkId: string, pembeliId: string, jumlah: number): Promise<import("../entities/tawaran.entity.js").Tawaran>;
    selesaikan(produkId: string): Promise<import("../entities/produk.entity.js").Produk>;
}
