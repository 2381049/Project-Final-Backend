import { Injectable, NotFoundException } from '@nestjs/common'; // Import NotFoundException jika diperlukan
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jadwal } from './jadwal.entity';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto'; // <-- Import UpdateJadwalDto

@Injectable()
export class JadwalService {
  constructor(
    @InjectRepository(Jadwal)
    private jadwalRepo: Repository<Jadwal>,
  ) {}

  findAll() {
    return this.jadwalRepo.find();
  }

  async findOne(id: number): Promise<Jadwal | null> { // Tambahkan return type Promise
    const jadwal = await this.jadwalRepo.findOneBy({ id });
    if (!jadwal) {
        // Opsi: throw NotFoundException jika ingin error 404 jika tidak ketemu
        // throw new NotFoundException(`Jadwal with ID ${id} not found`); 
    }
    return jadwal;
  }

  create(data: CreateJadwalDto) {
    const jadwal = this.jadwalRepo.create(data);
    return this.jadwalRepo.save(jadwal);
  }

  async remove(id: number) {
    const result = await this.jadwalRepo.delete(id);
    if (result.affected === 0) {
        // Opsi: throw NotFoundException jika tidak ada yang terhapus
        // throw new NotFoundException(`Jadwal with ID ${id} not found for deletion`);
    }
    return { deleted: true, affected: result.affected }; // Beri info tambahan
  }

  // Ubah tipe parameter 'data' menjadi UpdateJadwalDto
  async update(id: number, data: UpdateJadwalDto): Promise<Jadwal | null> { 
    // Opsi: Cek dulu apakah data ada
    const jadwalToUpdate = await this.findOne(id);
    if (!jadwalToUpdate) {
      throw new NotFoundException(`Jadwal with ID ${id} not found for update`);
    }
    
    // Lakukan update (TypeORM update hanya mengupdate field yang ada di 'data')
    await this.jadwalRepo.update(id, data);
    
    // Kembalikan data yang sudah diupdate dengan mengambil ulang dari DB
    // Ini memastikan tipe data (seperti 'tanggal' menjadi Date) sesuai dengan Entity
    return this.findOne(id); 
  }
}