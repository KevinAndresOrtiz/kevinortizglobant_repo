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
  create(@Body() createOrganizacionDto: CreateOrganizacionDto) {
    return this.organizacionService.create(createOrganizacionDto);
  }

  @Get()
  findAll() {
    return this.organizacionService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.organizacionService.findOne(name);
  }

  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updateOrganizacionDto: UpdateOrganizacionDto,
  ) {
    return this.organizacionService.update(name, updateOrganizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizacionService.remove(+id);
  }
}
