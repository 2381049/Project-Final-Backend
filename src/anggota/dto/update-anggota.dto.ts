import { PartialType } from '@nestjs/mapped-types';
// Pastikan path ini benar menunjuk ke file CreateAnggotaDto Anda
import { CreateAnggotaDto } from './create-anggota.dto'; 

/**
 * DTO (Data Transfer Object) untuk memperbarui data Anggota.
 * Mewarisi semua properti (nama, email, nomorTelepon) dari CreateAnggotaDto
 * dan membuatnya menjadi opsional menggunakan PartialType.
 * Ini juga mewarisi decorator @ApiProperty dari CreateAnggotaDto 
 * sehingga field tetap muncul di dokumentasi Swagger.
 */
export class UpdateAnggotaDto extends PartialType(CreateAnggotaDto) {
  // Tidak perlu menambahkan properti lagi di sini, 
  // kecuali jika Anda memiliki validasi atau properti yang SANGAT SPESIFIK 
  // hanya untuk proses update. 
  // Untuk kasus umum, baris di atas sudah cukup.
}