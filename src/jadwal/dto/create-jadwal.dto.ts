import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateJadwalDto {
  @IsNotEmpty()
  @IsString()
  namaKegiatan: string;

  @IsNotEmpty()
  @IsDateString()
  tanggal: string; // pakai string supaya dari client bisa langsung ISO date

  @IsNotEmpty()
  @IsString()
  lokasi: string;
}
