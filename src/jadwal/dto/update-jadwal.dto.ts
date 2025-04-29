import { PartialType } from '@nestjs/mapped-types';
// Pastikan path ini benar menunjuk ke file CreateJadwalDto Anda
import { CreateJadwalDto } from './create-jadwal.dto'; 

/**
 * DTO (Data Transfer Object) untuk memperbarui data Jadwal.
 * Mewarisi semua properti (namaKegiatan, tanggal, lokasi) dari CreateJadwalDto
 * dan membuatnya menjadi opsional menggunakan PartialType.
 * Jika Anda menambahkan @ApiProperty di CreateJadwalDto, itu juga akan diwarisi.
 */
export class UpdateJadwalDto extends PartialType(CreateJadwalDto) {
  // Tidak perlu menulis ulang properti di sini,
  // kecuali jika ada validasi khusus yang hanya berlaku untuk update.
  // PartialType sudah membuat semua properti dari CreateJadwalDto menjadi opsional.
}