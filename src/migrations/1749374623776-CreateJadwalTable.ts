import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJadwalTable1682639999999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE jadwal (
        id SERIAL PRIMARY KEY,
        nama_kegiatan VARCHAR(255) NOT NULL,
        tanggal TIMESTAMP WITHOUT TIME ZONE NOT NULL,
        lokasi VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE jadwal;`);
  }
}
