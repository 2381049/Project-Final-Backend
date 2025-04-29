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
  import { MentorService } from './mentor.service';
  import { CreateMentorDto } from './dto/create-mentor.dto';
  import { AuthGuard } from '../auth/auth.guard';
  
  @UseGuards(AuthGuard)
  @Controller('mentor')
  export class MentorController {
    constructor(private readonly mentorService: MentorService) {}
  
    @Get()
    findAll() {
      return this.mentorService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.mentorService.findOne(+id);
    }
  
    @Post()
    create(@Body() dto: CreateMentorDto) {
      return this.mentorService.create(dto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: Partial<CreateMentorDto>) {
      return this.mentorService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.mentorService.remove(+id);
    }
  }
  