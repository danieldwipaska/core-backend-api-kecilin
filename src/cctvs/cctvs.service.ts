import { Injectable } from '@nestjs/common';
import { CreateCctvDto } from './dto/create-cctv.dto';
import { UpdateCctvDto } from './dto/update-cctv.dto';

@Injectable()
export class CctvsService {
  create(createCctvDto: CreateCctvDto) {
    return 'This action adds a new cctv';
  }

  findAll() {
    return `This action returns all cctvs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cctv`;
  }

  update(id: number, updateCctvDto: UpdateCctvDto) {
    return `This action updates a #${id} cctv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cctv`;
  }
}
