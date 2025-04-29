import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, // <-- Import jika perlu
  UpdateDateColumn  // <-- Import jika perlu
} from 'typeorm'; 

@Entity() // Anda bisa spesifikasikan nama tabel jika berbeda: @Entity('mentors')
export class Mentor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // Asumsi nama kolom 'nama' sudah benar
  nama: string;

  @Column() // Asumsi nama kolom 'email' sudah benar
  email: string;

  // Contoh jika nama kolom di DB adalah 'spesialisasi' (snake_case)
  @Column({ name: 'spesialisasi' }) // <-- Sesuaikan 'name' jika perlu
  spesialisasi: string;

  // Contoh jika ada kolom timestamp di DB
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' }) // <-- Sesuaikan 'name' jika perlu
  createdAt: Date; 

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' }) // <-- Sesuaikan 'name' jika perlu
  updatedAt: Date;
}
