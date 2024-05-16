import { Module } from '@nestjs/common';
import { CctvsService } from './cctvs.service';
import { CctvsController } from './cctvs.controller';

@Module({
  controllers: [CctvsController],
  providers: [CctvsService],
})
export class CctvsModule {}
