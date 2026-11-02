import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class AddInvestorTable1700000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'investors',
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
            precision: 12,
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

    await queryRunner.createForeignKey(
      'investors',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('investors');
  }
}
