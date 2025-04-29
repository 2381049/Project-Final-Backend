import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mentor } from './mentor.entity';
import { CreateMentorDto } from './dto/create-mentor.dto';

@Injectable()
export class MentorService {
  constructor(
    @InjectRepository(Mentor)
    private mentorRepo: Repository<Mentor>,
  ) {}

  findAll() {
    return this.mentorRepo.find();
  }

  findOne(id: number) {
    return this.mentorRepo.findOneBy({ id });
  }

  create(data: CreateMentorDto) {
    const mentor = this.mentorRepo.create(data);
    return this.mentorRepo.save(mentor);
  }

  async update(id: number, data: Partial<CreateMentorDto>) {
    await this.mentorRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.mentorRepo.delete(id);
    return { deleted: true };
  }
}
