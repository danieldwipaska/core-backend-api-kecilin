import { Module } from '@nestjs/common';
import { CctvsService } from './cctvs.service';
import { CctvsController } from './cctvs.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CctvsController],
  providers: [CctvsService],
})
export class CctvsModule {}
