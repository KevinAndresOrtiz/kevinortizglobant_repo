import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom, map } from 'rxjs';
import { stateVerification } from '../enum/dto.enum';
import { OrganizacionService } from '../organizacion/organizacion.service';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { CreateTribuDto } from './dto/create-tribu.dto';
import { UpdateTribuDto } from './dto/update-tribu.dto';
import { Tribu } from './entities/tribu.entity';
import { json2csv } from 'json-2-csv';
import { writeFileSync } from 'fs';

@Injectable()
export class TribuService {
  constructor(
    @InjectRepository(Tribu)
    private readonly tribuRespository: Repository<Tribu>,
    private readonly organizacionService: OrganizacionService,
    private readonly httpService: HttpService,
  ) {}
  async create(createTribuDto: CreateTribuDto): Promise<Tribu> {
    try {
      const newTribu = this.tribuRespository.create(createTribuDto);
      if (createTribuDto.organizacionId) {
        const organizacion = await this.organizacionService.findById(
          createTribuDto.organizacionId,
        );
        newTribu.organizacion = organizacion;
      }
      return this.tribuRespository.save(newTribu);
    } catch (err) {
      throw new BadRequestException(`${err.message}`);
    }
  }

  findAll(): Promise<Tribu[]> {
    try {
      return this.tribuRespository.find({
        relations: ['organizacion', 'repositorios'],
      });
    } catch (err) {
      throw new NotFoundException(`${err.message}`);
    }
  }

  findOne(name: string): Promise<Tribu> {
    return this.tribuRespository.findOne({
      relations: ['organizacion'],
      where: { name },
    });
  }

  findById(id_tribe: number): Promise<Tribu> {
    return this.tribuRespository.findOneBy({ id_tribe });
  }

  async generateReport(id: number, state?: string, coverageValue = 0) {
    const result = await this.findByTribuID(id, state, coverageValue);
    json2csv(result, (err, csv) => {
      if (err) {
        throw new BadRequestException(`${err.message}`);
      }
      console.log(csv);
      writeFileSync('../report.csv', csv);
    });
    return '../report.csv';
  }

  async findByTribuID(
    id: number,
    state?: string,
    coverageValue = 0,
  ): Promise<Tribu[]> {
    const existTribu = await this.tribuRespository.findAndCountBy({
      id_tribe: id,
    });
    if (!existTribu[1]) {
      throw new NotFoundException('La tribu no se encuentra registrada');
    }
    const tribuRespository = await this.tribuRespository.find({
      where: {
        id_tribe: id,
        repositorios: {
          state,
          metrica: {
            coverage: MoreThanOrEqual(coverageValue),
          },
        },
      },
      relations: ['organizacion', 'repositorios', 'repositorios.metrica'],
    });
    if (!tribuRespository.length) {
      throw new NotFoundException(
        'La tribu no tiene repositorios que cumplan con dicho criterio',
      );
    }
    return await this.formatResponse(tribuRespository);
  }

  async formatResponse(tribus: Tribu[]) {
    const repositories = [];
    const repositoriesVerification = [];
    tribus.forEach((val) => {
      let repository = {};
      val.repositorios.forEach((repo) => {
        repository = {};
        repository['id'] = repo.id_repository;
        repository['name'] = repo.name;
        repository['tribe'] = val.name;
        repositoriesVerification.push(this.getResponseMock(repo.id_repository));
        repository['organizacion'] = val.organizacion.name;
        repository['coverage'] = repo.metrica.coverage;
        repository['codeSmells'] = repo.metrica.code_smells;
        repository['bugs'] = repo.metrica.bugs;
        repository['vulnerabilities'] = repo.metrica.vulnerabilities;
        repository['hotspots'] = repo.metrica.hotspot;
        repository['state'] = repo.state;
        repositories.push(repository);
      });
    });
    await Promise.all(repositoriesVerification).then((data) => {
      data.forEach((val) => {
        const indexData = repositories.findIndex(
          (element) => element.id == val.id,
        );
        repositories[indexData]['verificacionState'] =
          this.setVerificationState(+val.state);
      });
    });
    return repositories;
  }

  setVerificationState(state: number) {
    let _state = '';
    if (state == stateVerification.APROBADO) {
      _state = 'Aprobado';
    } else if (state == stateVerification.VERIFICADO) {
      _state = 'Verificado';
    } else if (state == stateVerification.EN_ESPERA) {
      _state = 'En espera';
    } else {
      _state = 'NON ASIGNED';
    }
    return _state;
  }

  getResponseMock(id: number) {
    return firstValueFrom(
      this.httpService.get(`http://localhost:3000/repository/${id}`).pipe(
        map((response) => response.data),
        map((data) => data),
      ),
    );
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
