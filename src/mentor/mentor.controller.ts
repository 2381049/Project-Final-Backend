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
import { MentorService } from './mentor.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto'; // <-- Import UpdateMentorDto
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger'; // Import ApiTags jika ingin grouping di Swagger

@ApiTags('Mentor') // <-- (Opsional) Grouping endpoint di Swagger
@UseGuards(AuthGuard)
@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Get()
  findAll() {
    return this.mentorService.findAll();
  }

  @Get(':id')
  // Gunakan ParseIntPipe untuk konsistensi dan validasi
  findOne(@Param('id', ParseIntPipe) id: number) { 
    return this.mentorService.findOne(id);
  }

  @Post()
  // Ganti nama variabel agar lebih jelas
  create(@Body() createMentorDto: CreateMentorDto) { 
    return this.mentorService.create(createMentorDto);
  }

  /* Komentari atau Hapus method @Put jika diganti @Patch
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateMentorDto>) {
    return this.mentorService.update(+id, dto);
  }
  */

  @Patch(':id') // <-- Gunakan PATCH untuk partial update
  update(
    @Param('id', ParseIntPipe) id: number, // <-- Gunakan ParseIntPipe
    @Body() updateMentorDto: UpdateMentorDto, // <-- Gunakan UpdateMentorDto di sini
  ) {
    // Panggil service dengan DTO yang benar
    return this.mentorService.update(id, updateMentorDto); 
  }

  @Delete(':id')
  // Gunakan ParseIntPipe untuk konsistensi dan validasi
  remove(@Param('id', ParseIntPipe) id: number) { 
    return this.mentorService.remove(id);
  }
}
