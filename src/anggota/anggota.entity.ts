import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Anggota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  email: string;

  @Column()
  nomorTelepon: string;
}
