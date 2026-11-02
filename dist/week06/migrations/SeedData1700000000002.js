export class SeedData1700000000002 {
    async up(queryRunner) {
        const passwordHash = '$2b$10$dummyHashForTestingPurposesOnly';
        await queryRunner.query(`INSERT INTO users (id, name, email, password, isActive, createdAt, updatedAt) VALUES
      ('user-1', 'Petani 1', 'petani1@example.com', '${passwordHash}', true, NOW(), NOW()),
      ('user-2', 'Petani 2', 'petani2@example.com', '${passwordHash}', true, NOW(), NOW()),
      ('user-3', 'Pembeli 1', 'pembeli1@example.com', '${passwordHash}', true, NOW(), NOW()),
      ('user-4', 'Investor 1', 'investor1@example.com', '${passwordHash}', true, NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO petanis (id, nomorInduk, namaLengkap, alamat, nomorHp, saldo, tanggalLahir, userId) VALUES
      ('petani-1', 'PET001', 'Petani Satu', 'Jl. Petani 1', '081234567890', 1000000, '1990-01-15', 'user-1'),
      ('petani-2', 'PET002', 'Petani Dua', 'Jl. Petani 2', '081234567891', 2000000, '1992-03-20', 'user-2')`);
        await queryRunner.query(`INSERT INTO pembelis (id, nomorInduk, namaLengkap, alamat, nomorHp, saldo, userId) VALUES
      ('pembeli-1', 'PEM001', 'Pembeli Satu', 'Jl. Pembeli 1', '082345678901', 5000000, 'user-3')`);
        await queryRunner.query(`INSERT INTO investors (id, nomorInduk, namaLengkap, alamat, nomorHp, saldo, userId) VALUES
      ('investor-1', 'INV001', 'Investor Satu', 'Jl. Investor 1', '083456789012', 10000000, 'user-4')`);
        await queryRunner.query(`INSERT INTO produks (id, namaProduk, hargaAwal, tanggalLelang, petaniId) VALUES
      ('produk-1', 'Padi lokal', 50000, '2024-01-20', 'petani-1'),
      ('produk-2', 'Beras premium', 100000, '2024-01-25', 'petani-2')`);
        await queryRunner.query(`INSERT INTO tawarans (id, jumlahTawaran, isMenang, pembeliId, produkId) VALUES
      ('tawaran-1', 55000, false, 'pembeli-1', 'produk-1')`);
    }
    async down(queryRunner) {
        await queryRunner.query('DELETE FROM tawarans');
        await queryRunner.query('DELETE FROM produks');
        await queryRunner.query('DELETE FROM investors');
        await queryRunner.query('DELETE FROM pembelis');
        await queryRunner.query('DELETE FROM petanis');
        await queryRunner.query('DELETE FROM users');
    }
}
//# sourceMappingURL=SeedData1700000000002.js.map