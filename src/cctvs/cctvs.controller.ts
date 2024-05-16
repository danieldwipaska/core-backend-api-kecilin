import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CctvsService } from './cctvs.service';
import { Prisma } from '@prisma/client';

@Controller('cctvs')
export class CctvsController {
  constructor(private readonly cctvsService: CctvsService) {}

  @Post()
  create(@Body() data: Prisma.CctvCreateInput) {
    return this.cctvsService.create(data);
  }

  @Get()
  findAll() {
    return this.cctvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cctvsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.CctvUpdateInput) {
    return this.cctvsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cctvsService.remove(id);
  }
}
