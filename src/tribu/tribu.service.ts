import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizacionService } from 'src/organizacion/organizacion.service';
import { Repository } from 'typeorm';
import { CreateTribuDto } from './dto/create-tribu.dto';
import { UpdateTribuDto } from './dto/update-tribu.dto';
import { Tribu } from './entities/tribu.entity';

@Injectable()
export class TribuService {
  constructor(
    @InjectRepository(Tribu)
    private readonly tribuRespository: Repository<Tribu>,
    private readonly organizacionService: OrganizacionService,
  ) {}
  async create(createTribuDto: CreateTribuDto): Promise<Tribu> {
    try {
      const newTribu = this.tribuRespository.create(createTribuDto);
      if (newTribu.organizacionId) {
        const organizacion = await this.organizacionService.findById(
          newTribu.organizacionId,
        );
        newTribu.organizacion = organizacion;
      }
      return this.tribuRespository.save(newTribu);
    } catch (err) {
      throw new BadRequestException(`${err.message}`);
    }
  }

  findAll() {
    return `This action returns all tribu`;
  }

  findOne(name: string): Promise<Tribu> {
    return this.tribuRespository.findOneBy({ name });
  }

  async update(name: string, updateTribuDto: UpdateTribuDto): Promise<Tribu> {
    const tribu = await this.findOne(name);
    if (updateTribuDto.organizacionId) {
      const organizacion = await this.organizacionService.findById(
        updateTribuDto.organizacionId,
      );
      tribu.organizacion = organizacion;
    }
    this.tribuRespository.merge(tribu, updateTribuDto);
    return this.tribuRespository.save(tribu);
  }

  remove(id: number): Promise<any> {
    return this.tribuRespository.delete(id);
  }
}
