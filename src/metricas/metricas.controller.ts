import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { MetricasService } from './metricas.service';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UpdateMetricaDto } from './dto/update-metrica.dto';

@Controller('metricas')
export class MetricasController {
  constructor(private readonly metricasService: MetricasService) {}

  @Post()
  async create(@Body() createMetricaDto: CreateMetricaDto) {
    try {
      await this.metricasService.create(createMetricaDto);
    } catch (err) {
      throw new BadRequestException(`${err.message}`);
    }
  }

  @Get()
  findAll() {
    return this.metricasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricaDto: UpdateMetricaDto) {
    return this.metricasService.update(+id, updateMetricaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricasService.remove(+id);
  }
}
