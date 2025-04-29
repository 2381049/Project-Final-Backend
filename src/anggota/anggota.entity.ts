import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Anggota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  email: string;

  @Column({ name: 'nomor_telepon' }) // <-- Tambahkan ini untuk mapping eksplisit
  nomorTelepon: string;
}