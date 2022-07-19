import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateMetricaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  bugs: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  @IsPositive()
  coverage: number;

  @ApiProperty()
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
