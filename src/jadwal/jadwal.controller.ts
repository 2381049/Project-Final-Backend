import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  // Put, // Hapus atau komentari Put
  Patch, // <-- Gunakan Patch
  ParseIntPipe, // <-- Import ParseIntPipe
  UseGuards,
} from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto'; // <-- Import UpdateJadwalDto
import { AuthGuard } from '../auth/auth.guard';
import { ApiProperty, ApiTags } from '@nestjs/swagger'; // Import ApiTags jika ingin grouping di Swagger

@ApiTags('Jadwal') // <-- (Opsional) Grouping endpoint di Swagger
@UseGuards(AuthGuard)
@Controller('jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Get()
  findAll() {
    return this.jadwalService.findAll();
  }

  @Get(':id')
  // Gunakan ParseIntPipe untuk konsistensi dan validasi
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jadwalService.findOne(id);
  }

  @Post()
  // Ganti nama variabel agar lebih jelas
  create(@Body() createJadwalDto: CreateJadwalDto) {
    return this.jadwalService.create(createJadwalDto);
  }

  /* Komentari atau Hapus method @Put jika diganti @Patch
  @Put(':id') 
  update(@Param('id') id: string, @Body() dto: Partial<CreateJadwalDto>) { 
    return this.jadwalService.update(+id, dto); 
  }
  */

  @Patch(':id') // <-- Gunakan PATCH untuk partial update
  update(
    @Param('id', ParseIntPipe) id: number, // <-- Gunakan ParseIntPipe
    @Body() updateJadwalDto: UpdateJadwalDto, // <-- Gunakan UpdateJadwalDto di sini
  ) {
    // Panggil service dengan DTO yang benar
    return this.jadwalService.update(id, updateJadwalDto); 
  }

  @Delete(':id')
  // Gunakan ParseIntPipe untuk konsistensi dan validasi
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jadwalService.remove(id);
  }
}