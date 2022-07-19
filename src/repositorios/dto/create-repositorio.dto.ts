import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

import { stateRepository, statusRepository } from '../../enum/dto.enum';
export class CreateRepositorioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(stateRepository)
  state: stateRepository;
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(statusRepository)
  status: statusRepository;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  tribuId: number;
}
