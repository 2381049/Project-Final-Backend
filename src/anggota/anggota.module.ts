import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anggota } from './anggota.entity';
import { AnggotaService } from './anggota.service';
import { AnggotaController } from './anggota.controller';
import { AuthModule } from '../auth/auth.module'; // ⬅️ Tambahkan ini!

@Module({
  imports: [
    TypeOrmModule.forFeature([Anggota]),
    AuthModule, // ⬅️ Tambahkan ini juga
  ],
  controllers: [AnggotaController],
  providers: [AnggotaService],
})
export class AnggotaModule {}
