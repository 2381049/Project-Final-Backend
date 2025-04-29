import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jadwal } from './jadwal.entity';
import { CreateJadwalDto } from './dto/create-jadwal.dto';

@Injectable()
export class JadwalService {
  constructor(
    @InjectRepository(Jadwal)
    private jadwalRepo: Repository<Jadwal>,
  ) {}

  findAll() {
    return this.jadwalRepo.find();
  }

  findOne(id: number) {
    return this.jadwalRepo.findOneBy({ id });
  }

  create(data: CreateJadwalDto) {
    const jadwal = this.jadwalRepo.create(data);
    return this.jadwalRepo.save(jadwal);
  }

  async remove(id: number) {
    await this.jadwalRepo.delete(id);
    return { deleted: true };
  }

  async update(id: number, data: Partial<CreateJadwalDto>) {
    await this.jadwalRepo.update(id, data);
    return this.findOne(id);
  }
}
