import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Videos } from '@prisma/client';
import Response from 'src/interfaces/response.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.VideosCreateInput): Promise<Response<Videos>> {
    try {
      const video = await this.prisma.videos.create({
        data,
      });

      return {
        statusCode: 201,
        message: 'CREATED',
        data: video,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Response<Videos[]>> {
    try {
      const videos = await this.prisma.videos.findMany();
      if (!videos.length) throw new NotFoundException('Video Not Found');

      return {
        statusCode: 200,
        message: 'OK',
        data: videos,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Response<Videos>> {
    try {
      const video = await this.prisma.videos.findUnique({ where: { id } });
      if (!video) throw new NotFoundException('Video Not Found');

      return {
        statusCode: 200,
        message: 'OK',
        data: video,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    data: Prisma.VideosUpdateInput,
  ): Promise<Response<Videos>> {
    try {
      const video = await this.prisma.videos.findUnique({ where: { id } });
      if (!video) throw new NotFoundException('Video Not Found');

      try {
        const updatedVideo = await this.prisma.videos.update({
          where: { id },
          data,
        });

        return {
          statusCode: 200,
          message: 'OK',
          data: updatedVideo,
        };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<Response<Videos>> {
    try {
      const video = await this.prisma.videos.findUnique({ where: { id } });
      if (!video) throw new NotFoundException('Video Not Found');

      try {
        await this.prisma.videos.delete({ where: { id } });

        return {
          statusCode: 200,
          message: 'OK',
          data: video,
        };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}
