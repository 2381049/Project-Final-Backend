import { 
  Body, 
  Controller, 
  Post, 
  Get,          // <-- Tambahkan Get
  UseGuards,    // <-- Tambahkan UseGuards
  Request       // <-- Tambahkan Request
} from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard'; // <-- Pastikan path AuthGuard benar

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDto: LoginDTO) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDTO) {
    return this.authService.register(registerDto);
  }

  // --- TAMBAHKAN METHOD INI ---
  @UseGuards(AuthGuard) // Lindungi endpoint ini dengan AuthGuard
  @Get('profile')      // Definisikan endpoint GET /api/auth/profile
  getProfile(@Request() req) {
    // AuthGuard (jika menggunakan strategi JWT Passport) akan 
    // memvalidasi token dan menempelkan payload token ke req.user
    // Kembalikan data user yang relevan (misalnya id, username, email)
    // HINDARI mengembalikan password hash!
    
    // Contoh jika payload JWT Anda berisi 'sub' (user id) dan 'username':
    // return { userId: req.user.sub, username: req.user.username }; 

    // Jika guard Anda langsung menempelkan objek user yang relevan:
    return req.user; 
  }
  // ---------------------------
}