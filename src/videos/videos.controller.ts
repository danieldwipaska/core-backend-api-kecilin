import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { Prisma } from '@prisma/client';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  create(@Body() data: Prisma.VideosCreateInput) {
    return this.videosService.create(data);
  }

  @Get()
  findAllWithModification(
    @Query('skip') skip: string,
    @Query('take') take: string,
    @Query('search') search: string,
    @Query('filter') filter: string,
    @Query('sort') sort: 'asc' | 'desc',
  ) {
    return this.videosService.findAllWithModification({
      skip: Number(skip),
      take: Number(take),
      search,
      filter,
      sort,
    });
  }

  @Get('all')
  findAll() {
    return this.videosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.VideosUpdateInput) {
    return this.videosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }
}
