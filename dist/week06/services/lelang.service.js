var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Tawaran } from '../entities/tawaran.entity.js';
import { Produk } from '../entities/produk.entity.js';
import { Pembeli } from '../entities/pembeli.entity.js';
let LelangService = class LelangService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async lelangProduk(produkId, pembeliId, jumlahTawaran) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const produkRepository = queryRunner.manager.getRepository(Produk);
            const pembeliRepository = queryRunner.manager.getRepository(Pembeli);
            const tawaranRepository = queryRunner.manager.getRepository(Tawaran);
            const produk = await produkRepository.findOne({ where: { id: produkId } });
            if (!produk) {
                throw new Error('Produk tidak ditemukan');
            }
            if (produk.isLaku) {
                throw new Error('Produk sudah terjual');
            }
            const pembeli = await pembeliRepository.findOne({ where: { id: pembeliId } });
            if (!pembeli) {
                throw new Error('Pembeli tidak ditemukan');
            }
            if (pembeli.saldo < jumlahTawaran) {
                throw new Error('Saldo tidak cukup');
            }
            const tawaranBaru = tawaranRepository.create({
                jumlahTawaran,
                pembeli: pembeli,
                produk: produk,
                isMenang: false,
            });
            await tawaranRepository.save(tawaranBaru);
            const tawaranTertinggi = await tawaranRepository.findOne({
                where: { produk: { id: produkId } },
                order: { jumlahTawaran: 'DESC' },
            });
            if (tawaranTertinggi && tawaranTertinggi.id === tawaranBaru.id) {
                tawaranTertinggi.isMenang = true;
                await tawaranRepository.save(tawaranTertinggi);
                const tawaranLain = await tawaranRepository.find({
                    where: { produk: { id: produkId } },
                });
                for (const t of tawaranLain) {
                    t.isMenang = false;
                    await tawaranRepository.save(t);
                }
            }
            await queryRunner.commitTransaction();
            return tawaranBaru;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async selesaikanLelang(produkId) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const produkRepository = queryRunner.manager.getRepository(Produk);
            const tawaranRepository = queryRunner.manager.getRepository(Tawaran);
            const pembeliRepository = queryRunner.manager.getRepository(Pembeli);
            const produk = await produkRepository.findOne({ where: { id: produkId } });
            if (!produk) {
                throw new Error('Produk tidak ditemukan');
            }
            const tawaranMenang = await tawaranRepository.findOne({
                where: { produk: { id: produkId }, isMenang: true },
                relations: { pembeli: true },
            });
            if (!tawaranMenang) {
                throw new Error('Belum ada tawaran menang');
            }
            produk.hargaAkhir = tawaranMenang.jumlahTawaran;
            produk.isLaku = true;
            await produkRepository.save(produk);
            const pembeli = await pembeliRepository.findOne({ where: { id: tawaranMenang.pembeli.id } });
            if (pembeli) {
                pembeli.saldo -= tawaranMenang.jumlahTawaran;
                await pembeliRepository.save(pembeli);
            }
            await queryRunner.commitTransaction();
            return produk;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
};
LelangService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DataSource])
], LelangService);
export { LelangService };
//# sourceMappingURL=lelang.service.js.map