import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';
import { Organizacion } from './entities/organizacion.entity';

@Injectable()
export class OrganizacionService {
  constructor(
    @InjectRepository(Organizacion)
    private readonly organizacionRepository: Repository<Organizacion>,
  ) {}
  async create(
    createOrganizacionDto: CreateOrganizacionDto,
  ): Promise<Organizacion> {
    return await this.organizacionRepository.save(createOrganizacionDto);
  }

  findAll(): Promise<Organizacion[]> {
    return this.organizacionRepository.find();
  }

  findOne(name: string): Promise<Organizacion> {
    return this.organizacionRepository.findOneBy({ name });
  }

  async update(
    name: string,
    updateOrganizacionDto: UpdateOrganizacionDto,
  ): Promise<Organizacion | null> {
    const organizacion = await this.findOne(name);
    if (!organizacion) {
      throw new Error(`Doesnt exist the row with name ${name}`);
    }
    await this.organizacionRepository.update({ name }, updateOrganizacionDto);
    return organizacion;
  }

  async remove(id: number): Promise<any> {
    return this.organizacionRepository.delete(id);
  }
}
