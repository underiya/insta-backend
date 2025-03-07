import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostEntity } from 'src/entities/post.entity';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // Correct PostgreSQL port
      username: 'postgres',
      password: 'qwerty',
      database: 'insta1',
      entities: [UserEntity, PostEntity],
      synchronize: true,
    }),
  ],
})
export class ConfigurationModule {
  static forRoot: any;
}
