import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoriosService } from 'src/repositorios/repositorios.service';
import { Repository } from 'typeorm';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UpdateMetricaDto } from './dto/update-metrica.dto';
import { Metrica } from './entities/metrica.entity';

@Injectable()
export class MetricasService {
  constructor(
    @InjectRepository(Metrica)
    private readonly metricaRepo: Repository<Metrica>,
    private readonly repositoryService: RepositoriosService,
  ) {}
  async create(createMetricaDto: CreateMetricaDto) {
    const newMetric = this.metricaRepo.create(createMetricaDto);
    if (createMetricaDto.repositorioId) {
      const repositorio = await this.repositoryService.findById(
        createMetricaDto.repositorioId,
      );
      newMetric.repositorio = repositorio;
    }
    return this.metricaRepo.save(newMetric);
  }

  findAll(): Promise<Metrica[]> {
    return this.metricaRepo.find({
      relations: ['repositorio'],
    });
  }

  findOne(id: number): Promise<Metrica> {
    return this.metricaRepo.findOneBy({ id_metrica: id });
  }

  async update(id: number, updateMetricaDto: UpdateMetricaDto) {
    const metrica = await this.findOne(id);
    if (updateMetricaDto.repositorioId) {
      const repositorio = await this.repositoryService.findById(
        updateMetricaDto.repositorioId,
      );
      repositorio.metrica = metrica;
    }
    this.metricaRepo.merge(metrica, updateMetricaDto);
    return this.metricaRepo.save(metrica);
  }

  remove(id: number): Promise<any> {
    return this.metricaRepo.delete(id);
  }
}
