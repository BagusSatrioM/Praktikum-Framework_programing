import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner, DataSource } from 'typeorm';
import { Tawaran } from '../entities/tawaran.entity.js';
import { Produk } from '../entities/produk.entity.js';
import { Pembeli } from '../entities/pembeli.entity.js';

@Injectable()
export class LelangService {
  constructor(private readonly dataSource: DataSource) {}

  async lelangProduk(produkId: string, pembeliId: string, jumlahTawaran: number): Promise<Tawaran> {
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
        pembeli: pembeli as Pembeli,
        produk: produk as Produk,
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
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async selesaikanLelang(produkId: string): Promise<Produk> {
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
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
