import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateRepositorioDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  tribuId: number;
}
