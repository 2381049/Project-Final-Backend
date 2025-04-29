import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; 

// TAMBAHKAN 'export' DI SINI
export class CreateMentorDto { 
  @ApiProperty({ description: 'Nama lengkap mentor', example: 'Dr. Jane Doe' }) 
  @IsNotEmpty()
  @IsString()
  nama: string;

  @ApiProperty({ description: 'Alamat email unik mentor', example: 'jane.doe@example.com' }) 
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Bidang keahlian atau spesialisasi mentor', example: 'Machine Learning' }) 
  @IsNotEmpty()
  @IsString()
  spesialisasi: string;
}
