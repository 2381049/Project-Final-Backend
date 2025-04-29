import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { AnggotaService } from './anggota.service';
  import { CreateAnggotaDto } from './dto/crate-anggota.dto';
  import { AuthGuard } from '../auth/auth.guard';
  
  @UseGuards(AuthGuard)
  @Controller('anggota')
  export class AnggotaController {
    constructor(private readonly anggotaService: AnggotaService) {}
  
    @Get()
    findAll() {
      return this.anggotaService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.anggotaService.findOne(+id);
    }
  
    @Post()
    create(@Body() dto: CreateAnggotaDto) {
      return this.anggotaService.create(dto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: Partial<CreateAnggotaDto>) {
      return this.anggotaService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.anggotaService.remove(+id);
    }
  }
  