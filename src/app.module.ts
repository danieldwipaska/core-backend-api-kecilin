import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CctvsModule } from './cctvs/cctvs.module';
import { VideosModule } from './videos/videos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, CctvsModule, VideosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
