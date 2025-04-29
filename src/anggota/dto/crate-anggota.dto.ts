import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateAnggotaDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  nomorTelepon: string;
}
