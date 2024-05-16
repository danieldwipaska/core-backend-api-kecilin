import { Injectable, NotFoundException } from '@nestjs/common';
import { Cctv, Prisma } from '@prisma/client';
import Response from 'src/interfaces/response.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CctvsService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.CctvCreateInput): Promise<Response<Cctv>> {
    try {
      const cctv = await this.prisma.cctv.create({
        data,
      });
      return {
        statusCode: 201,
        message: 'CREATED',
        data: cctv,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Response<Cctv[]>> {
    try {
      const cctvs = await this.prisma.cctv.findMany();
      if (!cctvs.length) throw new NotFoundException('CCTV Not Found');

      return {
        statusCode: 200,
        message: 'OK',
        data: cctvs,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Response<Cctv>> {
    try {
      const cctv = await this.prisma.cctv.findUnique({ where: { id } });
      if (!cctv) throw new NotFoundException('CCTV Not Found');

      return {
        statusCode: 200,
        message: 'OK',
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    data: Prisma.CctvUpdateInput,
  ): Promise<Response<Cctv>> {
    try {
      const cctv = await this.prisma.cctv.findUnique({ where: { id } });
      if (!cctv) throw new NotFoundException('CCTV Not Found');

      try {
        const updatedCctv = await this.prisma.cctv.update({
          where: { id },
          data,
        });

        return {
          statusCode: 200,
          message: 'OK',
          data: updatedCctv,
        };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<Response<Cctv>> {
    try {
      const cctv = await this.prisma.cctv.findUnique({ where: { id } });
      if (!cctv) throw new NotFoundException('CCTV Not Found');

      try {
        await this.prisma.cctv.delete({ where: { id } });

        return {
          statusCode: 200,
          message: 'OK',
          data: cctv,
        };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}
