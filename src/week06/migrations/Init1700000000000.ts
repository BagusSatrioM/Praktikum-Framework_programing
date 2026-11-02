import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Init1700000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'NOW()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'NOW()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'petanis',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nomorInduk',
            type: 'varchar',
            length: '50',
            isUnique: true,
          },
          {
            name: 'namaLengkap',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'alamat',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'nomorHp',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'saldo',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'tanggalLahir',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'userId',
            type: 'uuid',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'pembelis',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nomorInduk',
            type: 'varchar',
            length: '50',
            isUnique: true,
          },
          {
            name: 'namaLengkap',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'alamat',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'nomorHp',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'saldo',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'userId',
            type: 'uuid',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'produks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'namaProduk',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'hargaAwal',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'hargaAkhir',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'tanggalLelang',
            type: 'date',
          },
          {
            name: 'waktuSelesai',
            type: 'time',
            isNullable: true,
          },
          {
            name: 'isLaku',
            type: 'boolean',
            default: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'NOW()',
          },
          {
            name: 'petaniId',
            type: 'uuid',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'tawarans',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'jumlahTawaran',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'isMenang',
            type: 'boolean',
            default: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'NOW()',
          },
          {
            name: 'pembeliId',
            type: 'uuid',
          },
          {
            name: 'produkId',
            type: 'uuid',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'petanis',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );

    await queryRunner.createForeignKey(
      'pembelis',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );

    await queryRunner.createForeignKey(
      'produks',
      new TableForeignKey({
        columnNames: ['petaniId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );

    await queryRunner.createForeignKey(
      'tawarans',
      new TableForeignKey({
        columnNames: ['pembeliId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );

    await queryRunner.createForeignKey(
      'tawarans',
      new TableForeignKey({
        columnNames: ['produkId'],
        referencedTableName: 'produks',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tawarans');
    await queryRunner.dropTable('produks');
    await queryRunner.dropTable('pembelis');
    await queryRunner.dropTable('petanis');
    await queryRunner.dropTable('users');
  }
}
