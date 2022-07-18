import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TribuService } from 'src/tribu/tribu.service';
import { Repository } from 'typeorm';
import { CreateRepositorioDto } from './dto/create-repositorio.dto';
import { UpdateRepositorioDto } from './dto/update-repositorio.dto';
import { Repositorio } from './entities/repositorio.entity';

@Injectable()
export class RepositoriosService {
  constructor(
    @InjectRepository(Repositorio)
    private readonly repoRepository: Repository<Repositorio>,
    private readonly tribuService: TribuService,
  ) {}
  async create(
    createRepositorioDto: CreateRepositorioDto,
  ): Promise<Repositorio> {
    try {
      const newRepositorio = this.repoRepository.create(createRepositorioDto);
      console.log(newRepositorio);
      if (createRepositorioDto.tribuId) {
        const tribu = await this.tribuService.findById(
          createRepositorioDto.tribuId,
        );
        newRepositorio.tribu = tribu;
      }
      return this.repoRepository.save(newRepositorio);
    } catch (err) {
      throw new BadRequestException(`${err.message}`);
    }
  }

  findAll(): Promise<Repositorio[]> {
    return this.repoRepository.find({
      relations: ['tribu'],
    });
  }

  findOne(name: string): Promise<Repositorio> {
    return this.repoRepository.findOneBy({ name });
  }

  findById(id: number): Promise<Repositorio> {
    return this.repoRepository.findOneBy({ id_repository: id });
  }

  async update(name: string, updateRepositorioDto: UpdateRepositorioDto) {
    const repositorio = await this.findOne(name);
    if (updateRepositorioDto.tribuId) {
      const tribu = await this.tribuService.findById(
        updateRepositorioDto.tribuId,
      );
      repositorio.tribu = tribu;
    }
    this.repoRepository.merge(repositorio, updateRepositorioDto);
    return this.repoRepository.save(repositorio);
  }

  remove(id: number): Promise<any> {
    return this.repoRepository.delete(id);
  }
}
