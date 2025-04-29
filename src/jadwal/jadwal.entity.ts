// src/jadwal/jadwal.entity.ts
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, // <-- Import decorator ini
  UpdateDateColumn  // <-- Import decorator ini
} from 'typeorm'; 

@Entity() // Anda bisa spesifikasikan nama tabel jika berbeda: @Entity('nama_tabel_jadwal')
export class Jadwal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nama_kegiatan' }) // <-- FIX: Tambahkan mapping nama kolom eksplisit
  namaKegiatan: string; 

  @Column() // Tipe Date sudah cocok dengan timestamp di DB
  tanggal: Date;

  @Column()
  lokasi: string;

  // TAMBAHAN: Definisikan kolom timestamp agar sesuai dengan DB dan diisi otomatis
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' }) 
  createdAt: Date; // Nama properti bisa bebas, tapi createdAt/updatedAt umum dipakai

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}