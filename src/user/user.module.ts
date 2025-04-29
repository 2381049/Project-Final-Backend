import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Make User entity available to UserService via Repository
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Export UserService if other modules need it (e.g., AuthModule)
})
export class UserModule {}
// ```typescript
// // src/auth/guards/jwt-auth.guard.ts (Example - Placeholder)
// // You should have a working JWT authentication guard.
// // This is just a basic structure.
// import { Injectable, ExecutionContext } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { Observable } from 'rxjs';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') { // Assumes you have a 'jwt' strategy configured
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     // Add custom authentication logic here if needed
//     // For example, checking for revoked tokens
//     return super.canActivate(context);
//   }

//   handleRequest(err, user, info) {
//     // You can throw an exception based on either "info" or "err" arguments
//     if (err || !user) {
//       // Log the error/info for debugging
//       // console.error('JWT Auth Error:', err || info?.message);
//       throw err || new UnauthorizedException(); // Use NestJS specific exception
//     }
//     return user; // Attach user payload to request['user']
//   }
// }

// // Make sure UnauthorizedException is imported if used:
// import { UnauthorizedException } from '@nestjs/common';
