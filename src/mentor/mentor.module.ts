import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentor } from './mentor.entity';
import { MentorService } from './mentor.service';
import { MentorController } from './mentor.controller';
import { AuthModule } from '../auth/auth.module'; // ⬅️ Tambahkan ini

@Module({
  imports: [
    TypeOrmModule.forFeature([Mentor]),
    AuthModule, // ⬅️ Tambahkan ini
  ],
  controllers: [MentorController],
  providers: [MentorService],
})
export class MentorModule {}
