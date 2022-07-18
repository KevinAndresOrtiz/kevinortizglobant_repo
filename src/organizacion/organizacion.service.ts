import { Injectable, NotFoundException } from '@nestjs/common';
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
  create(createOrganizacionDto: CreateOrganizacionDto): Promise<Organizacion> {
    const newOrganizacion = this.organizacionRepository.create(
      createOrganizacionDto,
    );
    return this.organizacionRepository.save(newOrganizacion);
  }

  findAll(): Promise<Organizacion[]> {
    return this.organizacionRepository.find();
  }

  findById(id_organizacion: number): Promise<Organizacion> {
    return this.organizacionRepository.findOneBy({ id_organizacion });
  }

  findOne(name: string): Promise<Organizacion> {
    return this.organizacionRepository.findOneBy({ name });
  }

  async update(
    name: string,
    updateOrganizacionDto: UpdateOrganizacionDto,
  ): Promise<Organizacion> {
    const organizacion = await this.findOne(name);
    if (!organizacion) {
      throw new NotFoundException(`Doesnt exist the row with name ${name}`);
    }
    this.organizacionRepository.merge(organizacion, updateOrganizacionDto);
    return this.organizacionRepository.save(organizacion);
  }

  remove(id: number): Promise<any> {
    return this.organizacionRepository.delete(id);
  }
}
