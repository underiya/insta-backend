import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from 'src/controllers/post/post.controller';
import { PostEntity } from 'src/entities/post.entity';
import { PostService } from 'src/services/post/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRETKEY || 'secretkey', // Replace with your secret key
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
