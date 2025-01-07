import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';

import { PostController } from './controllers/post/post.controller';

import { CommentService } from './services/comment/comment.service';
import { UserService } from './services/user/user.service';
import { PostService } from './services/post/post.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController, UserController, PostController, PostController],
  providers: [AppService, CommentService, UserService, PostService],
})
export class AppModule {}
