import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
