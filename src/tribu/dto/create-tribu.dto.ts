import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateTribuDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly status: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly organizacionId: number;
}
