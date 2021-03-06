import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
  Res,
} from '@nestjs/common';
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
  async findAll() {
    const tribus = await this.tribuService.findAll();
    if (!tribus.length) {
      throw new NotFoundException(' empty results to get all tribus');
    }
    return tribus;
  }

  @Get('download/:id')
  async download(
    @Res() res,
    @Param('id') id: string,
    @Query('coverage') coverage: string,
    @Query('stateRepository') stateRepository: string,
  ) {
    const filename = await this.tribuService.generateReport(
      +id,
      stateRepository,
      +coverage,
    );
    return res.download(filename);
  }

  @Get('id/:id')
  async findbyIDTribu(
    @Param('id') id: string,
    @Query('coverage') coverage: string,
    @Query('stateRepository') stateRepository: string,
  ) {
    return await this.tribuService.findByTribuID(
      +id,
      stateRepository,
      +coverage,
    );
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.tribuService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateTribuDto: UpdateTribuDto) {
    return this.tribuService.update(name, updateTribuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tribuService.remove(+id);
  }
}
