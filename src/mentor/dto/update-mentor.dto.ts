import { PartialType } from '@nestjs/mapped-types';
// Pastikan path ini benar menunjuk ke file CreateMentorDto Anda
import { CreateMentorDto } from './create-mentor.dto'; 

/**
 * DTO (Data Transfer Object) untuk memperbarui data Mentor.
 * Mewarisi semua properti (nama, email, spesialisasi) dari CreateMentorDto
 * dan membuatnya menjadi opsional menggunakan PartialType.
 * Jika Anda menambahkan @ApiProperty di CreateMentorDto, itu juga akan diwarisi.
 */
export class UpdateMentorDto extends PartialType(CreateMentorDto) {
  // Tidak perlu menulis ulang properti di sini,
  // kecuali jika ada validasi khusus yang hanya berlaku untuk update.
}
