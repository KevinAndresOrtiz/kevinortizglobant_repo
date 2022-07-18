import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateRepositorioDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  state: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  status: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  tribuId: number;
}
