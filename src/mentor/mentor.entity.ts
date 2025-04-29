import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mentor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  email: string;

  @Column()
  spesialisasi: string;
}
