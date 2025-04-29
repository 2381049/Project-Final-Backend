import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  // Put, // Ganti atau hapus Put jika hanya pakai Patch
  Patch, // <-- Gunakan Patch
  ParseIntPipe, // <-- Tambahkan ParseIntPipe untuk konversi id
  UseGuards,
} from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto'; // <-- Import DTO Update
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('anggota')
export class AnggotaController {
  constructor(private readonly anggotaService: AnggotaService) {}

  @Get()
  findAll() {
    return this.anggotaService.findAll();
  }

  // Sebaiknya gunakan ParseIntPipe untuk konsistensi dengan service
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { // <-- Ubah ke number + ParseIntPipe
    return this.anggotaService.findOne(id);
  }

  @Post()
  create(@Body() createAnggotaDto: CreateAnggotaDto) { // <-- Ganti nama variabel agar lebih jelas
    return this.anggotaService.create(createAnggotaDto);
  }

  // @Put(':id') // <-- Hapus atau komentari ini jika diganti Patch
  // update(@Param('id') id: string, @Body() dto: Partial<CreateAnggotaDto>) {
  //   return this.anggotaService.update(+id, dto);
  // }

  @Patch(':id') // <-- Gunakan PATCH
  update(
    @Param('id', ParseIntPipe) id: number, // <-- Ubah ke number + ParseIntPipe
    @Body() updateAnggotaDto: UpdateAnggotaDto, // <-- Gunakan UpdateAnggotaDto di sini
  ) {
    return this.anggotaService.update(id, updateAnggotaDto); // <-- Kirim DTO yang sesuai
  }

  // Sebaiknya gunakan ParseIntPipe untuk konsistensi dengan service
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { // <-- Ubah ke number + ParseIntPipe
    return this.anggotaService.remove(id);
  }
}