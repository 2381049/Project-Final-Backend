import { Injectable, NotFoundException } from '@nestjs/common'; // Import NotFoundException
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm'; // Import DeleteResult
import { Mentor } from './mentor.entity';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto'; // <-- Import UpdateMentorDto

@Injectable()
export class MentorService {
  constructor(
    @InjectRepository(Mentor)
    private mentorRepo: Repository<Mentor>,
  ) {}

  findAll(): Promise<Mentor[]> { // Tambahkan return type
    return this.mentorRepo.find();
  }

  async findOne(id: number): Promise<Mentor | null> { // Tambahkan return type Promise
    const mentor = await this.mentorRepo.findOneBy({ id });
    if (!mentor) {
      // Opsi: Aktifkan jika ingin error 404 jika tidak ditemukan
      // throw new NotFoundException(`Mentor with ID ${id} not found`); 
    }
    return mentor;
  }

  create(data: CreateMentorDto): Promise<Mentor> { // Tambahkan return type
    const mentor = this.mentorRepo.create(data);
    return this.mentorRepo.save(mentor);
  }

  // Ubah tipe parameter 'data' menjadi UpdateMentorDto
  async update(id: number, data: UpdateMentorDto): Promise<Mentor | null> { // Tambahkan return type
    // Cek dulu apakah data ada
    const mentorToUpdate = await this.findOne(id);
    if (!mentorToUpdate) {
      // Selalu lempar error jika data untuk diupdate tidak ada
      throw new NotFoundException(`Mentor with ID ${id} not found for update`); 
    }
    
    // Lakukan update (TypeORM update hanya mengupdate field yang ada di 'data')
    await this.mentorRepo.update(id, data);
    
    // Kembalikan data yang sudah diupdate dengan mengambil ulang dari DB
    return this.findOne(id); 
  }

  async remove(id: number): Promise<{ deleted: boolean; affected?: number }> { // Perjelas return type
    const result: DeleteResult = await this.mentorRepo.delete(id); // Explicitly type result
    
    if (result.affected === 0 || result.affected === null || result.affected === undefined) { // Check for 0, null, or undefined
      // Selalu lempar error jika data untuk dihapus tidak ada atau tidak terpengaruh
      throw new NotFoundException(`Mentor with ID ${id} not found or no rows affected`); 
    }

    // FIX: Use nullish coalescing (??) to convert null to undefined if necessary
    return { deleted: true, affected: result.affected ?? undefined }; 
  }
}
