import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Get()
  findAll() {
    return this.jadwalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jadwalService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateJadwalDto) {
    return this.jadwalService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateJadwalDto>) {
    return this.jadwalService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jadwalService.remove(+id);
  }
}
