import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMentorTable1682649999999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE mentor (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        spesialisasi VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE mentor;`);
  }
}
