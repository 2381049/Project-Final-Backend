import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateMentorDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  spesialisasi: string;
}
