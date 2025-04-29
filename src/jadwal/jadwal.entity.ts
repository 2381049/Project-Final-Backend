import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Jadwal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaKegiatan: string;

  @Column()
  tanggal: Date;

  @Column()
  lokasi: string;
}
