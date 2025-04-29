import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // <-- Impor ApiProperty

export class CreateAnggotaDto {
  @ApiProperty({ description: 'Nama lengkap anggota', example: 'Budi Santoso' }) // <-- Tambahkan ini
  @IsNotEmpty()
  @IsString()
  nama: string;

  @ApiProperty({ description: 'Alamat email unik anggota', example: 'budi.santoso@example.com' }) // <-- Tambahkan ini
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Nomor telepon aktif anggota', example: '081234567890' }) // <-- Tambahkan ini
  @IsNotEmpty()
  @IsString()
  nomorTelepon: string;
}