import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anggota } from './anggota.entity';
import { CreateAnggotaDto } from './dto/create-anggota.dto';

@Injectable()
export class AnggotaService {
  constructor(
    @InjectRepository(Anggota)
    private anggotaRepo: Repository<Anggota>,
  ) {}

  findAll() {
    return this.anggotaRepo.find();
  }

  findOne(id: number) {
    return this.anggotaRepo.findOneBy({ id });
  }

  create(data: CreateAnggotaDto) {
    const anggota = this.anggotaRepo.create(data);
    return this.anggotaRepo.save(anggota);
  }

  async remove(id: number) {
    await this.anggotaRepo.delete(id);
    return { deleted: true };
  }

  async update(id: number, data: Partial<CreateAnggotaDto>) {
    await this.anggotaRepo.update(id, data);
    return this.findOne(id);
  }
}
