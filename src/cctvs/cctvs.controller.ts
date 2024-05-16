import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CctvsService } from './cctvs.service';
import { CreateCctvDto } from './dto/create-cctv.dto';
import { UpdateCctvDto } from './dto/update-cctv.dto';

@Controller('cctvs')
export class CctvsController {
  constructor(private readonly cctvsService: CctvsService) {}

  @Post()
  create(@Body() createCctvDto: CreateCctvDto) {
    return this.cctvsService.create(createCctvDto);
  }

  @Get()
  findAll() {
    return this.cctvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cctvsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCctvDto: UpdateCctvDto) {
    return this.cctvsService.update(+id, updateCctvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cctvsService.remove(+id);
  }
}
