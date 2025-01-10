import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user/user.controller';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/services/user/user.service';
console.log(process.env.NODE_JWT_SECRETKEY);
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: process.env.NODE_JWT_SECRETKEY, // Replace with your secret key
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
