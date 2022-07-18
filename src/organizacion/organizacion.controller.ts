import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganizacionService } from './organizacion.service';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';

@Controller('organizacion')
export class OrganizacionController {
  constructor(private readonly organizacionService: OrganizacionService) {}

  @Post()
  async create(@Body() createOrganizacionDto: CreateOrganizacionDto) {
    return await this.organizacionService.create(createOrganizacionDto);
  }

  @Get()
  async findAll() {
    return await this.organizacionService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.organizacionService.findOne(name);
  }

  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updateOrganizacionDto: UpdateOrganizacionDto,
  ) {
    return await this.organizacionService.update(name, updateOrganizacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.organizacionService.remove(+id);
  }
}
