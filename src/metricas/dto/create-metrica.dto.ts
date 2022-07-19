import { IsDecimal, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateMetricaDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  bugs: number;

  @IsNotEmpty()
  @IsDecimal()
  @IsPositive()
  coverage: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  vulnerabilities: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  hotspot: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  code_smells: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  repositorioId: number;
}
