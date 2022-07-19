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
  @ApiProperty({
    description: 'Repository name associated with an organization',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({
    description:
      'Indicate the state of a repository like Enabled, Disabled, Archive',
  })
  @IsNotEmpty()
  @IsEnum(stateRepository)
  state: stateRepository;
  @ApiProperty({
    description: 'Indicate the repository status like Active , Inactive',
  })
  @IsNotEmpty()
  @IsEnum(statusRepository)
  status: statusRepository;
  @ApiProperty({
    description: 'Foreign Key of the Tribu Table',
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  tribuId: number;
}
