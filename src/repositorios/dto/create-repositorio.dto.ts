import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

import { stateRepository, statusRepository } from '../../enum/dto.enum';
export class CreateRepositorioDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEnum(stateRepository)
  state: stateRepository;
  @IsNotEmpty()
  @IsEnum(statusRepository)
  status: statusRepository;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  tribuId: number;
}
