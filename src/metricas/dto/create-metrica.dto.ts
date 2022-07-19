import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateMetricaDto {
  @ApiProperty({
    description: 'The amount of bugs has an account',
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  bugs: number;

  @ApiProperty({
    description: 'Coverage of the project',
  })
  @IsNotEmpty()
  @IsDecimal()
  @IsPositive()
  coverage: number;

  @ApiProperty({
    description: 'The amount of vulnerabilities in the files the project'
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  vulnerabilities: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  hotspot: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  code_smells: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  repositorioId: number;
}
