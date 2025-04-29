import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jadwal } from './jadwal.entity';
import { JadwalService } from './jadwal.service';
import { JadwalController } from './jadwal.controller';
import { AuthModule } from '../auth/auth.module'; // ⬅️ Tambahkan ini

@Module({
  imports: [
    TypeOrmModule.forFeature([Jadwal]),
    AuthModule, // ⬅️ Tambahkan ini
  ],
  controllers: [JadwalController],
  providers: [JadwalService],
})
export class JadwalModule {}
