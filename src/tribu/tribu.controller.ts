import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TribuService } from './tribu.service';
import { CreateTribuDto } from './dto/create-tribu.dto';
import { UpdateTribuDto } from './dto/update-tribu.dto';

@Controller('tribu')
export class TribuController {
  constructor(private readonly tribuService: TribuService) {}

  @Post()
  create(@Body() createTribuDto: CreateTribuDto) {
    return this.tribuService.create(createTribuDto);
  }

  @Get()
  findAll() {
    return this.tribuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tribuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTribuDto: UpdateTribuDto) {
    return this.tribuService.update(+id, updateTribuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tribuService.remove(+id);
  }
}
