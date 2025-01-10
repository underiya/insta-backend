import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { ConfigurationModule } from './common/config/configuration.module';

@Module({
  imports: [ConfigurationModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
